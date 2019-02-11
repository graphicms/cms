<?php

namespace Graphicms\Cms\Models;

class Warehouse extends BaseModel
{
    protected $collection = 'warehouse';

    static protected $system = ['main'];

    static protected $registered = ['main'];

    public static function register($code)
    {
        self::checkSystem($code);
        static::$registered[] = $code;
    }

    public static function unregister($code)
    {
        self::checkSystem($code);
        if (($key = array_search($code, static::$registered)) !== false) {
            unset(static::$registered[$key]);
        }
    }

    public static function forget($code)
    {
        self::checkSystem($code);
        self::checkRegistered($code);
        if (($key = array_search($code, static::$registered)) !== false) {
            static::where('code', $code)->delete();
        }
    }

    public static function unregisterAndForger($code)
    {
        static::forget($code);
        static::unregister($code);
    }

    public static function get($code)
    {
        self::checkRegistered($code);

        $warehouse = static::firstOrNew(['code' => $code]);

        if(!$warehouse->exists) {
            $warehouse->values = [];
            $warehouse->save();
        }

        return $warehouse;
    }

    /**
     * @param $code
     * @throws \Exception
     */
    protected static function checkSystem($code): void
    {
        if (in_array($code, static::$system)) {
            throw new \Exception('Warehouse \'' . $code . '\' is used by the system and cannot be overwritten/deleted');
        }
    }

    /**
     * @param $code
     * @throws \Exception
     */
    protected static function checkRegistered($code): void
    {
        if (!in_array($code, static::$registered)) {
            throw new \Exception('Warehouse \'' . $code . '\' is not registered.');
        }
    }
}