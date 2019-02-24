<?php

use Graphicms\Cms\Http\Controllers\RouterController;

Route::view('/', 'cms::index');
Route::get('/{view}', [RouterController::class, 'show'])->where('view', '.*');
