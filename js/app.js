(function() {
  "use strict";

  angular.module("findThePattern", []);

  angular.module("findThePattern").controller("MainController", MainController);

  MainController.$inject = [];

  function MainController() {
    var vm = this;
    vm.lives = 3;
    vm.tiles = [
      {
        icon: "leaf",
        color: "text-success"
      },
      null,
      {
        icon: "fire",
        color: "text-warning"
      },
      null,
      null,
      {
        icon: "ice-lolly-tasted",
        color: "text-danger"
      },
      null,
      {
        icon: "flash",
        color: "text-warning"
      },
      {
        icon: "hourglass",
        color: "text-primary"
      },
      null,
      null,
      {
        icon: "eye-open",
        color: "text-muted"
      },
      null,
      {
        icon: "flash",
        color: "text-warning"
      },
      {
        icon: "ice-lolly-tasted",
        color: "text-danger"
      },
      null
    ];
  }
})();
