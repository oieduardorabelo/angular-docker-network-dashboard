export default ngModule => {
  ngModule.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>',
      })
      .state('settings', {
        url: '/settings',
        template: '<settings></settings>',
      })
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>',
      })
      .state('help', {
        url: '/help',
        template: '<help></help>',
      });
  });
};
