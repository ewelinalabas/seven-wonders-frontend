const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin');
const RuntimeAnalyzerPlugin = require('webpack-runtime-analyzer');
const path = require('path');
const argv = require('yargs').argv;
const dotenv = require('dotenv');
const typescriptPaths = require('./tsconfig.json').compilerOptions.paths;
require('dotenv-expand')(
  require('dotenv').config({
    path: path.resolve(__dirname, '.env')
  })
);

const config = {
  context: __dirname,
  entry: {
    index: './app/index.tsx'
  },
  devtool: 'cheap-module-source-map',
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.png'],
    alias: Object.keys(typescriptPaths).reduce(
      (aliases, module) => {
        const isRecursive = module.indexOf('/*') !== -1;
        const moduleName = module.replace('/*', '') + (isRecursive ? '' : '$');
        const pathName = path.resolve(__dirname, typescriptPaths[module][0].replace('/*', ''));

        return {
          ...aliases,
          [moduleName]: pathName
        }
      },
      {}
    )
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
      default: false,
          commons: {
          test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          limit: 8192,
          name: 'asset/[name]-[hash].[ext]'
        }
      }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[id].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tslint: true
    }),
    new HtmlPlugin({
      template: 'app/index.html',
      hash: false,
      filename: 'index.html',
      inject: 'body'
    }),
    // Provide env variables
    new EnvironmentPlugin([
      'NODE_ENV',
      'FRONTEND_API_CLIENT_URL',
      'BACKEND_API_CLIENT_URL'
    ])
  ]
};

if (argv.profile) {
  config.plugins.push(
    new RuntimeAnalyzerPlugin({
      mode: 'standalone',
      port: 0,
      open: true
    })
  );
}

module.exports = config;
