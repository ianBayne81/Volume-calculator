const path = require('path')

module.exports = {
    entry: {
        index: ['./src/index.js'],
        site: ['./src/site.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        publicPath: '',
        filename: '[name]-bundle.js'
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|)$/i,
                type: 'asset/resource',
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './public'),
        },
        open: true,
        compress: true,
        port: 9000,
    },
    devtool: 'source-map',
}

