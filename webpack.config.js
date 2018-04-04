const path = require('path');
const mini_css_extract_plugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    chunkFilename: 'bundle.[name].js',
    publicPath: 'build/',    // Specify public asset path
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          mini_css_extract_plugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          'file-loader',
          'image-webpack-loader',
        ],
      }
    ],
  },

  devtool: 'source-map',

  plugins: [
    new mini_css_extract_plugin({
      filename: 'style.css',
    }),
  ],
};

module.exports = config;
