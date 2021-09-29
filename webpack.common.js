const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rootPath = path.resolve(__dirname, "src");
const jsPath = path.resolve(__dirname, "src/js");

const config = {
  //entry: ["regenerator-runtime/runtime.js", `${jsPath}/index.js`],
  entry: [`${jsPath}/index.js`],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ["/node_modules/"],
        use: "babel-loader"
      }
    ]
  },
  optimization: {
    splitChunks: {
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: "[name].vendors-[hash].js",
          minChunks: 10,
          chunks: "all"
        }
      },
      name: false
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].fragment-[hash].js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].style-[hash].css"
    }),
    new webpack.ProvidePlugin({
      React: "react"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules", rootPath, jsPath]
  }
};

module.exports = config;
