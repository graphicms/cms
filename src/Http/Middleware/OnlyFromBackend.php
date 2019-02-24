<?php

namespace Graphicms\Cms\Http\Middleware;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class OnlyFromBackend
{
    public function handle(Request $request, \Closure $next, ...$guards)
    {
        $ref = $request->server->get('HTTP_REFERER');
        if(strlen($ref) > 0) {
            $check = url()->to(config('cms.path'));
            if(!Str::startsWith($ref, $check)) {
                throw new AccessDeniedHttpException;
            }
        }
        return $next($request);
    }
}