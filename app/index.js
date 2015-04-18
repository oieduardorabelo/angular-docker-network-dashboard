const angular = require('angular')
const ngModule = angular.module('NetworkDashboardApp', [])

require('./vendors')()
require('./directives')(ngModule)
