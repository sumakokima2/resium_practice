"use strict";

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader-v3",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              camelCase: true,
              importLoaders: 1,
              localIdentName: "[local]_[hash:base64:5]",
              minimize: false, // minimized by OptimizeCssAssetsPlugin
              modules: true,
              sourceMap: true,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [new CopyWebpackPlugin([{ from: "src/public", ignore: [".gitkeep"] }])],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
