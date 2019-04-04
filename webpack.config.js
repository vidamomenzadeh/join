
const path = require('path');
const pageTitle = "Join";
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', './index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: pageTitle
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        })
    ],
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
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "@actions": path.resolve(__dirname, 'src/actions/'),
            "@components": path.resolve(__dirname, 'src/components/'),
            "@constants": path.resolve(__dirname, 'src/constants/'),
            "@containers": path.resolve(__dirname, 'src/containers/'),
            "@sass": path.resolve(__dirname, 'src/sass/'),
            "@reducers": path.resolve(__dirname, 'src/reducers/'),
        }
    }
};


