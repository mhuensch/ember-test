import Ember from 'ember';
import config from '../config/environment';


export default Ember.Route.extend({
	model: function() {
		return $.ajax({
			url: config.apiURL + "bars",
		});
	}
});
