const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./app/main.tsx", // Entry point for TypeScript + React
  mode: "development",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" }, // Здесь вы можете оставить это, если хотите использовать SVG как инлайн
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }, // Add rule for .ts and .tsx files
      {
        test: /\.scss$/,
        use: [
          "style-loader", // CSS
          "css-loader", // CSS in CommonJS
          "sass-loader", // SCSS in CSS
        ],
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
      template: "./app/index.html", // Specify your HTML template if needed
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/Icons/*.svg", // Копируем все SVG файлы из этой папки
          to: path.resolve(__dirname, "dist/Icons"),
          noErrorOnMissing: true, // Не выдавать ошибку, если файл не найден
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
