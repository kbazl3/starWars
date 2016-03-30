angular.module('swapiApp')
        .controller('planetsCtrl', function($scope, planetService, $anchorScroll, ngAudio) {

        $scope.getParseData = function() {
            planetService.getPlanets()
                .then(function(response) {

                    for (var i = 0; i < response.length; i++) {
                        if (response[i].name === "Hoth") {
                          response[i].landImg = 'https://s-media-cache-ak0.pinimg.com/736x/2e/63/f8/2e63f8c62e5eac19470109b84f9e08a0.jpg';
                          response[i].planetImg = 'http://vignette2.wikia.nocookie.net/swtor/images/d/d1/Hoth.jpg/revision/latest?cb=20100720144834';
                        } else if (response[i].name === "Alderaan") {
                            response[i].landImg = './images/planets/Alderaan-landscape.jpg';
                            response[i].planetImg = 'http://vignette1.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805';
                          } else if (response[i].name === "Yavin IV") {
                            response[i].landImg = 'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2014/09/Image-1-2400x1200-562320997426.jpg';
                            response[i].planetImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Yavin-4.jpg/250px-Yavin-4.jpg';
                          } else if (response[i].name === "Dagobah") {
                            response[i].landImg = 'http://www.starwarsnewsnet.com/wp-content/uploads/2014/04/Dagobah11.jpg';
                            response[i].planetImg = 'https://s-media-cache-ak0.pinimg.com/736x/72/76/16/727616fdc990d43935ce284c695000d0.jpg';
                          } else if (response[i].name === "Bespin") {
                            response[i].landImg = 'http://img03.deviantart.net/5a73/i/2015/097/9/5/star_wars___bespin_cloud_city_by_mirko77-d8ot5or.jpg';
                            response[i].planetImg = 'http://vignette1.wikia.nocookie.net/starwars/images/8/82/Bespin_space.jpg/revision/latest?cb=20071218151245';
                          } else if (response[i].name === "Endor") {
                            response[i].landImg = 'http://www.tdguild.com/Images/Completed/mcq-endor3.jpg';
                            response[i].planetImg = 'http://vignette2.wikia.nocookie.net/starwars/images/6/61/Moon_of_Endor_NEGAS.jpg/revision/latest?cb=20061115194719';
                          } else if (response[i].name === "Naboo") {
                            response[i].landImg = 'http://vignette2.wikia.nocookie.net/starwars/images/e/eb/Theedroyalpalace.png/revision/latest?cb=20130719122716';
                            response[i].planetImg = 'https://upload.wikimedia.org/wikipedia/en/6/60/Alderaan250ppx.PNG';
                          } else if (response[i].name === "Coruscant") {
                            response[i].landImg = 'http://cdn3.sbnation.com/assets/3475177/GM_E3_Underworld_Vista_Big.jpg';
                            response[i].planetImg = 'http://vignette1.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20130908205521';
                          } else if (response[i].name === "Kamino") {
                            response[i].landImg = 'http://vignette3.wikia.nocookie.net/starwars/images/2/2c/TipocaCity-CC.png/revision/latest?cb=20130505022521';
                            response[i].planetImg = 'http://vignette2.wikia.nocookie.net/swfanon/images/6/6b/Kamino_planet.jpg/revision/20070218002840';
                          } else if (response[i].name === "Geonosis") {
                            response[i].landImg = 'http://img.lum.dolimg.com/v1/images/databank_geonosis_01_169_1d04e086.jpeg?region=0%2C0%2C1560%2C878&width=768';
                            response[i].planetImg = 'http://41.media.tumblr.com/d57f1cdcd9a17ea97c35023784dae89b/tumblr_no39yl40x51utlj9oo1_1280.jpg';
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
                });
        };

        $scope.getParseData();

        $scope.scrollTo = function(id) {
            $anchorScroll(id);
        };

        $scope.sound = ngAudio.load("../sounds/chewy_roar.mp3");


    });
