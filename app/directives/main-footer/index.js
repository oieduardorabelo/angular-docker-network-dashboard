'use strict'

export default (ngModule) => {
  require('./main-footer.less')

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
