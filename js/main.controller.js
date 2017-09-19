(function() {
  "use strict";

  angular.module("findThePattern").controller("MainController", MainController);

  MainController.$inject = ["Tiles"];

  function MainController(Tiles) {
    var vm = this;
    vm.lives = 5;
    vm.round = 1;
    vm.tiles = [];

    activate();

    function activate() {
      vm.tiles = Tiles.getTiles();
    }
  }
})();
