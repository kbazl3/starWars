angular.module('swapiApp')
    .service('speciesSvc', function($http, $q) {

        this.getSpecies = function() {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: "http://swapi.co/api/species"
            })
            .then(function(response) {
                var arr = [];
                var parsedResponse = response.data.results;
                for (var i = 0; i < parsedResponse.length; i++) {
                    arr.push({
                        average_height: parsedResponse[i].average_height,
                        average_lifespan: parsedResponse[i].average_lifespan,
                        classification: parsedResponse[i].classification,
                        designation: parsedResponse[i].designation,
                        homeworld: parsedResponse[i].homeworld,
                        language: parsedResponse[i].language,
                        name: parsedResponse[i].name
                    });
                }
                deferred.resolve(arr);
            });
            return deferred.promise;
        };

    });
