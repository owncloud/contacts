angular.module('contactsApp')
.controller('optionsCtrl', function(SettingsService) {
	var ctrl = this;

	ctrl.t = {
		phoneticText: t('contacts', 'Enable phonetic'),
	};

	ctrl.phoneticEnable = SettingsService.get('phoneticEnable');

	ctrl.updateOptions = function() {
		SettingsService.set('phoneticEnable', ctrl.phoneticEnable);
	};
});
