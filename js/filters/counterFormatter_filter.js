angular.module('contactsApp')
.filter('counterFormatter', function () {
	'use strict';
	return function (count) {
		if (count > 999) {
			return '999+';
		}
		return count;
	};
});
