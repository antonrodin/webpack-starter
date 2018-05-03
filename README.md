# Babel branch Starter Source

Converts the ES2015 code into old shitty ES5 javascript, that runs in the old browsers like iExplorer 8 and others.

1. Install babel-loader, like so or google it:

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