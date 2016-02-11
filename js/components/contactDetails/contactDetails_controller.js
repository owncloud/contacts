app.controller('contactdetailsCtrl', ['ContactService', '$state', function(ContactService, $state) {
	var ctrl = this;

	ctrl.close = function() {
		$state.go('home');
	};

	ctrl.updateContact = function() {
		ContactService.update(ctrl.contact);
		console.log('updating Contact');
	};

	ctrl.deleteContact = function() {
		ContactService.delete(ctrl.contact).then(function() {
			ctrl.close();
		});
		console.log('Deleting Contact');
	};
}]);
