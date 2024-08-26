const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
        return {
            mode: env.mode ?? 'development',
            entry: path.resolve(__dirname, 'src', 'index.js'),
            output: {
                path: path.resolve(__dirname, './dist'),
                filename: 'main.js',
                clean: true
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    filename: './index.html'
                }),
                new MiniCssExtractPlugin(),
            ],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.html$/,
                        use: {
                            loader: 'html-loader'
                        }
                    },
                    {
                        test: /\.css$/i,
                        use: [
                            MiniCssExtractPlugin.loader, 
                            "css-loader"
                        ],
                    },
                    {
                      test: /\.(png|svg|jpg|jpeg|gif)$/i,
                      type: 'asset/resource',
                    },
                    {
                      test: /\.(woff|woff2|eot|ttf|otf)$/i,
                      type: 'asset/resource',
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