import Ember from 'ember';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import Resolver from 'ember/resolver';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
	modulePrefix: config.modulePrefix,
	podModulePrefix: config.podModulePrefix,
	Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

$.post = function(url, model) {
	return $.ajax({
		url: url,
		type: "POST",
		contentType: "application/json",
		data: JSON.stringify(model)
	});
};

$.delete = function(url, model){
	return $.ajax({
		url: url,
		type: 'DELETE',
		data: JSON.stringify(model),
		contentType: "application/json"
	});
};

export default App;
