(function() {
  "use strict";

  angular.module("findThePattern").directive("randomTile", randomTile);

  randomTile.$inject = ["$interval", "icons"];

  function randomTile($interval, icons) {
    function link(scope, element, attrs) {
      var icon = "";

      function activate() {
        $interval(update, 1000);

        update();
      }

      function getRandomIcon() {
        return icons[Math.floor(Math.random() * icons.length)];
      }

      function isIconDifferent(newIcon) {
        return newIcon === icon;
      }

      function replace(newIcon) {
        element.removeClass(icon);
        element.addClass(newIcon);

        icon = newIcon;
      }

      function update() {
        var newIcon = getRandomIcon();

        if (isIconDifferent(newIcon)) {
          update();
          return;
        }

        replace(newIcon);
      }

      activate();
    }

    return {
      link: link
    };
  }
})();
