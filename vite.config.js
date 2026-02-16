import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // Detect if we are deploying to GitHub Pages or running elsewhere (like Vercel or local)
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
})
