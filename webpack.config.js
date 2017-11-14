var webpack = require('webpack');
module.exports = {
    entry: {
        bundle: './src/main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "DEVELOPMENT": JSON.stringify(true),
            "PRODUCTION": JSON.stringify(false)
        })
    ],
    devtool: 'cheap-eval-source-map',
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        },
        extensions: ['.js', '.vue']

    },
    devServer: {
        open: true,
        port: 8090,
        inline: true,
        compress: true,
        hot: true
    }
} 