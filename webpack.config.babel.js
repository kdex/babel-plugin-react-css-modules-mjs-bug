import HTMLPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
export default {
	mode: "development",
	module: {
		rules: [{
			include: path.resolve(__dirname, "src"),
			test: /\.css$/,
			use: [
				"style-loader",
				{
					loader: "css-loader",
					options: {
						importLoaders: 1,
						modules: true,
						sourceMap: true,
						localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
					}
				}
			]
		}, {
			include: path.resolve(__dirname, "src"),
			loader: "babel-loader",
			resolve: {
				mainFields: ["module", "main"]
			},
			test: /\.m?js$/,
		}]
	},
	plugins: [
		new HTMLPlugin()
	]
};