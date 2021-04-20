// shared config (dev and prod)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

var config = {
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
  
  // devServer: {
  //   historyApiFallback: true,
  // },
  plugins: [
    //new HtmlWebpackPlugin({ template: 'src/index.html', }),
    new MiniCssExtractPlugin(),
  ],
  // devtool: "source-map",
  // performance: {
  //   hints: false,
  // },
};

var client = Object.assign({}, config, {
    name: "client",
    target: "web",
    entry: path.resolve(__dirname, "src/client.tsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    }
});

var server = Object.assign({}, config, {
    name: "server",
    target: "node",
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, "src/server.tsx"),
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "build")
    }
});

module.exports = [client, server];