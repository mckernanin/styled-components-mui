import babel from 'rollup-plugin-babel';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named',
  },
  external: ['styled-components'],
  plugins: [
    babel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            targets: {
              browsers: ['ie 10', 'ios 7'],
            },
            modules: false,
          },
        ],
      ],
      plugins: ['transform-class-properties'],
    }),
  ],
};
