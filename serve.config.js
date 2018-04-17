const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
	content: [__dirname],
	add: (app, middleware, options) => {
		const historyOptions = {};

		app.use(convert(history(historyOptions)));
	},
	hot: {
		port: 8085
	}
};
