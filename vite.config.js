import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: /air-polution-metrics-app/,
  plugins: [react()],
});
