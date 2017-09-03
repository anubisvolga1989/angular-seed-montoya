'use strict';

// Declare app level module which depends on views, and components
angular.module('myContact', [
  'ngRoute',
  'firebase',
  'myContact.contacts'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
