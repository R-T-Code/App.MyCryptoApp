const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        // this will create the bundle.js from the index.js file
        filename: '[name].bundle.js',
        // __dirname is going to read the project name (webpack-template in this case) and and the output folder
        path: path.join(__dirname, '/dist')
    },
    // this is for babel and css
    module: {
        rules: [
            {
                // use every js file
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: "65-90",
                                speed: 4,
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            }
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    //_this will exclude node_modules folder
                    test: /[\\/]node_modules[\\/]/,
                    name: "common",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'My Crypto Portfolio App'
        }), // generate the default index.html
    ],
    devServer : {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}