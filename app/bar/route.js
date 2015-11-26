import Ember from 'ember';
import Api from '../api';

export default Ember.Route.extend({
	init: function() {
		this.api = Api.create({url: 'bars'});
	}

	,model: function(params) {
		return this.api.get(params.id);
	}

	,actions: {

		delete: function(bar) {
			var self = this;
			self.api.delete(bar)
				.then(function() {
					self.transitionTo('bars');
				});
		}

		,save: function(bar) {
			var self = this;
			self.api.post(bar)
				.then(function() {
					self.transitionTo('bars');
				});
		}
	}

});
