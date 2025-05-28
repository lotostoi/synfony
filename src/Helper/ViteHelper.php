<?php

declare(strict_types=1);

namespace App\Helper;

class ViteHelper
{
    public static function isRunning(): bool
    {
        try {
            $fp = @fsockopen('localhost', 5173, $errno, $errstr, 0.2);
            if ($fp) {
                fclose($fp);
                return true;
            }
        } catch (\Throwable $e) {
            // Ignore
        }
        return false;
    }
}
