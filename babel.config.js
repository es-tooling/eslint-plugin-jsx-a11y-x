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
  plugins: ['add-module-exports'],
};
