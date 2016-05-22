'use strict'

import './main-sidebar.less'
import rawTemplate from './main-sidebar.html'

export default (ngModule) => {
  ngModule.directive('mainSidebar', () => {
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
