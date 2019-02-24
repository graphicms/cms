<?php

namespace Graphicms\Cms\Core\Types;

use Carbon\Carbon;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\InterfaceType;

class HasDatesType extends InterfaceType
{
    protected $attributes = [
        'name' => 'HasDates',
        'description' => 'Has created_at and updated_at attributes',
    ];

    public function fields()
    {
        return [
            'created_at' => [
                'type' => Type::int(),
            ],
            'updated_at' => [
                'type' => Type::int(),
            ],
        ];
    }

    public function resolveCreatedAtField($root)
    {
        if($root->created_at instanceof Carbon) {
            return $root->created_at->format('U');
        }
        return null;
    }

    public function resolveUpdatedAtField($root)
    {
        if($root->updated_at instanceof Carbon) {
            return $root->updated_at->format('U');
        }
        return null;
    }
}