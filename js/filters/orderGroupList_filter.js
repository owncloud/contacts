angular.module('contactsApp')
.filter('orderGroupList', function () {
	'use strict';
	return function (groups) {

		// Init the order
		var groupOrder = [t('contacts', 'All contacts'), t('contacts', 'Not grouped')];
		var finalGroups = new Array();

		// Converting groups object to Array and sort it
		var groupArray = _.pairs(groups).sort();

		// Replacing data or adding new one at the end (preserve the initial orger)
		groupArray.forEach(function(group) {
			var position = groupOrder.indexOf(group[0]);
			var data = [group[0], group[1]];
			// If in groupOrder, then insert at same pos
			if(position !== -1) {
				finalGroups.splice(position, 0, data);
			} else {
				// Add it at the end (we already sorted)
				finalGroups.push(data);
			}
		});
		return _.object(finalGroups);
	};
});
