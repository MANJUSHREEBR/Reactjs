module.exports = {

	entry:[
	'./source/app.jsx'],
	output:{
		path:__dirname,
		filename:"bundle.js"
	},
	module:{
		loaders:[{
			test:/\.jsx?$/,
			loader:'babel'
		}]
	}
};