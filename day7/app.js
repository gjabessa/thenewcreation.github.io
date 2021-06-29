angular.module("universityApp", ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when("/university", {
        templateUrl: "university/university.html",
        controller: "UniversityController",
        controllerAs: "UniversityCtrl"
    })
        .otherwise({
            redirectTo: "/"
        })
}