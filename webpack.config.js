const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp|woff2|ico|html)$/i,
        loader: 'file-loader',
        exclude: /node_modules/,
        options: {
          name: '[path][name].[ext]'
        },
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'brotliCompress',
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    })
  ],
};