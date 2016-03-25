angular.module("swapiApp", ["ui.router"])
    .config(function($stateProvider) {


    $stateProvider
    .state("home", {
        url: "/",
        templateUrl: "views/home.html"
    })

    .state("planets", {
        url: "/planets",
        templateUrl: "views/planets.html"
    });

});
