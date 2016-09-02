angular.module('contactsApp')
.service('DavClientService', function() {
	'use strict';

	var client = new dav.Client({
		baseUrl: OC.linkToRemote('dav/addressbooks'),
		xmlNamespaces: {
			'DAV:': 'd',
			'urn:ietf:params:xml:ns:carddav': 'card',
			'http://owncloud.org/ns': 'oc',
			'http://calendarserver.org/ns/': 'cs'
		}
	});

	angular.extend(client, {
		NS_DAV: 'DAV:',
		NS_IETF: 'urn:ietf:params:xml:ns:carddav',
		NS_OWNCLOUD: 'http://owncloud.org/ns',
		NS_CALENDARSERVER: 'http://calendarserver.org/ns/',

		buildUrl: function(path) {
			return window.location.protocol + '//' + window.location.host + path;
		},
		wasRequestSuccessful: function(status) {
			return (status >= 200 && status <= 299);
		}
	});

	return client;
});
