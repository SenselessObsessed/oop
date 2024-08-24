const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
        return {
            mode: env.mode ?? 'development',
            entry: path.resolve(__dirname, 'src', 'index.js'),
            output: {
                path: path.resolve(__dirname, './bundle'),
                filename: 'bundle.js',
                clean: true
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new MiniCssExtractPlugin(),
            ],
            module: {
                rules: [
                    {
                        test: /\.css$/i,
                        use: [
                            MiniCssExtractPlugin.loader, 
                            "css-loader"
                        ],
                    }
                ]
            },
            devtool: 'inline-source-map',
            devServer: {
                open: true,
                port: 8888,
            },
        };
}