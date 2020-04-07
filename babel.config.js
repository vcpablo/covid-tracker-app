const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
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
