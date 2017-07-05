/**
 * ownCloud - contacts
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Hendrik Leppelsack <hendrik@leppelsack.de>
 * @copyright Hendrik Leppelsack 2015
 */

angular.module('contactsApp', ['uuid4', 'angular-cache', 'ngRoute', 'ui.bootstrap', 'ui.select', 'ngSanitize', 'ngclipboard'])
.config(function($routeProvider) {

	$routeProvider.when('/:gid', {
		template: '<contactdetails></contactdetails>'
	});

	$routeProvider.when('/:gid/:uid', {
		template: '<contactdetails></contactdetails>'
	});

	$routeProvider.otherwise('/' + t('contacts', 'All contacts'));

});

angular.module('contactsApp')
.directive('onToggleShow', ['$document', function($document) {
	'use strict';

	return {
		restrict: 'A',
		scope: {
			'onToggleShow': '@'
		},
		link: function link(scope, elem) {
			elem.click(function () {
				var target = $(scope.onToggleShow);
				target.toggle();
			});

			$document.click(function (event) {
				var target = $(scope.onToggleShow);

				if (event.target !== elem[0]) {
					target.hide();
				}
			});
		}
	};
}]);
