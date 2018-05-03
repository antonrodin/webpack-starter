# CSS handling with Webpack

1. Install 'css-loader' (Deal with CSS Imports) and 'style-loader' 
(Takes CSS imports and insert them into the html)

```shell
npm install --save-dev style-loader css-loader webpack
```

2. Add into the file webpack.config.js, new rules like so:

```javascript

//helper for path
const path = require('path');

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    }
};

module.exports = config;
```

3. Run 'npm run build', in this case the CSS will be inserted inside the HEAD tags.

## ExtractTextWebpack Plugin

This plugin get the css loaded with "css-loader" and save it into the specified file inside "build" directory, like style.css.

1. Install the plugin, like so:

```shell 
npm install --save-dev extract-text-webpack-plugin@2.0.0-beta.4
```

2. Modify our rules:

```javascript
//Helper for absolute path
const path = require('path');

//ExtractTextPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;
```

3. Run 'npm run build' and include into your indx.html link to 'build/style.css'