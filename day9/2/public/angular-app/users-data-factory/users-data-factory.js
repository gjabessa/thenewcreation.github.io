angular.module("meanTransport").factory("UsersDataFactory", UsersDataFactory);
function UsersDataFactory($http) {
    return {
        getAll: getAllUsers,
        getOne: getOneUser,
        addOne: addOneUser,
        delete: deleteUser
    };
    function addOneUser(user) {
        return $http.post("/api/users", user).then(complete).catch(failed);

    }
    function getAllUsers() {
        return $http.get("/api/users").then(complete).catch(failed);
    }
    function getOneUser(id) {
        return $http.get("/api/users/" + id).then(complete).catch(failed);
    }
    function deleteUser(id) {
        return $http.delete("/api/users/"+id).then(complete).catch(failed);
    }
    function complete(response) {
        return response.data;
    }
    function failed(error) {
        return error.status.statusText;
    }
}