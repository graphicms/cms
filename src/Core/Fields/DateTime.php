<?php

namespace Graphicms\Cms\Core\Fields;

use GraphQL\Type\Definition\Type;

class DateTime extends BaseField
{
    public function fieldType(): string
    {
        return 'datetime';
    }

    public function toGraphql()
    {
        if($this->get('required', false)) {
            return Type::nonNull(Type::int());
        }
        return Type::int();
    }
}