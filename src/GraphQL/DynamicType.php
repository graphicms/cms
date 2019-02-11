<?php

namespace Graphicms\Cms\GraphQL;

use Rebing\GraphQL\Support\Type as GraphQLType;

class DynamicType extends GraphQLType
{
    protected $inputObject = false;
    protected $enumObject = false;
    protected $unionType = false;

    private $_attributes = [];
    private $_fields = [];
    private $_interfaces = [];

    public function __construct($attributes = [])
    {
        parent::__construct($attributes);
        if(isset($this['input']) && $this['input'] === true) {
            $this->inputObject = true;
        }
    }


    public function attributes()
    {
        return $this->_attributes;
    }

    public function fields()
    {
        return $this->_fields;
    }

    public function interfaces()
    {
        return $this->_interfaces;
    }

    public static function make($attributes, $fields, $interfaces = [])
    {
        $att = [];
        if(isset($attributes['resolver']))
            $att['resolver'] = $attributes['resolver'];
        if(isset($attributes['input']))
            $att['input'] = $attributes['input'];
        $static = new static($att);
        $static->_attributes = $attributes;
        $static->_fields = $fields;
        $static->_interfaces = $interfaces;

        return ($static);
    }
}