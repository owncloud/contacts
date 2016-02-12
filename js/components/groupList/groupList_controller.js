app.controller('grouplistCtrl', ['$scope', 'AddressBookService', 'SettingsService', function($scope, AddressBookService, SettingsService) {

	$scope.groups = [];

	AddressBookService.getGroups().then(function(groups) {
		$scope.groups = groups;
	});

}]);
