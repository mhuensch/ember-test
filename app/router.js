import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
        location: config.locationType
});

Router.map(function() {
  //this.route('foo');
  this.resource('foo', { path: '/foo/:id' });
  this.resource('bars');
  this.resource('bar', { path: '/bars/:id' });
});

export default Router;
