<?php

namespace Graphicms\Cms\Core\Behaviors;

use Illuminate\Database\Eloquent\SoftDeletes;

trait ScoutObserver
{
    public function saved($model)
    {
        if (static::syncingDisabledFor($model->collection)) {
            return;
        }

        if (!$model->shouldBeSearchable()) {
            $model->unsearchable();

            return;
        }

        $model->searchable();
    }

    public function deleted($model)
    {
        if (static::syncingDisabledFor($model->collection)) {
            return;
        }

        if ($this->usesSoftDelete($model) && config('scout.soft_delete', false)) {
            $this->saved($model);
        } else {
            $model->unsearchable();
        }
    }

    public function forceDeleted($model)
    {
        if (static::syncingDisabledFor($model->collection)) {
            return;
        }

        $model->unsearchable();
    }

    public function restored($model)
    {
        $this->saved($model);
    }

    /**
     * Determine if the given model uses soft deletes.
     *
     * @param  \Illuminate\Database\Eloquent\Model $model
     * @return bool
     */
    protected function usesSoftDelete($model)
    {
        return in_array(SoftDeletes::class, class_uses_recursive($model));
    }
}