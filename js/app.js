angular.module("swapiApp", ['ui.router', 'chart.js', 'ngAudio', 'ne.swapi'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "views/home.html",
            controller: function($scope, ngAudio){
                $scope.loaderWheel = true;
                $scope.showLoaderWheel = function() {
                    $scope.loaderWheel = false;
                }
                ngAudio.load("../sounds/chewy_roar.mp3");
            }
        })

        .state("planets", {
            url: "/planets",
            templateUrl: "views/planets.html",
            controller: 'planetsCtrl',
            resolve: {
                planets: function(planetService) {
                    return planetService.getPlanets()
                }
            }
        })

        .state("ships", {
            url: "/spaceships",
            templateUrl: "views/ships.html",
            controller: 'shipCtrl',
            resolve: {
                ships: function(shipSvc) {
                    return shipSvc.getShips()
                }
            }
        })

        .state("species", {
            url: "/species",
            templateUrl: "views/species.html",
            controller: 'speciesCtrl',
            resolve: {
                species: function(speciesSvc) {
                    return speciesSvc.getSpecies()
                }
            }
        });

});
