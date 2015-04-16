export default (ngModule) => {
  ngModule.directive('mainContent', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./main-content.html'),
      controllerAs: 'vm',
      controller: function() {
        // code
      }
    }
  })
}
