import Ember from 'ember';
import config from '../config/environment';


export default Ember.Route.extend({
	model: function() {
		return $.get(config.apiURL + "bars" );
	}
});
