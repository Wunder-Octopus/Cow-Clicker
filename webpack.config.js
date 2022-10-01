const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const environment = process.env.NODE_ENV;

module.exports = {
	mode: environment,
	entry: {
		src: './client/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
			{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: 'index.html'
		}),
	],
	devServer: {
		static: {
			publicPath: '/build',
			directory: path.resolve(__dirname, 'build')
		},
		port: 8080,
		proxy: {
			'/api': 'http://localhost:3000/',
		}
	}
}