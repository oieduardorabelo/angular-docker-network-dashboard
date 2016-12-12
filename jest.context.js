//
// angular-mocks on line 2731, try to find jasmineOrMocha
// in the window object, so, we need to load this asset here,
// because, in this moment, Jest has installed the test framework environment
//
// also, we can't use just "module", to mock the angular modules,
// we need to explicit point to "window.module", where angular-mocks
// will publish the mock object
//
require('angular');
require('angular-mocks');

//
// jQuery is required by bootstrap.v3.3.7
//
window.jQuery = require('jquery');

//
// Jest doesn't support glob in the "setupFiles" key
//
const glob = require('glob');
glob.sync('./app/**/*.js').forEach(file => require(file));
