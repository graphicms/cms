<?php

namespace Graphicms\Cms;

use Graphicms\Cms\Events\ServingGraphi;
use Illuminate\Support\ServiceProvider;

class CmsApplicationServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->routes();
        Cms::serving(function(ServingGraphi $request) {
            $this->authorization();
        });
    }

    public function routes()
    {
        CmsFacade::routes();
    }

    protected function authorization()
    {
        $this->gate();

        \Cms::auth(function ($request) {
            return app()->environment('local') ||
                Gate::check('accessGraphicms', [$request->user()]);
        });
    }

    protected function gate()
    {
        \Gate::define('accessGraphicms', function ($user) {
            return true;
        });
    }
}