angular.module('swapiApp')
    .controller('shipCtrl', function($scope, shipSvc, $anchorScroll) {


        shipSvc.getShips()
            .then(function(ships) {
                for (var i = 0; i < ships.length; i++) {
                    if (ships[i].name === "Death Star") {
                        ships[i].img = "http://vignette4.wikia.nocookie.net/starwars/images/1/15/Deathstar_negwt.jpg/revision/latest?cb=20150817065743";
                    }
                    if (ships[i].name === "Sentinel-class landing craft") {
                        ships[i].img = "http://vignette1.wikia.nocookie.net/starwars/images/3/33/Sentinel_negvv.jpg/revision/latest?cb=20110512060326";
                    }
                    if (ships[i].name === "Millennium Falcon") {
                        ships[i].img = "http://wallpapercave.com/wp/uRjYnyl.jpg";
                    }
                    if (ships[i].name === "Y-wing") {
                        ships[i].img = "http://vignette1.wikia.nocookie.net/starwars/images/3/33/Sentinel_negvv.jpg/revision/latest?cb=20110512060326";
                    }
                    if (ships[i].name === "X-wing") {
                        ships[i].img = "http://vignette1.wikia.nocookie.net/starwars/images/3/33/Sentinel_negvv.jpg/revision/latest?cb=20110512060326";
                    }
                    if (ships[i].name === "TIE Advanced x1") {
                        ships[i].img = "http://vignette1.wikia.nocookie.net/starwars/images/3/33/Sentinel_negvv.jpg/revision/latest?cb=20110512060326";
                    }
                    if (ships[i].name === "Executor") {
                        ships[i].img = "http://vignette1.wikia.nocookie.net/starwars/images/3/33/Sentinel_negvv.jpg/revision/latest?cb=20110512060326";
                    }
                    if (ships[i].name === "Slave 1") {
                        ships[i].img = "http://vignette1.wikia.nocookie.net/starwars/images/3/33/Sentinel_negvv.jpg/revision/latest?cb=20110512060326";
                    }
                    if (ships[i].name === "Imperial shuttle") {
                        ships[i].img = "http://vignette1.wikia.nocookie.net/starwars/images/3/33/Sentinel_negvv.jpg/revision/latest?cb=20110512060326";
                    }
                    if (ships[i].name === "EF76 Nebulon-B escort frigate") {
                        ships[i].img = "http://vignette1.wikia.nocookie.net/starwars/images/3/33/Sentinel_negvv.jpg/revision/latest?cb=20110512060326";
                    }
                }

                $scope.ships = ships;
                // console.log(ships);
            });



            //bar graph
            $scope.data =[
                [70, 10, 75, 80, 100, 105, 40, 70, 50, 40]
            ];
            $scope.labels = ["Death Star", "landing craft", "Millennium Falcon", "Y-wing", "X-wing", "TIE Advanced x1", "Executor", "Slave 1", "Imperial shuttle", "EF76"];
            $scope.series = ['MGLT'];

            $scope.scrollTo = function(id) {
                $anchorScroll(id);
            };


    });
