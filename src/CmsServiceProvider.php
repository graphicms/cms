<?php

namespace Graphicms\Cms;

use Illuminate\Support\ServiceProvider;

class CmsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot()
    {
        $this->app->register(CmsApplicationServiceProvider::class);
        // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'cms');
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'cms');
        // $this->loadMigrationsFrom(__DIR__.'/../database/migrations');

        if ($this->app->runningInConsole()) {
            $this->publishResources();
        }
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        if (!$this->app->configurationIsCached()) {
            $this->mergeConfigFrom(__DIR__ . '/../config/config.php', 'cms');
        }

        $this->app->singleton('cms', function () {
            return new Cms;
        });
    }

    protected function publishResources(): void
    {
        $this->publishes([
            __DIR__ . '/../config/config.php' => config_path('cms.php'),
        ], 'config');

        // Publishing the views.
        $this->publishes([
            __DIR__ . '/../resources/views' => resource_path('views/vendor/cms'),
        ], 'views');

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
}
