angular.module('contactsApp')
.factory('AddressBook', function()
{
	return function AddressBook(url, props) {
		angular.extend(this, props);
		angular.extend(this, {'url': url});
	};
});
