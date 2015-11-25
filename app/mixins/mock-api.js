/* exported EXPORTED_LIB */

import Ember from 'ember';

export default Ember.Mixin.create({

	data: null

	,init: function() {
		if (!this.url) {return;}

		var mock = window.require('ember-test/' + this.url + '/mock-api').default.create();
		this.data = mock.data;
		if (mock.get) { this.get = mock.get; }
		if (mock.post) { this.post = mock.post; }
		if (mock.delete) { this.delete = mock.delete; }
	}

	,get: function(id) {
		var result = JSON.parse(JSON.stringify(this.data));

		if (id) {
			var index = this._atIndex(parseInt(id));
			result = result[index];
		}

		return new Ember.RSVP.Promise(function(resolve) {
			resolve(result);
		});
	}

	,post:function(model) {
		if (model.hasOwnProperty('id')) {
			model = this._update(model);
		} else {
			model = this._create(model);
		}

		return new Ember.RSVP.Promise(function(resolve) {
			resolve(model);
		});
	}

	,delete: function(model) {
		this.data.splice(this._atIndex(model.id), 1);

		return new Ember.RSVP.Promise(function(resolve) {
			resolve();
		});
	}

	,_create: function(model) {
		var newModel = JSON.parse(JSON.stringify(model));
		newModel.id = this.data.length + 1;
		this.data.push(newModel);
		return newModel;
	}

	,_update: function(model) {
		this.data[this._atIndex(model.id)] = model;
		return model;
	}

	,_atIndex: function(id) {
		return this.data
			.map(function(item) { return item.id; })
			.indexOf(id);
	}

});
