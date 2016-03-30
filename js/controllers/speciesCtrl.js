angular.module('swapiApp')
    .controller('speciesCtrl', function($scope, speciesSvc) {

        speciesSvc.getSpecies()
            .then(function(response) {
                for (var i = 0; i < response.length; i++) {
                    if (response[i].name === "Rodian") {
                        response[i].img = "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg";
                    }
                    if (response[i].name === "Hutt") {
                        response[i].img = "http://vignette4.wikia.nocookie.net/swtor/images/5/53/Nemro-the-hutt.png/revision/latest?cb=20130519161828";
                    }
                    if (response[i].name === "Yoda's species") {
                        response[i].img = "http://i2.mirror.co.uk/incoming/article5630207.ece/ALTERNATES/s615b/Yoda.jpg";
                    }
                    if (response[i].name === "Trandoshan") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_trandoshan_01_169_26a8a28f.jpeg?region=0%2C0%2C1560%2C878&width=768";
                    }
                    if (response[i].name === "Mon Calamari") {
                        response[i].img = "http://vignette3.wikia.nocookie.net/starwars/images/a/a9/Hidden_Cache-EoD.jpg/revision/latest?cb=20140128170910";
                    }
                    if (response[i].name === "Ewok") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_ewok_01_169_747db03a.jpeg?region=0%2C0%2C1560%2C878&width=768";
                    }
                    if (response[i].name === "Sullustan") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_niennunb_01_169_31eccf40.jpeg?region=0%2C49%2C1560%2C780";
                    }
                    if (response[i].name === "Gungan") {
                        response[i].img = "http://vignette4.wikia.nocookie.net/starwars/images/6/61/Gungans.png/revision/latest?cb=20130122235412";
                    }
                    if (response[i].name === "Neimodian") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_neimoidian_01_169_f4d61512.jpeg?region=0%2C0%2C1560%2C878&width=768";
                    }
                    if (response[i].name === "Toydarian") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_toydarian_01_169_748d4d11.jpeg?region=0%2C0%2C1560%2C780";
                    }
                }
                $scope.aliens = response;
                console.log(response);
            });

    });
