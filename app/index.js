'use strict'

const angular = require('angular')
const ngModule = angular.module('NetworkDashboardApp', [require('angular-ui-router')])

require('./vendors')()
require('./angular.routes')(ngModule)
require('./directives')(ngModule)
