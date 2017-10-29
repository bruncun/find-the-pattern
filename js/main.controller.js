(function() {
  'use strict';

  angular.module('findThePattern').controller('MainController', MainController);

  MainController.$inject = [
    '$uibModal',
    'defeatModal',
    'instructionsModal',
    'Lives',
    'roundCompletedModal',
    'Rounds',
    'startingLivesCount',
    'tauntModal',
    'Tiles',
    'victoryModal'
  ];

  function MainController(
    $uibModal,
    defeatModal,
    instructionsModal,
    Lives,
    roundCompletedModal,
    Rounds,
    startingLivesCount,
    tauntModal,
    Tiles,
    victoryModal
  ) {
    var vm = this;
    vm.onTileClick = onTileClick;

    activate();

    function activate() {
      vm.lives = startingLivesCount;
      vm.round = 1;
      vm.tiles = Tiles.getTiles(vm.round);
      instructions();
    }

    function completeRound() {
      vm.round = Rounds.next(vm.round);
      vm.round ? nextRound() : victory();
    }

    function defeat() {
      $uibModal.open(defeatModal);
      startOver();
    }

    function instructions() {
      $uibModal.open(instructionsModal);
    }

    function loseLife() {
      vm.lives = Lives.lose();
      vm.lives ? taunt() : defeat();
    }

    function nextRound() {
      $uibModal.open(roundCompletedModal).closed.then(setTiles);
    }

    function onTileClick(index) {
      Tiles.isPattern(vm.tiles, index) ? completeRound() : loseLife();
    }

    function setTiles() {
      vm.tiles = Tiles.getTiles(vm.round);
    }

    function startOver() {
      vm.round = 1;
      vm.lives = Lives.reset();
      setTiles();
    }

    function taunt() {
      $uibModal.open(tauntModal);
    }

    function victory() {
      $uibModal.open(victoryModal);
      startOver();
    }
  }
})();
