<?php

namespace Graphicms\Cms\Core\Fields;

use GraphQL\Type\Definition\Type;
use Illuminate\Support\Fluent;

abstract class BaseField extends Fluent
{
    public $attributes = [];

    public function __construct($attributes = [])
    {
        parent::__construct($attributes);
    }

    abstract public function fieldType(): string;

    public static function make($attributes)
    {
        $self = new static($attributes);
        return $self;
    }

    public function toGraphql()
    {
        return Type::string();
    }

    public function fromGraphql()
    {
        return $this->toGraphql();
    }
}