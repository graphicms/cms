<?php

namespace Graphicms\Cms\Core\Bootstrappers;

use App\Http\Middleware\Authenticate;
use Graphicms\Cms\Http\Middleware\OnlyFromBackend;

class RegisterBackendScheme
{
    public function __construct()
    {
        \CmsQL::addNewScheme('backend', [
            'middleware' => ['web', Authenticate::class, OnlyFromBackend::class],
        ]);
    }

}