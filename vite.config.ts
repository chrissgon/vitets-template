import { defineConfig } from 'vite';
import { resolve } from 'path';
import ts from 'typescript';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      compilerOptions: {
        moduleResolution: ts.ModuleResolutionKind.Bundler,
      },
    }),
  ],
  build: {
    lib: {
      name: 'myrepo',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
    },
  },
  resolve: { alias: { src: resolve('src/') } },
});
