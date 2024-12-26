const path = require("path");

module.exports = (env, argv) => {
  return {
    entry: "./main.js",
    mode: argv.mode || "development",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool:
      argv.mode === "production"
        ? "source-map"
        : "eval-cheap-module-source-map",
  };
};
