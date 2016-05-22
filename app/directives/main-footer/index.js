'use strict'

import './main-footer.less'

export default (ngModule) => {
  ngModule.directive('mainFooter', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./main-footer.html'),
      controllerAs: 'vm',
      controller: function() {
        // code
      }
    }
  })
}
