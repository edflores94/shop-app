const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

const rootPath = path.resolve(__dirname, "src");
const jsPath = path.resolve(__dirname, "src/js");
const generalStylePath = path.resolve(__dirname, "src/scss");
const buildPath = path.resolve(__dirname, "./dist");

const LOCAL_FOLDER_URL = "http://localhost:3005";

const getStyleLoaders = shouldUseCSSModules => {
  return [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: true
      }
    },
    !shouldUseCSSModules ? "css-loader" : "css-loader?module&importLoaders=1&localIdentName=[name]_[local]",
    "sass-loader"
  ];
};

const config = {
  devtool: "eval-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [generalStylePath],
        exclude: ["/node_modules/"],
        use: getStyleLoaders(false)
      },
      {
        test: /\.scss$/,
        include: [jsPath],
        exclude: ["/node_modules/"],
        use: getStyleLoaders(true)
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(false)
      }
    ]
  }
};

const plugins = [
  new HtmlWebpackPlugin({
    inject: false,
    template: path.join(rootPath, "index-dev.ejs"),
    templateParameters: {
      chunksFolderUrl: LOCAL_FOLDER_URL
    },
    path: buildPath,
    filename: "index.html"
  })
];
config.plugins = plugins;

const devServer = {
  compress: false,
  contentBase: buildPath,
  disableHostCheck: true,
  historyApiFallback: true,
  host: "127.0.0.1",
  hot: true,
  inline: true,
  port: 3005,
  stats: {
    children: false,
    maxModules: 0
  }
};

config.devServer = devServer;

module.exports = merge(common, config);
