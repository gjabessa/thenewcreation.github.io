angular.module("meanTransport", ["ngRoute"]).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "angular-app/user-list/user-list.html",
        controller: "UsersController",
        controllerAs: "vm"
    }).when("/users/:id", {
        templateUrl: "angular-app/user-display/user.html",
        controller: "UserController",
        controllerAs: "vm"
    })
}