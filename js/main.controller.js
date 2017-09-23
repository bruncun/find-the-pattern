(function() {
  "use strict";

  angular.module("findThePattern").controller("MainController", MainController);

  MainController.$inject = ["tiles", "Judge"];

  function MainController(tiles, Judge) {
    var vm = this;
    vm.lives = 5;
    vm.round = 1;
    vm.tiles = [];
    vm.onTileClick = onTileClick;

    activate();

    function activate() {
      vm.tiles = tiles;
    }

    function onTileClick(index) {
      Judge.decide(tiles[index]);
    }
  }
})();
