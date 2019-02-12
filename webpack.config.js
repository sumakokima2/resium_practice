"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");

module.exports = (env, args) => {
  const prod = args.mode === "production";
  return {
    context: __dirname,
    devServer: {
      hot: true,
      port: 3000,
    },
    devtool: !prod ? void 0 : "eval-source-map",
    entry: "./src/index.js",
    externals: {
      cesium: "Cesium",
    },
    mode: prod ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
      ],
    },
    output: {
      path: path.join(__dirname, "build"),
    },
    plugins: [
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/cesium"),
      }),
      new CopyWebpackPlugin([
        {
            from: "node_modules/cesium/Build/Cesium",
            to: 'cesium'
        },
      ]),
      new HtmlPlugin({
        template: "index.html",
      }),
      new HtmlIncludeAssetsPlugin({
        append: false,
        assets: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
      }),
      ...(prod ? [] : [new webpack.HotModuleReplacementPlugin()]),
    ],
  };
};