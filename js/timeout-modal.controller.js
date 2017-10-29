(function() {
  'use strict';

  angular
    .module('findThePattern')
    .controller('TimeoutModalController', TimeoutModalController);

  TimeoutModalController.$inject = ['$interval', '$scope', '$uibModalInstance'];

  /* @ngInject */
  function TimeoutModalController($interval, $scope, $uibModalInstance) {
    var vm = this;
    var countdownTimer;
    vm.timeRemaining = 3;

    activate();

    function activate() {
      if (vm.timeRemaining) {
        countdownTimer = $interval(countdown, 1000);
      }
    }

    function countdown() {
      if (isTimeRemaining()) {
        $uibModalInstance.close();
        $interval.cancel(countdownTimer);
      } else {
        vm.timeRemaining--;
      }
    }

    function isTimeRemaining() {
      return vm.timeRemaining === 1;
    }
  }
})();
