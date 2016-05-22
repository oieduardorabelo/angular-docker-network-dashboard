'use strict'

import angular from 'angular'
import uiRouter from 'angular-ui-router'

const ngModule = angular.module('NetworkDashboardApp', [uiRouter])

import './vendors'
import routes from './angular.routes'
import directives from './directives'

routes(ngModule)
directives(ngModule)

