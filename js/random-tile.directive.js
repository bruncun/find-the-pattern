(function() {
  "use strict";

  angular.module("findThePattern").directive("randomTile", randomTile);

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
