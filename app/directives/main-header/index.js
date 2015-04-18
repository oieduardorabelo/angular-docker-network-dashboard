'use strict'

export default (ngModule) => {
  require('./main-header.less')

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
