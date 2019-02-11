<?php

namespace Graphicms\Cms\Models;

use Jenssegers\Mongodb\Eloquent\EmbedsRelations;
use Jenssegers\Mongodb\Eloquent\Model;

class BaseModel extends Model
{
    use EmbedsRelations { embedsMany as public; embedsOne as public; }

    protected $connection = 'graphicmsdb';

    protected $guarded = [];
}