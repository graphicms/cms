<?php

namespace Graphicms\Cms;

use Graphicms\Cms\Events\ServingGraphi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;

class Cms
{
    use AuthorizesRequests;

    /**
     * The variables that should be made available on the GraphiCms JavaScript object.
     *
     * @var array
     */
    public static $jsonVariables = [];

    public static function jsonVariables(Request $request)
    {
        return collect(static::$jsonVariables)->map(function ($variable) use ($request) {
            return is_callable($variable) ? $variable($request) : $variable;
        })->all();
    }

    /**
     * Provide additional variables to the global Nova JavaScript object.
     *
     * @param  array  $variables
     * @return static
     */
    public static function provideToScript(array $variables)
    {
        if (empty(static::$jsonVariables)) {
            static::$jsonVariables = [
                'base' => static::path(),
                'userId' => Auth::id() ?? null,
            ];
        }

        static::$jsonVariables = array_merge(static::$jsonVariables, $variables);

        return new static;
    }

    public static function routes()
    {
        \Route::middlewareGroup('graphi', config('cms.middleware', []));

        \Route::group(static::routeConfiguration(), function () {
            if (! app()->routesAreCached()) {
                require __DIR__ . '/../routes/routes.php';
            }
        });
    }

    public static function routeConfiguration()
    {
        return [
            'namespace'  => 'GraphiCms\Cms\Http\Controllers',
            'as'         => 'graphicms.',
            'prefix'     => config('cms.path', 'graphi'),
            'middleware' => config('cms.middleware', [])
        ];
    }

    public static function serving($callback)
    {
        Event::listen(ServingGraphi::class, $callback);
    }
}
