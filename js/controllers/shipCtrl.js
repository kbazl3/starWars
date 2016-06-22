angular.module('swapiApp')
    .controller('shipCtrl', function($scope, shipSvc, $anchorScroll, ships) {


            // shipSvc.getShips()
            //     .then(function(ships) {
            //         $scope.ships = ships;
            //
            //     });

                $scope.ships = ships;


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
