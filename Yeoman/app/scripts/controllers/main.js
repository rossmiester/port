'use strict';

/**
 * @ngdoc function
 * @name zf5ProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zf5ProjectApp
 */
angular.module('zf5ProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
