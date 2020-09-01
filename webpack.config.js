const path = require('path');

module.exports = {
    entry: './src/index.js',
    watch: true,
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000
    },
    output: {
        filename: 'main.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist')
    }
};
