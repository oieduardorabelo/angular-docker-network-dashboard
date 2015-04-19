'use strict'

export default (ngModule) => {
  require('./dashboard.less')

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
