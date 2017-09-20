(function() {
  "use strict";

  angular
    .module("findThePattern", [])
    .constant("icons", [
      "glyphicon-leaf text-success",
      "glyphicon-fire text-danger",
      "glyphicon-flash text-warning",
      "glyphicon-tent text-info",
      "glyphicon-remove text-muted",
      "glyphicon-plus text-primary"
    ])
    .constant("tilesPerAxis", 4)
    .constant("tilesPerRound", 2);
})();
