const path = require('path');
const autoprefixer = require('autoprefixer');

const rootPath = path.resolve(__dirname, '../');

const config = {
  entry: {
    app: path.resolve(rootPath, 'client/index.jsx'),
  },

  output: {
    path: path.resolve(rootPath, 'server/public'),
    filename: 'js/[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', 'less', 'css'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },

  plugins: [
  ],
};

module.exports = config;
