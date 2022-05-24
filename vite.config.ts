import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
      {
        find: /^@material-ui\/pickers/,
        replacement: path.resolve(
          __dirname,
          './node_modules/@material-ui/pickers/dist/material-ui-pickers.js',
        ),
      }
    ]
  },
})