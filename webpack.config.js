const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./app/main.tsx", // Entry point for TypeScript + React
  mode: "development",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/**/*", // Копируем все файлы и папки из public
          to: path.resolve(__dirname, "dist/[path][name][ext]"), // Сохраняем структуру папок
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
