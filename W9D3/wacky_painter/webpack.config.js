var path = require('path');
module.exports = {
  entry: "./js/main.js",
  mode: 'development',
  output: {
    path: path.join(__dirname, 'js'),
    publicPath: '/js/',
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  // devtool: 'inline-source-maps',
};
