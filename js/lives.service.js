(function() {
  'use strict';

  angular.module('findThePattern').service('Lives', Lives);

  Lives.$inject = ['startingLivesCount'];

  /* @ngInject */
  function Lives(startingLivesCount) {
    var lives = startingLivesCount;

    return {
      lose: lose,
      reset: reset
    };

    function isLivesRemaining() {
      return lives > 1;
    }

    function lose() {
      return isLivesRemaining() ? (lives -= 1) : false;
    }

    function reset() {
      return (lives = startingLivesCount);
    }
  }
})();
