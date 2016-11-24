import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './vendors';
import routes from './angular.routes';
import directives from './directives';

const ngModule = angular.module('NetworkDashboardApp', [uiRouter]);

routes(ngModule);
directives(ngModule);
