import config from './config/environment';

var Api = {};

Api.get = function(url) {
	return $.get(config.apiURL + url);
};

Api.post = function(url, model) {
	return $.ajax({
		url: config.apiURL + url,
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify(model)
	});
};

Api.delete = function(url, model){
	return $.ajax({
		url: config.apiURL + url,
		type: 'DELETE',
		data: JSON.stringify(model),
		contentType: "application/json"
	});
};




if (config.environment === 'development' || config.environment === 'test') {
	Api._mocks = [];
	for(var module in window.require.entries) {
		if (module.length <= 9) { continue; }
		if (module.indexOf('/mock-api') !== module.length - 9) { continue; }
		if (module === 'ember-test/mixins/mock-api') { continue; }

		var urlParts = module.split('/');
		var url = urlParts[urlParts.length-2];
		Api._mocks[url] = window.require(module).default.create();
	}

	Api.get = function(url) {
		return Api._mocks[url.split('/')[0]].get(url);
	};

	Api.post = function(url, model) {
		return Api._mocks[url.split('/')[0]].post(url, model);
	};

	Api.delete = function(url, model){
		return Api._mocks[url.split('/')[0]].delete(url, model);
	};
}


export default Api;
