<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use Graphicms\Cms\GraphQL\DynamicType;
use GraphQL\Type\Definition\Type;
use Illuminate\Container\Container;

class RegisterDataTools
{
    public function __construct(Container $app)
    {
        \CmsQL::addType(DynamicType::make([
            'name' => 'Pagination',
            'input' => true,
        ], [
            'current_page' => [
                'type' => Type::int(),
            ],
            'per_page' => [
                'type' => Type::int(),
            ]
        ]));

        \CmsQL::addType(DynamicType::make([
            'name' => 'Sorting',
            'input' => true,
        ], [
            'direction' => [
                'type' => Type::string(),
            ],
            'field' => [
                'type' => Type::string(),
            ]
        ]));
    }
}