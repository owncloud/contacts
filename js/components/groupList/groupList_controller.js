angular.module('contactsApp')
.controller('grouplistCtrl', function($scope, ContactService, SearchService, $routeParams) {
	var ctrl = this;

	ctrl.loading = true;

	// Init the group list with empty data and wait for the groups update
	var initialGroups = [t('contacts', 'All contacts'), t('contacts', 'Not grouped')];

	ctrl.groups = _.object(initialGroups, ['', '']);

	ContactService.getGroupsWithCount().then(function(groups) {
		ctrl.groups = groups;
		ctrl.loading = false;
	});

	// Update groupList on contact add/delete/update
	ContactService.registerObserverCallback(function() {
		$scope.$apply(function() {
			ContactService.getGroupsWithCount().then(function(groups) {
				ctrl.groups = groups;
			});
		});
	});

	ctrl.getSelected = function() {
		return $routeParams.gid;
	};

	ctrl.setSelected = function (selectedGroup) {
		SearchService.cleanSearch();
		$routeParams.gid = selectedGroup;
	};
});
