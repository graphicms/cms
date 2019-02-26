<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use App\User;
use Gency\Filterable\Filterable;
use Graphicms\Cms\Core\Columns\ActionsColumn;
use Graphicms\Cms\Core\Columns\Column;
use Graphicms\Cms\Core\Fields\InvisibleField;
use Graphicms\Cms\Core\Fields\TextAreaField;
use Graphicms\Cms\Core\Fields\TextField;
use Graphicms\Cms\GraphQL\DynamicType;
use Graphicms\Cms\Models\DynamicTypeModel;
use Graphicms\Cms\Models\Profile;
use GraphQL\Type\Definition\Type;
use Illuminate\Container\Container;

class Demo
{
    public function __construct(Container $app)
    {
        $this->addEntities();

        $this->extendUser($app);
    }

    /**
     * @param Container $app
     */
    private function extendUser(Container $app): void
    {
        $profileFields = function () {
            return [
                TextAreaField::make(['label' => 'Bio', 'db' => 'profile.bio', 'name' => 'profile_bio', 'size' => \Size::HALF, 'required' => true]),
                TextAreaField::make(['label' => 'Bio 2', 'db' => 'profile.sub.bio_sub', 'name' => 'profile.sub.bio_sub', 'size' => \Size::HALF, 'required' => true]),
            ];
        };
        \Cms::registerFields('user', $profileFields);
        \Cms::registerFields('profile', $profileFields);

        \Illuminate\Database\Eloquent\Builder::macro('graphi_profile', function () {
            $model = $this->getModel();
            if ($model instanceof User && $model->exists) {
                $profile = Profile::firstOrCreate([
                    'user_id' => $model->id
                ]);
                return $profile;
            }
//            return $->belongsTo('class');
        });

        \CmsQL::addType(DynamicType::make([
            'name' => 'GraphiUserProfileSub',
        ], [
            'bio_sub' => [
                'type' => Type::string(),
            ]
        ]));

        \CmsQL::addType(DynamicType::make([
            'name' => 'GraphiUserProfile',
        ], [
            'bio' => [
                'type' => Type::string(),
            ],
            'sub' => [
                'type' => function() {
                    return \CmsQL::type('GraphiUserProfileSub');
                },
            ]
        ]));

        $app['events']->listen('graphi.saved: user', function ($user, $args) {
            $profile = $user->graphi_profile();
            if (isset($args['profile_bio'])) {
                $profile->bio = $args['profile_bio'];
            }
            if(isset($args['profile_sub_bio_sub'])) {
                $sub = $profile->sub ?: [];
                $sub['bio_sub'] = $args['profile_sub_bio_sub'];
                $profile->sub = $sub;
            }
            $profile->save();
        });

//        $app['events']->listen('graphi.extendUserResponse', function ($user) {
//            $profile = $user->graphi_profile();
//            $user->profile = $profile;
//        });
        $app['events']->listen('graphi.extendUserFields', function () {
            return [
                'profile' => [
                    'type' => \CmsQL::type('GraphiUserProfile'),
                    'resolve' => function($root) {
                        return $root->graphi_profile();
                    }
                ]
            ];
        });
    }

    private function addEntities(): void
    {
# step 1 - register graphql type
        \CmsQL::addType(DynamicType::make([
            'name' => 'ProstieType',
        ], [
            '_id' => [
                'type' => Type::string()
            ],
            'unu' => [
                'type' => Type::string()
            ],
            'doi' => [
                'type' => Type::string()
            ]
        ], [], [
            \CmsQL::type('HasDates'),
            \CmsQL::type('IsSoftDeleting'),
        ]));

        # step 2 - register custom type into CMS
        \Cms::registerType(function () {
            return \CmsQL::type('ProstieType'); // the type registered above
        }, [
            'name'        => 'prostie',
            'model'       => DynamicTypeModel::getInstance('prostie', [
                'softDelete' => true,
                'scout' => true,
//                'toSearchableArray' => function() {
//                    $base = $this->toArray();
//                    $base['adaugatDeMine'] = 'da';
//                    return $base;
//                }
            ]),
            'schema'      => 'default',
            'filters'     => function () {
                return [
                    'unu'        => Filterable::String,
                    'created_at' => Filterable::Date,
                ];
            },
            'form_fields' => [
                TextField::make(['label' => 'Unu', 'db' => 'unu', 'name' => 'unu', 'size' => \Size::HALF, 'required' => true]),
                TextField::make(['label' => 'Doi', 'db' => 'doi', 'name' => 'doi', 'size' => \Size::HALF, 'required' => true]),
//                InvisibleField::make(['label' => 'Doi', 'db' => 'doi', 'name' => 'doi', 'size' => \Size::HALF, 'required' => true]),
            ],
            'columns'     => [
                Column::make(['sortable' => true, 'label' => 'Coloana unu', 'field' => 'unu']),
                Column::make(['sortable' => true, 'label' => 'Coloana doi', 'field' => 'doi']),
                ActionsColumn::make()
            ],
            'menu'        => true,
            'search' => [
                'enabled' => true,
                'attributes' => ['unu', 'doi'],
                'title' => 'unu',
            ]
        ]);
    }

}