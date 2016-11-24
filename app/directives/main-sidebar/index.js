

import './main-sidebar.less';
import rawTemplate from './main-sidebar.html';

export default (ngModule) => {
  ngModule.directive('mainSidebar', () => ({
    restrict: 'E',
    scope: {},
    template: rawTemplate,
    controllerAs: 'vm',
    controller() {
        // code
    },
  }));
};
