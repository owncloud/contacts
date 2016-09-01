angular.module('contactsApp')
.service('ContactService', function(DavClientService, AddressBookService, Contact, $q, CacheFactory, uuid4) {
	'use strict';

	var self = this;

	this._xmls = new XMLSerializer();

	this.getAll = function(addressbook) {
		var xmlDoc = document.implementation.createDocument('', '', null);

		var cAbQ = xmlDoc.createElement('c:addressbook-query');
		cAbQ.setAttribute('xmlns:d', 'DAV:');
		cAbQ.setAttribute('xmlns:c', 'urn:ietf:params:xml:ns:carddav');
		xmlDoc.appendChild(cAbQ);

		var dProp = xmlDoc.createElement('d:prop');
		cAbQ.appendChild(dProp);

		var dGetEtag = xmlDoc.createElement('d:getetag');
		dProp.appendChild(dGetEtag);

		var cAddressData = xmlDoc.createElement('c:address-data');
		dProp.appendChild(cAddressData);

		var url = addressbook.url;
		var headers = {
			'Content-Type': 'application/xml; charset=utf-8',
			'Depth': 1,
			'requesttoken': OC.requestToken
		};
		var body = this._xmls.serializeToString(cAbQ);

		return DavClientService.request('REPORT', url, headers, body).then(function(response) {
			if (!DavClientService.wasRequestSuccessful(response.status)) {
				//TODO - something went wrong
				return;
			}

			var contacts = [];

			for (var i in response.body) {
				var object = response.body[i];
				console.log(object);
			}
		});
	};
});
