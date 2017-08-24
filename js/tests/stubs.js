before(function() {
	window.t = function(a, b) { return b; };

	window.OC = {
		linkToRemoteBase: function(url) {
			return '/base' + url;
		},
		linkToRemote: function(url) {
			return '/' + url;
		}
	};

	window.oc_config = {
		version: '9.0.2.0'
	}
});
