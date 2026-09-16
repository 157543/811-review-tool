import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react()],
  publicDir: false,
  build: { outDir: 'dist', emptyOutDir: true, sourcemap: false },
});
