

import './dashboard.less';
import rawTemplate from './dashboard.html';

export default (ngModule) => {
  ngModule.directive('dashboard', () => ({
    restrict: 'E',
    scope: {},
    template: rawTemplate,
    controllerAs: 'vm',
    controller() {
        // code
    },
  }));
};
