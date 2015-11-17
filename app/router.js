import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('cheese');
  this.route('mine');
  this.route('foo');
  this.resource('bars');
  this.resource('bar', { path: '/bars/:id' });
  this.route('foobar');
  this.route('blah');
});

export default Router;
