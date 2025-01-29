// const path = require("path");

// module.exports = {
//   entry: "./script.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   mode: "development",

// };
const path = require("path");

module.exports = {
  entry: "./script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Use both loaders
      },
    ],
  },
  mode: "development",
};
