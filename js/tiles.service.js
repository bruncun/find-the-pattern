(function() {
  'use strict';

  angular.module('findThePattern').factory('Tiles', Tiles);

  Tiles.$inject = ['Rounds', 'tilesPerAxis', 'tilesPerRound'];

  /* @ngInject */
  function Tiles(Rounds, tilesPerAxis, tilesPerRound) {
    return {
      getTiles: getTiles,
      isPattern: isPattern
    };

    function addPatternTile(tiles) {
      tiles[getRandomTileIndex(tiles)] = 'pattern';
      return tiles;
    }

    function addRandomTile(tilesInProgress) {
      var index = getRandomTileIndex(tilesInProgress.tiles);
      if (isEmpty(tilesInProgress.tiles, index)) {
        tilesInProgress.tiles[index] = 'random';
        tilesInProgress.currentTilesPerRound -= 1;
      }
      return tilesInProgress;
    }

    function addRandomTiles(tiles, currentTilesPerRound) {
      var tilesInProgress = {
        tiles: tiles,
        currentTilesPerRound: currentTilesPerRound
      };
      while (isTilesRemaining(tilesInProgress.currentTilesPerRound)) {
        tilesInProgress = addRandomTile(tilesInProgress);
      }

      return tilesInProgress.tiles;
    }

    function getRandomTileIndex(tiles) {
      return Math.floor(Math.random() * tiles.length);
    }

    function isEmpty(tiles, index) {
      return typeof tiles[index] === 'undefined';
    }

    function isPattern(tiles, index) {
      return tiles[index] === 'pattern';
    }

    function isTilesRemaining(currentTilesPerRound) {
      return currentTilesPerRound > 0;
    }

    function getTiles(round) {
      var tiles = new Array(Math.pow(tilesPerAxis, 2));
      var currentTilesPerRound = tilesPerRound[round - 1];
      tiles = addPatternTile(tiles);
      tiles = addRandomTiles(tiles, currentTilesPerRound);

      return tiles;
    }
  }
})();
