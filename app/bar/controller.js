import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		delete: function() {
			var self = this;
			$.delete("/api/v1/bars/" + this.model.id)
				.then(function() {
					self.transitionToRoute('bars');
				});
		}
		,save: function() {
			var self = this;

			this.get('model').id = 10;
			$.post('/api/v1/bars', self.get('model'))
				.then(function() {
					self.transitionToRoute('bars');
				});
		}
		,save2: function() {
			var self = this;

			Ember.set(this.get('model'), 'name', 'batman');
			$.post("/api/v1/bars/" + self.model.id, self.get('model'))
				.then(function() {
					self.transitionToRoute('bars');
				});
		}
	}
});
