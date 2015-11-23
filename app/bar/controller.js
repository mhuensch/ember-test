import Ember from 'ember';
import api from '../api';

export default Ember.Controller.extend({
	actions: {
		delete: function(bar) {
			var self = this;
			api.delete("bars/" + bar.id)
				.then(function() {
					self.transitionToRoute('bars');
				});
		}

		,save: function(bar) {
			var self = this;

			var newBar = JSON.parse(JSON.stringify(bar));
			newBar.id = 10;
			api.post('bars', newBar)
				.then(function() {
					self.transitionToRoute('bars');
				});
		}

		,save2: function(bar) {
			var self = this;

			Ember.set(bar, 'name', 'batman');
			api.post("bars/" + bar.id, bar)
				.then(function() {
					self.transitionToRoute('bars');
				});
		}
	}
});
