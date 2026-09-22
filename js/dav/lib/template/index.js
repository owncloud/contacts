// Every module below is ESM with a single `export default`, so this barrel has to
// re-export the default binding explicitly. It used to be CommonJS
// (`exports.propfind = require('./propfind')`), which worked only because babel 5
// collapsed a lone default export onto `module.exports`. Modern bundlers do not:
// `require()` of an ESM module yields the namespace object, so `template.propfind`
// became `{ default: fn }` and every `template.X(...)` call in lib/request.js threw
// "template.X is not a function" at runtime.
export { default as addressBookQuery } from './address_book_query';
export { default as calendarQuery } from './calendar_query';
export { default as propfind } from './propfind';
export { default as syncCollection } from './sync_collection';
export { default as mkcol } from './mkcol';
export { default as proppatch } from './proppatch';
