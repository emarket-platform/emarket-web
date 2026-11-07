import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path' // Импортируем стандартный модуль path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Связываем символ '@' с абсолютным путем к папке 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
})