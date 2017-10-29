(function() {
  'use strict';

  angular
    .module('findThePattern', ['ui.bootstrap'])
    .constant('defeatModal', {
      animation: false,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      backdrop: 'static',
      controller: 'DismissableModalController',
      controllerAs: 'defeat',
      keyboard: false,
      size: 'sm',
      templateUrl: 'defeat.html'
    })
    .constant('icons', [
      'glyphicon-leaf text-success',
      'glyphicon-fire text-danger',
      'glyphicon-flash text-warning',
      'glyphicon-tent text-info',
      'glyphicon-remove text-muted',
      'glyphicon-plus text-primary'
    ])
    .constant('instructionsModal', {
      animation: false,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      backdrop: 'static',
      controller: 'DismissableModalController',
      controllerAs: 'instructions',
      keyboard: false,
      size: 'sm',
      templateUrl: 'instructions.html'
    })
    .constant('roundCompletedModal', {
      animation: false,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      backdrop: 'static',
      controller: 'TimeoutModalController',
      controllerAs: 'roundCompleted',
      keyboard: false,
      size: 'sm',
      templateUrl: 'roundCompleted.html'
    })
    .constant('startingLivesCount', 3)
    .constant('tilesPerAxis', 4)
    .constant('tilesPerRound', [1, 3, 7, 15])
    .constant('victoryModal', {
      animation: false,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      backdrop: 'static',
      controller: 'DismissableModalController',
      controllerAs: 'victory',
      keyboard: false,
      size: 'sm',
      templateUrl: 'victory.html'
    })
    .constant('tauntModal', {
      animation: false,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      backdrop: 'static',
      controller: 'TimeoutModalController',
      controllerAs: 'taunt',
      keyboard: false,
      size: 'sm',
      templateUrl: 'taunt.html'
    });
})();
