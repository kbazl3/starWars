angular.module("swapiApp")
    .service('shipSvc', function($http, $q, swapi) {


        this.getShips = function() {
            // var deferred = $q.defer();
            // $http({
            //     method: "GET",
            //     url: "http://swapi.co/api/starships/"
            // })
            // .then(function(response) {
            //     var arr = [];
            //     var parsedResponse = response.data.results;
            //     for (var i = 0; i < parsedResponse.length; i++) {
            //         arr.push({
            //             name: parsedResponse[i].name,
            //             hyperdrive_rating: parsedResponse[i].hyperdrive_rating,
            //             length: parsedResponse[i].length,
            //             MGLT: parsedResponse[i].MGLT,
            //             Cargo_Capacity: parsedResponse[i].cargo_capacity,
            //             Model: parsedResponse[i].model,
            //             crew: parsedResponse[i].crew,
            //             class: parsedResponse[i].starship_class
            //         });
            //     }
            //     deferred.resolve(arr);
            // });
            // return deferred.promise;

            return swapi.starships.all()
            .then(function(response) {
                console.log(response);
                return response.results;
            });
        };

    });
