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
	var morgan  = require('morgan');
	app.use(morgan('dev'));

	var bodyParser = require('body-parser');
	app.use(bodyParser.json());

	// Build root api that lists all mocks
	var mocks = globSync('./mocks/**/*.js', { cwd: __dirname });
	var root = '/api/';
	app.get(root, function(req, res) {
		res.send(mocks.map(function(mock){
			return getMockName(mock);
		}));
	})


	// Load each mock into the api
	mocks.forEach(function(mock) {
		app.use(path.join(root, getMockName(mock)), require(mock)());
	});



};

function getMockName(filePath) {
	var result = path.basename(filePath, path.extname(filePath));
	return result;
}
