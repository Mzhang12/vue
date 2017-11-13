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
        new webpack.HotModuleReplacementPlugin()
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
        port: 8099,
        inline: true,
        compress: true,
        hot: true
    }
} 