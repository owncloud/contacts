describe('dav bundle', function() {

	// js/dav/dav.js is a generated artifact, and a rebuild can silently change how the
	// mixed ESM/CommonJS sources under js/dav/lib are wired together. That is not
	// hypothetical: the request templates were once re-exported through a CommonJS
	// barrel, which a modern bundler resolves to `{ default: fn }` rather than to the
	// function, so every request builder threw "is not a function" and the app rendered
	// an empty address book list. Nothing else in this suite touches the bundle.

	it('should expose the dav library', function() {
		expect(window.dav).to.be.an('object');
	});

	// Each of these calls into a request template. If a template resolves to a module
	// namespace instead of a function, building the request throws.
	it('should build a propfind request', function() {
		expect(function() {
			dav.request.propfind({
				props: [{ name: 'displayname', namespace: dav.ns.DAV }]
			});
		}).to.not.throw();
	});

	it('should build an addressBookQuery request', function() {
		expect(function() {
			dav.request.addressBookQuery({
				props: [{ name: 'getetag', namespace: dav.ns.DAV }]
			});
		}).to.not.throw();
	});

	it('should build a syncCollection request', function() {
		expect(function() {
			dav.request.syncCollection({
				syncLevel: 1,
				syncToken: '',
				props: [{ name: 'getetag', namespace: dav.ns.DAV }]
			});
		}).to.not.throw();
	});

	it('should render a propfind body containing the requested prop', function() {
		var request = dav.request.propfind({
			props: [{ name: 'displayname', namespace: dav.ns.DAV }]
		});
		// The template is what produces this XML; a namespace object would never get here.
		expect(request.requestData).to.contain('displayname');
		expect(request.requestData).to.contain('propfind');
	});
});
