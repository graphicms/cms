<?php

namespace Graphicms\Cms;

use Graphicms\Cms\Core\Concerns\HasMeta;
use Graphicms\Cms\Core\Concerns\RegistersColumns;
use Graphicms\Cms\Core\Concerns\RegistersFields;
use Graphicms\Cms\Core\Concerns\RegistersMenuItems;
use Graphicms\Cms\Core\Concerns\RegistersTypes;
use Graphicms\Cms\Events\ServingGraphi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;

class Cms
{
    use AuthorizesRequests;
    use RegistersTypes, RegistersFields, RegistersColumns, RegistersMenuItems, HasMeta;
    /**
     * The variables that should be made available on the GraphiCms JavaScript object.
     *
     * @var array
     */
    public static $jsonVariables = [];

    public static $isServing = false;

    public static function version()
    {
        return '0.1.0';
    }

    public function authorizeSchema()
    {

    }

    public static function isServing($is = null)
    {
        if ($is !== null) {
            static::$isServing = $is;
        }
        return static::$isServing;
    }

    public static function jsonVariables(Request $request)
    {
        return collect(static::$jsonVariables)->map(function ($variable) use ($request) {
            return is_callable($variable) ? $variable($request) : $variable;
        })->all();
    }

    /**
     * Provide additional variables to the global Nova JavaScript object.
     *
     * @param  array $variables
     * @return static
     */
    public static function provideToScript(array $variables)
    {
        if (empty(static::$jsonVariables)) {
            static::$jsonVariables = [
                'base'   => static::path(),
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
            if (!app()->routesAreCached()) {
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
