import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Using relative base path './' makes the build portable across 
  // both GitHub Pages (sub-path) and Vercel (root) without special logic.
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
})
