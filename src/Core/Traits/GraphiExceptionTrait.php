<?php

namespace Graphicms\Cms\Core\Traits;

use Exception;
use Illuminate\Session\TokenMismatchException;

trait GraphiExceptionTrait
{
    public function render($request, Exception $exception)
    {
        if($exception instanceof TokenMismatchException) {
            $api = $request->wantsJson() || $request->headers->get('content-type') == 'application/json';
            if($api) {
                return response(['error' => 'TokenMismatch', 'newone' => csrf_token()], 419)->header('newone', csrf_token());
            }
            $data = 'Error: TokenMismatch';
            return response($data, 419);
        }
        return parent::render($request, $exception);
    }
}