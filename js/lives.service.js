(function() {
  'use strict';

  angular.module('findThePattern').service('Lives', Lives);

  Lives.$inject = ['startingLivesCount'];

  /* @ngInject */
  function Lives(startingLivesCount) {
    return {
      lose: lose
    };

    function isLivesRemaining(lives) {
      return lives > 1;
    }

    function lose(lives) {
      return isLivesRemaining(lives) ? (lives -= 1) : false;
    }
  }
})();
