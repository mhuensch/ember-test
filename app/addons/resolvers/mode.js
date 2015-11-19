import Resolver from 'ember/resolver';

export default Resolver.extend({
	resolveTemplate: function (parsedName) {
		// var root = parsedName.root,
		// 	resolverMode = root.get('resolverMode'),
		// 	resolved;
		// if (resolverMode) {
		// 	resolved = this._resolveTemplate(parsedName, resolverMode.delimiter + resolverMode.id);
		// 	if (!resolved) {
		// 		if (resolverMode.fallbackId) {
		// 			resolved = this._resolveTemplate(parsedName,resolverMode.delimiter + resolverMode.fallbackId);
		// 		}
		// 	}
		// }
		var resolved;
		if (!resolved){
			resolved = this._super(parsedName);
		}
		if (resolved) {
			console.log('parsedName', parsedName);
		}
		return resolved;
	},

	resolveOther : function (parsedName) {
		// var root = parsedName.root,
		// 	resolverMode = root.get('resolverMode'),
		// 	resolved;
		// if (resolverMode) {
		// 	resolved = this._resolveOther(parsedName,resolverMode.delimiter + resolverMode.id);
		// 	if (!resolved) {
		// 		if (resolverMode.fallbackId) {
		// 			resolved = this._resolveOther(parsedName,resolverMode.delimiter + resolverMode.fallbackId);
		// 		}
		// 	}
		// }
		//console.log('other', parsedName);
		var resolved;
		if (!resolved){
			resolved = this._super(parsedName);
		}
		return resolved;
	},
	// _resolveTemplate: function (parsedName,modePostfix) {
	// 		var parsedNameClone = assign({}, parsedName);
	// 		parsedNameClone.name = parsedName.name + modePostfix;
	// 		parsedNameClone.fullName = parsedName.fullName + modePostfix;
	// 		parsedNameClone.fullNameWithoutType = parsedName.fullNameWithoutType + modePostfix;
	// 		return  this._super(parsedNameClone);
	// },
	// _resolveOther: function(parsedName,modePostfix) {
	// 		var parsedNameClone = assign({}, parsedName);
	// 		if (parsedNameClone.name === 'main'){
	// 			parsedNameClone.type =  parsedName.type + modePostfix;
	// 		} else {
	// 			parsedNameClone.name = parsedName.name + modePostfix;
	// 			parsedNameClone.fullName = parsedName.fullName + modePostfix;
	// 			parsedNameClone.fullNameWithoutType = parsedName.fullNameWithoutType + modePostfix;
	// 		}
	// 		return this._super(parsedNameClone);
	// }
});
