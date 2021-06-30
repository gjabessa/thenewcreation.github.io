angular.module("meanTransport").controller("UserController", UserController);

function _getStarsArray(rating) {
    return new Array(rating);
}

function UserController(UsersDataFactory, $routeParams, $location) {
    const vm = this;
    const userId = $routeParams.id;
    UsersDataFactory.getOne(userId).then(function (response) {
        console.log(response)
        vm.user = response;
        vm.stars = _getStarsArray(vm.user.rate)
    });
    vm.deleteUser = function () {
        const userId = $routeParams.id;
        
        UsersDataFactory.delete(userId).then(function (response) {
            console.log("User removed");
        }).catch(function (error) {
            console.log("Error while deleting ", error)
        })

    };


}