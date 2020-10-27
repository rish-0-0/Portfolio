const path = require("path");
const fs = require("fs");
const MCEP = require("mini-css-extract-plugin");
const { exec } = require("child_process");

/**
 *
 * @param {String} dir Directory Path
 * @param {String[]} array Array of Paths
 * @returns {String[]} array of path resolved strings
 */
const getAllFilesInDirectory = (dir, array) => {
  const files = fs.readdirSync(dir);
  array = array || [];

  files.forEach((file) => {
    if (fs.statSync(dir + "/" + file).isDirectory()) {
      array = getAllFilesInDirectory(dir + "/" + file, array);
    } else {
      array.push(path.join(__dirname, dir, "/", file));
    }
  });
  return array.map((it) => path.resolve(__dirname, it));
};

module.exports = {
  mode: process.env.NODE_ENV != undefined ? "production" : "development",
  entry: {
    "bundle.js": getAllFilesInDirectory("src/js"),
    style: getAllFilesInDirectory("src/css"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MCEP.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new MCEP({ filename: "[name].css" }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
          exec("rm dist/style", (err, stdout, stderr) => {
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
          });
        });
      },
    },
  ],
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "dist"),
  },
};
