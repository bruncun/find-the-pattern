(function() {
  "use strict";

  angular.module("findThePattern").controller("MainController", MainController);

  function MainController() {
    var vm = this;
    vm.lives = 5;
    vm.round = 1;
    vm.tiles = [
      {
        type: "pattern"
      },
      {
        type: "random"
      },
      null
    ];
  }
})();
