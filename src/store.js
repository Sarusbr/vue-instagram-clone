import { createStore } from "vuex";

const store = createStore({
    state:{
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
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/20065787_368487153565914_9007716647976304640_a.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=F0KCIx6bevQAX-KeHgS&edm=ALQROFkBAAAA&ccb=7-5&oh=00_AT-iGH-zCppMI1avn-SIx_P6PPb0l1GLCjYxyjDniUsrnw&oe=6332625E&_nc_sid=30a2ef",
                                "imageUrl": [
                                    "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/301484059_124309753681087_2811665648416753507_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=aev7mzcqrwEAX_TcB7L&tn=H-1P0_1FLjOfTprM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNTA1Njg3NzQ2MzA3MTkxNA%3D%3D.2-ccb7-5&oh=00_AT8OlE1FBri_7tZSHSKbUoPKKhAByujeJGMula5m5b4aqA&oe=6333140A&_nc_sid=30a2ef"
                                ],
                                "description": "My first job. Still the same great burger! Happy Sunday!",
                                "dateAndTime": "2022-09-21 22:12:00",
                                "likeCount": 875,
                                "commentCount": 456
                            },
                            {
                                "username": "jeffbezos",
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/20065787_368487153565914_9007716647976304640_a.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=F0KCIx6bevQAX-KeHgS&edm=ALQROFkBAAAA&ccb=7-5&oh=00_AT-iGH-zCppMI1avn-SIx_P6PPb0l1GLCjYxyjDniUsrnw&oe=6332625E&_nc_sid=30a2ef",
                                "imageUrl": [
                                    "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/297562944_124881063609965_7988825221046770780_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Sy9s-CA_UgsAX8iCMEl&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5OTExNDQwMTA0OTAwOTcwOQ%3D%3D.2-ccb7-5&oh=00_AT_BdGf3-mBc3_I8FOZUH7cWk3-aMqy7YFaWvQYLgw3AYw&oe=6332D9C9&_nc_sid=30a2ef"
                                ],
                                "description": "My friend and a friend to many, Tom Alberg, has passed away. He was an early investor in Amazon and served on our board for 23 years. Tom was a visionary and also just a wonderful, good man. I was so lucky to have you in my life, Tom. We will all miss you dearly.",
                                "dateAndTime": "2022-08-19 20:12:00",
                                "likeCount": 245,
                                "commentCount": 8
                            },
                            {
                                "username": "jeffbezos",
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/20065787_368487153565914_9007716647976304640_a.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=F0KCIx6bevQAX-KeHgS&edm=ALQROFkBAAAA&ccb=7-5&oh=00_AT-iGH-zCppMI1avn-SIx_P6PPb0l1GLCjYxyjDniUsrnw&oe=6332625E&_nc_sid=30a2ef",
                                "imageUrl": [
                                    "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/289385689_1239223540159793_398027335700874506_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=WW2SckKAsCUAX_ekcnh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODI4MzY2ODgyNA%3D%3D.2-ccb7-5&oh=00_AT8SiMAF2Bz32LpQ78G-U2smh43mZwO0sV5RnBGJYB12pw&oe=63333CE1&_nc_sid=30a2ef",
                                    "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/289725435_761291625308395_3682603133357955901_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ESN-mby_xd0AX--knZ7&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODM4NDE4ODU0Ng%3D%3D.2-ccb7-5&oh=00_AT9RVlsZKlJ565EklI-clhvF1berZJCB-kznlhfSmZwerg&oe=63317389&_nc_sid=30a2ef",
                                    "https://scontent-sof1-2.cdninstagram.com/v/t51.2885-15/289474425_397533852418259_7025967150012194320_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_cat=111&_nc_ohc=trRZg2NcVtcAX9kwbcw&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODMwODY4NjU3Mg%3D%3D.2-ccb7-5&oh=00_AT9vBH-EIMhcWBIkuBm798sgdDtcUHNOk-BadaZu2Gtz-g&oe=63315CCB&_nc_sid=30a2ef",
                                    "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/289159945_745591533427242_4929388149336615726_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=c62BpWEEgswAX-5SaAg&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODUzNTM0NDE1Mg%3D%3D.2-ccb7-5&oh=00_AT8koWdW6V222sFRoFpfipdJmuvKqshZFPetbPcwGD3vAA&oe=6331ED67&_nc_sid=30a2ef",
                                    "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/289044844_569859457886689_5891597058710295560_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=RLzva19DeVwAX9dDG0Y&tn=H-1P0_1FLjOfTprM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODMwODc4NDExMA%3D%3D.2-ccb7-5&oh=00_AT98V6yNHUJouITSmPzWy5vL1oxQkkAvzUsdqrEQucCiJQ&oe=6331C217&_nc_sid=30a2ef",
                                    "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/289101858_2010956732422866_5991491464525451823_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Pyk9ZMNgWtkAX-F73nG&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODM4NDMwODA1Nw%3D%3D.2-ccb7-5&oh=00_AT-saaq4DUuSbw2AxGnNMF25jLL3LJWZvrM22hqc6onuVw&oe=6332994E&_nc_sid=30a2ef"
                                ],
                                "description": "Looks like meat’s back on the menu, boys! We have the exclusive first-look photos of the Orcs from The Lord of the Rings: The Rings of Power from @lotronprime Repost from @igndotcom",
                                "dateAndTime": "2022-06-20 15:12:00",
                                "likeCount": 150,
                                "commentCount": 19
                            },
                            {
                                "username": "jeffbezos",
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/20065787_368487153565914_9007716647976304640_a.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=F0KCIx6bevQAX-KeHgS&edm=ALQROFkBAAAA&ccb=7-5&oh=00_AT-iGH-zCppMI1avn-SIx_P6PPb0l1GLCjYxyjDniUsrnw&oe=6332625E&_nc_sid=30a2ef",
                                "imageUrl": [
                                    "https://scontent-sof1-2.cdninstagram.com/v/t51.2885-15/280756828_680413979926703_5640283988933911700_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_cat=111&_nc_ohc=OL6m8b9yl64AX8psWTy&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgzOTQ2OTQ1NTM5MTMzODYwMQ%3D%3D.2-ccb7-5&oh=00_AT-gCGcG0GXE50dq95AdW6RAMFnPVQrxgpZ0-RyQhKy01A&oe=633279E1&_nc_sid=30a2ef"
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
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/171381430_2982994175310794_2207375672327210946_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=5egSg8tSvcgAX-WnH09&edm=APU89FABAAAA&ccb=7-5&oh=00_AT9xqjOuIlP0LcJ4eBvORuPx50xRDbLciNBITGNfp9ZgkQ&oe=63328A8E&_nc_sid=86f79a",
                                "imageUrl": [
                                    "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/302168695_1253494518758724_72227994701770227_n.jpg?stp=dst-jpg_e35_s480x480&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=tFhgDB5a21UAX8U4ibW&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNjM3NDM1Mjk1ODM0NDU2MA%3D%3D.2-ccb7-5&oh=00_AT81k8RJ5kZiv_5k_Zu-E40AZQWf4E_bQiJkyem511QPkQ&oe=63330F05&_nc_sid=30a2ef"
                                ],
                                "description": "POV: you’re a floppy disc from 1981 but everyone thinks you’re the save button",
                                "dateAndTime": "2022-03-21 12:12:00",
                                "likeCount": 641,
                                "commentCount": 545
                            },
                            {
                                "username": "microsoft",
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/171381430_2982994175310794_2207375672327210946_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=5egSg8tSvcgAX-WnH09&edm=APU89FABAAAA&ccb=7-5&oh=00_AT9xqjOuIlP0LcJ4eBvORuPx50xRDbLciNBITGNfp9ZgkQ&oe=63328A8E&_nc_sid=86f79a",
                                "imageUrl": [
                                    "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/291827696_738961404100561_7278357922698424354_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=w9-XDnoRIPUAX_MV8tz&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NTg1MjI5OTA4ODMwNjk3OA%3D%3D.2-ccb7-5&oh=00_AT8HlLiCyE0JUaFWeRN8nCaanK2MnzUCDlDjjIXxKp5JnQ&oe=63319996&_nc_sid=30a2ef"
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
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/302014253_482575456688982_792765489794729813_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=tmp_1rmrCcwAX9hTvab&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT-VxcCdj7ntaNNLTmiogfWOcHU8usZxDqWRWptt7xzjzg&oe=633195E0&_nc_sid=5cbaad",
                                "imageUrl": [
                                    "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/301530079_1213082492597881_3024557076501735279_n.jpg?stp=dst-jpg_e35_s480x480&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=JdcKAFICrfEAX9QS_u1&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDE2NTIyNzE5MzgxOTUyMQ%3D%3D.2-ccb7-5&oh=00_AT9c-cN2_yMcZCVfvk4iPcF-I5lQ_wtGwC0GBJSDBpn8RA&oe=63316FF6&_nc_sid=30a2ef"
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
                        "profilePhoto": "https://i.ibb.co/T45cMkC/google-s-profile-picture.jpg",
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
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/126151620_3420222801423283_6498777152086077438_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=jLgeUEgqu60AX-BWiC4&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT8-Nu0FupusR70RLMkY4XesC9TDrv85_b2siT4pPUxguw&oe=63323EC4&_nc_sid=5cbaad",
                                "imageUrl": [
                                    "https://scontent-sof1-2.cdninstagram.com/v/t51.2885-15/306615968_5508576899165349_4627692793626517092_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_cat=109&_nc_ohc=j7pCCDWhAj8AX9QRhTT&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkyNzkxNTgxNDQ1MzExMTAzMA%3D%3D.2-ccb7-5&oh=00_AT-GcOIMhXKxPddePFpL0j8jRKVg4teUScJbUsRSye8HlA&oe=633245C9&_nc_sid=30a2ef"
                                ],
                                "description": "Understanding your heritage is not just about learning who your ancestors were, it’s also about celebrating who you are. Learn how Latino families are using Google Search to piece together their past at the link in bio.",
                                "dateAndTime": "2022-09-12 06:12:00",
                                "likeCount": 935,
                                "commentCount": 187
                            },
                            {
                                "username": "google",
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/126151620_3420222801423283_6498777152086077438_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=jLgeUEgqu60AX-BWiC4&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT8-Nu0FupusR70RLMkY4XesC9TDrv85_b2siT4pPUxguw&oe=63323EC4&_nc_sid=5cbaad",
                                "imageUrl": [
                                    "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/301212868_414803077357275_7768875391742424492_n.jpg?stp=dst-jpg_e35_s480x480&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=kbgQ0_5eqlsAX-MwI4H&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxMzU0MjU2MTQ3NTA4MDI3Nw%3D%3D.2-ccb7-5&oh=00_AT_PiL6dnve9O0UgNcch2AxS1gvbaLrbgthN_V45I6eTBw&oe=6331ED4C&_nc_sid=30a2ef"
                                ],
                                "description": "This view really * peaks * our interest. ⛰️ #TeamPixel photo by @stephen.cerruti",
                                "dateAndTime": "2022-08-10 20:12:00",
                                "likeCount": 141,
                                "commentCount": 123
                            },
                            {
                                "username": "google",
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/126151620_3420222801423283_6498777152086077438_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=jLgeUEgqu60AX-BWiC4&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT8-Nu0FupusR70RLMkY4XesC9TDrv85_b2siT4pPUxguw&oe=63323EC4&_nc_sid=5cbaad",
                                "imageUrl": [
                                    "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/298538100_820123965845826_3387007732599346186_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=vir4E-L5UoQAX8o-SJw&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkwMzMzMzkxMzEwMDg0OTEzMQ%3D%3D.2-ccb7-5&oh=00_AT9r_ALUDibVOHQEles38FhKN7GMzcAM2GVwhPOVEF0C0A&oe=63318375&_nc_sid=30a2ef"
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
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/18251867_114441222456966_7691994489618956288_a.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=7Wune2nXKtoAX_eWMWK&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT_m5OytPq_2dWR5Zv9-cDcpYYriFg7n6rhI1pSD7dQM0A&oe=6331CC31&_nc_sid=5cbaad",
                                "imageUrl": [
                                    "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/307698518_587951989728422_440669268917876168_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=sbkBGRMiJhwAX8kDr13&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzMTY0MTUyMjE1ODgxNDQ5NQ%3D%3D.2-ccb7-5&oh=00_AT_zDyFD2qXEORhBQGELLDgl_uWzPkYpEv4f8DoAuZGSfg&oe=6332BBD5&_nc_sid=30a2ef"
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
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/177219615_1728341124004802_3178671336629535217_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=1uDNNyMGmDQAX_O1OCV&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT_PsqWLnbKyC7p6AtMvWdIGhq2rNZvFUggpjp6-qLyl4w&oe=63328D47&_nc_sid=5cbaad",
                                "imageUrl": [
                                    "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/302000043_149939004384302_5858409916085183692_n.webp?stp=dst-jpg_e35_s480x480&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=JHR5c9cWS1gAX_z-sFP&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDM4MDEzMzYwOTQ0NjExMw%3D%3D.2-ccb7-5&oh=00_AT-EZfw-UiKNPOqJP_MUw7PViatwAn8oPhaqaSx4bLyvIQ&oe=63321D34&_nc_sid=30a2ef"
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
                        "profilePhoto": "https://i.ibb.co/SBsSx22/jimcarreyhere-s-profile-picture.jpg",
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
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/306278558_1963101413894400_1005483973083394746_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=BGMVLYRGf_YAX_x9Dbk&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT_fYWbIk-eeyTzAq5XTehvFKx0kSd4UaqomCcCrDiMcow&oe=6332A26C&_nc_sid=5cbaad",
                                "imageUrl": [
                                    "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/200154141_165420995484150_1541364915553881467_n.jpg?stp=dst-jpg_e15_s240x240&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=sJ9UYGxxBbkAX_L8Jb7&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9B3nzX5DNcu3g5JWq45VyBiy-lXAhWybfKBHL0dEPoVA&oe=6332DD43&_nc_sid=8fd12b"
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
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/272105520_508227373914753_6947682786210066112_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Cg2VCBQwG4IAX-CDYtC&edm=ALQROFkBAAAA&ccb=7-5&oh=00_AT8-9aqU1sAz9bPlgT0NPR2bbNuv-eMSbNBcKksLYTSVSg&oe=63335644&_nc_sid=30a2ef",
                                "imageUrl": [
                                    "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/306756639_1122177228729381_8810888628279683580_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=RjjBLKUZdUoAX_AGdt9&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkyNjQxMzU1MjQwODgyMDcxNw%3D%3D.2-ccb7-5&oh=00_AT9__CeZmexpJKDCabFVlrhGb4-dyVhBLnmzW_5aii134Q&oe=6333E9E5&_nc_sid=30a2ef"
                                ],
                                "description": "Yılın 256. günü olan Dünya Yazılımcılar Günü'müz kutlu olsun! 🥳 -- #kodladönüştürelim #memesdaily #codingmemes #programmersday",
                                "dateAndTime": "2022-05-15 22:12:00",
                                "likeCount": 741,
                                "commentCount": 0
                            },
                            {
                                "username": "kodluyoruz",
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/272105520_508227373914753_6947682786210066112_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Cg2VCBQwG4IAX-CDYtC&edm=ALQROFkBAAAA&ccb=7-5&oh=00_AT8-9aqU1sAz9bPlgT0NPR2bbNuv-eMSbNBcKksLYTSVSg&oe=63335644&_nc_sid=30a2ef",
                                "imageUrl": [
                                    "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/302158692_145607817829829_4657588895110025231_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=uNwyuPoItPwAX-8uAV9&tn=H-1P0_1FLjOfTprM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNTI2MDA5MTQ5MDU5MjM2MA%3D%3D.2-ccb7-5&oh=00_AT_IzHpwuZWTXRB9vuoz359q78c-3mFvwU9VeuM180S9lw&oe=63331175&_nc_sid=30a2ef"
                                ],
                                "description": "Yalnız hissetmeyin, topluluğumuz ve biz sizinleyiz 😜 Kodluyoruz Discord sunucusu için link bio'da 👆🏻",
                                "dateAndTime": "2022-05-15 22:12:00",
                                "likeCount": 764,
                                "commentCount": 2
                            },
                            {
                                "username": "kodluyoruz",
                                "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/272105520_508227373914753_6947682786210066112_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Cg2VCBQwG4IAX-CDYtC&edm=ALQROFkBAAAA&ccb=7-5&oh=00_AT8-9aqU1sAz9bPlgT0NPR2bbNuv-eMSbNBcKksLYTSVSg&oe=63335644&_nc_sid=30a2ef",
                                "imageUrl": [
                                    "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/297803904_1115317276048385_9206928656065778329_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=C0prqtlt810AX9OEWee&tn=H-1P0_1FLjOfTprM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5OTcxNzMzNjc1MzE3NTk3OA%3D%3D.2-ccb7-5&oh=00_AT8FpGIVU2IwjBIC-eJs8esFKuZ5ORLtYnqi3bi_Whi9MQ&oe=63327BAC&_nc_sid=30a2ef"
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
                        "_id": "632c6b1b3c0f90aaf6ae2187",
                        "username": "jimcarreyhere",
                        "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                        "imageUrl": [
                            "/posts/images/1663855387123-270250735.jpg"
                        ],
                        "description": "123123123",
                        "dateAndTime": "2022-9-22 17:3:7",
                        "likeCount": 0,
                        "commentCount": 0
                    },
                    {
                        "_id": "632c6b48e8032cb8046a4965",
                        "username": "jimcarreyhere",
                        "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/177219615_1728341124004802_3178671336629535217_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=1uDNNyMGmDQAX_O1OCV&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT_PsqWLnbKyC7p6AtMvWdIGhq2rNZvFUggpjp6-qLyl4w&oe=63328D47&_nc_sid=5cbaad",
                        "imageUrl": [
                            "/posts/images/1663855432278-779599370.jpg"
                        ],
                        "description": "123123123",
                        "dateAndTime": "2022-9-22 17:3:52",
                        "likeCount": 0,
                        "commentCount": 0
                    },
                    {
                        "_id": "632c6b3ce8032cb8046a4964",
                        "username": "jimcarreyhere",
                        "profilePhoto": "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/177219615_1728341124004802_3178671336629535217_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=1uDNNyMGmDQAX_O1OCV&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AT_PsqWLnbKyC7p6AtMvWdIGhq2rNZvFUggpjp6-qLyl4w&oe=63328D47&_nc_sid=5cbaad",
                        "imageUrl": [
                            "/posts/images/1663855419454-611329337.jpg"
                        ],
                        "description": "123123123",
                        "dateAndTime": "2022-9-22 17:3:40",
                        "likeCount": 0,
                        "commentCount": 0
                    },
                    {
                        "_id": "632c6b34e8032cb8046a4963",
                        "username": "jimcarreyhere",
                        "profilePhoto": "https://i.ibb.co/SBsSx22/jimcarreyhere-s-profile-picture.jpg",
                        "imageUrl": [
                            "/posts/images/1663855411727-871239362.jpg"
                        ],
                        "description": "123123123",
                        "dateAndTime": "2022-9-22 17:3:32",
                        "likeCount": 0,
                        "commentCount": 0
                    },
                    {
                        "_id": "632c0698cd4b079d803d9543",
                        "username": "jeffbezos",
                        "profilePhoto": "https://i.ibb.co/Rg39Sbd/jeffbezos-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/301484059_124309753681087_2811665648416753507_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=aev7mzcqrwEAX_TcB7L&tn=H-1P0_1FLjOfTprM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNTA1Njg3NzQ2MzA3MTkxNA%3D%3D.2-ccb7-5&oh=00_AT8OlE1FBri_7tZSHSKbUoPKKhAByujeJGMula5m5b4aqA&oe=6333140A&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/307698518_587951989728422_440669268917876168_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=sbkBGRMiJhwAX8kDr13&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzMTY0MTUyMjE1ODgxNDQ5NQ%3D%3D.2-ccb7-5&oh=00_AT_zDyFD2qXEORhBQGELLDgl_uWzPkYpEv4f8DoAuZGSfg&oe=6332BBD5&_nc_sid=30a2ef"
                        ],
                        "description": "Yeni ve farklı ilişkiler kurmaya çalışın. Özellikle okulun dışında; emek isteyen, girişkenlik gerektiren ilişkiler kurduğunuzda, ummadığınız farklı dünyalara girersiniz. Görgünüz artar, bilginiz genişler, bakışınız derinleşir. Beyninize yeni bir kapı açacak, size bir değer katacak insanla bir araya geldiğinizde bir şey öğrenirsiniz; bir şey düşünürsünüz; yeni bir yere bakmaya başlarsınız. Düşünceniz yeni bir boyut kazanır, yaşamınıza farklı bir bakış açısı eklenir. O boyut bazen yanlış da olabilir, ziyanı yok; bu yanlış, zaman içinde tashih edilir. Dahası, o yanlış bile ortalıkta boş boş gezmekten daha iyidir. Dilinizi, intibaınızı, tecrübe ve görgünüzü geliştiren; dünyaya bakışınızı değiştiren insanlar önemlidir. Onlarla bir araya gelmeye gayret ediniz; sonra oradan başka yere geçersiniz, sabit kalmanız şart değildir. #ilberortaylı #birömürnasılyaşanır",
                        "dateAndTime": "2022-09-20 10:12:00",
                        "likeCount": 341,
                        "commentCount": 142
                    },
                    {
                        "_id": "632c0698cd4b079d803d9551",
                        "username": "google",
                        "profilePhoto": "https://i.ibb.co/T45cMkC/google-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://scontent-sof1-2.cdninstagram.com/v/t51.2885-15/306615968_5508576899165349_4627692793626517092_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_cat=109&_nc_ohc=j7pCCDWhAj8AX9QRhTT&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkyNzkxNTgxNDQ1MzExMTAzMA%3D%3D.2-ccb7-5&oh=00_AT-GcOIMhXKxPddePFpL0j8jRKVg4teUScJbUsRSye8HlA&oe=633245C9&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/301530079_1213082492597881_3024557076501735279_n.jpg?stp=dst-jpg_e35_s480x480&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=JdcKAFICrfEAX9QS_u1&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDE2NTIyNzE5MzgxOTUyMQ%3D%3D.2-ccb7-5&oh=00_AT9c-cN2_yMcZCVfvk4iPcF-I5lQ_wtGwC0GBJSDBpn8RA&oe=63316FF6&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/297562944_124881063609965_7988825221046770780_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Sy9s-CA_UgsAX8iCMEl&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5OTExNDQwMTA0OTAwOTcwOQ%3D%3D.2-ccb7-5&oh=00_AT_BdGf3-mBc3_I8FOZUH7cWk3-aMqy7YFaWvQYLgw3AYw&oe=6332D9C9&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/297803904_1115317276048385_9206928656065778329_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=C0prqtlt810AX9OEWee&tn=H-1P0_1FLjOfTprM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5OTcxNzMzNjc1MzE3NTk3OA%3D%3D.2-ccb7-5&oh=00_AT8FpGIVU2IwjBIC-eJs8esFKuZ5ORLtYnqi3bi_Whi9MQ&oe=63327BAC&_nc_sid=30a2ef"
                        ],
                        "description": "Mülakatlarda yaşadığın en saçma anılarını anlatmak için yorumlara davetlisin 👇🏻 -- #kodladönüştürelim #memesdaily #codingmemes #yazınkodluyoruz",
                        "dateAndTime": "2022-08-15 12:12:00",
                        "likeCount": 410,
                        "commentCount": 2
                    },
                    {
                        "_id": "632c0698cd4b079d803d954f",
                        "username": "google",
                        "profilePhoto": "https://i.ibb.co/T45cMkC/google-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/301212868_414803077357275_7768875391742424492_n.jpg?stp=dst-jpg_e35_s480x480&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=kbgQ0_5eqlsAX-MwI4H&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxMzU0MjU2MTQ3NTA4MDI3Nw%3D%3D.2-ccb7-5&oh=00_AT_PiL6dnve9O0UgNcch2AxS1gvbaLrbgthN_V45I6eTBw&oe=6331ED4C&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/302000043_149939004384302_5858409916085183692_n.webp?stp=dst-jpg_e35_s480x480&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=JHR5c9cWS1gAX_z-sFP&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDM4MDEzMzYwOTQ0NjExMw%3D%3D.2-ccb7-5&oh=00_AT-EZfw-UiKNPOqJP_MUw7PViatwAn8oPhaqaSx4bLyvIQ&oe=63321D34&_nc_sid=30a2ef"
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
                            "https://scontent-sof1-2.cdninstagram.com/v/t51.2885-15/280756828_680413979926703_5640283988933911700_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_cat=111&_nc_ohc=OL6m8b9yl64AX8psWTy&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjgzOTQ2OTQ1NTM5MTMzODYwMQ%3D%3D.2-ccb7-5&oh=00_AT-gCGcG0GXE50dq95AdW6RAMFnPVQrxgpZ0-RyQhKy01A&oe=633279E1&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/289385689_1239223540159793_398027335700874506_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=WW2SckKAsCUAX_ekcnh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODI4MzY2ODgyNA%3D%3D.2-ccb7-5&oh=00_AT8SiMAF2Bz32LpQ78G-U2smh43mZwO0sV5RnBGJYB12pw&oe=63333CE1&_nc_sid=30a2ef",
                            "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/289725435_761291625308395_3682603133357955901_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ESN-mby_xd0AX--knZ7&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODM4NDE4ODU0Ng%3D%3D.2-ccb7-5&oh=00_AT9RVlsZKlJ565EklI-clhvF1berZJCB-kznlhfSmZwerg&oe=63317389&_nc_sid=30a2ef",
                            "https://scontent-sof1-2.cdninstagram.com/v/t51.2885-15/289474425_397533852418259_7025967150012194320_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_cat=111&_nc_ohc=trRZg2NcVtcAX9kwbcw&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODMwODY4NjU3Mg%3D%3D.2-ccb7-5&oh=00_AT9vBH-EIMhcWBIkuBm798sgdDtcUHNOk-BadaZu2Gtz-g&oe=63315CCB&_nc_sid=30a2ef",
                            "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/289159945_745591533427242_4929388149336615726_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=c62BpWEEgswAX-5SaAg&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODUzNTM0NDE1Mg%3D%3D.2-ccb7-5&oh=00_AT8koWdW6V222sFRoFpfipdJmuvKqshZFPetbPcwGD3vAA&oe=6331ED67&_nc_sid=30a2ef",
                            "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/289044844_569859457886689_5891597058710295560_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=RLzva19DeVwAX9dDG0Y&tn=H-1P0_1FLjOfTprM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODMwODc4NDExMA%3D%3D.2-ccb7-5&oh=00_AT98V6yNHUJouITSmPzWy5vL1oxQkkAvzUsdqrEQucCiJQ&oe=6331C217&_nc_sid=30a2ef",
                            "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/289101858_2010956732422866_5991491464525451823_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Pyk9ZMNgWtkAX-F73nG&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg2NTkzNDkyODM4NDMwODA1Nw%3D%3D.2-ccb7-5&oh=00_AT-saaq4DUuSbw2AxGnNMF25jLL3LJWZvrM22hqc6onuVw&oe=6332994E&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/291827696_738961404100561_7278357922698424354_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=w9-XDnoRIPUAX_MV8tz&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NTg1MjI5OTA4ODMwNjk3OA%3D%3D.2-ccb7-5&oh=00_AT8HlLiCyE0JUaFWeRN8nCaanK2MnzUCDlDjjIXxKp5JnQ&oe=63319996&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/306756639_1122177228729381_8810888628279683580_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=RjjBLKUZdUoAX_AGdt9&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkyNjQxMzU1MjQwODgyMDcxNw%3D%3D.2-ccb7-5&oh=00_AT9__CeZmexpJKDCabFVlrhGb4-dyVhBLnmzW_5aii134Q&oe=6333E9E5&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-1.fna.fbcdn.net/v/t51.2885-15/302158692_145607817829829_4657588895110025231_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fadb3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=uNwyuPoItPwAX-8uAV9&tn=H-1P0_1FLjOfTprM&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNTI2MDA5MTQ5MDU5MjM2MA%3D%3D.2-ccb7-5&oh=00_AT_IzHpwuZWTXRB9vuoz359q78c-3mFvwU9VeuM180S9lw&oe=63331175&_nc_sid=30a2ef"
                        ],
                        "description": "Yalnız hissetmeyin, topluluğumuz ve biz sizinleyiz 😜 Kodluyoruz Discord sunucusu için link bio'da 👆🏻",
                        "dateAndTime": "2022-05-15 22:12:00",
                        "likeCount": 764,
                        "commentCount": 2
                    },
                    {
                        "_id": "632c0698cd4b079d803d9549",
                        "username": "google",
                        "profilePhoto": "https://i.ibb.co/T45cMkC/google-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/298538100_820123965845826_3387007732599346186_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=vir4E-L5UoQAX8o-SJw&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkwMzMzMzkxMzEwMDg0OTEzMQ%3D%3D.2-ccb7-5&oh=00_AT9r_ALUDibVOHQEles38FhKN7GMzcAM2GVwhPOVEF0C0A&oe=63318375&_nc_sid=30a2ef"
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
                            "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/302168695_1253494518758724_72227994701770227_n.jpg?stp=dst-jpg_e35_s480x480&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=tFhgDB5a21UAX8U4ibW&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNjM3NDM1Mjk1ODM0NDU2MA%3D%3D.2-ccb7-5&oh=00_AT81k8RJ5kZiv_5k_Zu-E40AZQWf4E_bQiJkyem511QPkQ&oe=63330F05&_nc_sid=30a2ef"
                        ],
                        "description": "POV: you’re a floppy disc from 1981 but everyone thinks you’re the save button",
                        "dateAndTime": "2022-03-21 12:12:00",
                        "likeCount": 641,
                        "commentCount": 545
                    },
                    {
                        "_id": "632c0698cd4b079d803d9548",
                        "username": "jimcarreyhere",
                        "profilePhoto": "https://i.ibb.co/SBsSx22/jimcarreyhere-s-profile-picture.jpg",
                        "imageUrl": [
                            "https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-15/200154141_165420995484150_1541364915553881467_n.jpg?stp=dst-jpg_e15_s240x240&_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=sJ9UYGxxBbkAX_L8Jb7&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9B3nzX5DNcu3g5JWq45VyBiy-lXAhWybfKBHL0dEPoVA&oe=6332DD43&_nc_sid=8fd12b"
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