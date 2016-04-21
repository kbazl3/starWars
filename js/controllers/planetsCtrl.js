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
                        response[j].summary = "Dagobah was located in the Sluis sector of the Outer Rim Territories. Despite the fact that it was located near the Rimma Trade Route, it was reachable only by obscure hyperlanes. The swamp-covered surface of Dagobah was a harsh, humid, swampy planet, mostly covered in shallow marshland, interspersed with stifling forests and at least one cave. There were very few truly open bodies of water on the planet: the water supply was thinly invested throughout the planet's main habitat, swampland, although there were vast expanses of mud fields. Dagobah was home to many creatures, such as bogwings, dragonsnakes, nudj, sleens, vine snakes, and swamp slugs. Examples of flora included the Adder moss, the hassling, Gnarltree and Meat flower. The planet was devoid of any advanced civilization.";
                    } else if (response[j].name === "Bespin") {
                        response[j].summary = "Bespin was a gas giant in the Bespin system of the Anoat sector on the Ison Corridor in the Greater Javin region of the Outer Rim Territories. It was also a major source of tibanna gas, which was refined for production and transport in numerous mining operations including Cloud City and Tibannopolis. It was home to several million individuals, including Humans, Ugnaughts, and Lutrillians.";
                    } else if (response[j].name === "Endor") {
                        response[j].summary = "Endor (also known as the Forest Moon of Endor and the Sanctuary Moon) was a small forested moon orbiting the gas giant planet of Endor and was the farthest moon away from it. An enchanted world, Endor was notable for being the native home of the Ewoks, and being the location of the Battle of Endor, which would result in the downfall of the Empire and the first death of the Emperor Palpatine. Due to its proximity to the Unknown Regions, Endor was a relatively quiet planetoid both prior to and after the battle. Endor was also known for the vast amount of sentient species it supported, from baseline to exotic. This was largely due to the unusually large number of shipwrecks Endor experienced; it has been compared to a desert island in space.";
                    } else if (response[j].name === "Naboo") {
                        response[j].summary = "Naboo was a planet that was the sector capital of the Chommell sector near the Outer Rim territories. It was a largely unspoiled world with large plains, swamps and seas. It was mostly known as the homeworld of notable historical figures who played major roles in the downfall of the Galactic Republic and the rise of the Galactic Empire, namely Padmé Amidala, Emperor Palpatine and Jar Jar Binks.";
                    } else if (response[j].name === "Coruscant") {
                        response[j].summary = "Coruscant, originally called Notron, also known as Imperial Center or the Queen of the Core, was a planet located in the Galactic Core. It was generally agreed that Coruscant was, during most of galactic history, the most politically important world in the galaxy. At various times, it was the capital of the Galactic Republic, the Galactic Empire, the New Republic, the Yuuzhan Vong empire, the Galactic Alliance, very briefly the Fel Empire, Darth Krayt's Galactic Empire, and the Galactic Federation Triumvirate. In controlling Coruscant, these governments controlled most of the galaxy in the process. Over the centuries, Coruscant had developed into an ecumenopolis, with a total of 5,127 levels of city built up from the crust by the time of the Clone Wars. The actual planet-wide metropolis of Coruscant was called Galactic City. Under the Galactic Republic, the names Republic City or the City of Spires were also used to reference the city. It was also called Imperial City under the Galactic Empire, and New Republic City under the New Republic. However, in practice, Galactic City and its other names were sometimes applied to the Senate District, the central government center and de facto capital of Coruscant. Under the Yuuzhan Vong, the city and planet were both referred to as Yuuzhan'tar.";
                    } else if (response[j].name === "Kamino") {
                        response[j].summary = "Kamino, also known as the Planet of Storms, was the watery world where the Clone Army of the Galactic Republic was created, as well as the Kamino Home Fleet. It was inhabited by a race of tall, elegant beings called the Kaminoans, who kept to themselves and were known for their cloning technology. Kamino was located just south of the Rishi Maze, and was governed by the Ruling Council, headed by the Prime Minister.";
                    } else if (response[j].name === "Geonosis") {
                        response[j].summary = "Geonosis, called Geonosia by some natives, was the home planet of the Geonosians. The desert world was the Confederacy's first capital, hosting its major droid foundries. It was the site of the Battle of Geonosis, the opening conflict of the Clone Wars, in 22 BBY.";
                    } else if (response[j].name === "Utapau") {
                          response[j].summary = "Utapau was a remote planet in the Outer Rim Territories' Utapau system that was filled with enormous sinkholes. Its native inhabitants were the Pau'ans and the Utai, while tribes of Amani also immigrated to the world. It was the location of the Battle of Utapau during the Clone Wars.";
                    } else if (response[j].name === "Mustafar") {
                            response[j].summary = "Mustafar was a small volcanic planet located in the Mustafar system, situated between two gas giants in the Outer Rim Territories that was aligned with the Confederacy of Independent Systems during the Clone Wars and later taken over by the Galactic Empire after the Techno Union was nationalized at the conclusion of the conflict.";
                    } else if (response[j].name === "Kashyyyk") {
                          response[j].summary = "Kashyyyk (occasionally spelled Kashyk) was a wroshyr tree-covered planet located in the southwestern quadrant of the galaxy and the homeworld of the Wookiee species. It was a member of the Galactic Republic and after the Clone Wars endured enslavement under the Galactic Empire.";
                    } else if (response[j].name === "Polis Massa") {
                            response[j].summary = "Polis Massa was an asteroid field located in the Subterrel sector of the Outer Rim Territories, far from any major hyperspace lanes. At some point, Polis Massa was a planet located within the system of the same name, though it was destroyed by a mysterious cataclysm. The Archaeological Research Council of Kallidah established a base on one asteroid in order to excavate its surface to study the reasons behind the planet's destruction. The Kallidahin eventually came to be known as Polis Massans.";
                    } else if (response[j].name === "Mygeeto") {
                              response[j].summary = "Mygeeto was a frigid crystalline planet located in the Outer Rim Territories that was the homeworld of the Lurmen species. During the Outer Rim Sieges Mygeeto was aligned with the Confederacy of Independent Systems and hosted the site of a battle between the Galactic Republic and Separatists as the war drew to an end. Following the end of the war, the Empire took over the planet and had a battle sometime before the Battle of Yavin involving the Rebel Alliance's Sixty-First Mobile Infantry during the early stages of the Galactic Civil War.";
                    } else if (response[j].name === "Felucia") {
                          response[j].summary = "Felucia was a colorful, humid jungle planet located in the Felucia system of the Outer Rim. Being a key planet for control of the Perlemian Trade Route, it was the location of several battles between the Galactic Republic and Confederacy of Independent Systems during the Clone Wars, and later at least one Imperial outpost. After the execution of Order 66, Jedi Knight Aayla Secura was executed by Commander Bly and the 327th Star Corps on Felucia.";
                    } else if (response[j].name === "Cato Neimoidia") {
                            response[j].summary = "Cato Neimoidia was a planet in the galactic Colonies region. It was a colony world of the Neimoidians and the base of operations for the Trade Federation. Much of the world was covered in a persistent fog, while the bridge cities of Cato Neimoidia were suspended above the planet's surface on bridges anchored between giant rock arches. On top of these formations thrived large fields and forests.";
                    } else if (response[j].name === "Saleucami") {
                          response[j].summary = "Saleucami was a planet located in the Outer Rim Territories. During the Clone Wars, its inhabitants wished to stay out of the conflict, though war would eventually reach the backwater planet. Although Republic forces were able to drive the Separatist from Saleucami, it became the site for one of the final battles of the war";
                    } else if (response[j].name === "Stewjon") {
                            response[j].summary = "The name of Obi-Wan Kenobi's homeworld was coined by George Lucas, the creator of Star Wars. At the Celebration V convention in Orlando, Florida, comedian and talk-show host Jon Stewart interviewed Lucas, and Stewart asked for the name of Obi-Wan Kenobi's home planet. Lucas jokingly replied that it was Stewjon, a tuckerization of Stewart's name. The official StarWars.com Encyclopedia entry on Obi-Wan Kenobi later listed Stewjon as Kenobi's home planet.";
                    } else if (response[j].name === "Eriadu") {
                              response[j].summary = "Eriadu was a planet in the Outer Rim controlled by the Galactic Empire as well as the home of Grand Moff Tarkin and his family. In the years before the Galactic Civil War, Eris Harro, HoloNet News Bureau Chief held office on the planet. After reporting the progress of the industrial and mining sectors of the planet Lothal to the Imperial Capitol, the planet's Governor Arihnda Pryce extended an invitation to meet with government officials on Eriadu.";
                    } else if (response[j].name === "Corellia") {
                          response[j].summary = "Corellia was located in the Core Worlds. It was known for its ace pilots and large starships. Vessels such as the Millennium Falcon and Imperial starships were built on Corellia. At some point in the Imperial era, an organization known as the Corellian Resistance operated on the planet, fighting against the Galactic Empire. One of their members, Miru Nadrinakar, attempted to warn them of an upcoming crackdown.";
                    } else if (response[j].name === "Rodia") {
                            response[j].summary = "Rodia was a remote swampy, jungle planet and the homeworld of the Rodians. Cities on Rodia were encased with domed environmental shields that allowed entry and exit for vehicles and vessels.";
                    } else if (response[j].name === "Nal Hutta") {
                          response[j].summary = "Nal Hutta was a hot, swampy planet located in the galaxy's Outer Rim Territories that was the homeworld of the Hutt species. The planet was a haven for the criminal elements of the galaxy, located far from galactic authorities. Its terrain was covered with numerous bogs, and its climate often consisted of greasy rains.";
                    } else if (response[j].name === "Dantooine") {
                            response[j].summary = "Dantooine was a planet in the Outer Rim Territories within the Galactic Republic and later the Galactic Empire.";
                    } else if (response[j].name === "Bestine IV") {
                              response[j].summary = "Bestine IV, or simply Bestine, was an aquacultural planet in the Inner Rim, along the Corellian Trade Spine. Nearly all of its surface was covered by a vast ocean, but there were many rugged islands spread across the planet. The original population struggled for years atop the planet's Island Spires to create an island paradise. As time passed, the planet was more widely known for its ship repair and construction industry, which eventually caught on with the Galactic Empire, who constructed large naval shipyards.";
                    } else if (response[j].name === "Ord Mantell") {
                          response[j].summary = "Ord Mantell was a planet that housed a base of operations for the criminal syndicate Black Sun during the Clone Wars. A battle was fought on the planet between the Shadow Collective, in which Black Sun was a member, and the Confederacy of Independent Systems. During the Galactic Civil War, Han Solo and the Rebel Alliance encountered a bounty hunter on Ord Mantell.";
                    } else if (response[j].name === "planet") {
                            response[j].summary = "";
                    } else if (response[j].name === "Trandosha") {
                          response[j].summary = "Trandosha, also known as Dosha, was an arboreal planet located in the galaxy's Mid Rim and the homeworld of the Trandoshan species. It was orbited by Wasskah, a verdant moon, and was positioned in the same star system as Kashyyyk, the homeworld of the Wookiees, a species with whom the Trandoshans had a fierce rivalry.";
                    } else if (response[j].name === "Socorro") {
                            response[j].summary = "Socorro was the homeworld of Lando Calrissian, Baron Administrator of Cloud City.";
                    } else if (response[j].name === "Mon Cala") {
                              response[j].summary = "Mon Cala, also known as Mon Calamari or Dac, was an oceanic planet located in the Mon Calamari system, a binary star system positioned in the Calamari sector of the galaxy's Outer Rim Territories.";
                    } else if (response[j].name === "Chandrila") {
                          response[j].summary = "Chandrila was a planet in the Core Worlds of the galaxy. The female human Mon Mothma hailed from Chandrila, and represented her homeworld in the Galactic Republic's Senate.";
                    } else if (response[j].name === "Sullust") {
                            response[j].summary = "Sullust was a planet located in the Sullust system of the Outer Rim Territories that was home to the Sullustan species.";
                    } else if (response[j].name === "Toydaria") {
                          response[j].summary = "Toydaria was the homeworld of the Toydarian species located in Hutt Space. In the last decades of the Galactic Republic, the planet was governed by a monarchy.";
                    } else if (response[j].name === "Malastare") {
                            response[j].summary = "Malastare was a forested planet located in the Malastare system of the Mid Rim. Its core was home to large reserves of Malastarian fuel, a toxic fuel found only on Malastare. It was the homeworld of the Dug species, though it was represented by the Gran species in the Galactic Senate.";
                    } else if (response[j].name === "Dathomir") {
                              response[j].summary = "Dathomir was a remote, neutral planet and the home of the Nightsisters. The planet, lit red by its central star, had numerous continents that were overrun with vegetation, forests, and swamplands. ";
                    } else if (response[j].name === "Ryloth") {
                          response[j].summary = "Ryloth was a planet in the Ryloth system of the Outer Rim Territories, and the homeworld of the Twi'lek species. Its terrain varied, filled with jungles, mesas, valleys, and volcanoes, and had an atmosphere breathable for Twi'leks and humans alike.";
                    } else if (response[j].name === "Aleen Minor") {
                            response[j].summary = "Aleen Minor, also known as Aleen, was the temperate homeworld of the Aleena, located in the Inner Rim Territories. The Aleen Classic, a popular podracing event, was held annually on the planet. Famous Aleena podracer Ratts Tyerell and Jedi Master Kazdan Paratus were natives of Aleen.";
                    } else if (response[j].name === "Vulpter") {
                          response[j].summary = "Vulpter was the third planet of the Vulpter system in the Deep Core, and the homeworld of the sentient Vulptereen species. Originally an unspoiled world with a wide array of flora and fauna, Vulpter was transformed over the millennia into a massively polluted globe covered in waste and factories.";
                    } else if (response[j].name === "Troiken") {
                            response[j].summary = "Troiken was a planet that was the homeworld of the Xexto species. Slingshots of various kinds were popular on the Xexto homeworld, since the aliens' extra sets of arms made those weapons especially convenient to use. Gasgano, a famous male Xexto podracer pilot, was from Troiken, as was the male Xexto pawnshop owner and pickpocket Ferpil Wallaway.";
                    } else if (response[j].name === "Mon Cala") {
                              response[j].summary = "Mon Cala, also known as Mon Calamari or Dac, was an oceanic planet located in the Mon Calamari system, a binary star system positioned in the Calamari sector of the galaxy's Outer Rim Territories.[";
                    } else if (response[j].name === "Chandrila") {
                          response[j].summary = "Chandrila was a planet in the Core Worlds of the galaxy. The female human Mon Mothma hailed from Chandrila, and represented her homeworld in the Galactic Republic's Senate.";
                    } else if (response[j].name === "Sullust") {
                            response[j].summary = "Sullust was a planet located in the Sullust system of the Outer Rim Territories that was home to the Sullustan species.";
                    } else if (response[j].name === "Toydaria") {
                          response[j].summary = "Toydaria was the homeworld of the Toydarian species located in Hutt Space. In the last decades of the Galactic Republic, the planet was governed by a monarchy. ";
                    } else if (response[j].name === "Malastare") {
                            response[j].summary = "Malastare was a forested planet located in the Malastare system of the Mid Rim. Its core was home to large reserves of Malastarian fuel, a toxic fuel found only on Malastare. It was the homeworld of the Dug species, though it was represented by the Gran species in the Galactic Senate.";
                    } else if (response[j].name === "Dathomir") {
                              response[j].summary = "Dathomir was a remote, neutral planet and the home of the Nightsisters. The planet, lit red by its central star, had numerous continents that were overrun with vegetation, forests, and swamplands.";
                    } else if (response[j].name === "Ryloth") {
                          response[j].summary = "Ryloth was a planet in the Ryloth system of the Outer Rim Territories, and the homeworld of the Twi'lek species. Its terrain varied, filled with jungles, mesas, valleys, and volcanoes, and had an atmosphere breathable for Twi'leks and humans alike. A forest covered its equator, filled with dangerous predators. Given the varied and dangerous terrain, Twi'leks lived in caves underground where it was safer.";
                    } else if (response[j].name === "Aleen Minor") {
                            response[j].summary = "Aleen Minor, also known as Aleen, was the temperate homeworld of the Aleena, located in the Inner Rim Territories. The Aleen Classic, a popular podracing event, was held annually on the planet. Famous Aleena podracer Ratts Tyerell and Jedi Master Kazdan Paratus were natives of Aleen.";
                    } else if (response[j].name === "Vulpter") {
                          response[j].summary = "Vulpter was the third planet of the Vulpter system in the Deep Core, and the homeworld of the sentient Vulptereen species. Originally an unspoiled world with a wide array of flora and fauna, Vulpter was transformed over the millennia into a massively polluted globe covered in waste and factories.";
                    } else if (response[j].name === "Troiken") {
                            response[j].summary = "Troiken was a planet that was the homeworld of the Xexto species. Slingshots of various kinds were popular on the Xexto homeworld, since the aliens' extra sets of arms made those weapons especially convenient to use. Gasgano, a famous male Xexto podracer pilot, was from Troiken, as was the male Xexto pawnshop owner and pickpocket Ferpil Wallaway.";
                    } else if (response[j].name === "Tund") {
                              response[j].summary = "Tund was a hidden world located in the mysterious Tund system. It was the homeworld of the Toong Podracer pilot Ben Quadinaros.";
                    } else if (response[j].name === "Haruun Kal") {
                          response[j].summary = "Haruun Kal was a planet in the galaxy. This planet was the homeworld of the powerful Jedi Master Mace Windu. Haruun Kal was the site of a battle during the Clone Wars.";
                    } else if (response[j].name === "Cerea") {
                            response[j].summary = "Cerea was the homeworld of the Cereans. It was the birthplace of Jedi Master Ki-Adi-Mundi, a member of the Jedi High Council during the waning days of the Galactic Republic.";
                    } else if (response[j].name === "Glee Anselm") {
                          response[j].summary = "Glee Anselm was an ocean planet that was homeworld of the Nautolan species. Star Tours, a tour company, offered vacation tours of Glee Anselm during the Clone Wars.";
                    } else if (response[j].name === "Iridonia") {
                            response[j].summary = "Iridonia was a planet that was the homeworld of the near-human Zabrak species. Jedi Master Obi-Wan Kenobi mistakenly believed the Dathomirian Zabrak Darth Maul was born there, when in fact he was born on the planet Dathomir, which was home to a tribal group of male Zabrak known as the Nightbrothers, while those from Iridonia were known as Iridonian Zabraks. It was the homeworld of the Zabrak bounty hunter Sugi and her niece Jas Emari, who considered the planet to be brutal and unforgiving.";
                    } else if (response[j].name === "Tholoth") {
                              response[j].summary = "Tholoth was the homeworld of the Tholothian Jedi Masters Stass Allie and Adi Gallia, both of whom fought and died during the Clone Wars.";
                    } else if (response[j].name === "Iktotch") {
                          response[j].summary = "Iktotch was the homeworld of the Iktotchi Jedi Master Saesee Tiin.";
                    } else if (response[j].name === "Quermia") {
                            response[j].summary = "Quermia was a planet that was the homeworld of the Quermian species. Yarael Poof, a male Quermian Jedi Master who served on the Jedi High Council during the final years of the Galactic Republic, hailed from this planet.";
                    } else if (response[j].name === "Dorin") {
                          response[j].summary = "Dorin was a planet that was the homeworld of the Kel Dor species. Its helium-rich environment meant that they were forced to rely on rebreathers to survive off-world, as oxygen was deadly to them. During the Clone Wars, Jedi General Anakin Skywalker and Commander Ahsoka Tano routed Separatist forces near Dorin.";
                    } else if (response[j].name === "Champala") {
                            response[j].summary = "Champala was the home planet of Mas Amedda, Vice Chancellor of the Galactic Republic and later Grand Vizier of the Galactic Empire";
                    } else if (response[j].name === "Mirial") {
                              response[j].summary = "Mirial was the homeworld of the near-human Mirialan species including the Jedi Master Luminara Unduli and her Padawan Barriss Offee. Unduli honored the traditions of the world by selecting a fellow Mirialan as her apprentice.";
                    } else if (response[j].name === "Serenno") {
                          response[j].summary = "Serenno was a planet covered in lush forests, mountains and plains. During the Clone Wars, it was aligned with the Confederacy of Independent Systems, the leader of which was the Serenno-born Count Dooku.";
                    } else if (response[j].name === "Concord Dawn") {
                            response[j].summary = "Concord Dawn was the homeworld of notorious bounty hunters Jango Fett and Rako Hardeen, with the latter being nicknamed the Marksman of Concord Dawn. At some point, the planet was devastated during a war with a large chunk of its southern hemisphere being wiped out.";
                    } else if (response[j].name === "Zolan") {
                          response[j].summary = "Zolan was first mentioned in Star Wars Legends in The University of Sanbra Guide to Intelligent Life: The Clawdites, an article in Star Wars Gamer 10 written by Craig Robert Carey, Jason Fry and Daniel Wallace. The world was confirmed as canon by the reference book Ultimate Star Wars, which was released in 2015, April 28.";
                    } else if (response[j].name === "Ojom") {
                            response[j].summary = "Ojom was the homeworld of the Besalisk chef Dexter Jettster and the Besalisk Jedi Master Pong Krell.";
                    } else if (response[j].name === "Skako") {
                              response[j].summary = "Skako was a planet that was the homeworld of the Skakoan species. Its unique atmospheric pressure required Skakoans to wear pressure suits to survive off-world; otherwise, they would explode when exposed to standard oxygen-based atmospheres.";
                    } else if (response[j].name === "Muunilinst") {
                            response[j].summary = "Muunilinst (pronounced MYOON-il-ist, with a silent n near the end in Galactic Basic), nicknamed Moneylend, was the temperate, mineral-rich Muun homeworld and the headquarters of the InterGalactic Banking Clan. It was located on the Braxant Run. It was a member of the Confederacy of Independent Systems under Chairman San Hill.";
                    } else if (response[j].name === "Shili") {
                              response[j].summary = "Shili was a planet that was the homeworld of the sentient Togruta species. Jedi Master Shaak Ti and former Padawan Ahsoka Tano of the Jedi Order were Togruta who hailed from this world.";
                    } else if (response[j].name === "Kalee") {
                            response[j].summary = "Kalee was a planet that was the homeworld of the Kaleesh species. Grievous, a male Kaleesh warlord, was from this world.";
                    } else if (response[j].name === "Umbara") {
                              response[j].summary = "Umbara, known as the Shadow World due to the lack of sunlight on its surface, was a planet located within the Expansion Region. Resting within the occluding Ghost Nebula, Umbara was cut off from the rest of the galaxy. ";
                    } else if (response[j].name === "Tatooine") {
                            response[j].summary = "Tatooine was a sparsely inhabited desert planet located in the galaxies Outer Rim Territories. It would serve as the homeworld to the influential Anakin and Luke Skywalker, who would go on to shape galactic history. Part of a binary star system, the planet was oppressed by a scorching sun, resulting in the world to lack the necessary surface water to sustain large populations. As a result, many residents of the planet instead drew water from the atmosphere via moisture farms.";
                    } else if (response[j].name === "Jakku") {
                              response[j].summary = "Jakku was a desert planet located in a remote section of the Western Reaches. Though considered by many within the galaxy to be distant and relatively worthless, the planet became home to important events that would shape galactic history.";
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
