const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devtool: 'eval-cheap-module-source-map',

  entry: "./src/index.js",
  
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: true
    }),
  ],
  
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/env']
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      }, 
    ],
  },
};