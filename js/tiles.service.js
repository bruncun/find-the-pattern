(function() {
  'use strict';

  angular.module('findThePattern').factory('Tiles', Tiles);

  Tiles.$inject = ['Rounds', 'tilesPerAxis', 'tilesPerRound'];

  /* @ngInject */
  function Tiles(Rounds, tilesPerAxis, tilesPerRound) {
    var tiles, currentTilesPerRound;
    activate();

    return {
      getTiles: getTiles,
      tiles: tiles,
      isPattern: isPattern
    };

    function activate() {
      getTiles();
    }

    function addPatternTile() {
      tiles[getRandomTileIndex()] = 'pattern';
    }

    function addRandomTile() {
      var index = getRandomTileIndex();

      if (isEmpty(index)) {
        tiles[index] = 'random';
        currentTilesPerRound -= 1;
      }
    }

    function addRandomTiles() {
      while (currentTilesPerRound > 0) {
        addRandomTile();
      }
    }

    function getRandomTileIndex() {
      return Math.floor(Math.random() * tiles.length);
    }

    function isEmpty(index) {
      return typeof tiles[index] === 'undefined';
    }

    function isPattern(index) {
      return tiles[index] === 'pattern';
    }

    function getTiles() {
      tiles = new Array(Math.pow(tilesPerAxis, 2));
      currentTilesPerRound = tilesPerRound[Rounds.round - 1];
      addPatternTile();
      addRandomTiles();

      return tiles;
    }
  }
})();
