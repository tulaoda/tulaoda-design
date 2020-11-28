const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const ip = '0.0.0.0'

module.exports = merge(common, {
    entry: './example/src/index.tsx',
    devServer: {
        historyApiFallback: true,
        port: 3001,
        host: ip
    },
    resolve: {
        plugins: [ new TsconfigPathsPlugin({
            configFile: "./tsconfig.json",
            logLevel: "info",
            extensions: [".ts", ".tsx"],
            mainFields: ["browser", "main"],
            // baseUrl: "/foo"
        })]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Library Example Seed',
            template: path.resolve(__dirname, './example/src/index.html')
        })
    ]
})
