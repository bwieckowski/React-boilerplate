// shared config (dev and prod)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      modules: path.resolve(__dirname, 'src/modules/'),
      store: path.resolve(__dirname, 'src/store/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      // Here place your anouther paths
    }
  },
  entry: [
    './src/index.tsx', // the entry point of our app
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.min.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      // If you would like ues SVG images as React Component use
      //
      //{
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'babel-loader'
      //     },
      //     {
      //       loader: "react-svg-loader",
      //       jsx: true,
      //     }
      //   ]
      // }
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html', }),
    new MiniCssExtractPlugin(),
  ],
  devtool: "source-map",
  performance: {
    hints: false,
  },
};

