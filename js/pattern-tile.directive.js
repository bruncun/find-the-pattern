(function() {
  "use strict";

  angular.module("findThePattern").directive("patternTile", patternTile);

  patternTile.$inject = ["$interval", "icons", "colors"];

  function patternTile($interval, icons, colors) {
    function link(scope, element, attrs) {}

    return {
      link: link
    };
  }
})();
