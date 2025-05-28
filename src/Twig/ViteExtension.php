<?php

declare(strict_types=1);

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;

class ViteExtension extends AbstractExtension implements GlobalsInterface
{
    public function getGlobals(): array
    {
        return [
            'vite_running' => $this->viteIsRunning(),
        ];
    }

    private function viteIsRunning(): bool
    {
        $hosts = ['host.docker.internal', '172.17.0.1'];
        
        foreach ($hosts as $host) {
            try {
                $fp = @fsockopen($host, 5173, $errno, $errstr, 0.2);
                if ($fp) {
                    fclose($fp);
                    return true;
                }
            } catch (\Throwable $e) {
                continue;
            }
        }
        
        return false;
    }
}
