<?php

namespace Graphicms\Cms\Console\Commands;

use Graphicms\Cms\Core\Utils\MongoCollection;
use Graphicms\GraphQL\Events\ServingGraphQL;
use Illuminate\Console\Command;
use Jenssegers\Mongodb\Eloquent\Model;

class SyncFulltext extends Command
{
    protected $signature = 'graphicms:sync-fulltext';
    protected $description = 'Syncs full-text indexes for all your registered collections that use MongoDb';

    public function handle()
    {
        event(new ServingGraphQL);
        collect(\Cms::registeredTypes())
            ->reject(function ($item) {
                return !($item->model instanceof Model);
            })->each(function ($item) {
                $collectionName = $item->model->getTable();
                $collection = MongoCollection::get($collectionName);
                if ($collection) {
                    if($index = MongoCollection::hasFullTextIndex($collection)) {
                        $collection->dropIndex($index->getName());
                    }
                    if(count(array_get($item['search'], 'attributes',  [])) == 0) {
                        return;
                    }
                    $key = [];
                    foreach(array_get($item['search'], 'attributes',  []) as $attribute) {
                        $key[$attribute] = 'text';
                    }
                    $collection->createIndexes([
                        ['key' => $key, 'name' => 'graphi_fulltext_search']
                    ]);
                }
            });
    }
}