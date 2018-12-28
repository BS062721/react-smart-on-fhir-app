const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


module.exports = {
entry: {
        index: './src/index.js',
        launch: './launch.js',
        ready: './ready.js'
},
output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};