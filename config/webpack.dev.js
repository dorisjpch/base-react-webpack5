const paths = require("./paths");

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",

  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    // historyApiFallback: true, redire
    historyApiFallback: { index: '/' },
    contentBase: paths.public,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
    inline: true,
    host: '0.0.0.0',
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
