<?php

namespace Graphicms\Cms\Core\Types;

use Carbon\Carbon;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\InterfaceType;

class IsSoftDeleting extends InterfaceType
{
    protected $attributes = [
        'name' => 'IsSoftDeleting',
        'description' => 'Has deleted_at is not deleted until forceDelete is called.',
    ];

    public function fields()
    {
        return [
            'deleted_at' => [
                'type' => Type::int(),
            ],
        ];
    }

    public function resolveDeletedAtField($root)
    {
        if($root->deleted_at instanceof Carbon) {
            return $root->deleted_at->format('U');
        }
        return null;
    }
}