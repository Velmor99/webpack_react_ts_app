const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => ({
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      inject: "body",
    }),
  ],
  devServer: {
    port: env.port,
    historyApiFallback: true,
    compress: true,
  },
});
