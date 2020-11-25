const path = require('path')
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals')
const common = require('./webpack.common.js');


module.exports = merge(common, {
    entry: './components/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'myLibrary',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    externals: [nodeExternals()]
});
