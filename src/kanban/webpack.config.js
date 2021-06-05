const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main_bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9005,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								auto: /\.module\.\w+$/i,
								exportLocalsConvention: 'camelCase',
								localIdentName: '[name]__[local]--[hash:base64:5]',
							},
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/template.html'), // шаблон
			//filename: 'index.html', // название выходного файла
		}),
	],
};
