<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use Graphicms\Cms\GraphQL\DynamicQuery;
use Graphicms\Cms\GraphQL\DynamicType;
use Graphicms\GraphQL\Events\ServingGraphQL;
use GraphQL\Type\Definition\FieldDefinition;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use Illuminate\Container\Container;

class RegisterIntrospection
{
    public function __construct(Container $app)
    {
        \CmsQL::addType(DynamicType::make([
            'name' => 'CmsEntity',
        ], [
            'code'          => [
                'type' => Type::string(),
            ],
            'hasDates'      => [
                'type' => Type::boolean(),
            ],
            'isSoftDeleted' => [
                'type' => Type::boolean()
            ],
            'fields'        => [
                'type' => Type::string(),
            ],
        ]));
        $app['events']->listen(ServingGraphQL::class, function () {
            \CmsQL::addDynamicQuery(DynamicQuery::make([
                'name'     => 'introspection',
                'type'     => function () {
                    return Type::listOf(\CmsQL::type('CmsEntity'));
                },
                'resolver' => function ($context, $arguments) {
                    $types = [];
                    $registered = \Cms::registeredTypes();
                    if(!array_key_exists('user', $registered)) {
                        $user = \CmsQL::type('User');
                        $userFields = $user->config['fields'];
                        $allUserFields = $this->fields($userFields);
                        $types[] = [
                            'code'   => 'user',
                            'fields' => json_encode($allUserFields)
                        ];
                    }

                    foreach ($registered as $code => $def) {
                        $type = ($def->graphType)();
                        $default = ['hasDates' => false, 'isSoftDeleted' => false];
                        $fields = json_encode([]);
                        if (isset($type->config)) {
                            $fields = json_encode($this->fields($type->config['fields']));
                        }
                        if (isset($type->config) && array_key_exists('interfaces', $type->config)) {
                            $dates = false;
                            $soft = false;
                            foreach ($type->config['interfaces'] as $interface) {
                                if ($interface->name == 'HasDates') {
                                    $dates = true;
                                } else if ($interface->name == 'IsSoftDeleting') {
                                    $soft = true;
                                }
                            }
                            $default = ['hasDates' => $dates, 'isSoftDeleted' => $soft];
                        }
                        $definition = array_merge($default, ['code' => $code, 'fields' => $fields]);
                        $types[] = $definition;
                    }
                    if(isset($arguments['for'])) {
                        return [collect($types)->where('code', $arguments['for'])->first()];
                    }
                    return $types;
                },
                'args' => function() {
                    return [
                        'for' => [
                            'type' => Type::string()
                        ]
                    ];
                }
            ]), 'backend');
        });
    }

    private function fields($fields)
    {
        if (is_callable($fields)) {
            $fields = $fields();
        }
        $allFields = [];
        foreach ($fields as $field => $type) {
            $allFields[$field] = [];
            if($type instanceof FieldDefinition)  {
                $fdType = $type->config['type'];
                if(is_callable($fdType)) {
                    $fdType = $fdType();
                }
                if($fdType instanceof ObjectType) {
                    $allFields[$field] = [$this->fields($fdType->config['fields'])];
                }
            }
            else if ($type['type'] instanceof ObjectType) {
                $allFields[$field] = [$this->fields($type['type']->config['fields'])];
            }
        }
        return $allFields;
    }
}