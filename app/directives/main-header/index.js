'use strict'

import './main-header.less'
import rawTemplate from './main-header.html'

export default (ngModule) => {
  ngModule.directive('mainHeader', () => {
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
