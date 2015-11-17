import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return $.ajax({
					url: "/api/bars",
					data: JSON.stringify({})
			}).then(function(response) {
					return response;
			});
	}
});


//type: "POST",
