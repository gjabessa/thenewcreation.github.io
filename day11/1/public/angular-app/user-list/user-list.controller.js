angular.module("meanTransport").controller("UsersController", UsersController);

function UsersController(UsersDataFactory, AuthFactory) {
    const vm = this;
    vm.title = "Mean Users App";
    UsersDataFactory.getAll().then(function (response) {
        vm.users = response;
    });

    vm.isLoggedIn = function(){
        return AuthFactory.auth;
    }
    vm.addUser = function () {
        console.log("called")
        const postData = {
            name: vm.newUserName,
            budget: vm.newUserBudget,
            
        }
        if (vm.userForm.$valid) {
            UsersDataFactory.addOne(postData).then(function (response) {
                console.log("User saved");
            }).catch(function (error) {
                console.log("Error while saving ", error)
            })
        }
    };
    // $http.get("/api/users").then(function (response) {
    //     vm.users = response.data;
    // })

}