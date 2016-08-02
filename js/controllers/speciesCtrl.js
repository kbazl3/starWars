angular.module('swapiApp')
    .controller('speciesCtrl', function($scope, speciesSvc, $anchorScroll, species) {

            $scope.aliens = species
            $scope.scrollTo = function(id) {
                $anchorScroll(id);
            };

    });
