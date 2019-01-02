const presets = [
  [
    '@babel/preset-env',
    {
      targets: '> 0.25%, not dead',
      useBuiltIns: 'usage',
    },
  ],
];

module.exports = { presets };
