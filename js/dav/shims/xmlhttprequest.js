// Browser shim for the node-only `xmlhttprequest` package.
//
// lib/xmlhttprequest.js reaches for the npm package only when the platform does not
// provide XMLHttpRequest itself, using `require(false || 'xmlhttprequest')` to hide the
// dependency from the bundler. esbuild resolves it anyway, and the real package pulls in
// node builtins (url, http, https, fs) that cannot be bundled for a browser. In a browser
// or a web worker `self.XMLHttpRequest` is always there, so alias the package to this.
//
// The Makefile passes this file via --alias:xmlhttprequest=...; keep the two in step.
//
// A ternary rather than `typeof self !== 'undefined' && self.XMLHttpRequest`: that
// expression yields the boolean `false` off-browser, and the caller would then fail on
// `new false()` with an error naming neither this shim nor the missing platform API.
module.exports = {
  XMLHttpRequest: typeof self !== 'undefined' ? self.XMLHttpRequest : undefined
};
