const constants = require("./directoryConstants");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = fs
  .readdirSync(constants.SRC_DIR)
  .filter((filename) => filename.endsWith("html"))
  .map((html) => {
    const htmlName = html.split(".")[0];
    return new HtmlWebpackPlugin({
      filename: html,
      template: `./src/${html}`,
      title: "음악 퀴즈",
      chunks: [htmlName],
    });
  });
