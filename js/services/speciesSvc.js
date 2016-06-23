angular.module('swapiApp')
    .service('speciesSvc', function($http, $q, swapi) {

        this.getSpecies = function() {
            var deferred = $q.defer();
            var speciesObj = [];

            swapi.species.all()
            .then(function(response) {
                var r = response.results
                console.log(response);

                for (var i = 0; i < r.length; i++) {
                    if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://vignette4.wikia.nocookie.net/swtor/images/5/53/Nemro-the-hutt.png/revision/latest?cb=20130519161828",
                            data: r[i]
                        })
                    } else if (r[i].name === "Hutt") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Yoda's species") {
                        speciesObj.push({
                            speciesImg: "http://i2.mirror.co.uk/incoming/article5630207.ece/ALTERNATES/s615b/Yoda.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    }

                }


                console.log(speciesObj);

                return response.results;
            });
        };

    });
