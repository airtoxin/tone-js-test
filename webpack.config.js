const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.jsx$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
