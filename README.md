# Babel branch Starter Source
## Converts the ES6 o ES2015 code into old shitty ES5 Javascript,
## that runs in the old browsers like iExplorer 8 and more...

Got into master, to set up starter webpack, and then go into babel branch.

1. Install babel-loader, like so or google it:

```shell
npm install --save-dev babel-loader babel-core babel-preset-env webpack
```

1. Add into the file webpack.config.js, new module, like so:

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

1. Create file .babelrc with this piece of code:

```javascript
{
    "presets": ["babel-preset-env"]
}
```