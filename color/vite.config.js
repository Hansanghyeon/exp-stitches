import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default () => {
  return defineConfig({
    plugins: [
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
    }
  })
}