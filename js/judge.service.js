(function() {
  "use strict";

  angular.module("findThePattern").service("Judge", Judge);

  Judge.$inject = [];

  /* @ngInject */
  function Judge() {
    this.decide = decide;

    return {
      decide: decide
    };

    function decide(tile) {
      if (tile === "pattern") {
        alert("victory");
      } else {
        alert("defeat");
      }
    }
  }
})();
