angular.module('TemplateStore.templates',['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/templates',{
        templateUrl: 'templates/templates.html',
        controller: 'TemplateCtrl'
        }).
    when('/templates/:id',{
            templateUrl:'templates/template-detail.html',
            controller: 'TemplateDetail'
        })

    ;
}])
.controller('TemplateCtrl',['$scope', function ($scope) {
    $scope.name = 'view templates   ';
    console.log('TemplateCtrl init');
}])
    .controller('TemplateDetail',['$scope', function ($scope) {
    $scope.name = 'view templates detail  ';
    console.log('TemplateDetail init');
}]);