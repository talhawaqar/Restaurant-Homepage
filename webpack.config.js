const Htmlwebpackplugin = require('html-webpack-plugin');
const Minicss = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          } 
        }]
      }
    ],
  },
  plugins: [
    new Htmlwebpackplugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new Minicss({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};