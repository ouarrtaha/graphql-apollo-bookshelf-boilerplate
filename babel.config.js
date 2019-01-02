const presets = [
  [
    '@babel/preset-env',
    {
      targets: '> 0.25%, not dead',
      useBuiltIns: 'usage', // https://babeljs.io/docs/en/babel-polyfill
    },
  ],
];

module.exports = { presets };
