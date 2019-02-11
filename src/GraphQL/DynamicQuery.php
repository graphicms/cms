<?php

namespace Graphicms\Cms\GraphQL;

use Graphicms\GraphQL\Support\DynamicInterface;
use Rebing\GraphQL\Support\Query;

class DynamicQuery extends Query implements DynamicInterface
{
    protected $attributes = [];

    protected $type;

    public function __construct($attributes = [])
    {
        parent::__construct($attributes);
        if(!isset($this['resolver']) || is_null($this['resolver']) || !($this['resolver'] instanceof \Closure)) {
            throw new \Exception('You forgot to add a closure resolver to the DynamicQuery object ['.(isset($this['name']) ? $this['name'] : '').']', 400);
        }
    }

    public function type()
    {
        return $this->type;
    }

    public function deferred_type(): DynamicInterface
    {
        if(!isset($this['type']) || is_null($this['type']) || !($this['type'] instanceof \Closure)) {
            $message = 'You forgot to add a type resolver to the DynamicQuery object ['.(isset($this['name']) ? $this['name'] : '').']';
            throw new \Exception($message);
        }
        $this->type = $this['type']($this);
        return $this;
    }

    public function args(...$args)
    {
        $default = function(...$args) {
            return [];
        };
        if(isset($this['args']) && $this['args'] instanceof \Closure) {
            return $this['args'](...$args);
        } else {
            return $default(...$args);
        }
    }

    public function resolve(...$args)
    {
        return $this['resolver'](...$args);
    }

    public static function make($att = [])
    {
        return new static($att);
    }

    public function getAttributes()
    {
        $attributes = $this->attributes();

        $attributes = array_merge($this->attributes, [
            'args' => $this->args()
        ], $attributes);

        $type = $this->type();
        if(isset($type))
        {
            $attributes['type'] = $type;
        }

        $resolver = $this->getResolver();
        if(isset($resolver))
        {
            $attributes['resolve'] = $resolver;
        }

        return $attributes;
    }

}