<?php

namespace Graphicms\Cms;

use Graphicms\Cms\Events\ServingGraphi;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Fluent;

class Cms
{
    use AuthorizesRequests;

    /**
     * The variables that should be made available on the GraphiCms JavaScript object.
     *
     * @var array
     */
    public static $jsonVariables = [];

    public static function version()
    {
        return '0.1.0';
    }

    public static function meta($meta = null)
    {
        if($meta !== null) {
            static::setMeta(is_object($meta) && $meta instanceof Fluent ? $meta->toArray() : $meta);
            return true;
        }
        try {
            if (file_exists(storage_path('framework/graphicms.json'))) {
                $data = \json_decode(file_get_contents(storage_path('framework/graphicms.json')), true);
                if (JSON_ERROR_NONE !== json_last_error()) {
                    throw new \InvalidArgumentException(
                        'json_decode error: ' . json_last_error_msg()
                    );
                }
                foreach($data as $key => &$d) {
                    if($key == 'upgrades') {
                        foreach($d as &$upgrade) {
                            if(!$upgrade instanceof Carbon && array_key_exists('date', $upgrade)) {
                            $upgrade = Carbon::parse($upgrade['date']);
                            }
                        }
//                    $d['upgrades'] = $upgrades;
                    }
                }
                return new Fluent($data);
            } else {
                throw new \Exception('file does not exist');
            }
        } catch (\Exception $e) {
            logger()->critical('graphicms.json is missing');
            return new Fluent([
                'version' => static::version(),
                'installed_at' => now(),
                'upgrades' => [],
            ]);
        }
    }

    public static function setMeta($meta)
    {
        try {
            file_put_contents(storage_path('framework/graphicms.json'), json_encode($meta, JSON_PRETTY_PRINT));
        } catch (\Exception $e) {

        }
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
