<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use Graphicms\Cms\Core\Scopes\SoftDeletingScope;
use Graphicms\Cms\GraphQL\DynamicMutation;
use Graphicms\Cms\GraphQL\DynamicQuery;
use Graphicms\Cms\GraphQL\DynamicType;
use Graphicms\Cms\GraphQL\DynamicUnion;
use Graphicms\Cms\Models\Warehouse;
use Graphicms\GraphQL\Events\ServingGraphQL;
use GraphQL\Type\Definition\Type;
use Illuminate\Container\Container;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Spatie\Typed\Struct;

class RegisterDynamicTypes
{
    public function __construct(Container $app)
    {
        \CmsQL::addType(DynamicType::make([
            'name' => 'TypeInfo'
        ], [
            'type' => [
                'type' => Type::string(),
            ],
            'union' => [
                'type' => Type::string(),
            ],
            'collection' => [
                'type' => Type::string(),
            ],
        ]));
        $app['events']->listen(ServingGraphQL::class, function () {

            \CmsQL::addDynamicQuery( DynamicQuery::make([
                'name' => 'typeInfo',
                'type' => function() {
                    return \CmsQL::type('TypeInfo');
                },
                'resolver' => function($context, $arguments) {
                    if(array_key_exists($arguments['for'], \Cms::registeredTypes())) {
                        return \Cms::registeredTypes()[$arguments['for']]->typeNames;
                    }
                },
                'args' => function() {
                    return [
                        'for' => [
                            'type' => Type::nonNull(Type::string())
                        ]
                    ];
                }
            ]), 'backend');

            $types = \Cms::registeredTypes();
            foreach ($types as $type) {
                $this->type($type);
            }
        });
    }

    private function type(Struct $type)
    {
        if($type->managed) {
            return;
        }
        if ($type->read) {
            \CmsQL::addDynamicQuery($this->createReadQuery($type), $type->schema ?: 'default');
            if($type->schema != 'backend')
                \CmsQL::addDynamicQuery($this->createReadQuery($type), 'backend');
        }
        if($type->delete) {
            $mutationName = 'delete'.Str::title($type->name);
            $mutation = DynamicMutation::make([
                'name' => $mutationName,
                'description' => null,
                'type' => function() { return Type::nonNull(\CmsQL::type('DeleteResult')); },
                'resolver' => function($scope, $args) use($type) {
                    $query = $type->model->newQuery();
                    $col = $type->model->getCollection();
                    $query->withoutGlobalScope(SoftDeletingScope::class);
                    $record = $query->where('_id', $args['_id'])->first();
                    if($record) {
                        $record->setCollection($col);
                        if(isset($args['force']) && $args['force']) {
                            $record->forceDelete();
                        } else {
                            $record->delete();
                        }
                        return ['status' => true];
                    }
                    return ['status' => false];
                },
                'args' => function() {
                    return [
                        '_id' => [
                            'type' => Type::nonNull(Type::string())
                        ],
                        'force' => [
                            'type' => Type::boolean()
                        ]
                    ];
                }
            ]);
            \CmsQL::addDynamicMutation($mutation, $type->schema ?: 'default');
            if($type->schema != 'backend')
                \CmsQL::addDynamicMutation($mutation, 'backend');
        }
    }

    public static function make($att = [])
    {
        return new static($att);
    }

    /**
     * @param Struct $type
     */
    private function createReadQuery(Struct $type)
    {
        return DynamicQuery::make([
            'name'     => $type->name,
            'type'     => function () use ($type) {
                if ($type->collection) {
                    $unionName = $type->typeNames['union'];
                    $colName = $type->typeNames['collection'];
                    \CmsQL::addType(DynamicType::make([
                        'name' => $colName,
                    ], [
                        'total'        => [
                            'type' => Type::nonNull(Type::int())
                        ],
                        'per_page'     => [
                            'type' => Type::nonNull(Type::int())
                        ],
                        'current_page' => [
                            'type' => Type::nonNull(Type::int())
                        ],
                        'last_page'    => [
                            'type' => Type::nonNull(Type::int())
                        ],
                        'from'         => [
                            'type' => Type::nonNull(Type::int())
                        ],
                        'to'           => [
                            'type' => Type::nonNull(Type::int())
                        ],
                        'data'         => [
                            'type' => Type::listOf(($type->graphType)())
                        ],
                    ]));
                    $union = DynamicUnion::make([
                        'name'        => $unionName,
                        'types'       => function () use ($type, $colName) {
                            return [
                                ($type->graphType)(),
                                \CmsQL::type($colName)
                            ];
                        },
                        'resolveType' => function ($d) use ($colName, $type) {
                            if (is_array($d) && array_key_exists('paginated', $d)) {
                                return \CmsQL::type($colName);
                            }
                            return ($type->graphType)();
                        }
                    ]);
                    \CmsQl::addType($union);
                    return \CmsQl::type($unionName);
                }
                return ($type->graphType)();
            },
            'resolver' => $type->readResolver,
            'args'     => function() use($type) {
                $basic = $type['args']();

                $filterName = Str::title($type->name) . 'Filter';
                $filters = $type['filters']();
                if($filters instanceof DynamicType) {
                    $fields = [];
                    \CmsQL::addType($filters);
                    foreach($filters->fields() as $k => $field) {
//                        $field['type'] = $field['type'];
                        $field['name'] = $k;
                        $fields[$k] = $field;
                    }
                    $filters->setFields($fields);
                    \CmsQL::addType($filters, null, true);
                }
//                dd($filters);
                if($filters instanceof DynamicType) {
                    $basic['filter'] = [
                        'type' => \CmsQL::type($filterName)
                    ];
//                    dd($basic);
                }
                return $basic;
            }
        ]);
    }
}
