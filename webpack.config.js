const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3100,
    hot: true,
    open: true,
    watchFiles: [
      path.join(__dirname, 'src', 'index.html')
    ]
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
    })
  ]
};
