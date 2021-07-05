angular.module("meanTransport").factory("UsersDataFactory", UsersDataFactory);
function UsersDataFactory($http) {
    return {
        getAll: getAllUsers,
        getOne: getOneUser,
        addOne: addOneUser,
        delete: deleteUser,
        addDestination: addDestination,
        deleteDestination: deleteDestination,
        login: loginUser,
        register: addOneUser,
        search: search
    }

    function search(kw){
        return $http.get("/api/userSearch?kw="+kw)
        .then(complete)
        .catch(failed)
    }

    function loginUser(user) {
        
        return $http.post("/api/users/login/", user)
            .then(complete)
            .catch(failed)
    }

    function addOneUser(user) {
        return $http.post("/api/users", user).then(complete).catch(failed);

    }
    function addDestination(id,destination){
        return $http.post("/api/users/"+id+"/destination", destination).then(complete).catch(failed);
    }
    function deleteDestination(id,destinationId){
        return $http.delete("/api/users/"+id+"/destination/"+destinationId).then(complete).catch(failed);
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