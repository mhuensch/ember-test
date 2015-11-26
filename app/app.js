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

App.IndexRoute = Ember.Route.extend({
	beforeModel: function() {
		this.transitionTo('foos');
	}
});

export default App;
