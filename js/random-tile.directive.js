(function() {
  'use strict';

  angular.module('findThePattern').directive('randomTile', randomTile);

  randomTile.$inject = ['$interval', 'icons'];

  function randomTile($interval, icons) {
    function link(scope, element, attrs) {
      function activate() {
        $interval(update, 1000);

        update();
      }

      function getRandomIcon() {
        return icons[Math.floor(Math.random() * icons.length)];
      }

      function isNewIconSame(newIcon) {
        return element.hasClass(newIcon);
      }

      function replace(newIcon) {
        element.attr('class', '');
        element.addClass(newIcon);
      }

      function update() {
        var newIcon = getRandomIcon();

        isNewIconSame(newIcon) ? update() : replace(newIcon);
      }

      activate();
    }

    return {
      link: link
    };
  }
})();
