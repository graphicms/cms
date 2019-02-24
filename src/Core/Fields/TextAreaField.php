<?php

namespace Graphicms\Cms\Core\Fields;

use GraphQL\Type\Definition\Type;

class TextAreaField extends BaseField
{
    public function fieldType(): string
    {
        return 'textarea';
    }

    public function toGraphql()
    {
        if($this->get('required', false)) {
            return Type::nonNull(Type::string());
        }
        return Type::string();
    }
}