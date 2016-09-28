$(document).ready(function() {
	if (OCA.Files && OCA.Files.fileActions) {
		OCA.Files.fileActions.registerAction({
			name: 'contacts import',
			displayName: t('contacts', 'Import'),
			mime: 'text/vcard',
			permissions: OC.PERMISSION_READ,
			icon: function () {return OC.imagePath('core', 'places/contacts-dark');},
			actionHandler: null
		});
	}
});
