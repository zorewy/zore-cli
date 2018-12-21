'use strict';
if (typeof Promise === 'undefined') {
	require('promise/lib/rejection-tracking').enable();
	window.Promise = require('promise/lib/es6-extensions.js');
}
if (!String.prototype.startsWith) {
	String.prototype.startsWith = function (search, pos) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}
require('whatwg-fetch');
Object.assign = require('object-assign');
