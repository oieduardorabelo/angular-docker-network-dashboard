'use strict'

import './main-footer.less'
import rawTemplate from './main-footer.html'

export default (ngModule) => {
  ngModule.directive('mainFooter', () => {
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
