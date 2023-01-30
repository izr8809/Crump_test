const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/",
  output: {
	path: path.resolve(__dirname, "build"),
	filename: "bundle.js",
  clean : true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve('./public/index.html')],
        use: {
            loader: 'file-loader',
            query: {
                name: '[name].[ext]'
            },
        },
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
	new HtmlWebPackPlugin({
	  template: './src/index.html'
	})
  ]
};