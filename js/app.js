angular.module("swapiApp", ['ui.router', 'chart.js', 'ngAudio'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "views/home.html"
        })

        .state("planets", {
            url: "/planets",
            templateUrl: "views/planets.html",
            controller: 'planetsCtrl'
        })

        .state("ships", {
            url: "/spaceships",
            templateUrl: "views/ships.html",
            controller: 'shipCtrl'
        })

        .state("species", {
            url: "/species",
            templateUrl: "views/species.html",
            controller: 'speciesCtrl'
        });

});
