<?php

namespace Graphicms\Cms\Core\Concerns;

use Closure;
use Cms;
use ErrorException;
use Exception;
use Graphicms\Cms\Core\Defaults\ReadResolver;
use Graphicms\Cms\GraphQL\DynamicType;
use Graphicms\Cms\GraphQL\GraphQLFilter;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\Typed\Struct;
use Spatie\Typed\T;

trait RegistersTypes
{
    public static $registeredTypes = [];

    public function registerType(closure $graphType, array $options)
    {
        $model = new Struct([
            'name'           => T::string(),
            'model'          => T::generic(Model::class),
            'collection'     => T::boolean(),
            'read'           => T::boolean(),
            'update'         => T::boolean(),
            'delete'         => T::boolean(),
            'schema'         => T::nullable(T::string()),
            'graphType'      => $graphType,
            'managed'        => T::boolean(),
            'readResolver'   => T::union(T::string(), T::array(), T::callable()),
            'updateResolver' => T::union(T::string(), T::array(), T::callable()),
            'args'           => T::union(T::string(), T::array(), T::callable()),
            'filters'        => T::callable(),
            'form_fields'    => T::nullable(T::array()),
            'typeNames'      => T::array(),
            'columns'        => T::array(),
            'menu'           => T::union(T::boolean(), T::array(), T::string()),
            'primary_key'    => T::string(),
            'search'     => T::array(),
        ]);
        $defaults = [
            'collection'   => true,
            'read'         => true,
            'update'       => true,
            'delete'       => true,
            'schema'       => null,
            'managed'      => false,
            'form_fields'  => [],
            'args'         => [ReadResolver::class, 'arguments'],
            'readResolver' => [ReadResolver::class, 'resolve'],
            'filters'      => $this->defaultFilters(),
            'typeNames'    => [],
            'columns'      => [],
            'menu'         => true,
            'primary_key'  => '_id',
            'search'   => [
                'enabled' => false,
                'name' => Str::title($options['name']),
                'title' => null,
                'subtitle' => null,
            ],
        ];

        foreach ($defaults as $key => $val) {
            try {
                $model[$key] = $val;
            } catch (ErrorException $e) {
                if ($key == 'readResolver' || $key == 'updateResolver') {
                    if (is_array($val) && count($val) == 2) {
                        $model->{$key} = function ($context, $arguments) use ($val, $model) {
                            $data = compact('model', 'arguments', 'context');
                            $object = app($val[0], $data);
                            return app()->call([$object, $val[1]], $data);
                        };
                    }
                } else if($key == 'args') {
                    $model->{$key} = function () use ($val, $model) {
                        $data = compact('model');
                        $object = app($val[0], $data);
                        return app()->call([$object, $val[1]], $data);
                    };
                }
            }
        }
        $defer = [];

        foreach ($options as $key => $val) {
            if ($key == 'typeNames') {
                $defer = array_merge($model['typeNames'], $val);
            } else if($key == 'search') {
                $model['search'] = array_merge($model['search'], $val);
            } else {
                $model[$key] = $val;
            }
        }

        if (is_array($model->readResolver) && count($model->readResolver) == 2) {
            $model->{$key} = function ($context, $arguments) use ($model) {
                $data = compact('model', 'arguments', 'context');
                $object = app($model->readResolver[0], $data);
                return app()->call([$object, $model->readResolver[1]], $data);
            };
        } else if (is_string($model->readResolver)) {
            $rr = $model->readResolver;
            if (class_exists($rr)) {
                $model->readResolver = function ($context, $arguments) use ($rr, $model) {
                    $data = compact('model', 'arguments', 'context');
                    $object = app($rr, $data);
                    if (method_exists($object, 'resolve')) {
                        return app()->call([$object, 'resolve'], $data);
                    } else {
                        throw new Exception('Class ' . class_basename($object) . ' must have a method called resolve that resolves the query');
                    }
                };
            } else {
                throw new Exception('Read resolver strings must resolve to an existing class');
            }
        }

        $model['typeNames'] = [
            'type'       => Str::title($model->name) . 'Type',
            'union'      => Str::title($model->name) . 'Union',
            'collection' => Str::title($model->name) . 'Collection',
        ];

        $model['typeNames'] = array_merge($model['typeNames'], $defer);
        if (count($model['form_fields']) > 0) {
            Cms::registerFields($model['name'], function () use ($model) {
                return $model['form_fields'];
            });
        }
        if (count($model['columns']) > 0) {
            Cms::registerColumns($model['name'], function () use ($model) {
                return $model['columns'];
            });
        }
        $filters = ($model->filters)();

        if ($filters && is_array($filters) && count($filters) > 0) {
            $m = $model['model'];
            $m->filterable = $filters;

            $filterName = Str::title($model->name) . 'Filter';
            $filters = GraphQLFilter::fieldsFromModel($model);
            $filterType = DynamicType::make(['name' => $filterName, 'input' => true], $filters);
//            \CmsQL::addType($filterType);
            $model['filters'] = function () use ($filterType) {
                return $filterType;
            };
        }
        static::$registeredTypes[$model->name] = $model;
    }

    public function registeredTypes()
    {
        return static::$registeredTypes;
    }

    /**
     * @return Closure
     */
    private function defaultFilters(): Closure
    {
        return function () {
            return [];
        };
    }
}