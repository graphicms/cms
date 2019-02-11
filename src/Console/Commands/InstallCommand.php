<?php

namespace Graphicms\Cms\Console\Commands;

use Graphicms\Cms\Cms;
use Illuminate\Console\Command;

class InstallCommand extends Command
{
    protected $signature = 'graphicms:install {--force : Overwrite any existing files}';
    protected $description = 'Installs the GraphiCMS Service provider, config file and assets.';

    public function handle()
    {
        $this->comment('⌛️ Publishing GraphiCMS Service Provider...');
        $file = app_path('Providers/GraphiServiceProvider.php');
        if(file_exists($file)) {
            if($this->confirm('Service provider already exists. Do you want me to replace it? You will loose your modifications.')) {
                $config = config_path('app.php');
                $contents = file_get_contents($config);
                $contents = str_replace(PHP_EOL."        App\Providers\GraphiServiceProvider::class,", '', $contents);
                file_put_contents($config, $contents);
                unlink($file);
                $this->callSilent('vendor:publish', [
                    '--tag' => 'graphicms-provider',
                    '--force' => $this->option('force'),
                ]);
            }
        } else {
            $this->callSilent('vendor:publish', [
                '--tag' => 'graphicms-provider',
                '--force' => $this->option('force'),
            ]);
        }
        $this->comment('✅ Done!'.PHP_EOL);

        $this->comment('⌛️ Publishing GraphiCMS config file...');
        $this->callSilent('vendor:publish', [
            '--tag' => 'graphicms-config',
            '--force' => $this->option('force'),
        ]);
        $this->comment('✅ Done!'.PHP_EOL);

        $this->comment('⌛️ Registering GraphiCMS Service Provider in config/app.php...');
        $this->registerServiceProviderInApp();
        $this->comment('✅ Done!'.PHP_EOL);

        $this->comment('⌛️ Publishing assets...');
        $this->callSilent('vendor:publish', [
            '--tag' => 'graphicms-assets',
            '--force' => true,
        ]);
        $this->comment('✅ Done!'.PHP_EOL);

        $this->comment('⌛️ Setting current installed version to '.\Cms::version());
        $arr = Cms::meta();
        $upgrades = $arr->get('upgrades', []);
        $upgrades[\Cms::version()] = now();
        $arr->upgrades($upgrades);

        Cms::meta($arr);


        $this->comment('✅ Done!'.PHP_EOL);

        $link = url()->to('/graphi');
        $this->output->block(['🎉 Party time!', 'Throw a party, cause GraphiCMS is now installed. Enjoy it.', 'You can visit the dashboard at '.$link], null, 'fg=black;bg=green', ' ', true);
    }

    protected function registerServiceProviderInApp()
    {
        $contents = file_get_contents(config_path('app.php'));
        if(strpos($contents, 'App\Providers\GraphiServiceProvider::class') !== false) {
            $this->warn('Service provider is already registered in app.php');
            return;
        }
        file_put_contents(config_path('app.php'), str_replace(
            "App\\Providers\EventServiceProvider::class,".PHP_EOL,
            "App\\Providers\EventServiceProvider::class,".PHP_EOL."        App\Providers\GraphiServiceProvider::class,".PHP_EOL,
            $contents
        ));
    }
}