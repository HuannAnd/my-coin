import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

import tsConfigPaths from "vite-tsconfig-paths"

// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: "./vite-test.config.ts"
  },
  // base: './',
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src/'),
  //   }
  // }
})
