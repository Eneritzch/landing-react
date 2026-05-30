import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: './' makes asset paths relative so the build works on GitHub Pages
// project sites (served from /<repo-name>/) without hardcoding the repo name.
export default defineConfig({
  base: './',
  plugins: [react()],
})
