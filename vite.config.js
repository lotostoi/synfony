import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/build/', // Важно: начинается со слэша
  build: {
    outDir: 'public/build',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input:  {
        main: path.resolve(__dirname, 'assets/src/main.js'),
        style: path.resolve(__dirname, 'assets/src/style.scss'),
      }
    }
  },
  server: {
    port: 5173,
    strictPort: false, // Позволяет использовать другой порт, если 5173 занят
    origin: 'http://localhost:5173',
    cors: true,
    hmr: {
      host: 'localhost'
    }
  },
  alias: {
    '@scss': path.resolve(__dirname, 'assets/src/scss'),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:math";`
      }
    }
  }
})
