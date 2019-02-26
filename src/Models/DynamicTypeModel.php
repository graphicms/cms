<?php

namespace Graphicms\Cms\Models;

use Graphicms\Cms\Core\Behaviors\ScoutSearchable;
use Graphicms\Cms\Core\Traits\ConfigurableSoftDeletes;
use Graphicms\Cms\Core\Traits\MongoFilterable;
class DynamicTypeModel extends BaseModel
{
    use ConfigurableSoftDeletes;
    use MongoFilterable;

    public $filterable = [];

    protected $collection = '';

    protected $dates = ['deleted_at'];

    protected static $_searchable_extend = false;

    public static function getInstance($collection, array $options = [])
    {
        $softdelete = array_get($options, 'softDelete', true);
        $filters = array_get($options, 'filters', null);
        if (is_callable($filters)) {
            $filters = $filters();
        }

        $scout = array_get($options, 'scout', false);
        if ($scout) {
            static::extend(function ($model) {
                $model->implement[] = ScoutSearchable::class;
            });
        }

        if ($softdelete) {
            \Cms::$dynamicModelsWithSoftDeletes[] = $collection;
        }
        $inst = new static;
        $inst->collection = $collection;
        $inst->filterable = $filters;
        if($scout) {
            $toSearchable = array_get($options, 'toSearchableArray', false);
            if($toSearchable instanceof \Closure) {
//                $toSearchable = \Closure::bind($toSearchable, $inst);
                static::$_searchable_extend = $toSearchable;
            }
        }
        return $inst;
    }

    public function toSearchableArray()
    {
        if(static::$_searchable_extend instanceof \Closure) {
            $toSearchable = \Closure::bind(static::$_searchable_extend, $this, static::class);
            return $toSearchable();
        } else if($this->isClassExtendedWith(ScoutSearchable::class)) {
            return $this->asExtension('ScoutSearchable')->toSearchableArray();
        }
        return $this->toArray();
    }
}