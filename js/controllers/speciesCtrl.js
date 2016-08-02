angular.module('swapiApp')
    .controller('speciesCtrl', function($scope, speciesSvc, $anchorScroll) {

        speciesSvc.getSpecies()
            .then(function(response) {
                $scope.aliens = response;
            });
            
            $scope.scrollTo = function(id) {
                $anchorScroll(id);
            };

    });
