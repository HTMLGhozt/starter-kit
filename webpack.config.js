const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname);

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(ROOT_DIR, './src/index.html'),
    // print: './src/print.js'
  },
  devServer: {
    // contentBase: path.resolve(ROOT_DIR, './src/index.html'),
    // compress: true,
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin()]
};

