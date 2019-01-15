const path = require('path');
const SPSaveWebpackPlugin = require('spsave-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    list:'./scripts/controllers/listcontroller.ts',
    item:'./scripts/controllers/itemcontroller.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  target: "node",
  externals: {
    pnpjs:'@pnp/pnpjs' // mark pnp as external to be loaded from cdn
  },
  output: {
    publicPath:'https://ecm.dev.opcw.org/sites/osdtemplate/Style Library/AdminApp',
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'list.html',
      chunks:['list'],
      template: './views/list.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'item.html',
      chunks:['item'],
      template: './views/item.html'
    }),
    new SPSaveWebpackPlugin({
    "coreOptions": {
        "checkin": true,
        "checkinType": 1,
        "siteUrl": "https://ecm.dev.opcw.org/sites/osdtemplate"
    },
    "credentialOptions": null,
    "fileOptions": {
        "folder": "Style Library/AdminApp"
    }
})]
};