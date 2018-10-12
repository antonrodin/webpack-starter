const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    devServer: {
        contentBase: "dist",
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{ loader: "babel-loader" }],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [ 
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].html"
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                            attrs: ["img:src"]
                        }
                    },
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    { 
                        loader: 'file-loader',
                        options: {
                            name: "img/[name]-[hash:8].[ext]"
                        } 
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { 
                        loader: "style-loader" 
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    }
}