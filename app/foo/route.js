import Ember from 'ember';
import Api from '../api';

export default Ember.Route.extend({
	init: function() {
		this.api = Api.create({url: 'foos'});
	}

	,model: function(params) {
		return this.api.get(params.id);
	}

	,actions: {

		delete: function(foo) {
			var self = this;
			self.api.delete(foo)
				.then(function() {
					self.transitionTo('foos');
					self.send('refresh');
				});
		}

		,save: function(foo) {
			var self = this;
			self.api.post(foo)
				.then(function() {
					self.transitionTo('foos');
					self.send('refresh');
				});
		}
	}
});
