<?php

namespace Graphicms\Cms\Models;

use Graphicms\Cms\Core\Traits\ConfigurableSoftDeletes;
use Graphicms\Cms\Core\Traits\MongoFilterable;

class DynamicTypeModel extends BaseModel
{
    use ConfigurableSoftDeletes;
    use MongoFilterable;

    public $filterable = [];

    protected $collection = '';

    protected $dates = ['deleted_at'];

    public static function getInstance($collection, array $options = [])
    {
        $softdelete = array_get($options, 'softDelete', true);
        $filters = array_get($options, 'filters', null);
        if(is_callable($filters)) {
            $filters = $filters();
        }
        if($softdelete) {
            \Cms::$dynamicModelsWithSoftDeletes[] = $collection;
        }
        $inst = new static;
        $inst->collection = $collection;
        $inst->filterable = $filters;
        return $inst;
    }
}