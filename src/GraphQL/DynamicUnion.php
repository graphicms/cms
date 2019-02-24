<?php

namespace Graphicms\Cms\GraphQL;

use Graphicms\GraphQL\Support\DynamicInterface;
use Rebing\GraphQL\Support\UnionType;

class DynamicUnion extends UnionType implements DynamicInterface
{
    protected $attributes = [];

    public function types()
    {
        return $this['types']($this) ?: [];
    }

    public function resolveType($value)
    {
        return $this['resolveType']($value);
    }

    public function deferred_type(): DynamicInterface
    {
        if(!isset($this['types']) || is_null($this['types']) || !($this['types'] instanceof \Closure)) {
            $message = 'You forgot to add a types resolver to the DynamicUnion object ['.(isset($this['name']) ? $this['name'] : '').']';
            throw new \Exception($message);
        }
        return $this;
    }

    public static function make($att = [])
    {
        return new static($att);
    }


}