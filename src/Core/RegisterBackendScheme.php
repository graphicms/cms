<?php

namespace Graphicms\Cms\Core;

use App\Http\Middleware\Authenticate;

class RegisterBackendScheme
{
    public function __construct()
    {
        \CmsQL::addNewScheme('backend', [
            'middleware' => ['web', Authenticate::class],
            'query' => []
        ]);
    }

}