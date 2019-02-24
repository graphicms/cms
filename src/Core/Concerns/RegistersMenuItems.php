<?php

namespace Graphicms\Cms\Core\Concerns;

use Spatie\Typed\Collection;
use Spatie\Typed\Struct;
use Spatie\Typed\T;

trait RegistersMenuItems
{
    public static function registerMenuItems($items = [])
    {
        $finalItems = [];
        foreach ($items as $item) {
            $model = self::parseMenuItem($item);
            $finalItems[] = $model;
        }
        if(count($finalItems) > 0) {
            app('events')->listen('graphi.menu', function() use($finalItems) {
               return $finalItems;
            });
        }
        return $finalItems;
    }

    /**
     * @param $item
     * @return Struct
     */
    public static function parseMenuItem($item): Struct
    {
        $model = new Struct([
            'link'     => T::string(),
            'children' => T::collection(T::generic(Struct::class)),
        ]);
        $empty = new Collection(T::generic(Struct::class));
        $empty->set([]);
        $model['children'] = $empty;
        foreach ($item as $key => $i) {
            if($key == 'children') {
                $ch = [];
                foreach($i as $child) {
                    $ch[] = static::parseMenuItem($child);
                }
                $collection = new Collection(T::generic(Struct::class));
                $collection->set($ch);
                $model['children'] = $collection;
            } else {
                $model[$key] = $i;
            }
        }
        return $model;
    }
}