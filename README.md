Instructions for Style Loader installation
==========================================

Webpack 4

```shell
npm install style-loader css-loader
```

Configuration of the modules inside the webpack.dev.js

```javascript

module: {
        rules: [
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

```