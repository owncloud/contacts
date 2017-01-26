angular.module('contactsApp')
.controller('sortbyCtrl', function(SortByService) {
	var ctrl = this;

	var sortText = t('contacts', 'Sort by');
	ctrl.sortText = sortText;

	var sortList = {
		displayName: t('contacts', 'Display name'),
		firstName: t('contacts', 'First name'),
		lastName: t('contacts', 'Last name'),
		email: t('contacts', 'E-mail')
	};
	ctrl.sortList = sortList;

	ctrl.defaultOrder = SortByService.getSortBy();

	ctrl.updateSortBy = function() {
		SortByService.setSortBy(ctrl.defaultOrder);
	};
});
