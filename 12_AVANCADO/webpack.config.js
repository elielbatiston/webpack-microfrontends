const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared'
        },
        test: {
            import: './src/test.js',
            dependOn: 'shared'
        },
        shared: 'lodash'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new HtmlWebpackPlugin({
            title: 'Recursos Webpack',
            'meta': {
                'description': 'Encontre roupas, suplementos, tênis, chuteiras e mais na Netshoes, sua loja de artigos esportivos com preços incríveis. Visite-nos agora e aproveite!',
                'keywords': "xyz"
              }
        }),
    ],
    optimization: {
        runtimeChunk: true
    }
}