'use strict';

angular.module('myContact.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'view1/view1.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope','$firebaseObject',function($scope, $firebaseObject) {
  console.log($scope);
    var ref = firebase.database().ref().child('business');
    // download the data into a local object
    $scope.data = $firebaseObject(ref);
    // putting a console.log here won't work, see below
    console.log($scope.data);
    
    $scope.addnewShow = function () {
      $scope.addFormShow = true;
      $scope.data.$add({

      });
    };

    $scope.addMessage = function() {
        $scope.messages.$add({
            text: $scope.newMessageText
        });
}]);