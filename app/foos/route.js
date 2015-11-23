import Ember from 'ember';
import api from '../api';

export default Ember.Route.extend({
	model: function() {
		return api.get("foos");
	}
});
