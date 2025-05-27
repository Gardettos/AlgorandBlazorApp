import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'main.js',
      name: 'PeraWalletConnectBundle',
      fileName: () => 'pera-wallet-connect.bundle.js',
      formats: ['umd']
    },
    outDir: '../wwwroot/js', // <-- Output directly to Blazor's wwwroot/js
    emptyOutDir: false
  },
  define: {
    global: 'window'
  }
});