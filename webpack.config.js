const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js','.jsx', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module:{
    rules: [
      {
        test:/\.(j|t)sx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        options: {
          plugins: [
            isDeveopment && require.resolve('react-refresh/babel')
          ].filter(Boolean)
        }
      },
    ],
  }
};