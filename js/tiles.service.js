(function() {
  "use strict";

  angular.module("findThePattern").factory("Tiles", Tiles);

  Tiles.$inject = [];

  /* @ngInject */
  function Tiles() {
    var service = {
      getTiles: getTiles
    };

    return service;

    function getTiles() {
      return [
        {
          type: "pattern"
        },
        {
          type: "random"
        },
        null
      ];
    }
  }
})();
