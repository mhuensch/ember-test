import Ember from 'ember';
import Api from '../api';

var api = Api.create({url: 'bars'});

export default Ember.Controller.extend({
	actions: {
		delete: function(bar) {
			var self = this;
			api.delete(bar)
				.then(function() {
					self.transitionToRoute('bars');
				});
		}

		,save: function(bar) {
			var self = this;
			api.post(bar)
				.then(function() {
					self.transitionToRoute('bars');
				});
		}
	}
});
