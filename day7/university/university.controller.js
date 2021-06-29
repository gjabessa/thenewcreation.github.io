angular.module("universityApp").controller("UniversityController", UniversityController);

function UniversityController($routeParams, UniversityFactory) {
    const vm = this;
    
    const universityId = $routeParams.universityId;
    UniversityFactory.getUniversitys()
        .then(function (response) {
            console.log(response)
            vm.university = response;
        });
}