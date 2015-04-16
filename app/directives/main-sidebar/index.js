export default (ngModule) => {
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
