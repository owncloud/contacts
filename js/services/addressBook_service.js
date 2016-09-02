angular.module('contactsApp')
.service('AddressBookService', function(DavClientService, SettingsService, AddressBook, $q) {
	'use strict';

	var self = this;

	this._CONTACTS_HOME = null;
	this._currentUserPrincipal = null;

	this._PROPERTIES = [
		'{' + DavClientService.NS_DAV + '}displayname',
		'{' + DavClientService.NS_DAV + '}owner',
		'{' + DavClientService.NS_CALENDARSERVER + '}getctag',
		'{' + DavClientService.NS_DAV + '}resourcetype',
		'{' + DavClientService.NS_DAV + '}sync-token',
		'{' + DavClientService.NS_OWNCLOUD + '}invite'
	];

	this._xmls = new XMLSerializer();

	function discoverHome(callback) {
		return DavClientService.propFind(DavClientService.buildUrl(OC.linkToRemoteBase('dav')), ['{' + DavClientService.NS_DAV + '}current-user-principal'], 0, {'requesttoken': OC.requestToken}).then(function(response) {
			if (!DavClientService.wasRequestSuccessful(response.status)) {
				throw 'CardDAV client could not be initialized - Querying current-user-principal failed';
			}

			if (response.body.propStat.length < 1) {
				return;
			}

			var props = response.body.propStat[0].properties;
			self._currentUserPrincipal = props['{' + DavClientService.NS_DAV + '}current-user-principal'][0].textContent;

			return DavClientService.propFind(DavClientService.buildUrl(self._currentUserPrincipal), ['{' + DavClientService.NS_IETF + '}addressbook-home-set'], 0, {'requesttoken': OC.requestToken}).then(function (response) {
				if (!DavClientService.wasRequestSuccessful(response.status)) {
					throw 'CardDAV client could not be initialized - Querying addressbook-home-set failed';
				}

				if (response.body.propStat.length < 1) {
					return;
				}

				var props = response.body.propStat[0].properties;
				self._CONTACTS_HOME = props['{' + DavClientService.NS_IETF + '}addressbook-home-set'][0].textContent;

				return callback();
			});
		});
	}

	function getResponseCodeFromHTTPResponse(t) {
		return parseInt(t.split(' ')[1]);
	}

	this.getAll = function() {
		if (this._CONTACTS_HOME === null) {
			return discoverHome(function() {
				return self.getAll();
			});
		}

		return DavClientService.propFind(DavClientService.buildUrl(this._CONTACTS_HOME), this._PROPERTIES, 1, {'requesttoken': OC.requestToken}).then(function(response) {
			var addressbooks = [];

			if (!DavClientService.wasRequestSuccessful(response.status)) {
				throw 'CardDAV client could not be initialized - Querying addressbooks failed';
			}

			for (var i = 1; i < response.body.length; i++) {
				var body = response.body[i];
				if (body.propStat.length < 1) {
					continue;
				}

				var responseCode = getResponseCodeFromHTTPResponse(body.propStat[0].status);
				if (!DavClientService.wasRequestSuccessful(responseCode)) {
					continue;
				}

				var props = self._getSimplePropertiesFromRequest(body.propStat[0].properties);
				if (!props) {
					continue;
				}

				console.log(props);
				var addressbook = new AddressBook(body.href, props);
				addressbooks.push(addressbook);
			}

			return addressbooks;
		});
	};

	this._getSimplePropertiesFromRequest = function(props) {
		var simple = {
			displayname: props['{' + DavClientService.NS_DAV + '}displayname'],
			getctag: props['{' + DavClientService.NS_CALENDARSERVER + '}getctag'],
			synctoken: props['{' + DavClientService.NS_DAV + '}sync-token']
		};

		var owner = props['{' + DavClientService.NS_DAV + '}owner'];
		if (typeof owner !== 'undefined' && owner.length !== 0) {
			owner = owner[0].textContent.slice(0, -1);
			if (owner.indexOf('/remote.php/dav/principals/users/') !== -1) {
				simple.owner = owner.substr(33 + owner.indexOf('/remote.php/dav/principals/users/'));
			}
		}

		return simple;
	};
});
