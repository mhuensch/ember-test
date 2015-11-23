import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		delete: function(bar) {
			var self = this;
			$.delete("/api/v1/bars/" + bar.id)
				.then(function() {
					self.transitionToRoute('bars');
				});
		}
		,save: function(bar) {
			var self = this;

			bar.id = 10;
			$.post('/api/v1/bars', bar)
				.then(function() {
					self.transitionToRoute('bars');
				});
		}
		,save2: function(bar) {
			var self = this;

			Ember.set(bar, 'name', 'batman');
			$.post("/api/v1/bars/" + bar.id, bar)
				.then(function() {
					self.transitionToRoute('bars');
				});
		}
	}
});
