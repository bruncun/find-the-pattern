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
    tauntModal,
    Tiles,
    victoryModal
  ) {
    var vm = this;
    vm.onTileClick = onTileClick;

    activate();

    function activate() {
      vm.lives = Lives.lives;
      vm.round = Rounds.round;
      vm.tiles = Tiles.tiles;
      instructions();
    }

    function completeRound() {
      vm.round = Rounds.next();

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
      $uibModal.open(roundCompletedModal).closed.then(function() {
        vm.tiles = Tiles.getTiles();
      });
    }

    function onTileClick(index) {
      Tiles.isPattern(index) ? completeRound() : loseLife();
    }

    function startOver() {
      vm.round = Rounds.reset();
      vm.lives = Lives.reset();
      vm.tiles = Tiles.getTiles();
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
