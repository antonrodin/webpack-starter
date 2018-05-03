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
            }
        ]
    }
};

module.exports = config;
```

3. Create file .babelrc with this piece of code:

```javascript
{
    "presets": ["babel-preset-env"]
}
```