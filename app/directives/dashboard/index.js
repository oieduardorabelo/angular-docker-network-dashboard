'use strict'

import './dashboard.less'
import rawTemplate from './dashboard.html'

export default (ngModule) => {
  ngModule.directive('dashboard', () => {
    return {
      restrict: 'E',
      scope: {},
      template: rawTemplate,
      controllerAs: 'vm',
      controller: function() {
        // code
      }
    }
  })
}
