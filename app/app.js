'use strict';

// Declare app level module which depends on views, and components
angular.module('TemplateStore', [
  'ngRoute',
  'TemplateStore.view1',
  'TemplateStore.view2',
  'TemplateStore.templates'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/templates'});
}]);