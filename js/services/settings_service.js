angular.module('contactsApp')
.service('SettingsService', function() {
	var subscriptions = [];
	var settings = {
		addressBooks: [
			'testAddr'
		],
		phoneticEnable: false,
		reverseNameOrder: false,
	};

	Object.assign(settings, JSON.parse(window.localStorage.getItem('contacts_settings')));

	function notifyObservers () {
		angular.forEach(subscriptions, function (subscription) {
			if (typeof subscription === 'function') {
				subscription();
			}
		});
	}

	this.set = function(key, value) {
		settings[key] = value;
		window.localStorage.setItem('contacts_settings', JSON.stringify(settings));
		notifyObservers();
	};

	this.get = function(key) {
		return settings[key];
	};

	this.getAll = function() {
		return settings;
	};

	this.subscribe = function (callback) {
		subscriptions.push (callback);
	};
});
