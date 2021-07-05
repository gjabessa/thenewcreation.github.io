angular.module("meanTransport").directive("userRating", UserRating);
function UserRating() {
    return {
        restrict: "E",
        templateUrl: "angular-app/user-rating/rating.html",
        bindToController: true,
        controller: "UserController",
        controllerAs: "vm",
        scope: {

        }

    };
}