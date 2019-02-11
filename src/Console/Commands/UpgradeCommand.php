<?php

namespace Graphicms\Cms\Console\Commands;

use Graphicms\Cms\Meta\Versions;
use Illuminate\Console\Command;
use Version\Version;

class UpgradeCommand extends Command
{
    use Versions;

    protected $signature = 'graphicms:upgrade {--force : Overwrite any existing files}';
    protected $description = 'Re-publishes the GraphiCMS assets in the public folder and other steps required to upgrade to a new version';

    public function handle()
    {
        $meta = \Cms::meta();
        $current = Version::fromString(\Cms::version());
        $installed = Version::fromString($meta->get('version', $current));

        if ($current->isEqualTo($installed)) {
            $this->output->block(['Nothing to upgrade!', 'You are already on the latest version. Back to work.'], null, 'fg=black;bg=green', ' ', true);
            return;
        }

        foreach ($this->published as $version) {
            $past = Version::fromString($version);
            if ($past->isGreaterThan($installed)) {
                $method = 'upgrade_' . str_replace('.', '', $past->getVersionString());
                if (method_exists($this, $method)) {
                    $this->$method();
                } else {
                    $this->info('When upgrading from ' . $installed->getVersionString() . ' to ' . $past->getVersionString() . ' there is nothing to do.');
                }
                $meta->version($past->getVersionString());
                $upgrades = $meta->upgrades;
                $upgrades[$past->getVersionString()] = now();

                $meta->upgrades($upgrades);
            }
        }

        \Cms::meta($meta);

        $this->output->block(['Upgrade complete!', 'You are now upgraded to version ' . $current->getVersionString()], null, 'fg=black;bg=green', ' ', true);
    }
}