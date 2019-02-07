<?php

/*
 * You can place your custom package configuration in here.
 */
return [
    'path' => env('GRAPHI_PATH', 'graphi'),

    'middleware' => [
        'web',
        \Graphicms\Cms\Http\Middleware\DispatchEvent::class,
        \Graphicms\Cms\Http\Middleware\Authenticate::class,
        \Graphicms\Cms\Http\Middleware\Authorize::class,
    ]
];