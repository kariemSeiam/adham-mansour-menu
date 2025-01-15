import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom'
    }
  },
  // Add the base option for GitHub Pages deployment
  base: '/adham-mansour-menu/', // Replace <repository> with your actual repository name
});
