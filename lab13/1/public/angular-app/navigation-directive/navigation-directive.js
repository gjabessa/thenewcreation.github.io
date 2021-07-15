angular.module("meanTransport").directive("transportNavigation", TransportNavigation);

function TransportNavigation() {
    return {
        restrict: "E",
        templateUrl: "angular-app/navigation-directive/navigation-directive.html"
    }
}