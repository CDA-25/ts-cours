import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4200,
    host: '0.0.0.0', // problème de compatibilité avec vite, du coup il prend n'importe laquelle
    strictPort: true,
  },
});
