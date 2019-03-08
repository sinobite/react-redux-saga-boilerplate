const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: __dirname + '/www/static',
		publicPath: '/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : false,
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new UglifyJsPlugin({
			sourceMap: false,
			uglifyOptions: {
				ecma: 5,
				warnings: false,
				compress: {
					/* eslint-disable camelcase */
					drop_console: false,
					drop_debugger: false,
					dead_code: true
					/* eslint-enaable camelcase */
				}
			}
		}),
	],
	devServer: {
		contentBase: './www/static',
		hot: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
}