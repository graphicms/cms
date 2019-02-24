<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use Graphicms\Cms\GraphQL\DynamicQuery;
use Graphicms\Cms\GraphQL\DynamicType;
use Graphicms\Cms\Models\Warehouse;
use Graphicms\GraphQL\Events\ServingGraphQL;
use GraphQL\Type\Definition\Type;
use Illuminate\Container\Container;

class RegisterWarehouse
{
    public function __construct(Container $app)
    {
        $this->coreWarehouseFields();

        $app['events']->listen(ServingGraphQL::class, function() {
            $this->registerWarehouseValuesType();
            $this->registerWarehouseType();
            $this->registerQuery();
        });
    }

    protected function coreWarehouseFields(): void
    {
        app('events')->listen('registerWarehouseFields', function () {
            return [
                'sitename' => [
                    'type' => Type::string()
                ],
            ];
        });
    }

    protected function registerWarehouseValuesType() {
        $warehouseFields = event('registerWarehouseFields');
        $apiFields = collect([]);
        foreach($warehouseFields as $wf) {
            $apiFields = $apiFields->merge($wf);
        }
        \CmsQL::addType(DynamicType::make([
            'name' => 'WarehouseValues',
        ], $apiFields));
    }

    protected function registerWarehouseType()
    {
        \CmsQL::addType(DynamicType::make([
            'name' => 'Warehouse',
        ], [
            '_id' => [
                'type' => Type::nonNull(Type::string())
            ],
            'code' => [
                'type' => Type::nonNull(Type::string())
            ],
            'values' => [
                'type' => Type::nonNull(\CmsQL::type('WarehouseValues'))
            ]
        ], [], [\CmsQL::type('HasDates')]));
    }

    protected function registerQuery()
    {
        \CmsQL::addDynamicQuery( DynamicQuery::make([
            'name' => 'warehouse',
            'type' => function() {
                return \CmsQl::type('Warehouse');
            },
            'resolver' => function($context, $arguments) {
                return Warehouse::get($arguments['code']);
            },
            'args' => function() {
                return [
                    'code' => [
                        'type' => Type::nonNull(Type::string())
                    ]
                ];
            }
        ]), 'backend');
    }

}