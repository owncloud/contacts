angular.module('contactsApp')
.controller('optionsCtrl', function(SettingsService) {
	var ctrl = this;

	ctrl.t = {
		phoneticText: t('contacts', 'Enable phonetic'),
		reverseNameOrderText: t('contacts', 'Reverse name order'),
	};

	ctrl.phoneticEnable = SettingsService.get('phoneticEnable');
	ctrl.reverseNameOrder = SettingsService.get('reverseNameOrder');

	ctrl.updateOptions = function() {
		SettingsService.set('phoneticEnable', ctrl.phoneticEnable);
		SettingsService.set('reverseNameOrder', ctrl.reverseNameOrder);
	};
});
