import './main-header.less';
import rawTemplate from './main-header.html';

export default (ngModule) => {
  ngModule.directive('mainHeader', () => ({
    restrict: 'E',
    scope: {},
    template: rawTemplate,
    controllerAs: 'vm',
    controller() {
        // code
    },
  }));
};
