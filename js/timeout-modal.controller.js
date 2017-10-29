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
      countdownTimer = $interval(countdown, 1000);
    }

    function closeTimeoutModal() {
      $uibModalInstance.close();
      $interval.cancel(countdownTimer);
    }

    function countdown() {
      isTimeUp() ? closeTimeoutModal() : (vm.timeRemaining -= 1);
    }

    function isTimeUp() {
      return vm.timeRemaining === 1;
    }
  }
})();
