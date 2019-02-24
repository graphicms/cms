@extends('cms::layouts.main')

@section('content')
<div class="flex">
    <div class="w-200 min-w-200 pl-8">
        <side-menu :load="true"></side-menu>
    </div>
    <div class="w-full pr-8 dashboard">
        <router-view :key="$route.name + ($route.params.entity || '')"></router-view>
    </div>
</div>
@endsection