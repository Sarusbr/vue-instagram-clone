import { createStore } from "vuex";

const store = createStore({
    state:{
        popupStatus:false,
        data:[
            {
                "result": {
                    "_id": "632c9c34c28779bab2be348e",
                    "profilePhoto": "https://i.ibb.co/dbWjdV0/44884218-345707102882519-2446069589734326272-n.jpg",
                    "name": "batuhan asd",
                    "password": "asd",
                    "email": "asd@gmail.com",
                    "username": "asd",
                    "bio": "The Admin",
                    "website": "The Website",
                    "postsCount": 0,
                    "followersCount": 0,
                    "folowingCount": 0,
                    "posts": []
                }
            },
            {
                "resultAllUsers": [
                    {
                        "_id": "632c0b9ecd4b079d803d9556",
                        "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                        "name": "Jeff Bezos",
                        "password": "jef123",
                        "email": "jeffbezos@amazon.com",
                        "username": "jeffbezos",
                        "bio": "Amazon. Blue Origin. Washington Post. Bezos Earth Fund. Bezos Academy.",
                        "website": "hoo.be/jeffbezos",
                        "postsCount": 4,
                        "followersCount": 850,
                        "folowingCount": 34,
                        "posts": [
                            {
                                "username": "jeffbezos",
                                "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBiviN.jpg"
                                ],
                                "description": "My first job. Still the same great burger! Happy Sunday!",
                                "dateAndTime": "2022-09-21 22:12:00",
                                "likeCount": 875,
                                "commentCount": 456
                            },
                            {
                                "username": "jeffbezos",
                                "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBiwOJ.jpg"
                                ],
                                "description": "My friend and a friend to many, Tom Alberg, has passed away. He was an early investor in Amazon and served on our board for 23 years. Tom was a visionary and also just a wonderful, good man. I was so lucky to have you in my life, Tom. We will all miss you dearly.",
                                "dateAndTime": "2022-08-19 20:12:00",
                                "likeCount": 245,
                                "commentCount": 8
                            },
                            {
                                "username": "jeffbezos",
                                "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBijRa.jpg",
                                    "https://iili.io/sBiVl1.jpg",
                                    "https://iili.io/sBihHg.jpg",
                                    "https://iili.io/sBiWUF.jpg",
                                    "https://iili.io/sBiNDv.jpg",
                                    "https://iili.io/sBiexR.jpg"
                                ],
                                "description": "Looks like meat’s back on the menu, boys! We have the exclusive first-look photos of the Orcs from The Lord of the Rings: The Rings of Power from @lotronprime Repost from @igndotcom",
                                "dateAndTime": "2022-06-20 15:12:00",
                                "likeCount": 150,
                                "commentCount": 19
                            },
                            {
                                "username": "jeffbezos",
                                "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBikVp.jpg"
                                ],
                                "description": "25 years ago yesterday, AMZN went public. As the Grateful Dead would say, “What a long, strange trip it’s been.” It’s been far from smooth. Lots of risk-taking, lots of invention, lots of mistakes, so much we still have to do better. I wouldn’t trade the ride for anything.",
                                "dateAndTime": "2022-06-21 22:12:00",
                                "likeCount": 541,
                                "commentCount": 42
                            }
                        ]
                    },
                    {
                        "_id": "632c0b9ecd4b079d803d9557",
                        "profilePhoto": "https://i.ibb.co/Thbss5K/microsoft-s-profile-picture.jpg",
                        "name": "Microsoft",
                        "password": "microsoft123",
                        "email": "microsoft@microsoft.com",
                        "username": "microsoft",
                        "bio": "The official Instagram of Microsoft",
                        "website": "unlocked.microsoft.com",
                        "postsCount": 2,
                        "followersCount": 756,
                        "folowingCount": 233,
                        "posts": [
                            {
                                "username": "microsoft",
                                "profilePhoto": "https://i.ibb.co/Thbss5K/microsoft-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBLWua.jpg"
                                ],
                                "description": "POV: you’re a floppy disc from 1981 but everyone thinks you’re the save button",
                                "dateAndTime": "2022-03-21 12:12:00",
                                "likeCount": 641,
                                "commentCount": 545
                            },
                            {
                                "username": "microsoft",
                                "profilePhoto": "https://i.ibb.co/Thbss5K/microsoft-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBttSI.jpg"
                                ],
                                "description": "Fluid, fly, and functional. Peep the grid 👀",
                                "dateAndTime": "2022-05-21 22:12:00",
                                "likeCount": 441,
                                "commentCount": 587
                            }
                        ]
                    },
                    {
                        "_id": "632c0b9ecd4b079d803d9558",
                        "profilePhoto": "https://i.ibb.co/4WXdvhT/thisisbillgates-s-profile-picture.jpg",
                        "name": "Bill Gates",
                        "password": "bill123",
                        "email": "billgates@microsoft.com",
                        "username": "thisisbillgates",
                        "bio": "Sharing things I'm learning through my foundation work and other interests.",
                        "website": "gatesnot.es/m/IG",
                        "postsCount": 1,
                        "followersCount": 745,
                        "folowingCount": 79,
                        "posts": [
                            {
                                "username": "thisisbillgates",
                                "profilePhoto": "https://i.ibb.co/4WXdvhT/thisisbillgates-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBtvcB.jpg"
                                ],
                                "description": "My current weekend uniform.",
                                "dateAndTime": "2022-08-21 22:12:00",
                                "likeCount": 612,
                                "commentCount": 963
                            }
                        ]
                    },
                    {
                        "_id": "632c0b9ecd4b079d803d9559",
                        "profilePhoto": "https://iili.io/sBgHOl.jpg",
                        "name": "Google",
                        "password": "google123",
                        "email": "google@google.com",
                        "username": "google",
                        "bio": "Google unfiltered—sometimes with filters.",
                        "website": "linkin.bio/google",
                        "postsCount": 3,
                        "followersCount": 875,
                        "folowingCount": 34,
                        "posts": [
                            {
                                "username": "google",
                                "profilePhoto": "https://iili.io/sBgHOl.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBbHe1.jpg"
                                ],
                                "description": "Understanding your heritage is not just about learning who your ancestors were, it’s also about celebrating who you are. Learn how Latino families are using Google Search to piece together their past at the link in bio.",
                                "dateAndTime": "2022-09-12 06:12:00",
                                "likeCount": 935,
                                "commentCount": 187
                            },
                            {
                                "username": "google",
                                "profilePhoto": "https://iili.io/sBgHOl.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBDU0l.jpg"
                                ],
                                "description": "This view really * peaks * our interest. ⛰️ #TeamPixel photo by @stephen.cerruti",
                                "dateAndTime": "2022-08-10 20:12:00",
                                "likeCount": 141,
                                "commentCount": 123
                            },
                            {
                                "username": "google",
                                "profilePhoto": "https://iili.io/sBgHOl.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBtRun.jpg"
                                ],
                                "description": "25 years ago yesterday, AMZN went public. As the Grateful Dead would say, “What a long, strange trip it’s been.” It’s been far from smooth. Lots of risk-taking, lots of invention, lots of mistakes, so much we still have to do better. I wouldn’t trade the ride for anything.",
                                "dateAndTime": "2022-04-21 22:12:00",
                                "likeCount": 209,
                                "commentCount": 544
                            }
                        ]
                    },
                    {
                        "_id": "632c0b9ecd4b079d803d955a",
                        "profilePhoto": "https://i.ibb.co/zZqfHQR/ilberortayli-s-profile-picture.jpg",
                        "name": "İlber Ortaylı",
                        "password": "ilber123",
                        "email": "ilberortayli@gmail.com",
                        "username": "ilberortayli",
                        "bio": "İletişim: iortayli@gsu.edu.tr",
                        "website": "kronikkitap.com/kategori/tarih-kitaplari/ilber-ortayli-kitapligi",
                        "postsCount": 1,
                        "followersCount": 296,
                        "folowingCount": 6,
                        "posts": [
                            {
                                "username": "ilberortayli",
                                "profilePhoto": "https://i.ibb.co/zZqfHQR/ilberortayli-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBQnDJ.jpg"
                                ],
                                "description": "Yeni ve farklı ilişkiler kurmaya çalışın. Özellikle okulun dışında; emek isteyen, girişkenlik gerektiren ilişkiler kurduğunuzda, ummadığınız farklı dünyalara girersiniz. Görgünüz artar, bilginiz genişler, bakışınız derinleşir. Beyninize yeni bir kapı açacak, size bir değer katacak insanla bir araya geldiğinizde bir şey öğrenirsiniz; bir şey düşünürsünüz; yeni bir yere bakmaya başlarsınız. Düşünceniz yeni bir boyut kazanır, yaşamınıza farklı bir bakış açısı eklenir. O boyut bazen yanlış da olabilir, ziyanı yok; bu yanlış, zaman içinde tashih edilir. Dahası, o yanlış bile ortalıkta boş boş gezmekten daha iyidir. Dilinizi, intibaınızı, tecrübe ve görgünüzü geliştiren; dünyaya bakışınızı değiştiren insanlar önemlidir. Onlarla bir araya gelmeye gayret ediniz; sonra oradan başka yere geçersiniz, sabit kalmanız şart değildir. #ilberortaylı #birömürnasılyaşanır",
                                "dateAndTime": "2022-09-20 10:12:00",
                                "likeCount": 341,
                                "commentCount": 142
                            }
                        ]
                    },
                    {
                        "_id": "632c0b9ecd4b079d803d955b",
                        "profilePhoto": "https://i.ibb.co/yFpJ5QP/zuck-s-profile-picture.jpg",
                        "name": "Mark Zuckerberg",
                        "password": "mark123",
                        "email": "MarkZuckerberg@facebook.com",
                        "username": "zuck",
                        "bio": "",
                        "website": "",
                        "postsCount": 1,
                        "followersCount": 456,
                        "folowingCount": 482,
                        "posts": [
                            {
                                "username": "zuck",
                                "profilePhoto": "https://i.ibb.co/yFpJ5QP/zuck-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBQviQ.jpg"
                                ],
                                "description": "You miss 100% of the shots you don't take. (I did not land this.)",
                                "dateAndTime": "2022-07-21 22:12:00",
                                "likeCount": 841,
                                "commentCount": 853
                            }
                        ]
                    },
                    {
                        "_id": "632c0b9ecd4b079d803d955c",
                        "profilePhoto": "https://iili.io/sBgFs9.jpg",
                        "name": "Jim Carrey",
                        "password": "jim123",
                        "email": "jimcarrey@gmail.com",
                        "username": "jimcarreyhere",
                        "bio": "👽 Child of The Universe ✨ Letting the Soul Speak 🎭 I’m not Jim Carrey",
                        "website": "",
                        "postsCount": 1,
                        "followersCount": 980,
                        "folowingCount": 54,
                        "posts": [
                            {
                                "username": "jimcarreyhere",
                                "profilePhoto": "https://iili.io/sBgFs9.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBZN2I.jpg"
                                ],
                                "description": "Alrighty then 🌊",
                                "dateAndTime": "2021-05-21 22:12:00",
                                "likeCount": 441,
                                "commentCount": 853
                            }
                        ]
                    },
                    {
                        "_id": "632c0b9ecd4b079d803d955d",
                        "profilePhoto": "https://i.ibb.co/SQJ0pdd/kodluyoruz-s-profile-picture.jpg",
                        "name": "Kodluyoruz",
                        "password": "kodluyoruz123",
                        "email": "kodluyoruz@kodluyoruz.com",
                        "username": "kodluyoruz",
                        "bio": "Türkiye ve dünya çapında yazılımcılar yetiştirmek için çalışan ve ülkemizi teknoloji geliştirme merkezi yapmayı hedefleyen bir sosyal girişimiz 🚀",
                        "website": "tap.bio/@kodluyoruz",
                        "postsCount": 1,
                        "followersCount": 317,
                        "folowingCount": 277,
                        "posts": [
                            {
                                "username": "kodluyoruz",
                                "profilePhoto": "https://i.ibb.co/SQJ0pdd/kodluyoruz-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBZuXj.md.jpg"
                                ],
                                "description": "Yılın 256. günü olan Dünya Yazılımcılar Günü'müz kutlu olsun! 🥳 -- #kodladönüştürelim #memesdaily #codingmemes #programmersday",
                                "dateAndTime": "2022-05-15 22:12:00",
                                "likeCount": 741,
                                "commentCount": 0
                            },
                            {
                                "username": "kodluyoruz",
                                "profilePhoto": "https://i.ibb.co/SQJ0pdd/kodluyoruz-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBbTIn.md.jpg"
                                ],
                                "description": "Yalnız hissetmeyin, topluluğumuz ve biz sizinleyiz 😜 Kodluyoruz Discord sunucusu için link bio'da 👆🏻",
                                "dateAndTime": "2022-05-15 22:12:00",
                                "likeCount": 764,
                                "commentCount": 2
                            },
                            {
                                "username": "kodluyoruz",
                                "profilePhoto": "https://i.ibb.co/SQJ0pdd/kodluyoruz-s-profile-picture.jpg",
                                "imageUrl": [
                                    "https://iili.io/sBDAlV.jpg"
                                ],
                                "description": "Mülakatlarda yaşadığın en saçma anılarını anlatmak için yorumlara davetlisin 👇🏻 -- #kodladönüştürelim #memesdaily #codingmemes #yazınkodluyoruz",
                                "dateAndTime": "2022-08-15 12:12:00",
                                "likeCount": 410,
                                "commentCount": 2
                            }
                        ]
                    },
                    {
                        "_id": "632c9c34c28779bab2be348e",
                        "profilePhoto": "https://i.ibb.co/dbWjdV0/44884218-345707102882519-2446069589734326272-n.jpg",
                        "name": "batuhan asd",
                        "password": "asd",
                        "email": "asd@gmail.com",
                        "username": "asd",
                        "bio": "The Admin",
                        "website": "The Website",
                        "postsCount": 0,
                        "followersCount": 0,
                        "folowingCount": 0,
                        "posts": []
                    }
                ]
            },
            {
                "resultAllPosts": [
                    {
                        "_id": "632c0698cd4b079d803d9543",
                        "username": "jeffbezos",
                        "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBiviN.jpg"
                        ],
                        "description": "My first job. Still the same great burger! Happy Sunday!",
                        "dateAndTime": "2022-09-21 22:12:00",
                        "likeCount": 875,
                        "commentCount": 456
                    },
                    {
                        "_id": "632c0698cd4b079d803d9545",
                        "username": "ilberortayli",
                        "profilePhoto": "https://i.ibb.co/zZqfHQR/ilberortayli-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBQnDJ.jpg"
                        ],
                        "description": "Yeni ve farklı ilişkiler kurmaya çalışın. Özellikle okulun dışında; emek isteyen, girişkenlik gerektiren ilişkiler kurduğunuzda, ummadığınız farklı dünyalara girersiniz. Görgünüz artar, bilginiz genişler, bakışınız derinleşir. Beyninize yeni bir kapı açacak, size bir değer katacak insanla bir araya geldiğinizde bir şey öğrenirsiniz; bir şey düşünürsünüz; yeni bir yere bakmaya başlarsınız. Düşünceniz yeni bir boyut kazanır, yaşamınıza farklı bir bakış açısı eklenir. O boyut bazen yanlış da olabilir, ziyanı yok; bu yanlış, zaman içinde tashih edilir. Dahası, o yanlış bile ortalıkta boş boş gezmekten daha iyidir. Dilinizi, intibaınızı, tecrübe ve görgünüzü geliştiren; dünyaya bakışınızı değiştiren insanlar önemlidir. Onlarla bir araya gelmeye gayret ediniz; sonra oradan başka yere geçersiniz, sabit kalmanız şart değildir. #ilberortaylı #birömürnasılyaşanır",
                        "dateAndTime": "2022-09-20 10:12:00",
                        "likeCount": 341,
                        "commentCount": 142
                    },
                    {
                        "_id": "632c0698cd4b079d803d9551",
                        "username": "google",
                        "profilePhoto": "https://iili.io/sBgHOl.jpg",
                        "imageUrl": [
                            "https://iili.io/sBbHe1.jpg"
                        ],
                        "description": "Understanding your heritage is not just about learning who your ancestors were, it’s also about celebrating who you are. Learn how Latino families are using Google Search to piece together their past at the link in bio.",
                        "dateAndTime": "2022-09-12 06:12:00",
                        "likeCount": 935,
                        "commentCount": 187
                    },
                    {
                        "_id": "632c0698cd4b079d803d954a",
                        "username": "thisisbillgates",
                        "profilePhoto": "https://i.ibb.co/4WXdvhT/thisisbillgates-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBtvcB.jpg"
                        ],
                        "description": "My current weekend uniform.",
                        "dateAndTime": "2022-08-21 22:12:00",
                        "likeCount": 612,
                        "commentCount": 963
                    },
                    {
                        "_id": "632c0698cd4b079d803d954d",
                        "username": "jeffbezos",
                        "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBiwOJ.jpg"
                        ],
                        "description": "My friend and a friend to many, Tom Alberg, has passed away. He was an early investor in Amazon and served on our board for 23 years. Tom was a visionary and also just a wonderful, good man. I was so lucky to have you in my life, Tom. We will all miss you dearly.",
                        "dateAndTime": "2022-08-19 20:12:00",
                        "likeCount": 245,
                        "commentCount": 8
                    },
                    {
                        "_id": "632c0698cd4b079d803d954e",
                        "username": "kodluyoruz",
                        "profilePhoto": "https://i.ibb.co/SQJ0pdd/kodluyoruz-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBDAlV.jpg"
                        ],
                        "description": "Mülakatlarda yaşadığın en saçma anılarını anlatmak için yorumlara davetlisin 👇🏻 -- #kodladönüştürelim #memesdaily #codingmemes #yazınkodluyoruz",
                        "dateAndTime": "2022-08-15 12:12:00",
                        "likeCount": 410,
                        "commentCount": 2
                    },
                    {
                        "_id": "632c0698cd4b079d803d954f",
                        "username": "google",
                        "profilePhoto": "https://iili.io/sBgHOl.jpg",
                        "imageUrl": [
                            "https://iili.io/sBDU0l.jpg"
                        ],
                        "description": "This view really * peaks * our interest. ⛰️ #TeamPixel photo by @stephen.cerruti",
                        "dateAndTime": "2022-08-10 20:12:00",
                        "likeCount": 141,
                        "commentCount": 123
                    },
                    {
                        "_id": "632c0698cd4b079d803d9546",
                        "username": "zuck",
                        "profilePhoto": "https://i.ibb.co/yFpJ5QP/zuck-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBQviQ.jpg"
                        ],
                        "description": "You miss 100% of the shots you don't take. (I did not land this.)",
                        "dateAndTime": "2022-07-21 22:12:00",
                        "likeCount": 841,
                        "commentCount": 853
                    },
                    {
                        "_id": "632c0698cd4b079d803d954c",
                        "username": "jeffbezos",
                        "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBikVp.jpg"
                        ],
                        "description": "25 years ago yesterday, AMZN went public. As the Grateful Dead would say, “What a long, strange trip it’s been.” It’s been far from smooth. Lots of risk-taking, lots of invention, lots of mistakes, so much we still have to do better. I wouldn’t trade the ride for anything.",
                        "dateAndTime": "2022-06-21 22:12:00",
                        "likeCount": 541,
                        "commentCount": 42
                    },
                    {
                        "_id": "632c0698cd4b079d803d9550",
                        "username": "jeffbezos",
                        "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBijRa.jpg",
                            "https://iili.io/sBiVl1.jpg",
                            "https://iili.io/sBihHg.jpg",
                            "https://iili.io/sBiWUF.jpg",
                            "https://iili.io/sBiNDv.jpg",
                            "https://iili.io/sBiexR.jpg"
                        ],
                        "description": "Looks like meat’s back on the menu, boys! We have the exclusive first-look photos of the Orcs from The Lord of the Rings: The Rings of Power from @lotronprime Repost from @igndotcom",
                        "dateAndTime": "2022-06-20 15:12:00",
                        "likeCount": 150,
                        "commentCount": 19
                    },
                    {
                        "_id": "632c0698cd4b079d803d954b",
                        "username": "microsoft",
                        "profilePhoto": "https://i.ibb.co/Thbss5K/microsoft-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBttSI.jpg"
                        ],
                        "description": "Fluid, fly, and functional. Peep the grid 👀",
                        "dateAndTime": "2022-05-21 22:12:00",
                        "likeCount": 441,
                        "commentCount": 587
                    },
                    {
                        "_id": "632c0698cd4b079d803d9547",
                        "username": "kodluyoruz",
                        "profilePhoto": "https://i.ibb.co/SQJ0pdd/kodluyoruz-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBZuXj.md.jpg"
                        ],
                        "description": "Yılın 256. günü olan Dünya Yazılımcılar Günü'müz kutlu olsun! 🥳 -- #kodladönüştürelim #memesdaily #codingmemes #programmersday",
                        "dateAndTime": "2022-05-15 22:12:00",
                        "likeCount": 741,
                        "commentCount": 0
                    },
                    {
                        "_id": "632c0698cd4b079d803d9552",
                        "username": "kodluyoruz",
                        "profilePhoto": "https://i.ibb.co/SQJ0pdd/kodluyoruz-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBbTIn.md.jpg"
                        ],
                        "description": "Yalnız hissetmeyin, topluluğumuz ve biz sizinleyiz 😜 Kodluyoruz Discord sunucusu için link bio'da 👆🏻",
                        "dateAndTime": "2022-05-15 22:12:00",
                        "likeCount": 764,
                        "commentCount": 2
                    },
                    {
                        "_id": "632c0698cd4b079d803d9549",
                        "username": "google",
                        "profilePhoto": "https://iili.io/sBgHOl.jpg",
                        "imageUrl": [
                            "https://iili.io/sBtRun.jpg"
                        ],
                        "description": "25 years ago yesterday, AMZN went public. As the Grateful Dead would say, “What a long, strange trip it’s been.” It’s been far from smooth. Lots of risk-taking, lots of invention, lots of mistakes, so much we still have to do better. I wouldn’t trade the ride for anything.",
                        "dateAndTime": "2022-04-21 22:12:00",
                        "likeCount": 209,
                        "commentCount": 544
                    },
                    {
                        "_id": "632c0698cd4b079d803d9544",
                        "username": "microsoft",
                        "profilePhoto": "https://i.ibb.co/Thbss5K/microsoft-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://iili.io/sBLWua.jpg"
                        ],
                        "description": "POV: you’re a floppy disc from 1981 but everyone thinks you’re the save button",
                        "dateAndTime": "2022-03-21 12:12:00",
                        "likeCount": 641,
                        "commentCount": 545
                    },
                    {
                        "_id": "632c0698cd4b079d803d9548",
                        "username": "jimcarreyhere",
                        "profilePhoto": "https://iili.io/sBgFs9.jpg",
                        "imageUrl": [
                            "https://iili.io/sBZN2I.jpg"
                        ],
                        "description": "Alrighty then 🌊",
                        "dateAndTime": "2021-05-21 22:12:00",
                        "likeCount": 441,
                        "commentCount": 853
                    }
                ]
            }
        ]
    }
})

export default store;