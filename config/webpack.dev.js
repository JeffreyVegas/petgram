const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "../dist",
    hot: true,
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /.(css)$/,
      },
    ],
  },
};

module.exports = merge(common, devConfig);
