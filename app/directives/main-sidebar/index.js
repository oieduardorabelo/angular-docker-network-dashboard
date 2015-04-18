'use strict'

export default (ngModule) => {
  require('./main-sidebar.less')

  ngModule.directive('mainSidebar', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./main-sidebar.html'),
      controllerAs: 'vm',
      controller: function() {
        // code
      }
    }
  })
}
