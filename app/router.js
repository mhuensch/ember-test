import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({ location: config.locationType });

Router.map(function() {
	this.resource('bars');
	this.resource('bar', { path: '/bars/:id' });
	this.resource('foos', function() {
		this.route('foo', { path: '/:id', resetNamespace: true });
		this.route('edit', { path: '/edit/:id', resetNamespace: true });
	});

});

export default Router;
