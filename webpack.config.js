const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module:{
    rules:[
        {
            test:/\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test:/\.s(a|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]  
  }
};