angular.module("meanTransport").controller("UserController", UserController);

function _getStarsArray(rating) {
    return new Array(rating);
}

function UserController(UsersDataFactory, $routeParams) {
    const vm = this;
    const userId = $routeParams.id;
    UsersDataFactory.getOne(userId).then(function (response) {
        console.log(response)
        vm.user = response;
        vm.stars = _getStarsArray(vm.user.rate)
    });


}