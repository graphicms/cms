<?php

namespace Graphicms\Cms\Core\Defaults;

use Graphicms\Cms\Core\Scopes\SoftDeletingScope;
use GraphQL\Type\Definition\Type;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ReadResolver
{
    public function resolve($model, $arguments)
    {
        if (isset($arguments['whereId'])) {
            $record = $model->model->where($model->primary_key, $arguments['whereId']);
            if (isset($arguments['includeDeleted']) && $arguments['includeDeleted']) {
                $record->withoutGlobalScope(SoftDeletingScope::class);
            }
            if (isset($arguments['deletedOnly']) && $arguments['deletedOnly']) {
                $record->trashed();
            }

            $records = $record->first();
            if (!$record) {
                throw new ModelNotFoundException();
            }
            return $records;
        }
        $perPage = array_get($arguments, 'pagination.per_page', 15);
        $page = array_get($arguments, 'pagination.current_page', 1);
        $newQuery = $model->model->newQuery();

        if (isset($arguments['sort']) && isset($arguments['sort']['direction']) && isset($arguments['sort']['field'])) {
            $api = event('graphi.sorting: ' . $model->name, [$arguments['sort'], $newQuery]);
            if (count($api) == 0) {
                $newQuery->orderBy($arguments['sort']['field'], $arguments['sort']['direction']);
            }
        }

        if (isset($arguments['filter'])) {
            $api = event('graphi.filtering: ' . $model->name, $arguments['sort']);
            if (count($api) == 0) {
                $newQuery->filter($arguments['filter']);
            }
        }
        if (isset($arguments['includeDeleted']) && $arguments['includeDeleted']) {
            $newQuery->withoutGlobalScope(SoftDeletingScope::class);
        }
        if (isset($arguments['deletedOnly']) && $arguments['deletedOnly']) {
            $newQuery->onlyTrashed();
        }
        $basePagination = $newQuery->paginate($perPage, ['*'], 'page', $page);
        $pag = $basePagination->toArray();
        $pag['from'] = $pag['from'] ?? 0;
        $pag['to'] = $pag['to'] ?? 0;
        $pag['data'] = $basePagination->items();
        $pag['paginated'] = true;
        return $pag;
    }

    public function arguments($model)
    {
        if ($model->collection) {
            $whereId = Type::string();
        } else {
            $whereId = Type::nonNull(Type::string());
        }
        $args = [];
        $args['whereId'] = [
            'type' => $whereId
        ];
        $args['includeDeleted'] = [
            'type' => Type::boolean()
        ];
        $args['deletedOnly'] = [
            'type' => Type::boolean()
        ];
        if ($model->collection) {
            $args['pagination'] = [
                'type' => \CmsQL::type('Pagination')
            ];
            $args['sort'] = [
                'type' => \CmsQL::type('Sorting')
            ];
        }
        return $args;
    }
}
