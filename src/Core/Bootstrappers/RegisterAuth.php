<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use App\User;
use Carbon\Carbon;
use Gency\Filterable\Filterable;
use Graphicms\Cms\Core\Columns\ActionsColumn;
use Graphicms\Cms\Core\Columns\Column;
use Graphicms\Cms\Core\Fields\BaseField;
use Graphicms\Cms\Core\Fields\DateTime;
use Graphicms\Cms\Core\Fields\InvisibleField;
use Graphicms\Cms\Core\Fields\TextAreaField;
use Graphicms\Cms\Core\Fields\TextField;
use Graphicms\Cms\GraphQL\DynamicMutation;
use Graphicms\Cms\GraphQL\DynamicQuery;
use Graphicms\Cms\GraphQL\DynamicType;
use Graphicms\Cms\Models\DynamicTypeModel;
use Graphicms\Cms\Models\Profile;
use Graphicms\GraphQL\Events\ServingGraphQL;
use GraphQL\Type\Definition\Type;
use Illuminate\Container\Container;
use Illuminate\Validation\Rule;

class RegisterAuth
{
    public function __construct(Container $app)
    {
        $coreUserFields = function () {
            return [
                TextField::make(['label' => 'Name', 'db' => 'name', 'name' => 'name', 'size' => \Size::HALF, 'required' => true]),
                TextField::make(['label' => 'Email', 'db' => 'email', 'name' => 'email', 'size' => \Size::HALF, 'required' => true]),
                DateTime::make(['label' => 'Created At', 'db' => 'created_at', 'name' => 'created_at', 'size' => \Size::HALF, 'required' => true, 'tab' => 'Extra']),
                DateTime::make(['label' => 'Updated At', 'db' => 'updated_at', 'name' => 'updated_at', 'size' => \Size::HALF, 'required' => true, 'tab' => 'Extra', 'readonly' => true]),
            ];
        };

        \Cms::registerFields('user', $coreUserFields);
        \Cms::registerFields('profile', $coreUserFields);

        \Cms::registerType(function () {
            return \CmsQL::type('User'); // the type registered above
        }, [
            'name'        => 'user',
            'model'       => new User,
            'schema'      => 'backend',
            'form_fields' => [
//                TextField::make(['label' => 'Unu', 'db' => 'unu', 'name' => 'unu', 'size' => \Size::HALF, 'required' => true]),
//                TextField::make(['label' => 'Doi', 'db' => 'doi', 'name' => 'doi', 'size' => \Size::HALF, 'required' => true]),
//                InvisibleField::make(['label' => 'Doi', 'db' => 'doi', 'name' => 'doi', 'size' => \Size::HALF, 'required' => true]),
            ],
            'columns'     => [
                Column::make(['sortable' => true, 'label' => 'Coloana unu', 'field' => 'name']),
                Column::make(['sortable' => true, 'label' => 'Coloana unu', 'field' => 'name']),
                Column::make(['sortable' => true, 'label' => 'Coloana doi', 'field' => 'profile.sub.bio_sub']),
                ActionsColumn::make()
            ],
            'menu'        => true,
            'typeNames'   => [
                'type' => 'User'
            ],
            'primary_key' => 'id'
        ]);

        $app['events']->listen(ServingGraphQL::class, function () {
            $this->registerTypes();
            $this->registerQuery();
        });
    }

    private function registerTypes()
    {
        $core = [
            'id'                => [
                'type' => Type::int(),
            ],
            'name'              => [
                'type' => Type::string(),
            ],
            'email'             => [
                'type' => Type::string(),
            ],
            'email_verified_at' => [
                'type' => Type::string(),
            ],
            'password'          => [
                'type' => Type::string(),
            ],
            'remember_token'    => [
                'type' => Type::string(),
            ],
            'created_at'        => [
                'type' => Type::int(),
            ],
            'updated_at'        => [
                'type' => Type::int(),
            ],
        ];
        $api = event('graphi.extendUserFields');
        foreach ($api as $apifields) {
            if (is_array($apifields)) {
                $core = array_merge($core, $apifields);
            }
        }
        \CmsQL::addType(DynamicType::make([
            'name' => 'User',
        ], $core, [
            'resolveCreatedAtField'       => function ($root) {
                if ($root->created_at instanceof Carbon) {
                    return $root->created_at->format('U');
                }
                return null;
            },
            'resolveUpdatedAtField'       => function ($root) {
                if ($root->updated_at instanceof Carbon) {
                    return $root->updated_at->format('U');
                }
                return null;
            },
            'resolveEmailVerifiedAtField' => function ($root) {
                if ($root->email_verified_at instanceof Carbon) {
                    return $root->email_verified_at->format('U');
                }
                return null;
            }
        ]));
        \CmsQL::addType(DynamicType::make([
            'name' => 'Auth',
        ], [
            'user' => [
                'type' => \CmsQL::type('User')
            ],
        ]));
        \CmsQL::addType(DynamicType::make([
            'name' => 'DesiredInputType',
        ], [
            'attribute' => [
                'type' => Type::string(),
            ],
            'type'      => [
                'type' => Type::string(),
            ],
        ]));
        \CmsQL::addType(DynamicType::make([
            'name' => 'FieldDefinition',
        ], [
            'value'    => [
                'type' => Type::string(),
            ],
            'type'     => [
                'type' => Type::string(),
            ],
            'size'     => [
                'type' => Type::string(),
            ],
            'name'     => [
                'type' => Type::string(),
            ],
            'label'    => [
                'type' => Type::string(),
            ],
            'gql'      => [
                'type' => \CmsQL::type('DesiredInputType'),
            ],
            'required' => [
                'type' => Type::boolean(),
            ],
            'tab'      => [
                'type' => Type::string(),
            ],
            'readonly' => [
                'type' => Type::boolean(),
            ]
        ]));
        \CmsQL::addType(DynamicType::make([
            'name' => 'ColumnDefinition',
        ], [
            'label'    => [
                'type' => Type::string(),
            ],
            'field'    => [
                'type' => Type::string(),
            ],
            'type'     => [
                'type' => Type::string(),
            ],
            'sortable' => [
                'type' => Type::boolean(),
            ],
            'gql'      => [
                'type' => \CmsQL::type('DesiredInputType'),
            ],
        ]));
        \CmsQL::addType(DynamicType::make([
            'name' => 'LogoutResult',
        ], [
            'result' => [
                'type' => Type::boolean(),
            ],
        ]));
    }

    private function registerQuery()
    {
        \CmsQL::addDynamicQuery(DynamicQuery::make([
            'name'     => 'auth',
            'type'     => function () {
                return \CmsQL::type('Auth');
            },
            'resolver' => function ($context, $arguments) {
                $user = auth()->user();
                event('graphi.extendUserResponse', $user);
                return [
                    'user' => $user,
                ];
            },
        ]), 'backend');

        \CmsQL::addDynamicQuery(DynamicQuery::make([
            'name'     => 'getFields',
            'type'     => function () {
                return Type::listOf(\CmsQL::type('FieldDefinition'));
            },
            'resolver' => function ($context, $arguments) {
                $res = event('graphi.fields: ' . $arguments['for']);
                $toAdd = \Cms::fieldsFromEvent($res);
                return $toAdd;
            },
            'args'     => function () {
                return [
                    'for' => [
                        'type' => Type::nonNull(Type::string())
                    ]
                ];
            }
        ]), 'backend');

        \CmsQL::addDynamicQuery(DynamicQuery::make([
            'name'     => 'getColumns',
            'type'     => function () {
                return Type::listOf(\CmsQL::type('ColumnDefinition'));
            },
            'resolver' => function ($context, $arguments) {
                $res = event('graphi.columns: ' . $arguments['for']);
                $toAdd = \Cms::columnsFromEvent($res);
                return $toAdd;
            },
            'args'     => function () {
                return [
                    'for' => [
                        'type' => Type::nonNull(Type::string())
                    ]
                ];
            }
        ]), 'backend');

        \CmsQL::addDynamicMutation(DynamicMutation::make([
            'name'     => 'logout',
            'type'     => function () {
                return \CmsQL::type('LogoutResult');
            },
            'resolver' => function () {
                try {
                    auth()->logout();
                    return ['result' => true];
                } catch (\Exception $e) {
                    return ['result' => false];
                }
            }
        ]), 'backend');

        \CmsQL::addDynamicMutation(DynamicMutation::make([
            'name'     => 'updateProfile',
            'type'     => function () {
                return \CmsQL::type('User');
            },
            'resolver' => function ($scope, $args) {
                try {
                    $res = collect(event('graphi.fields: profile'));
                    $fields = $res->flatten()->map(function ($field) {
                        return $field->name;
                    })->toArray();
                    $user = auth()->user();
                    $modelFields = array_keys($user->getOriginal());
                    foreach ($args as $name => $val) {
                        if (in_array($name, $fields) && in_array($name, $modelFields)) {
                            $user->{$name} = $val;
                        }
                    }
                    $user->save();
                    event('graphi.saved: user', [$user, $args]);
                    return auth()->user();
                } catch (\Exception $e) {
                    return false;
                }
            },
            'args'     => function () {
                $res = event('graphi.fields: profile');
                $toAdd = [];
                foreach ($res as $fields) {
                    if (is_array($fields)) {
                        foreach ($fields as $field) {
                            if ($field->get('readonly', false) || !($field instanceof BaseField)) {
                                continue;
                            }
                            $toAdd[str_replace('.', '_', $field->name)] = [
                                'type' => $field->fromGraphql()
                            ];
                        }
                    }
                }
                return $toAdd;
            },
            'rules'    => function () {
                return [
                    'email' => ['nullable', 'email', Rule::unique('users')->ignore(auth()->user()->id)]
                ];
            }
        ]), 'backend');
    }
}
