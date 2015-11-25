import Ember from 'ember';
import Api from '../api';

var api = Api.create({url: 'foos'});

export default Ember.Route.extend({
	model: function(params) {
		return api.get(params.id);
	}

	,actions: {

		delete: function(foo) {
			var self = this;
			api.delete(foo)
				.then(function() {
					self.transitionTo('foos');
					self.send('refresh');
				});
		}

		,save: function(foo) {
			var self = this;
			api.post(foo)
				.then(function(result) {
					self.transitionTo('foos');
					self.send('refresh');
				});
		}
	}
});
