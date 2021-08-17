const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        test: /.(css)$/,
      },
    ],
  },
};

module.exports = merge(common, prodConfig);
