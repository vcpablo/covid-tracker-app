const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
      'module:react-native-dotenv'
    ],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.android.js',
            '.ios.js',
            '.web.js',
            '.ts',
            '.tsx'
          ],
          root: ['.'],
          alias: {
            '@': path.resolve(__dirname, '.')
          }
        }
      ]
    ]
  }
}
