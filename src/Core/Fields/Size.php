<?php

namespace Graphicms\Cms\Core\Fields;

/**
 * Class Size
 * @package Graphicms\Cms\Core\Fields
 */
class Size
{
    /**
     * @var string Field will always be full width
     */
    public const FULL = 'full';
    /**
     * @var string Field will take 1/2 of available space, next to previous field or on a new row
     */
    public const HALF = 'half';
    /**
     * @var string Field will take 1/2 of available space, always on a new row on right
     */
    public const RIGHT = 'right';
    /**
     * @var string Field will take 1/2 of available space, always on a new row on left
     */
    public const LEFT = 'left';
}
