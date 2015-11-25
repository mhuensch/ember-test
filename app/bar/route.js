import Ember from 'ember';
import Api from '../api';

var api = Api.create({url: 'bars'});

export default Ember.Route.extend({
	model: function(params) {
		return api.get(params.id);
	}

	,actions: {

		delete: function(bar) {
			var self = this;
			api.delete(bar)
				.then(function() {
					self.transitionTo('bars');
				});
		}

		,save: function(bar) {
			var self = this;
			api.post(bar)
				.then(function() {
					self.transitionTo('bars');
				});
		}
	}

});
