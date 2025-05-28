import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './assets', 
  base: '/vite/',
  build: {
    outDir: './public/vite',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'main.js'),
      },
    },
  },
});
