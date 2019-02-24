<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use Graphicms\Cms\Core\Types\HasDatesType;
use Graphicms\Cms\Core\Types\IsSoftDeleting;
use Graphicms\Cms\GraphQL\DynamicType;
use GraphQL\Type\Definition\Type;
use Illuminate\Container\Container;

class RegisterCoreInterfaces
{
    public function __construct(Container $app)
    {
        \CmsQL::addType(HasDatesType::class);
        \CmsQL::addType(IsSoftDeleting::class);
        \CmsQL::addType(
            DynamicType::make([
                'name' => 'DeleteResult',
            ], [
                    'status' => [
                        'type' => Type::nonNull(Type::boolean())
                    ]
                ]
            )
        );
    }
}