angular.module('swapiApp')
    .controller('planetsCtrl', function($scope, planetService, $anchorScroll, ngAudio, planets) {

        $scope.planets = planets;

        $scope.scrollTo = function(id) {
            $anchorScroll(id);
        };

        $scope.sound = ngAudio.load("../sounds/chewy_roar.mp3");


    });
