module.exports = {
  presets: [
    [
      'airbnb',
      {
        targets: {
          node: 18,
        },
        transformRuntime: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-flow-strip-types', 'add-module-exports'],
};
