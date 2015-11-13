import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('cheese');
  this.route('mine');
  this.route('foo');
  this.route('bar');
  this.route('foobar');
  this.route('blah');
});

export default Router;
