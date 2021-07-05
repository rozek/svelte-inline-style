// see https://github.com/rozek/build-configuration-study

import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/svelte-inline-style.ts',
  output: {
    file:     './dist/svelte-inline-style.esm.js',
    format:   'esm',
    sourcemap:true
  },
  plugins: [
    typescript(),
  ],
};