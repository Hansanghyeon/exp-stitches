import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
      tsconfigPaths(),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'index.ts'),
        name: '@hansanghyeon/color',
        formats: ['es', 'cjs', 'umd'],
        fileName: (format) => {
          let f;
          switch (format) {
            case 'es':
              f = 'mjs';
              break;
            case 'cjs':
              f = 'cjs';
              break;
            case 'umd':
              f = 'umd.js';
              break;
            default:
              break;
          }
          
          return `index.${f}`
        },
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        }
      }
    }
  })
}