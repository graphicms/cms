<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use Graphicms\Cms\Core\Behaviors\ScoutSearchable;
use Graphicms\Cms\Core\Utils\MongoCollection;
use Graphicms\Cms\GraphQL\DynamicQuery;
use Graphicms\Cms\GraphQL\DynamicType;
use Graphicms\Cms\Models\BaseModel;
use Graphicms\GraphQL\Events\ServingGraphQL;
use GraphQL\Type\Definition\Type;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Builder;
use Laravel\Scout\Searchable;

class RegisterAdminSearch
{
    public function __construct(Application $application)
    {
        $application->make('events')->listen(ServingGraphQL::class, function() {
            $this->registerTypes();

            $this->registerQuery();
        });
    }

    private function registerTypes()
    {
        \CmsQL::addType(DynamicType::make([
            'name' => 'SearchResultCollection'
        ], [
            'key' => [
                'type' => Type::string(),
            ],
            'name' => [
                'type' => Type::string(),
            ],
        ]));
        \CmsQL::addType(DynamicType::make([
            'name' => 'SearchResultItems'
        ], [
            'identifier' => [
              'type' => Type::string(),
            ],
            'title' => [
                'type' => Type::string(),
            ],
        ]));
        \CmsQL::addType(DynamicType::make([
            'name' => 'SearchResult',
        ], [
            'collection' => [
                'type' => \CmsQL::type('SearchResultCollection')
            ],
            'results' => [
                'type' => Type::listOf(\CmsQL::type('SearchResultItems'))
            ],
        ]));
    }

    private function registerQuery()
    {
        \CmsQL::addDynamicQuery(
            DynamicQuery::make([
                'name' => 'search',
                'type' => function() {
                    return Type::listOf(\CmsQL::type('SearchResult'));
                },
                'resolver' => function($context, $arguments) { return call_user_func([$this, 'searchResolver'], $arguments); },
                'args'  => function() {
                    return [
                        'term' => [
                            'type' => Type::nonNull(Type::string()),
                        ]
                    ];
                }
            ]),
            'backend'
        );
    }

    private function searchResolver($arguments)
    {
        $types = collect(\Cms::registeredTypes())->reject(function($item) {
            return $item->search['enabled'] === false;
        });
        $ret = [];
        foreach($types as $type) {
            $model = $type->model;
            $usesScout = in_array(Searchable::class, class_uses_recursive($model)) || ($model instanceof BaseModel && $model->isClassExtendedWith(ScoutSearchable::class));

            if(!$usesScout) {
                $attributesFromModel = property_exists($model, 'searchable') ? $model->searchable : [];
                $attributes = array_merge(@$type->search['attributes'] ?? [], $attributesFromModel);

                if(count($attributes) == 0) {
                    continue;
                }
            }

            $hasFullText = false;
            if($model instanceof \Jenssegers\Mongodb\Eloquent\Model) {
                $colName = $model->getTable();
                $collectionMongo = MongoCollection::get($colName);
                if($collectionMongo) {
                    $hasFullText = MongoCollection::hasFullTextIndex($collectionMongo);
                }
            }

            if($usesScout) {
                $soft = false;
                $graphType = $type->graphType;
                if(is_callable($graphType)) {
                    $graphType = ($type->graphType)();
                }
                if (isset($graphType->config) && array_key_exists('interfaces', $graphType->config)) {
                    foreach ($graphType->config['interfaces'] as $interface) {
                        if ($interface->name == 'IsSoftDeleting') {
                            $soft = true;
                        }
                    }
                }

                if(($model instanceof BaseModel && $model->isClassExtendedWith(ScoutSearchable::class))) {
                    $builder = $model->search($arguments['term']);
                } else {
                    $basename = get_class($model);
                    $builder = forward_static_call([$basename, 'search'], $arguments['term']);
                }

                $results = $builder->get();

                if($results->count() > 0) {
                    $resultSet = $this->getResultSet($type, $results, $model);
                    $ret[] = $resultSet;
                }
            } else if($model instanceof \Jenssegers\Mongodb\Eloquent\Model) {
                if($hasFullText) {
                    $results = forward_static_call([$model, 'raw'], function($collection) use($arguments) {
                       return $collection->aggregate([
                           ['$match' => ['$text' => ['$search' => $arguments['term']]]]
                       ]);
                    });
                    if($results->count() > 0) {
                        $resultSet = $this->getResultSet($type, $results, $model);
                        $ret[] = $resultSet;
                    }
                } else {

                }
            } else if($model instanceof Model) {
                $results = $model->newQuery()->where(function($query) use($arguments, $model, $attributes) {
                    $connectionType = $query->getModel()->getConnection()->getDriverName();
                    $likeOperator = $connectionType == 'pgsql' ? 'ilike' : 'like';
                    foreach($attributes as $attribute) {
                        $query->orWhere($model->qualifyColumn($attribute), $likeOperator, '%'.$arguments['term'].'%');
                    }
                })->get();
                if($results->count() > 0) {
                    $resultSet = $this->getResultSet($type, $results, $model);
                    $ret[] = $resultSet;
                }
            }
        }
        return $ret;
    }

    private function getResultSet($type, $results, $model)
    {
        $resultSet = [
            'collection' => [
                'key' => $type->name,
                'name' => $type->search['name'],
            ],
            'results' => []
        ];
        foreach($results as $result) {
            $res = [
                'identifier' => $result->{$result->getKeyName()}
            ];
            if($type->search['title'] === null) {
                $title = $this->getDefaultSearchTitle($model, $result);
            } else {
                $title = $type->search['title'];
            }
            $res['title'] = $result->{$title};
            $resultSet['results'][] = $res;
        }
        return $resultSet;
    }

    /**
     * @param $model
     * @param $result
     * @return mixed
     */
    private function getDefaultSearchTitle($model, $result)
    {
        $search = ['name', 'title', $model->getQualifiedKeyName()];
        $modelAttributes = $result->getAttributes();
        foreach ($search as $s) {
            if (array_key_exists($s, $modelAttributes)) {
                $title = $s;
                break;
            }
        }
        return $title;
    }
}