(function() {
  'use strict';

  angular
    .module('findThePattern')
    .controller('DismissableModalController', DismissableModalController);

  DismissableModalController.$inject = ['$uibModalInstance'];

  /* @ngInject */
  function DismissableModalController($uibModalInstance) {
    var vm = this;
    vm.close = close;

    function close() {
      $uibModalInstance.close();
    }
  }
})();
