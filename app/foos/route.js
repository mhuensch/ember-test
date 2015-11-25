import Ember from 'ember';
import Api from '../api';

var api = Api.create({url: 'foos'});

export default Ember.Route.extend({
	model: function() {
		return api.get();
	}
});
