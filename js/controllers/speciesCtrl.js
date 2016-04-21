angular.module('swapiApp')
    .controller('speciesCtrl', function($scope, speciesSvc, $anchorScroll) {

        speciesSvc.getSpecies()
            .then(function(response) {
                for (var i = 0; i < response.length; i++) {
                    if (response[i].name === "Rodian") {
                        response[i].img = "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg";
                    }
                    if (response[i].name === "Hutt") {
                        response[i].img = "http://vignette4.wikia.nocookie.net/swtor/images/5/53/Nemro-the-hutt.png/revision/latest?cb=20130519161828";
                    }
                    if (response[i].name === "Yoda's species") {
                        response[i].img = "http://i2.mirror.co.uk/incoming/article5630207.ece/ALTERNATES/s615b/Yoda.jpg";
                    }
                    if (response[i].name === "Trandoshan") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_trandoshan_01_169_26a8a28f.jpeg?region=0%2C0%2C1560%2C878&width=768";
                    }
                    if (response[i].name === "Mon Calamari") {
                        response[i].img = "http://vignette3.wikia.nocookie.net/starwars/images/a/a9/Hidden_Cache-EoD.jpg/revision/latest?cb=20140128170910";
                    }
                    if (response[i].name === "Ewok") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_ewok_01_169_747db03a.jpeg?region=0%2C0%2C1560%2C878&width=768";
                    }
                    if (response[i].name === "Sullustan") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_niennunb_01_169_31eccf40.jpeg?region=0%2C49%2C1560%2C780";
                    }
                    if (response[i].name === "Gungan") {
                        response[i].img = "http://vignette4.wikia.nocookie.net/starwars/images/6/61/Gungans.png/revision/latest?cb=20130122235412";
                    }
                    if (response[i].name === "Neimodian") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_neimoidian_01_169_f4d61512.jpeg?region=0%2C0%2C1560%2C878&width=768";
                    }
                    if (response[i].name === "Toydarian") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_toydarian_01_169_748d4d11.jpeg?region=0%2C0%2C1560%2C780";
                    }
                    if (response[i].name === "Dug") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_dug_01_169_a36b6959.jpeg?region=0%2C0%2C1560%2C878&width=768";
                    }
                    if (response[i].name === "Twi'lek") {
                        response[i].img = "http://comicvine.gamespot.com/api/image/scale_super/3747053-7620403793-15620.jpg";
                    }
                    if (response[i].name === "Aleena") {
                        response[i].img = "http://media.bigshinyrobot.com/uploads/2011/10/mercy-mission-2.jpg";
                    }
                    if (response[i].name === "Vulptereen") {
                        response[i].img = "http://vignette3.wikia.nocookie.net/starwars/images/6/67/Dud_Bolt_head.jpg/revision/latest?cb=20110723171120&path-prefix=nl";
                    }
                    if (response[i].name === "Toong") {
                        response[i].img = "http://vignette1.wikia.nocookie.net/starwars/images/2/25/Niai_Fieso.png/revision/latest?cb=20120727172500";
                    }
                    if (response[i].name === "Cerean") {
                        response[i].img = "http://vignette2.wikia.nocookie.net/starwars/images/7/72/KiAdiMundiV21024.jpg/revision/latest?cb=20110128205749&path-prefix=cs";
                    }
                    if (response[i].name === "Nautolan") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_kitfisto_01_169_21517d01.jpeg?region=0%2C49%2C1560%2C780";
                    }
                    if (response[i].name === "Zabrak") {
                        response[i].img = "http://vignette2.wikia.nocookie.net/starwars/images/2/27/Nightbrothers.png/revision/latest?cb=20130522021316";
                    }
                    if (response[i].name === "Tholothian") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_katooni_01_169_9d10cbac.jpeg?region=0%2C0%2C1560%2C878&width=768";
                    }
                    if (response[i].name === "Xexto") {
                        response[i].img = "http://photonovelalliance.com/pn/GOPAJ/ep2/GOPAJ_Episode_ii_004.jpg";
                    }
                    if (response[i].name === "Iktotchi") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_toydarian_01_169_748d4d11.jpeg?region=0%2C0%2C1560%2C780";
                    }
                    // if (response[i].name === "Quermian") {
                    //     response[i].img = "http://static2.comicvine.com/uploads/scale_super/7/73712/1755254-yaraelpoofwallpaper.jpg";
                    // }
                    if (response[i].name === "Kel Dor") {
                        response[i].img = "http://vignette3.wikia.nocookie.net/starwars/images/f/f3/Force_Absorb_JATM.jpg/revision/latest?cb=20090602011941";
                    }
                    if (response[i].name === "Chagrian") {
                        response[i].img = "http://vignette1.wikia.nocookie.net/swtor/images/3/35/Chagrian.png/revision/latest?cb=20100914022844";
                    }
                    if (response[i].name === "Geonosian") {
                        response[i].img = "http://vignette2.wikia.nocookie.net/republiccommando/images/5/5f/Geonosian_Warrior.jpg/revision/latest?cb=20110208162006";
                    }
                    if (response[i].name === "Mirialan") {
                        response[i].img = "http://img07.deviantart.net/36ec/i/2012/133/f/0/starwars_old_republic__mirialan_sisters_by_serathus-d4zmh2g.jpg";
                    }
                    if (response[i].name === "Clawdite") {
                        response[i].img = "http://vignette2.wikia.nocookie.net/starwarsmush/images/f/fd/Alien_snp_Clawdite.jpg/revision/latest?cb=20090213205100";
                    }
                    if (response[i].name === "Besalisk") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/databank_besalisk_01_169_875a3eee.jpeg?region=0%2C0%2C1560%2C878&width=768";
                    }
                    if (response[i].name === "Kaminoan") {
                        response[i].img = "http://img.lum.dolimg.com/v1/images/kaminoan-main-image_8f582a48.jpeg?region=125%2C0%2C1327%2C663";
                    }
                    if (response[i].name === "Skakoan") {
                        response[i].img = "http://vignette2.wikia.nocookie.net/starwars/images/a/a6/Unknown_skakoan_elder.png/revision/latest?cb=20090814205642";
                    }
                    if (response[i].name === "Muun") {
                        response[i].img = "http://vignette2.wikia.nocookie.net/starwars/images/a/a6/Unknown_skakoan_elder.png/revision/latest?cb=20090814205642";
                    }
                    if (response[i].name === "Togruta") {
                        response[i].img = "http://vignette4.wikia.nocookie.net/starwars/images/1/11/ShaatTi-SWE.png/revision/latest/scale-to-width-down/216?cb=20110917020437";
                    }
                    if (response[i].name === "Pau'an") {
                        response[i].img = "http://vignette3.wikia.nocookie.net/swgalaxyatwar/images/c/ce/PauAn.jpg/revision/latest?cb=20100623220701";
                    }
                    if (response[i].name === "Wookiee") {
                        response[i].img = "http://vignette4.wikia.nocookie.net/starwars/images/d/d1/WookieeWarriors.jpg/revision/latest?cb=20070120142446";
                    }
                    if (response[i].name === "Droid") {
                        response[i].img = "http://41.media.tumblr.com/3ada6daf9cb6e3b5c8b4c22590252f27/tumblr_nfx652NE1G1r88w3eo1_500.jpg";
                    }
                    if (response[i].name === "Human") {
                        response[i].img = "http://vignette3.wikia.nocookie.net/starwars/images/d/d6/Human_NEGAS.jpg/revision/latest?cb=20090709062312";
                    }
                }
                $scope.aliens = response;
                console.log(response);
            });
            $scope.scrollTo = function(id) {
                $anchorScroll(id);
            };

    });
