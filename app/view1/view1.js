'use strict';

angular.module('myContact.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'view1/view1.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', '$firebaseArray',function($scope, $firebaseArray) {
  console.log($scope);
}]);