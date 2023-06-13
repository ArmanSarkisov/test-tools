/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./setup.ts'],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // testMatch: ['./**/*.test.tsx'],
    globals: true,
    coverage: {
      provider: 'istanbul'
    },
  }
})
