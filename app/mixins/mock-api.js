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
		var result = this.data;

		if (id) {
			result = result[this._atIndex({id: id})];
		}

		return new Ember.RSVP.Promise(function(resolve) {
			resolve(result);
		});
	}

	,post:function(model) {
		if (model.hasOwnProperty('id')) {
			this._update(model);
		} else {
			this._create(model);
		}

		return new Ember.RSVP.Promise(function(resolve) {
			resolve();
		});
	}

	,delete: function(model) {
		this.data.splice(this._atIndex(model), 1);

		return new Ember.RSVP.Promise(function(resolve) {
			resolve();
		});
	}

	,_create: function(model) {
		var newModel = JSON.parse(JSON.stringify(model));
		newModel.id = this.data.length + 1;
		this.data[this.data.length] = newModel;
	}

	,_update: function(model) {
		this.data[this._atIndex(model)] = model;
	}

	,_atIndex: function(model) {
		return this.data
			.map(function(item) { return item.id; })
			.indexOf(model.id);
	}

});
