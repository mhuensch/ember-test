if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}


module.exports = function(app) {
	var express = require('express');
	var barsRouter = express.Router();
	var bars = [
		{
			id: 1
			,name: 'barbell'
		}
		,{
			id: 2
			,name: 'barmaid'
		}
	];

	barsRouter.get('/', function(req, res) {
		res.send(bars);
	});

	barsRouter.post('/', function(req, res) {
		bars.push(req.body);
		res.status(201).end();
	});

	barsRouter.post('/:id', function(req, res) {
		var index = bars.findIndex(function(bar){
			return bar.id === parseInt(req.body.id);
		})
		bars[index] = req.body;
		res.status(201).end();
	});

	barsRouter.get('/:id', function(req, res) {
		var result = bars.filter(function(bar) {
			return bar.id === parseInt(req.params.id);
		});
		res.send(result[0]);
	});

	barsRouter.delete('/:id', function(req, res) {
		bars = bars.filter(function(bar) {
			return bar.id !== parseInt(req.params.id);
		});
		res.status(204).end();
	});

	app.use('/api/bars', barsRouter);
};
