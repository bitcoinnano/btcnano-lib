// webpack.config.js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'webpack.bundle.js'       
  },
  node: {
   fs: "empty"
  }
};
