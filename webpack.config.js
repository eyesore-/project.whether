const path = require('path')
const ETP = require('extract-text-webpack-plugin')

module.exports = {
  entry: './client/app/app.js',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ETP.extract({
        use: 'css-loader?importLoaders=1!postcss-loader'
      })
    }]
  },
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new ETP('[name].bundle.css')
  ]
}
