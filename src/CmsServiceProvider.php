<?php

namespace Graphicms\Cms;

use Graphicms\Cms\Console\Commands\InstallCommand;
use Graphicms\Cms\Console\Commands\UpgradeCommand;
use Graphicms\Cms\Core\RegisterBackendScheme;
use Graphicms\Cms\Core\RegisterWarehouse;
use Graphicms\GraphQL\GraphQLServiceProvider;
use Illuminate\Support\ServiceProvider;

class CmsServiceProvider extends ServiceProvider
{
    protected $bootstrappers = [
        RegisterBackendScheme::class,
        RegisterWarehouse::class,
    ];
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
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

        if (!$this->app->configurationIsCached()) {
            $this->mergeConfigFrom(__DIR__ . '/../config/config.php', 'cms');
        }

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
            __DIR__.'/Console/stubs/GraphiServiceProvider.stub' => app_path('Providers/GraphiServiceProvider.php'),
        ], 'graphicms-provider');

        $this->publishes([
            __DIR__.'/../public' => public_path('cms-assets'),
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
        ]);
    }

    protected function registerMongoDatabase(): void
    {
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

        config()->set('database.connections.graphicmsdb', $dbConfig);
    }

    protected function bootCoreBootstrapers(): void
    {
        foreach ($this->bootstrappers as $bootstraper) {
            app()->make($bootstraper);
        }
    }
}
