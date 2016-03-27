angular.module('contactsApp')
.filter('contactColor', function() {
	return function(input) {
		function rgbToHsl(r, g, b) {
			r /= 255, g /= 255, b /= 255;
			var max = Math.max(r, g, b), min = Math.min(r, g, b);
			var h, s, l = (max + min) / 2;
			if(max === min) {
				h = s = 0; // achromatic
			} else {
				var d = max - min;
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
				switch(max) {
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
				}
				h /= 6;
			}
			return [h, s, l];
		}
		var hash = input.toLowerCase().replace(/[^0-9a-f]+/g, '');
		var result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var rgb = [0, 0, 0];
		var sat = 80;
		var lum = 68;
		var modulo = 16;
		for(var i in hash) {
			result[i%modulo] = result[i%modulo] + parseInt(hash.charAt(i), 16).toString();
		}
		for(var count=0;count<modulo;count++) {
			rgb[count%3] += parseInt(result[count]);
		}
		var hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
		var bright = Math.sqrt( 0.299 * Math.pow(rgb[0], 2) + 0.587 * Math.pow(rgb[1], 2) + 0.114 * Math.pow(rgb[2], 2) );
		if (bright >= 200) {
			sat = 60;
		}
		var hue = parseInt(hsl[0]*360);
		return 'hsl('+hue+', '+sat+'%, '+lum+'%)';
	};
});
