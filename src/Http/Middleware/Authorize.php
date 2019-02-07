<?php

namespace Graphicms\Cms\Http\Middleware;

use Graphicms\Cms\CmsFacade;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {
        return CmsFacade::check($request) ? $next($request) : abort(403);
    }
}