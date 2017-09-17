(function() {
  "use strict";

  angular
    .module("findThePattern", [])
    .constant("icons", [
      "glyphicon-leaf",
      "glyphicon-fire",
      "glyphicon-flash",
      "glyphicon-tent",
      "glyphicon-remove",
      "glyphicon-plus"
    ])
    .constant("colors", [
      "text-danger",
      "text-success",
      "text-info",
      "text-muted",
      "text-warning",
      "text-primary"
    ]);
})();
