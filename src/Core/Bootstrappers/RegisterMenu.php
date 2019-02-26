<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use Graphicms\Cms\GraphQL\DynamicQuery;
use Graphicms\Cms\GraphQL\DynamicType;
use Graphicms\GraphQL\Events\ServingGraphQL;
use GraphQL\Type\Definition\Type;
use Illuminate\Container\Container;
use Illuminate\Support\Str;

class RegisterMenu
{
    public function __construct(Container $app)
    {
        \CmsQL::addType(DynamicType::make([
            'name' => 'MenuItem',
        ], [
            'link'     => [
                'type' => Type::string(),
            ],
            'children' => [
                'type' => function () {
                    return Type::listOf(\CmsQL::type('MenuItem'));
                }
            ]
        ]));

        $app['events']->listen(ServingGraphQL::class, function () {
            $types = [];
            $first = null;

            foreach(\Cms::registeredTypes() as $type) {
                if($type->menu === true || is_array($type->menu)) {
                    if($type->menu === true) {
                        if(!$first) {
                            $first = '/entity/'.$type->name;
                        }
                        $types[] = $type;
                    } else {

                    }
                }
            }

            $types = collect($types);

            event('graphi.extendTypesMenu', [&$types]);
            $typesChildren = [];
            foreach($types as $type) {
                $typesChildren[] = ['link' => '<router-link to="/entity/'.$type->name.'"><div class="icon-col">&nbsp;</div><div>'.Str::title($type->name).'</div></router-link>'];
            }


            $coreItems = [];
            $coreItems[] = ['link' => '<router-link to="/"><div class="icon-col"><i class="material-icons">dashboard</i></div><div>Dashboard</div></router-link>',
                            'children' => [
                                ['link' => '<router-link to="/dashboard"><div class="icon-col"><strong>bb</strong></div><div>404</div></router-link>'],
                            ]];
            if(count($typesChildren) > 0) {
                $coreItems[] = [
                    'link' => '<a href="javscript:;"><div class="icon-col"><i class="material-icons">collections_bookmark</i> </div> <div>Entities</div> </a>',
                    'children' => $typesChildren,
                ];
            }

            \Cms::registerMenuItems($coreItems);
            event('graphi.coreMenuRegistered');

            $this->menuQuery();
        });
    }

    private function menuQuery()
    {
        \CmsQL::addDynamicQuery(DynamicQuery::make([
            'name'     => 'menu',
            'type'     => function () {
                return Type::listOf(\CmsQL::type('MenuItem'));
            },
            'resolver' => function ($context, $arguments) {
                $items = [];
                $api = event('graphi.menu');
                foreach ($api as $apiItems) {
                    if (is_array($apiItems)) {
                        foreach ($apiItems as $apiItem) {
                            $items[] = $apiItem->toArray();
                        }
                    }
                }
                return $items;
            }
        ]), 'backend');
    }
}