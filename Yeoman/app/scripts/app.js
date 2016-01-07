'use strict';

/**
 * @ngdoc overview
 * @name zf5ProjectApp
 * @description
 * # zf5ProjectApp
 *
 * Main module of the application.
 */
angular
  .module('zf5ProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
