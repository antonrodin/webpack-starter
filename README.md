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

# Better errors overlay:true

```javascript
devServer: {
        contentBase: "dist",
        overlay: true
    },
```

## Install html loaders:

```shell
npm install html-loader extract-loader file-loader
```

webpack.dev.js configuration for extract and process html files.

```javascript
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
                            minimize: false
                        }
                    },
                ]
            },
```