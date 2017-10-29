(function() {
  'use strict';

  angular.module('findThePattern').service('Rounds', Rounds);

  Rounds.$inject = ['tilesPerRound'];

  /* @ngInject */
  function Rounds(tilesPerRound) {
    var round = 1;

    return {
      next: next,
      reset: reset,
      get round() {
        return round;
      }
    };

    function isRoundsRemaining() {
      return round < tilesPerRound.length;
    }

    function next() {
      return isRoundsRemaining() ? (round += 1) : false;
    }

    function reset() {
      return (round = 1);
    }
  }
})();
