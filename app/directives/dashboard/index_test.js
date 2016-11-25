describe('myApp.view1 module', () => {
  beforeEach(() => {
    angular.module('NetworkDashboardApp');
  });

  let $compile;
  let $rootScope;

  beforeEach(inject((_$compile_, _$rootScope_) => {
    // The injector unwraps the underscores (_) from
    // around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('renders without problems', () => {
    const el = $compile("<a-great-eye></a-great-eye>")($rootScope)
    $rootScope.$digest();
    expect(el).toBeDefined();
  });
});
