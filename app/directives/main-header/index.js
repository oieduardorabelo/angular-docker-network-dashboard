'use strict'

import './main-header.less'

export default (ngModule) => {
  ngModule.directive('mainHeader', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./main-header.html'),
      controllerAs: 'vm',
      controller: function() {
        // code
      }
    }
  })
}
