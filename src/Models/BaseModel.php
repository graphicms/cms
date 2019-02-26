<?php

namespace Graphicms\Cms\Models;

use Jenssegers\Mongodb\Eloquent\EmbedsRelations;
use Jenssegers\Mongodb\Eloquent\Model;
use October\Rain\Extension\ExtendableTrait;

class BaseModel extends Model
{
    use EmbedsRelations { embedsMany as public; embedsOne as public; }
    use ExtendableTrait;

    protected $connection = 'graphicmsdb';

    protected $guarded = [];

    public $implement = [];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->extendableConstruct();
    }

    public function getCollection()
    {
        return $this->collection;
    }

    public function setCollection($name)
    {
        $this->collection = $name;
    }

    public function __get($key)
    {
        return $this->extendableGet($key);
    }

    public function __set($key, $value)
    {
        $this->extendableSet($key, $value);
    }

    public function __call($method, $parameters)
    {
        return $this->extendableCall($method, $parameters);
    }

    public static function __callStatic($name, $params)
    {
        return self::extendableCallStatic($name, $params);
    }


}