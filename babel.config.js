module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 18,
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-flow-strip-types', 'add-module-exports'],
};
