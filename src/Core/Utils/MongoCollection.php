<?php

namespace Graphicms\Cms\Core\Utils;

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Collection;

class MongoCollection
{
    public static function get($collectionName)
    {
        $builder = Schema::connection('graphicmsdb');
        if($builder->hasCollection($collectionName)) {
            $conn = $builder->getConnection();
            return $conn->getCollection($collectionName);
        }
        return false;
    }

    public static function hasFullTextIndex(Collection $collection)
    {
        $existingIndexes = $collection->listIndexes();
        foreach($existingIndexes as $index) {
            if($index->getName() == 'graphi_fulltext_search') {
                return $index;
            }
        }
        return false;
    }
}