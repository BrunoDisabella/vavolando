// Configuración de Vite para React
// Aunque este proyecto utiliza un servidor de desarrollo simple para
// arrancar sin dependencias, se incluye este archivo para permitir
// la integración con Vite en el futuro.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
