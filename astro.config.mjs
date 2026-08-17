// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": "src"
      }
    },
    plugins: [tailwindcss()],
    build: {
      license: {
        fileName: "licenses.md"
      }
    }
  },
  integrations: [react()]
});