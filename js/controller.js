angular.module('swapiApp')
    .controller('planetsCtrl', function($scope, planetService) {

        // planetService.getPlanets()
        //     .then(function(planets) {
        //         $scope.planets = planets;
        //     });

        $scope.getParseData = function() {
            planetService.getPlanets()
                .then(function(response) {

                    for (var i = 0; i < response.length; i++) {
                        if (response[i].name === "Hoth") {
                          response[i].landImg = 'https://s-media-cache-ak0.pinimg.com/736x/2e/63/f8/2e63f8c62e5eac19470109b84f9e08a0.jpg';
                        } else if (response[i].name === "Alderaan") {
                            response[i].landImg = './images/planets/Alderaan-landscape.jpg';
                          } else if (response[i].name === "Yavin IV") {
                            response[i].landImg = './images/planets/Yavin4-landscape.jpeg';
                          } else if (response[i].name === "Dagobah") {
                            response[i].landImg = 'http://img.lum.dolimg.com/v1/images/Dagobah_890df592.jpeg?region=391%2C39%2C830%2C467&width=768';
                          } else if (response[i].name === "Bespin") {
                            response[i].landImg = 'http://img03.deviantart.net/5a73/i/2015/097/9/5/star_wars___bespin_cloud_city_by_mirko77-d8ot5or.jpg';
                          } else if (response[i].name === "Endor") {
                            response[i].landImg = 'http://www.tdguild.com/Images/Completed/mcq-endor3.jpg';
                          } else if (response[i].name === "Naboo") {
                            response[i].landImg = 'http://vignette4.wikia.nocookie.net/lucasfilm/images/5/50/Naboo.jpg/revision/latest?cb=20131001173612';
                          } else if (response[i].name === "Coruscant") {
                            response[i].landImg = 'http://america.pink/images/1/0/8/9/4/4/5/en/2-coruscant.jpg';
                          } else if (response[i].name === "Kamino") {
                            response[i].landImg = 'http://www.starwars-chronicles.com/images/Locations_Large/Kamino_Tipoca_City.JPG';
                          } else if (response[i].name === "Geonosis") {
                            response[i].landImg = 'http://img.lum.dolimg.com/v1/images/databank_geonosis_01_169_1d04e086.jpeg?region=0%2C0%2C1560%2C878&width=768';
                          } else {
                            response[i].landImg = './images/planets/NotFound.jpg';
                          }
                    }

                    for (var j = 0; j < response.length; j++)
                        if (response[j].name === "Hoth") {
                          response[j].summary = "Hoth was the sixth planet of the remote Hoth system. A desolate world covered with ice and snow, located in the Anoat sector, a rarely-traveled portion of the Outer Rim Territories, it became famous as the one-time location of the Alliance to Restore the Republic's Echo Base during the Galactic Civil War. The base was discovered by the Empire in 3 ABY, precipitating the Battle of Hoth, a major engagement during which the Rebels suffered heavy casualties and lost Echo Base.";
                      } else if (response[j].name === "Alderaan") {
                        response[j].summary = "Alderaan, located in the Core Worlds, was the second planet in the Alderaan system, and the home of many famous heroes, including Leia Organa Solo, Bail Organa, and Ulic Qel-Droma. Renowned galaxy-wide for their planet's unspoiled beauty, refined culture, and commitment to peace, Alderaanians worked with and around the land to preserve as much of the natural surroundings as they could. Originally the home of the Killiks, Alderaan was later conquered by Humans.Despite a battle during the Great Galactic War and a civil war during the subsequent Cold War, Alderaan remained peaceful during much of galactic history.However, in 0 BBY, Grand Moff Tarkin and the Galactic Empire wanted to intimidate the galaxy into submission, and destroyed the unarmed and peaceful planet using the first Death Star's superlaser.";
                    } else if (response[j].name === "Yavin IV") {
                        response[j].summary = "Yavin 4 was one of three habitable moons orbiting the gas giant Yavin. It was mainly covered in jungle and rainforest, and despite being remote and unheard of, it would play an important role in galactic events, including the seduction of Jedi Knight Exar Kun to the dark side and the destruction of Sith Lord Freedon Nadd during the Great Sith War, a ferocious duel between Jedi and Sith during the Clone Wars, and serving as the base of the Alliance to Restore the Republic during the Battle of Yavin and as a battlefield in other battles of the Galactic Civil War. An attack was launched on the Death Star from this moon. It also became the base for a Jedi Academy after the war ended.";
                    } else if (response[j].name === "Dagobah") {
                        response[j].summary = "Dagobah was located in the Sluis sector of the Outer Rim Territories. Despite the fact that it was located near the Rimma Trade Route, it was reachable only by obscure hyperlanes. The swamp-covered surface of Dagobah was a harsh, humid, swampy planet, mostly covered in shallow marshland, interspersed with stifling forests and at least one cave. There were very few truly open bodies of water on the planet: the water supply was thinly invested throughout the planet's main habitat, swampland, although there were vast expanses of mud fields. Dagobah was home to many creatures, such as bogwings, dragonsnakes, nudj, sleens, vine snakes, and swamp slugs. Examples of flora included the Adder moss, the hassling,[5] Gnarltree and Meat flower. The planet was devoid of any advanced civilization.";
                    } else if (response[j].name === "Bespin") {
                        response[j].summary = "Bespin was a gas giant in the Bespin system of the Anoat sector on the Ison Corridor in the Greater Javin region of the Outer Rim Territories. It was also a major source of tibanna gas, which was refined for production and transport in numerous mining operations including Cloud City and Tibannopolis. It was home to several million individuals, including Humans, Ugnaughts, and Lutrillians.";
                    } else if (response[j].name === "Endor") {
                        response[j].summary = "Endor (also known as the Forest Moon of Endor and the Sanctuary Moon) was a small forested moon orbiting the gas giant planet of Endor and was the farthest moon away from it. An enchanted world, Endor was notable for being the native home of the Ewoks, and being the location of the Battle of Endor, which would result in the downfall of the Empire and the first death of the Emperor Palpatine. Due to its proximity to the Unknown Regions, Endor was a relatively quiet planetoid both prior to and after the battle. Endor was also known for the vast amount of sentient species it supported, from baseline to exotic. This was largely due to the unusually large number of shipwrecks Endor experienced; it has been compared to a desert island in space.";
                    } else if (response[j].name === "Naboo") {
                        response[j].summary = "Naboo was a planet that was the sector capital of the Chommell sector near the Outer Rim territories. It was a largely unspoiled world with large plains, swamps and seas. It was mostly known as the homeworld of notable historical figures who played major roles in the downfall of the Galactic Republic and the rise of the Galactic Empire, namely Padmé Amidala, Emperor Palpatine and Jar Jar Binks.";
                    } else if (response[j].name === "Coruscant") {
                        response[j].summary = "Coruscant, originally called Notron, also known as Imperial Center or the Queen of the Core, was a planet located in the Galactic Core. It was generally agreed that Coruscant was, during most of galactic history, the most politically important world in the galaxy. At various times, it was the capital of the Galactic Republic, the Galactic Empire, the New Republic, the Yuuzhan Vong empire, the Galactic Alliance, very briefly the Fel Empire, Darth Krayt's Galactic Empire, and the Galactic Federation Triumvirate. In controlling Coruscant, these governments controlled most of the galaxy in the process. Over the centuries, Coruscant had developed into an ecumenopolis, with a total of 5,127 levels of city built up from the crust by the time of the Clone Wars. The actual planet-wide metropolis of Coruscant was called Galactic City. Under the Galactic Republic, the names Republic City or the City of Spires were also used to reference the city. It was also called Imperial City under the Galactic Empire, and New Republic City under the New Republic. However, in practice, Galactic City and its other names were sometimes applied to the Senate District, the central government center and de facto capital of Coruscant. Under the Yuuzhan Vong, the city and planet were both referred to as Yuuzhan'tar.";
                    } else if (response[j].name === "Kamino") {
                        response[j].summary = "Kamino, also known as the Planet of Storms,[10] was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet. It was inhabited by a race of tall, elegant beings called the Kaminoans, who kept to themselves and were known for their cloning technology. Kamino was located just south of the Rishi Maze, and was governed by the Ruling Council, headed by the Prime Minister.";
                    } else if (response[j].name === "Geonosis") {
                        response[j].summary = "Geonosis, called Geonosia by some natives, was the home planet of the Geonosians. The desert world was the Confederacy's first capital, hosting its major droid foundries. It was the site of the Battle of Geonosis, the opening conflict of the Clone Wars, in 22 BBY.";
                      } else {
                        response[j].summary = 'Sorry, there is no data for this planet.';
                      }


                    $scope.planets = response;
                    console.log(response);
                });
        };

        $scope.getParseData();


    });
