(function() {
  "use strict";

  angular.module("findThePattern").factory("tiles", tiles);

  tiles.$inject = ["tilesPerAxis", "tilesPerRound"];

  /* @ngInject */
  function tiles(tilesPerAxis, tilesPerRound) {
    var tiles = new Array(Math.pow(tilesPerAxis, 2));

    activate();

    return tiles;

    function activate() {
      addPatternTile();
      addRandomTiles();
    }

    function addPatternTile() {
      tiles[getRandomTileIndex()] = "pattern";
    }

    function addRandomTile() {
      var index = getRandomTileIndex();

      if (isTileEmpty(index)) {
        tiles[index] = "random";
        tilesPerRound--;
      }
    }

    function addRandomTiles() {
      while (tilesPerRound > 0) {
        addRandomTile();
      }
    }

    function getRandomTileIndex() {
      return Math.floor(Math.random() * tiles.length);
    }

    function isTileEmpty(index) {
      return typeof tiles[index] === "undefined";
    }
  }
})();
