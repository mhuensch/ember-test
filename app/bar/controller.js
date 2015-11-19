import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		delete: function() {
			var self = this;

			$.ajax({
				url: "/api/v1/bars/" + this.model.id,
				type: "DELETE",
			}).then(function() {
				self.transitionToRoute('bars');
			});
		}
		,save: function() {
			var self = this;

			this.get('model').id = 10;
			$.ajax({
				url: "/api/v1/bars",
				type: "POST",
				contentType: "application/json",
				data: JSON.stringify(self.get('model'))
			}).then(function() {
				self.transitionToRoute('bars');
			});
		}
		,save2: function() {
			var self = this;

			Ember.set(this.get('model'), 'name', 'batman');
			$.ajax({
				url: "/api/v1/bars/" + self.model.id,
				type: "POST",
				contentType: "application/json",
				data: JSON.stringify(self.get('model'))
			}).then(function() {
				self.transitionToRoute('bars');
			});
		}
	}
});
