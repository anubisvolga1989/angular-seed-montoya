'use strict';

angular.module('myContact.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'view1/view1.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope','$firebaseArray',function($scope, $firebaseArray) {
  console.log($scope);
    var ref = firebase.database().ref().child('business');
    // download the data into a local object
    $scope.data = $firebaseArray(ref);
    // putting a console.log here won't work, see below
    // console.log($scope.data);

    // show the form
    $scope.addnewShow = function () {
      $scope.addFormShow = true;
    };

    // hide the form
    $scope.hide = function () {
        $scope.addFormShow = false;
        $scope.contactShow = false;
        $scope.addEditShow = false;
    }

    // create a new company ?
    // $scope.addMessage = function() {
    //     $scope.messages.$add({
    //         text: $scope.newMessageText
    //     });
    // };

    // add new values to firebase
    $scope.addFormSubmit = function () {
      // Assign values
        if($scope.name) { var name = $scope.name} else {var name = null};
        if($scope.company) { var company = $scope.company} else {var company = null};
        if($scope.description) { var description = $scope.description} else {var description = null};
        if($scope.email) { var email = $scope.email} else {var email = null};
        if($scope.phone) { var phone = $scope.phone} else {var phone = null};
        if($scope.state) { var state = $scope.state} else {var state = null};
        if($scope.street) { var street = $scope.street} else {var street = null};
        if($scope.years) { var years = $scope.years} else {var years = null};
        if($scope.zipcode) { var zipcode = $scope.zipcode} else {var zipcode = null};

        // build object
        $scope.data.$add({
            category: name,
            company: company,
            description: description,
            email: email,
            phone: phone,
            state: state,
            street_address: street,
            years_in_business: years,
            zpicode: zipcode

        }).then(function (ref) {
            // var id = ref.key();
            clearfields();
            $scope.addFormShow = false;
            $scope.msg = 'Contact Added';
        });
    };
    
    $scope.editFormSubmit = function () {
      console.log("Update the business");

      var id = $scope.name;

      var record = $scope.data.$getRecord(id);

      record.category                = $scope.category;
        record.company               = $scope.name;
        record.description           = $scope.description;
        record.email                 = $scope.email;
        record.phone                 = $scope.phone;
        record.state                 = $scope.state;
        record.street_address        = $scope.street_address;
        record.years_in_business     = $scope.years_in_business;
        record.zpicode               = $scope.zipcode;

        $scope.data.$save(record).then(function (ref) {
            const
        })
    }
    
    $scope.showContact = function (contact) {
        $scope.name = contact.name;
        $scope.company = contact.company;
        $scope.description = contact.description;
        $scope.email = contact.email;
        $scope.phone = contact.phone;
        $scope.state = contact.state;
        $scope.street = contact.street_address;
        $scope.zipcode = contact.zpicode;
        $scope.years = contact.years_in_business;

        $scope.contactShow = true;
    }
    

    function clearfields() {
       $scope.name = '';
       $scope.company = '';
       $scope.description = '';
       $scope.email = '';
       $scope.phone = '';
       $scope.state = '';
       $scope.street = '';
       $scope.years = '';
       $scope.zipcode = '';
    }
}]);