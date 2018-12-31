const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
var webpack = require('webpack');
const webpackDevServerConfig = require('./webpack-dev-server.config');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});


module.exports = {
    devtool: 'inline-source-map',
    devServer: webpackDevServerConfig,
    entry: {
        index: './src/index.js',
        launch: './src/launch.js',
    },
    output: {
        filename: '[name].js',
        //chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, './build'),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
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
                test: /\.jsx$/,
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
    plugins: [htmlWebpackPlugin
        // new HtmlWebpackPlugin({
        //     title: 'SMART Workshop',
        //     template: './src/index.html',
        //     chunks: ['index'] }),
        // new HtmlWebpackPlugin({
        //     title: 'Launch',
        //     filename: 'launch.html',
        //     chunks: ['launch'] }),
        // new HtmlWebpackPlugin({
        //         title: 'Ready',
        //         filename: 'ready.html',
        //         chunks: ['ready'] }),
        //new CommonsChunkPlugin('bundle.js'),
        //new webpack.HotModuleReplacementPlugin()
    ]
};