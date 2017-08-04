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
.controller('TemplateCtrl',['$scope', '$http', function ($scope, $http) {
    $http.get('/json/templates.json').success(function (data) {
        console.log(data);
        $scope.templates = data;
    });
    $scope.name = 'view templates   ';
    console.log('TemplateCtrl init');
}]).
controller('TemplateDetail',['$scope', '$routeParams', '$http', '$filter',
    function ($scope, $routeParams, $http, $filter) {
    var templateID = $routeParams.templateId;
    $scope.name = 'view templates detail  ';
    console.log('TemplateDetail init');

    $http.get('/json/templates.json').success(function (data) {
        console.log(data);
        $scope.template = $filter('filter')(data, function (ident) {
            return ident.id == templateID;
        })[0];
        $scope.MainImage = $scope.template.images[0].name;
    });
}]);