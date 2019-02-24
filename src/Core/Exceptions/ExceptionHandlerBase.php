<?php

namespace Graphicms\Cms\Core\Exceptions;
use Graphicms\Cms\Core\Traits\GraphiExceptionTrait;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class ExceptionHandlerBase extends ExceptionHandler
{
    use GraphiExceptionTrait;
}