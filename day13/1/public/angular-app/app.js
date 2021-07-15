angular.module("meanTransport", ["ngRoute","angular-jwt"]).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "angular-app/Welcome/welcome.html",
    }).when("/users", {
        templateUrl: "angular-app/user-list/user-list.html",
        controller: "UsersController",
        controllerAs: "vm"
    }).when("/users/:id", {
        templateUrl: "angular-app/user-display/user.html",
        controller: "UserController",
        controllerAs: "vm"
    }).when("/register", {
        templateUrl:"angular-app/register/register.html",
        controller:"RegisterController",
        controllerAs:"vm",
        access: {restricted: false}
    }).when("/profile", {
        templateUrl:"angular-app/profile/profile.html",
        access: {restricted: true}
    }).otherwise({
        redirectTo: "/"
    })
}

function run($rootScope,  $location, $window, AuthFactory) {
    $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
        if(nextRoute.access !== undefined && 
            nextRoute.access.restricted && 
            !AuthFactory.auth && !$window.sessionStorage.token) { 
            event.preventDefault();
            $location.path("/");
        }
    })
}