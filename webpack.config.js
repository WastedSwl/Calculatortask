import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  mode: process.env.NODE_ENV || 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
  },

  devServer: {
    static: path.resolve('dist'),
    port: 8080,
    open: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};