import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = (mode === 'development');

  return {
    build: {
      outDir: 'lib',
      lib: {
        entry: fileURLToPath(new URL('packages/index.ts', import.meta.url)),
        name: 'fn',
        fileName: (format) => `index.${format === 'iife' ? 'min' : format}.js`,
        formats: ['es', 'cjs', 'iife']
      },
      rollupOptions: {
        external: ['vue', 'dayjs']
      }
    }
  }
})
