<?php

namespace Graphicms\Cms\Core\Columns;

class ActionsColumn extends BaseColumn
{
    public function __construct($attributes = [])
    {
        $attributes = array_merge(['label' => '', 'field' => '', 'sortable' => false], $attributes);
        parent::__construct($attributes);
    }

    public function columnType(): string
    {
        return 'actions';
    }
}