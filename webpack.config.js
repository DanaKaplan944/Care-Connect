const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = ["./src/index.js"];

const output = {
  path: path.resolve(__dirname, "dist"),
  publicPath: "/dist/",
  filename: "bundle.js",
};

module.exports = {
  mode: "development",
  entry,
  output,
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: "/",
      directory: path.resolve(__dirname),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "index.html",
    }),
  ],
};
