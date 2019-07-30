<?php

/*
 * You can place your custom package configuration in here.
 */
return [
    'path' => env('GRAPHI_PATH', 'graphi'),

    'mongodb_database' => [
        'host' => env('CMS_DB_HOST', 'localhost'),
        'port' => env('CMS_DB_PORT', 27017),
        'database' => env('CMS_DB_DATABASE', 'graphicms'),
        'username' => env('CMS_DB_USERNAME', 'homestead'),
        'password' => env('CMS_DB_PASSWORD', ''),
        'dsn' => env('CMS_DB_DSN', null)

    ],

    'middleware' => [
        'web',
        \Graphicms\Cms\Http\Middleware\DispatchEvent::class,
        \Graphicms\Cms\Http\Middleware\Authenticate::class,
        \Graphicms\Cms\Http\Middleware\Authorize::class,
    ]
];
