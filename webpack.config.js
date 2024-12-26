const { watch } = require("fs");
const path = require("path");

module.exports = {
  entry: "./main.js",
  mode: "development",
  watch: true,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
