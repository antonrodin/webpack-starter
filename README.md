# CSS handling with Webpack

1. Install 

```shell
npm install --save-dev babel-loader babel-core babel-preset-env webpack
```

2. Add into the file webpack.config.js, new module, like so:

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