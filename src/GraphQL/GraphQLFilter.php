<?php

namespace Graphicms\Cms\GraphQL;

use CmsQL as GraphQL;
use GraphQL\Type\Definition\Type;
use Gency\Filterable\Filterable;
use \Illuminate\Database\Eloquent\Relations;
use Illuminate\Support\Str;

class GraphQLFilter
{
    static function fieldsFromModel($definition, $only = null, $overrides = []) {
        $model = $definition->model;
        $modelName = self::getModelName($model);
        $typeName = Str::title($definition->name).'Filter';
        $fields = collect();
        $only = $only === null ? null : collect($only);
//        dump($model->getFilterable());
        foreach ($model->getFilterable() as $field => $rules) {
            if ($only !== null && !$only->contains($field)) {
                continue;
            }
            if (array_key_exists($field, $overrides) && $overrides[$field] === null) {
                continue;
            }
            if ($rules instanceof Relations\Relation) {
                $relationName = self::getModelName($rules->getModel());
                $relationType = self::getTypeName($rules->getModel());
                $fields[$field] = [
                    'type' => GraphQL::Type($relationType),
                    'description' => 'Filter by relationship to ' . $relationName
                ];
                continue;
            }
            $type = collect($rules)->reduce(function ($type, $rule) {
                return $type === null ? (Filterable::isFilterableType($rule) ? $rule::type : null) : $type;
            }, null);
            if (isset($overrides[$field]) && isset($overrides[$field]['type'])) {
                $type = $overrides[$field]['type'];
                unset($overrides[$field]['type']);
            } else {
                $type = self::filtertableTypeToGraphQLType($type);
            }
            if ($type === null) {
                continue;
            }
            $rules = collect($rules)->map(function ($rule) {
                return Filterable::isFilterableType($rule) ? $rule::defaultRules() : $rule;
            })->flatten()->unique();

            foreach ($rules as $index => $rule) {
                $key = "${field}_${rule}";
                $not = "${field}_NOT_${rule}";
                if (array_key_exists($key, $overrides) && $overrides[$key] === null) {
                    continue;
                }
                if ($index === 0) {
                    $k = $field;
                    $nk = "${field}_NOT";
                } else {
                    $k = $key;
                    $nk = $not;
                }
                $fieldType = $type;
                if ($rule === Filterable::IN) {
                    $fieldType = Type::listOf($type);
                } else if ($rule === Filterable::NULL) {
                    $fieldType = Type::boolean();
                }
                $fieldDefinition = [
                    'type' => $fieldType,
                    'description' => "Filter $modelName $field using $rule rule"
                ];
                $fields[$k] = collect($fieldDefinition)
                    ->merge(isset($overrides[$field]) ? $overrides[$field] : null)
                    ->merge(isset($overrides[$key]) ? $overrides[$key] : null);
                if (method_exists($definition, 'scopeFilterNot' . $rule)) {
                    $fieldDefinition = [
                        'type' => $fieldType,
                        'description' => "Filter $modelName $field using negated $rule rule"
                    ];
                    $fields[$nk] = collect($fieldDefinition)
                        ->merge(isset($overrides[$field]) ? $overrides[$field] : null)
                        ->merge(isset($overrides[$key]) ? $overrides[$key] : null);
                }
            }
        }
        $fields = $fields->merge([
            'AND' => [
                'type' => function() use($typeName) { return Type::listOf(GraphQL::type($typeName)); },
                'description' => 'Nested logical AND of filter parameters'
            ],
            'OR' => [
                'type' => function() use($typeName) { return Type::listOf(GraphQL::type($typeName)); },
                'description' => 'Nested logical OR of filter parameters'
            ],
            'NOT' => [
                'type' => function() use($typeName) { return Type::listOf(GraphQL::type($typeName)); },
                'description' => 'Nested logical NOT of filter parameters (elements are AND\'ed)'
            ],
            'NOR' => [
                'type' => function() use($typeName) { return Type::listOf(GraphQL::type($typeName)); },
                'description' => 'Nested logical NOT of filter parameters (elements are OR\'ed)'
            ],
        ]);
        return $fields->toArray();
    }

    static function getModelName($model) {
        return (new \ReflectionClass($model))->getShortName();
    }

    static function getTypeName($model) {
        return self::getModelName($model) . 'Filter';
    }

    static function filtertableTypeToGraphQLType($filterableType)
    {
        switch ($filterableType) {
            case 'String':
            case 'Text':
            case 'Date':
            case 'Enum':
                return Type::string();
            case 'Integer':
                return Type::int();
            case 'Numeric':
                return Type::float();
            case 'Boolean':
                return Type::boolean();
            default:
                return null;
        }
    }
}