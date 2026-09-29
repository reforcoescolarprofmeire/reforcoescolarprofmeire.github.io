// @ts-check
import { defineConfig } from 'astro/config';

// O domínio é configurado em src/config/site.ts (campo `url`).
export default defineConfig({
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Formato moderno e leve para as imagens otimizadas
    responsiveStyles: false,
  },
});
