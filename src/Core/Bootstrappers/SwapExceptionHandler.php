<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use App\Exceptions\Handler;
use Graphicms\Cms\Core\Exceptions\ExceptionHandlerApp;
use Graphicms\Cms\Core\Exceptions\ExceptionHandlerBase;
use Graphicms\GraphQL\Events\ServingGraphQL;
use Illuminate\Container\Container;
use Illuminate\Contracts\Debug\ExceptionHandler;

class SwapExceptionHandler
{
    public function __construct(Container $app)
    {
        $app['events']->listen(ServingGraphQL::class, function() use($app) {
            if(class_exists(Handler::class)) {
                $app->singleton(ExceptionHandler::class, ExceptionHandlerApp::class);
            } else {
                $app->singleton(ExceptionHandler::class, ExceptionHandlerBase::class);
            }
        });
    }

}