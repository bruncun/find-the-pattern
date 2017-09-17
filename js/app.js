(function() {
  "use strict";

  angular
    .module("findThePattern", [])
    .controller("MainController", MainController)
    .directive("randomTile", randomTile)
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

  function MainController() {
    var vm = this;
    vm.lives = 5;
    vm.round = 1;
    vm.tiles = [
      {
        type: "pattern"
      },
      {
        type: "random"
      },
      null
    ];
  }

  randomTile.$inject = ["$interval", "icons", "colors"];

  function randomTile($interval, icons, colors) {
    function link(scope, element, attrs) {
      var face = {
        icon: "",
        color: ""
      };

      function activate() {
        $interval(update, 1000);

        update();
      }

      function getRandomFace() {
        return {
          icon: icons[Math.floor(Math.random() * icons.length)],
          color: colors[Math.floor(Math.random() * icons.length)]
        };
      }

      function isFaceDifferent(newFace) {
        return newFace.icon === face.icon || newFace.color === face.color;
      }

      function replace(newFace) {
        element.removeClass(face.icon + " " + face.color);
        element.addClass(newFace.icon + " " + newFace.color);

        face.icon = newFace.icon;
        face.color = newFace.color;
      }

      function update() {
        var newFace = getRandomFace();

        if (isFaceDifferent(newFace)) {
          update();
          return;
        }

        replace(newFace);
      }

      activate();
    }

    return {
      link: link
    };
  }
})();
