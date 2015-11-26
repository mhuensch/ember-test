import config from './config/environment';
import mockApi from './mixins/mock-api';

var Api = Ember.Object.extend({

	url: ''

	,get: function(id) {
		if (!id) { id = ''; }
		return $.get(config.apiURL + this.url + id);
	}

	,post: function(model) {
		return $.ajax({
			url: config.apiURL + this.url,
			data: JSON.stringify(model),
			type: "POST",
			contentType: "application/json"
		});
	}

	,delete: function(model){
		return $.ajax({
			url: config.apiURL + this.url,
			data: JSON.stringify(model),
			type: 'DELETE',
			contentType: "application/json"
		});
	}

});

if (config.environment === 'development' || config.environment === 'test') {
	Api = Api.extend(mockApi);
}

export default Api;
