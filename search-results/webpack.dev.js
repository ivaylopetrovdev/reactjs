const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'source-map',
	devServer: {
		stats: {
			colors: true,
		},
		contentBase: "./build",
		historyApiFallback: true,
		inline: true,
	},
});