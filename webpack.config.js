const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')



const pluginsProduction = [
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
]
const pluginDevelopment = [
	new webpack.HotModuleReplacementPlugin(),
]

module.exports = {
	mode: process.env.NODE_ENV || 'production',
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
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
	plugins: process.env.NODE_ENV === 'production' ? pluginsProduction : pluginDevelopment,
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
