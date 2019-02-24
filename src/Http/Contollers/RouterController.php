<?php

namespace Graphicms\Cms\Http\Controllers;

use App\Http\Controllers\Controller;

class RouterController extends Controller
{
    public function show()
    {
        return view('cms::index');
    }
}