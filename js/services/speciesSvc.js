angular.module('swapiApp')
    .service('speciesSvc', function($http, $q, swapi) {

        this.getSpecies = function() {
            var dfd = $q.defer();
            var speciesObj = [];

            swapi.species.all()
            .then(function(response) {
                var r = response.results

                for (var i = 0; i < r.length; i++) {
                    if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://vignette4.wikia.nocookie.net/swtor/images/5/53/Nemro-the-hutt.png/revision/latest?cb=20130519161828",
                            data: r[i]
                        })
                    } else if (r[i].name === "Hutt") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Yoda's species") {
                        speciesObj.push({
                            speciesImg: "http://i2.mirror.co.uk/incoming/article5630207.ece/ALTERNATES/s615b/Yoda.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Trandoshan") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_trandoshan_01_169_26a8a28f.jpeg?region=0%2C0%2C1560%2C878&width=768",
                            data: r[i]
                        })
                    } else if (r[i].name === "Mon Calamari") {
                        speciesObj.push({
                            speciesImg: "http://vignette3.wikia.nocookie.net/starwars/images/a/a9/Hidden_Cache-EoD.jpg/revision/latest?cb=20140128170910",
                            data: r[i]
                        })
                    } else if (r[i].name === "Ewok") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_ewok_01_169_747db03a.jpeg?region=0%2C0%2C1560%2C878&width=768",
                            data: r[i]
                        })
                    } else if (r[i].name === "Sullustan") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_niennunb_01_169_31eccf40.jpeg?region=0%2C49%2C1560%2C780",
                            data: r[i]
                        })
                    } else if (r[i].name === "Gungan") {
                        speciesObj.push({
                            speciesImg: "http://vignette4.wikia.nocookie.net/starwars/images/6/61/Gungans.png/revision/latest?cb=20130122235412",
                            data: r[i]
                        })
                    } else if (r[i].name === "Neimodian") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_neimoidian_01_169_f4d61512.jpeg?region=0%2C0%2C1560%2C878&width=768",
                            data: r[i]
                        })
                    } else if (r[i].name === "Toydarian") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_toydarian_01_169_748d4d11.jpeg?region=0%2C0%2C1560%2C780",
                            data: r[i]
                        })
                    } else if (r[i].name === "Dug") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_dug_01_169_a36b6959.jpeg?region=0%2C0%2C1560%2C878&width=768",
                            data: r[i]
                        })
                    } else if (r[i].name === "Twi'lek") {
                        speciesObj.push({
                            speciesImg: "http://comicvine.gamespot.com/api/image/scale_super/3747053-7620403793-15620.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Aleena") {
                        speciesObj.push({
                            speciesImg: "http://media.bigshinyrobot.com/uploads/2011/10/mercy-mission-2.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Vulptereen") {
                        speciesObj.push({
                            speciesImg: "http://vignette3.wikia.nocookie.net/starwars/images/6/67/Dud_Bolt_head.jpg/revision/latest?cb=20110723171120&path-prefix=nl",
                            data: r[i]
                        })
                    } else if (r[i].name === "Toong") {
                        speciesObj.push({
                            speciesImg: "http://vignette1.wikia.nocookie.net/starwars/images/2/25/Niai_Fieso.png/revision/latest?cb=20120727172500",
                            data: r[i]
                        })
                    } else if (r[i].name === "Cerean") {
                        speciesObj.push({
                            speciesImg: "http://vignette2.wikia.nocookie.net/starwars/images/7/72/KiAdiMundiV21024.jpg/revision/latest?cb=20110128205749&path-prefix=cs",
                            data: r[i]
                        })
                    } else if (r[i].name === "Nautolan") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_kitfisto_01_169_21517d01.jpeg?region=0%2C49%2C1560%2C780",
                            data: r[i]
                        })
                    } else if (r[i].name === "Zabrak") {
                        speciesObj.push({
                            speciesImg: "http://vignette2.wikia.nocookie.net/starwars/images/2/27/Nightbrothers.png/revision/latest?cb=20130522021316",
                            data: r[i]
                        })
                    } else if (r[i].name === "Tholothian") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_katooni_01_169_9d10cbac.jpeg?region=0%2C0%2C1560%2C878&width=768",
                            data: r[i]
                        })
                    } else if (r[i].name === "Xexto") {
                        speciesObj.push({
                            speciesImg: "http://photonovelalliance.com/pn/GOPAJ/ep2/GOPAJ_Episode_ii_004.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Iktotchi") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_toydarian_01_169_748d4d11.jpeg?region=0%2C0%2C1560%2C780",
                            data: r[i]
                        })
                    } else if (r[i].name === "Kel Dor") {
                        speciesObj.push({
                            speciesImg: "http://vignette3.wikia.nocookie.net/starwars/images/f/f3/Force_Absorb_JATM.jpg/revision/latest?cb=20090602011941",
                            data: r[i]
                        })
                    } else if (r[i].name === "Chagrian") {
                        speciesObj.push({
                            speciesImg: "http://vignette1.wikia.nocookie.net/swtor/images/3/35/Chagrian.png/revision/latest?cb=20100914022844",
                            data: r[i]
                        })
                    } else if (r[i].name === "Geonosian") {
                        speciesObj.push({
                            speciesImg: "http://vignette2.wikia.nocookie.net/republiccommando/images/5/5f/Geonosian_Warrior.jpg/revision/latest?cb=20110208162006",
                            data: r[i]
                        })
                    } else if (r[i].name === "Mirialan") {
                        speciesObj.push({
                            speciesImg: "http://img07.deviantart.net/36ec/i/2012/133/f/0/starwars_old_republic__mirialan_sisters_by_serathus-d4zmh2g.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Clawdite") {
                        speciesObj.push({
                            speciesImg: "http://vignette2.wikia.nocookie.net/starwarsmush/images/f/fd/Alien_snp_Clawdite.jpg/revision/latest?cb=20090213205100",
                        })
                    } else if (r[i].name === "Besalisk") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/databank_besalisk_01_169_875a3eee.jpeg?region=0%2C0%2C1560%2C878&width=768",
                            data: r[i]
                        })
                    } else if (r[i].name === "Kaminoan") {
                        speciesObj.push({
                            speciesImg: "http://img.lum.dolimg.com/v1/images/kaminoan-main-image_8f582a48.jpeg?region=125%2C0%2C1327%2C663",
                            data: r[i]
                        })
                    } else if (r[i].name === "Skakoan") {
                        speciesObj.push({
                            speciesImg: "http://vignette2.wikia.nocookie.net/starwars/images/a/a6/Unknown_skakoan_elder.png/revision/latest?cb=20090814205642",
                            data: r[i]
                        })
                    } else if (r[i].name === "Muun") {
                        speciesObj.push({
                            speciesImg: "http://vignette2.wikia.nocookie.net/starwars/images/a/a6/Unknown_skakoan_elder.png/revision/latest?cb=20090814205642",
                            data: r[i]
                        })
                    } else if (r[i].name === "Togruta") {
                        speciesObj.push({
                            speciesImg: "http://vignette4.wikia.nocookie.net/starwars/images/1/11/ShaatTi-SWE.png/revision/latest/scale-to-width-down/216?cb=20110917020437",
                            data: r[i]
                        })
                    } else if (r[i].name === "Pau'an") {
                        speciesObj.push({
                            speciesImg: "http://vignette3.wikia.nocookie.net/swgalaxyatwar/images/c/ce/PauAn.jpg/revision/latest?cb=20100623220701",
                            data: r[i]
                        })
                    } else if (r[i].name === "Wookiee") {
                        speciesObj.push({
                            speciesImg: "http://vignette4.wikia.nocookie.net/starwars/images/d/d1/WookieeWarriors.jpg/revision/latest?cb=20070120142446",
                            data: r[i]
                        })
                    } else if (r[i].name === "Droid") {
                        speciesObj.push({
                            speciesImg: "http://41.media.tumblr.com/3ada6daf9cb6e3b5c8b4c22590252f27/tumblr_nfx652NE1G1r88w3eo1_500.jpg",
                            data: r[i]
                        })
                    } else if (r[i].name === "Human") {
                        speciesObj.push({
                            speciesImg: "http://vignette3.wikia.nocookie.net/starwars/images/d/d6/Human_NEGAS.jpg/revision/latest?cb=20090709062312",
                            data: r[i]
                        })
                    } else if (r[i].name === "Rodian") {
                        speciesObj.push({
                            speciesImg: "http://www.hasbro.com/common/productimages/en_US/c9ecd2d75056900b10e1d6163172ef81/converteddee82532cb28e8e2b3680cc9334290afd0df6218.jpg",
                            data: r[i]
                        })
                    }
                }
                dfd.resolve(speciesObj);
            });
            return dfd.promise;
        };
    });
