import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        acis: resolve(__dirname, 'acis.html'),
        'animal-ai': resolve(__dirname, 'animal-ai.html'),
        'path-guard': resolve(__dirname, 'path-guard.html'),
      },
    },
  },
});
