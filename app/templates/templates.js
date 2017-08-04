angular.module('TemplateStore.templates',['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/templates',{
        templateUrl: 'templates/templates.html',
        controller: 'TemplateCtrl'
    });
}])
.controller('TemplateCtrl',['$scope', function ($scope) {
    $scope.name = 'view templates   ';
    console.log('TemplateCtrl init');
}]);