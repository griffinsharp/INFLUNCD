const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js', //entry point -- output path is below under output/path
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    devtool: 'source-map'
};