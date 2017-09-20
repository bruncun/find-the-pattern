(function() {
  "use strict";

  angular.module("findThePattern").controller("MainController", MainController);

  MainController.$inject = ["tiles"];

  function MainController(tiles) {
    var vm = this;
    vm.lives = 5;
    vm.round = 1;
    vm.tiles = [];

    activate();

    function activate() {
      vm.tiles = tiles;
    }
  }
})();
