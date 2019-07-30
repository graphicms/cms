<?php

namespace Graphicms\Cms;

use Graphicms\Cms\Console\Commands\SyncFulltext;
use Graphicms\Cms\Core\Bootstrappers\Demo;
use Graphicms\Cms\Core\Bootstrappers\RegisterAdminSearch;
use Graphicms\Cms\Core\Bootstrappers\RegisterIntrospection;
use Graphicms\Cms\Core\Bootstrappers\RegisterMenu;
use Graphicms\Cms\Core\Bootstrappers\SwapExceptionHandler;
use Graphicms\Cms\Core\Bootstrappers\RegisterBackendScheme;
use Graphicms\Cms\Core\Bootstrappers\RegisterCoreInterfaces;
use Graphicms\Cms\Core\Bootstrappers\RegisterWarehouse;
use Graphicms\Cms\Core\Bootstrappers\RegisterAuth;
use Graphicms\Cms\Core\Bootstrappers\RegisterDynamicTypes;
use Graphicms\Cms\Core\Bootstrappers\RegisterDataTools;
use Graphicms\Cms\GraphQL\Controller;

use Graphicms\Cms\Console\Commands\InstallCommand;
use Graphicms\Cms\Console\Commands\UpgradeCommand;
use Graphicms\Cms\Core\Fields\Size;
use Graphicms\GraphQL\GraphQLServiceProvider;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Symfony\Component\Finder\Finder;

class CmsServiceProvider extends ServiceProvider
{
    protected $bootstrappers = [
        SwapExceptionHandler::class,
        RegisterCoreInterfaces::class,
        RegisterBackendScheme::class,
        RegisterWarehouse::class,
        RegisterAuth::class,
        RegisterDynamicTypes::class,
        RegisterDataTools::class,
        RegisterMenu::class,
        RegisterIntrospection::class,
        RegisterAdminSearch::class,

        Demo::class,
    ];

    /**
     * Bootstrap the application services.
     */
    public function boot(Router $router)
    {
//        $existing = $router->getMiddlewareGroups();
//        if(isset($existing['web'])) {
//            dd($existing['web']);
//        }
//        $router->middlewareGroup('graphicms', [
//
//        ]);
//        $this->app->register(CmsApplicationServiceProvider::class);
        // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'cms');
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'cms');
        // $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        if ($this->app->runningInConsole()) {
            $this->registerCommands();
            $this->publishResources();
        }
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        $this->app->register(GraphQLServiceProvider::class);

        config()->set('graphicms.graphql.controllers', Controller::class . '@query');

        if (!$this->app->configurationIsCached()) {
            $this->mergeConfigFrom(__DIR__ . '/../config/config.php', 'cms');
        }

        $al = AliasLoader::getInstance();
        $al->alias('Size', Size::class);

        $this->registerMongoDatabase();

        $this->app->singleton('cms', function () {
            return new Cms;
        });

        $this->bootCoreBootstrapers();
    }

    protected function publishResources(): void
    {
        $this->publishes([
            __DIR__ . '/../config/config.php' => config_path('cms.php'),
        ], 'graphicms-config');

        // Publishing the views.
//        $this->publishes([
//            __DIR__ . '/../resources/views' => resource_path('views/vendor/cms'),
//        ], 'views');

        $this->publishes([
            __DIR__ . '/Console/stubs/GraphiServiceProvider.stub' => app_path('Providers/GraphiServiceProvider.php'),
        ], 'graphicms-provider');

        $this->publishes([
            __DIR__ . '/../public' => public_path('cms-assets'),
        ], 'graphicms-assets');

        // Publishing assets.
        /*$this->publishes([
            __DIR__.'/../resources/assets' => public_path('vendor/cms'),
        ], 'assets');*/

        // Publishing the translation files.
        /*$this->publishes([
            __DIR__.'/../resources/lang' => resource_path('lang/vendor/cms'),
        ], 'lang');*/

        // Registering package commands.
        // $this->commands([]);
    }

    protected function registerCommands(): void
    {
        $this->commands([
            InstallCommand::class,
            UpgradeCommand::class,
            SyncFulltext::class,
        ]);
    }

    protected function registerMongoDatabase(): void
    {
        $dsn = config('cms.mongodb_database.dsn');
        if($dsn) {
            $dbConfig = [
                'driver'   => 'mongodb',
                'dsn' => $dsn,
                'database' => config('cms.mongodb_database.database'),
            ];
        } else {
            $dbConfig = [
                'driver'   => 'mongodb',
                'host'     => config('cms.mongodb_database.host', '127.0.0.1'),
                'port'     => config('cms.mongodb_database.port', 27017),
                'database' => config('cms.mongodb_database.database'),
                'username' => config('cms.mongodb_database.username', ''),
                'password' => config('cms.mongodb_database.password', ''),
                'options'  => [
                    'database' => 'admin' // sets the authentication database required by mongo 3
                ]
            ];
        }

        config()->set('database.connections.graphicmsdb', $dbConfig);
    }

    protected function bootCoreBootstrapers(): void
    {
        $this->loadPredefinedBootstrappers();
        $this->autoLoadFromAppFolder();
    }

    protected function autoLoadFromAppFolder(): void
    {
        $finder = new Finder();

        if (is_dir($dir = app_path('Graphi'))) {
            $namespace = app()->getNamespace();

            $files = $finder->in($dir)->files()->name('*Loader.php');
            foreach ($files as $file) {
                $collection = $namespace . str_replace(
                        ['/', '.php'],
                        ['\\', ''],
                        Str::after($file->getPathname(), app_path() . DIRECTORY_SEPARATOR)
                    );
                if (class_exists($collection)) {
                    app()->make($collection);
                }
            }
        }
    }

    protected function loadPredefinedBootstrappers(): void
    {
        foreach ($this->bootstrappers as $bootstraper) {
            app()->make($bootstraper);
        }
    }
}
