angular.module("universityApp").factory("UniversityFactory", UniversityFactory);
function UniversityFactory($http) {
    return {
        getUniversitys: getUniversitys,
        getOneUniversity: getOneUniversity
    };
    function getUniversitys() {
        return $http.get("http://universities.hipolabs.com/search?name= ")
            .then(complete)
            .catch(failed)
    }
    function getOneUniversity(jobId) {
        return $http.get("http://api.dataatwork.org/v1/jobs/"+universityId)
            .then(complete)
            .catch(failed)

    }

    function complete(response) {
        console.log(response.data)
        return response.data;
    }
    function failed(error) {
        return error.statusText;
    }
}