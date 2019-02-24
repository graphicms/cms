<?php

namespace Graphicms\Cms\Core\Exceptions;

use App\Exceptions\Handler;
use Graphicms\Cms\Core\Traits\GraphiExceptionTrait;

class ExceptionHandlerApp extends Handler
{
    use GraphiExceptionTrait;
}