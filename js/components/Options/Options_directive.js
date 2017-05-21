angular.module('contactsApp')
.directive('options', function() {
	return {
		priority: 1,
		scope: {},
		controller: 'optionsCtrl',
		controllerAs: 'ctrl',
		bindToController: {},
		templateUrl: OC.linkTo('contacts', 'templates/Options.html')
	};
});
