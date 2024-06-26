const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
    compress: true,
    port: 9000,
    open: true,
    }, 
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Development'
  })
],
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.scss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ]
}
};