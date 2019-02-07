<?php

namespace Graphicms\Cms;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Graphicms\Cms\Skeleton\SkeletonClass
 */
class CmsFacade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'cms';
    }
}
