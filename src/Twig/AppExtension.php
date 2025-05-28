<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class AppExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('file_get_contents', [$this, 'fileGetContents']),
            new TwigFilter('json_decode', [$this, 'jsonDecode']),
        ];
    }

    public function fileGetContents(string $path): string
    {
        if (!file_exists($path)) {
            return '';
        }
        
        return file_get_contents($path);
    }

    public function jsonDecode(string $json): array
    {
        return json_decode($json, true);
    }
}
