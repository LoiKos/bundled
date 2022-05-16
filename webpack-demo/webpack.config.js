const path = require("path");
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
        // Webpack plugin can be chain. 
        // Order matter style-loader run first then css-loader
        // handle style processing
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
       // handle image processing
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
       // handle font processing
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // handle csv asset 
      {
        test: /\.(csv|tsv)$/i,
        use:['csv-loader'],
      },
      // handle XML asset
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
