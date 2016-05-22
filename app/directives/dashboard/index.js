'use strict'

import './dashboard.less'

export default (ngModule) => {
  ngModule.directive('dashboard', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./dashboard.html'),
      controllerAs: 'vm',
      controller: function() {
        // code
      }
    }
  })
}
