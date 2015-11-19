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



var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send(router.data);
});

router.get('/:id', function(req, res) {
	var result = router.data.filter(function(bar) {
		return bar.id === parseInt(req.params.id);
	});
	res.send(result[0]);
});

router.post('/', function(req, res) {
	router.data.push(req.body);
	res.status(201).end();
});

router.post('/:id', function(req, res) {
	var index = router.data.findIndex(function(bar){
		return bar.id === parseInt(req.body.id);
	})
	router.data[index] = req.body;
	res.status(201).end();
});

router.delete('/:id', function(req, res) {
	router.data = router.data.filter(function(bar) {
		return bar.id !== parseInt(req.params.id);
	});
	res.status(204).end();
});


module.exports = router;
