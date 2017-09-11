angular.module('contactsApp')
.filter('toArray', function() {
	return function(obj) {
		if (!(obj instanceof Object)) return obj;
		return _.map(obj, function(val, key) {
			if (angular.isUndefined(val)) return val;
			return Object.defineProperty(val, '$key', {value: key});
		});
	};
});
