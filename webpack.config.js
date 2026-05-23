const path = require("path");

module.exports = {
  mode: "development",

  devtool: false,

  entry: {
    content: "./src/content/content.js",
    background: "./src/background/background.js",
    popup: "./src/popup/popup.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
