<?php

namespace Graphicms\Cms\Http\Middleware;

use Graphicms\Cms\Events\ServingGraphi;

class DispatchEvent
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
        ServingGraphi::dispatch($request);

        return $next($request);
    }
}