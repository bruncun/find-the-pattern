(function() {
  'use strict';

  angular.module('findThePattern').directive('patternTile', patternTile);

  patternTile.$inject = ['$interval', 'icons'];

  function patternTile($interval, icons) {
    function link(scope, element, attrs) {
      var index = 0;

      function activate() {
        var pattern = getPattern();

        update(pattern);
        $interval(update, 1000, 0, true, pattern);
      }

      function getPattern() {
        var pattern = icons;
        for (var i = pattern.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = pattern[i];
          pattern[i] = pattern[j];
          pattern[j] = temp;
        }

        return pattern;
      }

      function isPatternOver(pattern) {
        return index < pattern.length - 1;
      }

      function replace(newIcon) {
        element.attr('class', '');
        element.addClass(newIcon);
      }

      function update(pattern) {
        replace(pattern[index]);

        isPatternOver(pattern) ? (index += 1) : (index = 0);
      }

      activate();
    }

    return {
      link: link
    };
  }
})();
