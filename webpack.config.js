const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "none",
	entry: "./src/js/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		assetModuleFilename: "images/[hash][ext][query]",
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
		historyApiFallback: {
			rewrites: [
				{ from: /^\/$/, to: "/index.html" },
				{ from: /^\/home/, to: "/" },
				{ from: /^\/cv/, to: "/" },
				{ from: /^\/contact/, to: "/" },
			],
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Output Management",
			template: "./index.html",
			filename: "index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
				dependency: { not: ["url"] },
				type: "javascript/auto",
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
};
