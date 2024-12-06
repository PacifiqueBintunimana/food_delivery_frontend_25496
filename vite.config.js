import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0',
    port:process.env.PORT || 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to suppress warnings
  },
  
  
})