// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };
var path = require('path');

module.exports = function(app) {
	var globSync = require('glob').sync;

	// Log proxy requests
	var morgan = require('morgan');
	app.use(morgan('dev'));


	// Set request body parsing to json
	var bodyParser = require('body-parser');
	app.use(bodyParser.json());


	// Build root api that lists all api routes
	var routers = globSync('./mocks/**/*-router.js', { cwd: __dirname });
	var root = '/api/v1/';
	app.get(root, function(req, res) {
		res.send(routers.map(function(router){
			return getRouteName(router);
		}));
	});


	// Load each mock into the api
	var apis = [];
	routers.forEach(function(router) {
		var name = getRouteName(router);
		var api = require(router);
		api.raw = require(router.replace('-router.js', '-data.js'));
		api.data = api.raw.slice();
		api.reset = function() {
			this.data = this.raw.slice();
		}
		apis.push(api);

		app.use(path.join(root, name), api);
	});


	// Define a global reset for UI development and testing
	app.get(path.join(root, 'reset'), function(req, res) {
		apis.forEach(function(api){
			api.reset();
		});
		res.status(201).end();
	})

};

function getRouteName(filePath) {
	var result = path.basename(filePath, path.extname(filePath)).replace('-router', '');
	return result;
}
