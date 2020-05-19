var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ManifestPlugin = require('webpack-manifest-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  mode: 'development', // [production -> later]
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      template: 'public/index.html'
    }),
    new ManifestPlugin('./public/manifest.json'),
    new FaviconsWebpackPlugin('./public/favicon.ico')
  ],
  resolve: {
    alias: {
      utils: path.resolve(__dirname, './src/utils'),
      config: path.resolve(__dirname, './src/config'),
      constants: path.resolve(__dirname, '.src/constants')
    }
  }
}
