import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';

import path from 'path';

export default defineConfig({
  build: {
    outDir: './dist'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  plugins: [react(), sassDts()],
  server: {
    port: 5000
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts']
  }
});
