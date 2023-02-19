module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          modules: './src/modules',
          pages: './src/pages',
          shared: './src/shared',
        },
      },
    ],
  ],
};
