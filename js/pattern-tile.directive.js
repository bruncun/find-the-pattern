(function() {
  "use strict";

  angular.module("findThePattern").directive("patternTile", patternTile);

  patternTile.$inject = ["$interval", "icons"];

  function patternTile($interval, icons) {
    function link(scope, element, attrs) {
      var icon = "";
      var pattern = new Array(icons.length);
      var index = 0;

      function activate() {
        $interval(update, 1000);

        getPattern();
        update();
      }

      function getPattern() {
        pattern = icons;
        for (var i = icons.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = icons[i];
          icons[i] = icons[j];
          icons[j] = temp;
        }
      }

      function replace(newIcon) {
        element.removeClass(icon);
        element.addClass(newIcon);

        icon = newIcon;
      }

      function update() {
        replace(pattern[index]);

        if (index < pattern.length - 1) {
          index++;
        } else {
          index = 0;
        }
      }

      activate();
    }

    return {
      link: link
    };
  }
})();
