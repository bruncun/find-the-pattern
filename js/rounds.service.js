(function() {
  'use strict';

  angular.module('findThePattern').service('Rounds', Rounds);

  Rounds.$inject = ['tilesPerRound'];

  /* @ngInject */
  function Rounds(tilesPerRound) {
    return {
      next: next
    };

    function isRoundsRemaining(round) {
      return round < tilesPerRound.length;
    }

    function next(round) {
      return isRoundsRemaining(round) ? (round += 1) : false;
    }
  }
})();
