JS := $(shell find lib/ -name "*.js")
SHIMS := $(shell find shims/ -name "*.js")

SABRE_DAV_VERSION=2.0.1
SABRE_DAV_RELEASE=sabredav-$(SABRE_DAV_VERSION)
SABRE_DAV_ZIPBALL=$(SABRE_DAV_RELEASE).zip

# dav.js is the only artifact this repository consumes, so it is the default goal.
.DEFAULT_GOAL := dav.js

dav.zip: dav.js dav.min.js dav.min.js.map
	zip dav dav.js dav.min.js.map dav.min.js

# Minified with esbuild rather than uglify-js 2.x: that parser is ES5-only and cannot
# read the bundle (it stops at the arrow function on line 1). Nothing in this
# repository loads dav.min.js - the app loads dav.js - so these targets exist only for
# consumers of the vendored package. esbuild names the external map after the outfile,
# hence dav.min.js.map rather than the old dav.js.map.
dav.min.js dav.min.js.map: dav.js node_modules
	./node_modules/.bin/esbuild dav.js \
		--minify \
		--sourcemap=external \
		--outfile=dav.min.js

# dav.js is the browser bundle the app actually loads: the Makefile in the app root
# copies js/dav/dav.js into the appstore package and templates/main.php includes it.
#
# The recipe below is esbuild because the committed bundle is already esbuild output:
# 0d133ae (#775) switched bundlers when it migrated xmldom to @xmldom/xmldom, but left
# this Makefile describing the babel 5 + browserify pipeline it had replaced. That gap
# is what let the bundle drift from its sources undetected. esbuild handles the mixed
# ESM/CommonJS sources and the async generators natively, so neither the separate
# transpile step nor the lib/polyfill/*.js concatenation the old pipeline needed
# applies any more - note that those polyfills are now dead, though still listed in
# $(JS).
#
# Reproducibility depends on all of these:
#   * package-lock.json - committed, and un-ignored by name in the app's .gitignore.
#   * exact versions in package.json - runtime deps are compiled into dav.js, and
#     esbuild's own output differs between releases. `url` in particular must stay at
#     0.11.0: it is imported by lib/accounts.js, lib/calendars.js, lib/client.js and
#     lib/contacts.js, and 0.11.1+ swap `querystring` for `qs`, pulling in ~45 further
#     modules.
#   * shims/xmlhttprequest.js - see the comment in that file.
#
# Use `npm ci`, not `npm install`, to build from the lockfile.
dav.js: $(JS) $(SHIMS) node_modules
	./node_modules/.bin/esbuild lib/index.js \
		--bundle \
		--format=iife \
		--global-name=dav \
		--alias:xmlhttprequest=./shims/xmlhttprequest.js \
		--outfile=$@

node_modules: package.json
	npm install

.PHONY: clean
clean:
	rm -rf *.zip SabreDAV build coverage dav.* node_modules test/integration/server/SabreDAV

.PHONY: test
test: test-unit test-integration

.PHONY: test-unit
test-unit: node_modules
	./node_modules/.bin/mocha test/unit

.PHONY: test-integration
test-integration: node_modules test/integration/server/SabreDAV
	./node_modules/.bin/mocha test/integration

.PHONY: toc
toc: node_modules
	./node_modules/.bin/doctoc CONTRIBUTING.md
	./node_modules/.bin/doctoc HISTORY.md
	./node_modules/.bin/doctoc README.md

test/integration/server/SabreDAV: SabreDAV
	cp -r SabreDAV test/integration/server/SabreDAV
	cd test/integration/server/SabreDAV && cp ../calendarserver.php calendarserver.php

SabreDAV:
	wget -O $(SABRE_DAV_ZIPBALL) https://github.com/fruux/sabre-dav/releases/download/$(SABRE_DAV_VERSION)/$(SABRE_DAV_ZIPBALL)
	unzip -q $(SABRE_DAV_ZIPBALL)
