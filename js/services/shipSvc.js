angular.module("swapiApp")
    .service('shipSvc', function($http, $q, swapi) {


        this.getShips = function() {
            var dfd = $q.defer();
            var shipsObj = [];

            swapi.starships.all()
                .then(function(response) {
                    var r = response.results;
                    console.log(r);

                    for (var i = 0; i < r.length; i++) {
                        if (r[i].name === "Death Star") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://i669.photobucket.com/albums/vv60/ANTONIETTA_album/Death-Star-starcopia.png',
                            })
                        } else if (r[i].name === "Sentinel-class landing craft") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette4.wikia.nocookie.net/battlefront/images/8/84/Sentinel_Class.png/revision/latest?cb=20111015190442',
                            })
                        } else if (r[i].name === "Millennium Falcon") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://rview.reviewcentre.com/wp-content/uploads/2010/11/millenium-falcon.gif',
                            })
                        } else if (r[i].name === "Y-wing") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette2.wikia.nocookie.net/battlefront/images/b/bb/Y-Wing_Bomber.png/revision/latest?cb=20110824161613',
                            })
                        } else if (r[i].name === "X-wing") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette4.wikia.nocookie.net/starwars/images/3/3d/X-wing_Ultimate.png/revision/latest?cb=20150508162001',
                            })
                        } else if (r[i].name === "TIE Advanced x1") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette4.wikia.nocookie.net/starwars/images/0/0a/TIE_Advanced_x1_starfighter.png/revision/20150310124249',
                            })
                        } else if (r[i].name === "Executor") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette2.wikia.nocookie.net/battlefront/images/e/ee/Imperator-Class.png/revision/latest?cb=20111010150115',
                            })
                        } else if (r[i].name === "Slave 1") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://cdn.brianstoys.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/a/9/a92770790_dad_sw_ep5_boba_fetts_slave_1_vehicle_life6_medium_72dpi_.png',
                            })
                        } else if (r[i].name === "Imperial shuttle") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://www.firefoxccmods.com/enciclopedia/img/transportes/imperialshuttle.png',
                            })
                        } else if (r[i].name === "EF76 Nebulon-B escort frigate") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'https://t1.rbxcdn.com/9d108d2d2dfff8ba182ef2aa58adb524',
                            })
                        } else if (r[i].name === "Calamari Cruiser") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://www.firefoxccmods.com/enciclopedia/img/ssd/mc108.png',
                            })
                        } else if (r[i].name === "A-wing") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette4.wikia.nocookie.net/battlefront/images/d/d8/A-Wing_Interceptor.png/revision/latest?cb=20110919213513',
                            })
                        } else if (r[i].name === "B-wing") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/256/B-Wing-icon.png',
                            })
                        } else if (r[i].name === "Republic Cruiser") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette2.wikia.nocookie.net/spore/images/d/d5/Arquitens.png/revision/latest?cb=20141027231318',
                            })
                        } else if (r[i].name === "Naboo fighter") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette1.wikia.nocookie.net/swmerchandise/images/1/12/Naboo_Starfighter_(36788)_P.gif/revision/latest/scale-to-width-down/2000?cb=20140602003726',
                            })
                        } else if (r[i].name === "Naboo Royal Starship") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://cliparts.co/cliparts/Xpi/oBe/XpioBeEcE.png',
                            })
                        } else if (r[i].name === "Scimitar") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette2.wikia.nocookie.net/swmerchandise/images/a/a6/Sith_Infiltrator_(36789)_v1_P.gif/revision/latest?cb=20140616200844',
                            })
                        } else if (r[i].name === "J-type diplomatic barge") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://www.spore.com/static/image/500/185/465/500185465814_lrg.png',
                            })
                        } else if (r[i].name === "AA-9 Coruscant freighter") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://www.spore.com/static/image/500/340/564/500340564185_lrg.png',
                            })
                        } else if (r[i].name === "Jedi starfighter") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://cdn.brianstoys.com/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/a/9/a92790790_dad_sw_ep2_anakins_jedi_starfighter_vehicle_life4_medium_72dpi_.png',
                            })
                        } else if (r[i].name === "H-type Nubian yacht") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://static.wixstatic.com/media/e3b77d_bedf67bab7614e48aa174b32d80201b7.png/v1/fill/w_462,h_307,al_c,usm_0.66_1.00_0.01/e3b77d_bedf67bab7614e48aa174b32d80201b7.png',
                            })
                        } else if (r[i].name === "Star Destroyer") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://jbhport.forknightinterac.netdna-cdn.com/wp-content/uploads/2012/05/9915_star_wars_star_destroyer.png',
                            })
                        } else if (r[i].name === "Trade Federation cruiser") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://www.firefoxccmods.com/enciclopedia/img/ssd/cislucrehulkcver02.png',
                            })
                        } else if (r[i].name === "Theta-class T-2c shuttle") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette4.wikia.nocookie.net/battlefront/images/6/6c/Lambda-Class.png/revision/latest?cb=20110825195731',
                            })
                        } else if (r[i].name === "T-70 X-wing fighter") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'https://milnersblog.files.wordpress.com/2015/09/black-squadron-t-70-x-wing-star-wars-the-force-awakens-spacecraft-cut-out-with-transparent-background.png',
                            })
                        } else if (r[i].name === "Rebel transport") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://discoverygc.com/wiki/images/e/ed/Kujira-s.png',
                            })
                        } else if (r[i].name === "Droid control ship") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: "http://vignette1.wikia.nocookie.net/thelastofthedroids/images/1/1d/OOM-85's_Lucrehulk-class.png/revision/latest?cb=20150131225830",
                            })
                        } else if (r[i].name === "Republic Assault ship") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette1.wikia.nocookie.net/swfanon/images/4/41/Bastion-class_Assault_Ship.png/revision/latest?cb=20140719090420',
                            })
                        } else if (r[i].name === "Solar Sailer") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette1.wikia.nocookie.net/fallout/images/c/c4/ReconCraft.png/revision/latest?cb=20110615210501',
                            })
                        } else if (r[i].name === "Naboo star skiff") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://img2.wikia.nocookie.net/__cb20130504013808/halofanon/images/5/5a/Titanic-Class_Star_Cruiser-Colony_Ship.png',
                            })
                        } else if (r[i].name === "Jedi Interceptor") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette1.wikia.nocookie.net/starwars/images/7/74/AnakinsEta2.jpg/revision/latest?cb=20090424014352',
                            })
                        } else if (r[i].name === "arc-170") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette1.wikia.nocookie.net/theclonewiki/images/0/02/ARC170.png/revision/latest?cb=20130321201528',
                            })
                        } else if (r[i].name === "Banking clan frigte") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://orig12.deviantart.net/1078/f/2006/246/e/e/bc_frigate_1x.gif',
                            })
                        } else if (r[i].name === "Belbullab-22 starfighter") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://starcitizenwp.info/wp-content/uploads/2014/02/Banu1-nobg-color.png',
                            })
                        } else if (r[i].name === "V-wing") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette1.wikia.nocookie.net/battlefront/images/c/ca/BTL-B.png/revision/latest?cb=20111015192700',
                            })
                        } else if (r[i].name === "CR90 corvette") {
                            shipsObj.push({
                                data: r[i],
                                shipImg: 'http://vignette2.wikia.nocookie.net/starwars/images/4/47/Rebels-TantiveIVConceptArt-CroppedBackground.png/revision/latest?cb=20150215073634',
                            })
                        }
                    }

                    dfd.resolve(shipsObj);
                });
                return dfd.promise;
        };

    });
