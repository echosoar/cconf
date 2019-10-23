const path = require('path');
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    publicPath: '/dist/'
  },
  entry: path.resolve(__dirname, './src/index.tsx'),
  externals : {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.less$/, use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
              namedExport: true,
              camelCase: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer'),
                require('postcss-focus-visible')({ preserve: true }),
              ]
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: [ ".ts", ".tsx", ".js", ".less"]
  }
};