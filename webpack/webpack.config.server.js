const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
 
module.exports = {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, '../server/server.ts'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: 'server', from: 'views', to: 'views' }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: '../typescript/tsconfig.server.json',
        },
      },
    ],
  },
}