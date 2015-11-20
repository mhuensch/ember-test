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
	var index = router.data
		.map(function(item) { return item.id; })
		.indexOf(parseInt(req.body.id));
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
