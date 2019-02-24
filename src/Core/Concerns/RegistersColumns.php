<?php
namespace Graphicms\Cms\Core\Concerns;

use Graphicms\Cms\Core\Columns\BaseColumn;

trait RegistersColumns
{
    public function registerColumns($identifier, \closure $closure)
    {
        app('events')->listen('graphi.columns: ' . $identifier, $closure);
    }

    public static function columnsFromEvent($res)
    {
        $toAdd = [];
        foreach ($res as $columns) {
            if (is_array($columns)) {
                foreach ($columns as $column) {
                    if ($column instanceof BaseColumn) {
                        $toAdd[] = [
                            'label'    => $column->label,
                            'field'    => $column->field,
                            'type'     => $column->columnType(),
                            'sortable' => $column->get('sortable', true),
                            'gql'      => [
                                'type'      => $column->toGraphql(),
                                'attribute' => $column->db,
                            ],
                        ];
                    }
                }
            }
        }
        return $toAdd;
    }
}