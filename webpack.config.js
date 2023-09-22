const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');


module.exports = {
  entry: './assets/ts/main.ts',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, ''),
    port: 3000,
    watchFiles: ['assets/**/*'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(jpe?g|png|gif|woff2|svg|webp|ico|html)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    })
  ],
  mode: 'production'
};