const path = require("path");
const webpack = require("webpack");
const banner = require("./src/webpack/banner");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].js?[hash]",
    path: path.resolve("./dist"),
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: banner,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(mode === "production"),
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
