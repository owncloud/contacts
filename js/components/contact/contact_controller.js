angular.module('contactsApp')
.controller('contactCtrl', function($route, $routeParams, SortByService) {
	var ctrl = this;

	ctrl.openContact = function() {
		$route.updateParams({
			gid: $routeParams.gid,
			uid: ctrl.contact.uid()});
	};

	ctrl.getName = function() {
		// If lastName equals to firstName then none of them is set
		if (ctrl.contact.lastName() === ctrl.contact.firstName()) {
			return ctrl.contact.displayName();
		}

		if (SortByService.getSortBy() === 'sortLastName') {
			return (
				ctrl.contact.lastName() + ', '
				+ ctrl.contact.firstName() + ' '
				+ ctrl.contact.additionalNames()
			).trim();
		}

		if (SortByService.getSortBy() === 'sortFirstName') {
			return (
				ctrl.contact.firstName() + ' '
				+ ctrl.contact.additionalNames() + ' '
				+ ctrl.contact.lastName()
			).trim();
		}

		return ctrl.contact.displayName();
	};
});
