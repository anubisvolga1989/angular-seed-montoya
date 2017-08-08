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
    $http.get('/json/templates.json').success(function (data) { // se obtiene por get el archivo json para usarlo.
        console.log(data);
        $scope.templates = data; // se pasa todo el json en la variable templates para usarlo en el html
    });
    $scope.name = 'view templates   ';
    console.log('TemplateCtrl init');
}]).


controller('TemplateDetail',['$scope', '$routeParams', '$http', '$filter',
    function ($scope, $routeParams, $http, $filter) {

    var templateID = $routeParams.id; // se obtiene el ID del url al seleccionar el template
        console.log(templateID);

        $scope.name = 'view templates detail  ';

    console.log('TemplateDetail init');

    $http.get('/json/templates.json').success(function (data) {
        console.log('template id');
        console.log(data);
        $scope.template = $filter('filter')(data, function (d) {
            return d.id == templateID; // se tiene que comparar del json con el parameterUrl para usar el dato correcto
        })[0];


        $scope.MainImage = $scope.template.images[0].name;
    });
}]);