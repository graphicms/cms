<?php
namespace Graphicms\Cms\Core\Concerns;

use Illuminate\Support\Carbon;
use Illuminate\Support\Fluent;

trait HasMeta
{
    public static function meta($meta = null)
    {
        if ($meta !== null) {
            static::setMeta(is_object($meta) && $meta instanceof Fluent ? $meta->toArray() : $meta);
            return true;
        }
        try {
            if (file_exists(storage_path('framework/graphicms.json'))) {
                $data = \json_decode(file_get_contents(storage_path('framework/graphicms.json')), true);
                if (JSON_ERROR_NONE !== json_last_error()) {
                    throw new \InvalidArgumentException(
                        'json_decode error: ' . json_last_error_msg()
                    );
                }
                foreach ($data as $key => &$d) {
                    if ($key == 'upgrades') {
                        foreach ($d as &$upgrade) {
                            if (!$upgrade instanceof Carbon && array_key_exists('date', $upgrade)) {
                                $upgrade = Carbon::parse($upgrade['date']);
                            }
                        }
//                    $d['upgrades'] = $upgrades;
                    }
                }
                return new Fluent($data);
            } else {
                throw new \Exception('file does not exist');
            }
        } catch (\Exception $e) {
            logger()->critical('graphicms.json is missing');
            return new Fluent([
                'version'      => static::version(),
                'installed_at' => now(),
                'upgrades'     => [],
            ]);
        }
    }

    public static function setMeta($meta)
    {
        try {
            file_put_contents(storage_path('framework/graphicms.json'), json_encode($meta, JSON_PRETTY_PRINT));
        } catch (\Exception $e) {

        }
    }
}