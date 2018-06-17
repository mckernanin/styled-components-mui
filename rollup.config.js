import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  exports: 'named',
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    babel({
      babelrc: false,
      presets: ['env', 'flow'],
      plugins: ['transform-class-properties'],
    }),
  ],
  external: ['styled-components'],
};
