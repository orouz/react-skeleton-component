"use strict"
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlConfig = {
  title: "some page title",
  template: path.resolve(__dirname, "./src/index.html")
}
module.exports = {
  context: path.resolve(__dirname, "./src"),

  entry: {
    app: path.resolve(__dirname, "./src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["es2015"] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      // {
      //   test: /\.(sass|scss)$/,
      //   use: [
      //     "style-loader",
      //     { loader: "css-loader", options: { modules: true } },
      //     "sass-loader"
      //   ]
      // },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            query: {
              // configFile: "tslint.json",
              configFile: "tsconfig.json"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
      minChunks: 2
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   include: /\.min\.js$/,
    //   minimize: true
    // }),
    new HtmlWebpackPlugin(htmlConfig)
  ],
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css", ".svg", ".png"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: false,
      warnings: false,
      publicPath: true
    }
  }
}
