import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // If using the font plugin
    /*
    VitePluginFonts({
      google: {
        families: ['Roboto'] // Example font, customize as needed
      }
    })
    */
  ],
  resolve: {
    alias: {
      // Other aliases if needed
    }
  },
  server: {
    fs: {
      // Allow serving files from the node_modules directory
      allow: ['..']
    }
  },
  // If using fonts from a specific path
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "slick-carousel/slick/slick.css";
          @import "slick-carousel/slick/slick-theme.css";
        `
      }
    }
  }
});