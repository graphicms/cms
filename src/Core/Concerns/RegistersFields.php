<?php
namespace Graphicms\Cms\Core\Concerns;

use Graphicms\Cms\Core\Fields\BaseField;

trait RegistersFields
{
    public function registerFields($identifier, \closure $closure)
    {
        app('events')->listen('graphi.fields: ' . $identifier, $closure);
    }

    public static function fieldsFromEvent($res)
    {
        $toAdd = [];
        foreach ($res as $fields) {
            if (is_array($fields)) {
                foreach ($fields as $field) {
                    if ($field instanceof BaseField) {
                        if ($field->db !== null) {
                            $toAdd[] = [
                                'label'    => $field->label,
                                'value'    => $field->db,
                                'tab'      => $field->tab,
                                'type'     => $field->fieldType(),
                                'size'     => $field->get('size', \Size::FULL),
                                'name'     => $field->get('name', $field->db),
                                'required' => $field->get('required', false),
                                'readonly' => $field->get('readonly', false),
                                'gql'      => !($field->get('readonly', false)) ? [
                                    'type'      => $field->toGraphql(),
                                    'attribute' => $field->db,
                                ] : null
                            ];
                        }
                    }
                }
            }
        }
        return $toAdd;
    }

    public function withDates($base, $type = 'fields')
    {
        if ($type == 'fields') {
            $pagination = \CmsQL::type('HasDates');
            return array_merge($pagination->getFields(), $base);
        } else if ($type == 'resolvers') {
            return [];
        }
        return $base;
    }

    public function withSoftDeletes($base, $type = 'fields')
    {
        if ($type == 'fields') {
            $pagination = \CmsQL::type('IsSoftDeleting');
            return array_merge($pagination->getFields(), $base);
        } else if ($type == 'resolvers') {
            return [];
        }
        return $base;
    }
}