var songTitle = $("#title");
var songArtist = $("#artist");
var moodSadData = {
    "tracks": {
        "href": "https://api.spotify.com/v1/search?query=sad&type=track&offset=0&limit=30",
        "items": [{
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4"
                    },
                    "href": "https://api.spotify.com/v1/artists/15UsOTVnJzReFVN1VCnxy4",
                    "id": "15UsOTVnJzReFVN1VCnxy4",
                    "name": "XXXTENTACION",
                    "type": "artist",
                    "uri": "spotify:artist:15UsOTVnJzReFVN1VCnxy4"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2Ti79nwTsont5ZHfdxIzAm"
                },
                "href": "https://api.spotify.com/v1/albums/2Ti79nwTsont5ZHfdxIzAm",
                "id": "2Ti79nwTsont5ZHfdxIzAm",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273806c160566580d6335d1f16c",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02806c160566580d6335d1f16c",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851806c160566580d6335d1f16c",
                    "width": 64
                }],
                "name": "?",
                "release_date": "2018-03-16",
                "release_date_precision": "day",
                "total_tracks": 18,
                "type": "album",
                "uri": "spotify:album:2Ti79nwTsont5ZHfdxIzAm"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4"
                },
                "href": "https://api.spotify.com/v1/artists/15UsOTVnJzReFVN1VCnxy4",
                "id": "15UsOTVnJzReFVN1VCnxy4",
                "name": "XXXTENTACION",
                "type": "artist",
                "uri": "spotify:artist:15UsOTVnJzReFVN1VCnxy4"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 166605,
            "explicit": true,
            "external_ids": {
                "isrc": "USUG11800208"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3ee8Jmje8o58CHK66QrVC2"
            },
            "href": "https://api.spotify.com/v1/tracks/3ee8Jmje8o58CHK66QrVC2",
            "id": "3ee8Jmje8o58CHK66QrVC2",
            "is_local": false,
            "name": "SAD!",
            "popularity": 86,
            "preview_url": null,
            "track_number": 4,
            "type": "track",
            "uri": "spotify:track:3ee8Jmje8o58CHK66QrVC2"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3ao3jf5d70Tf4fPh2bnXVl"
                    },
                    "href": "https://api.spotify.com/v1/artists/3ao3jf5d70Tf4fPh2bnXVl",
                    "id": "3ao3jf5d70Tf4fPh2bnXVl",
                    "name": "We The Kings",
                    "type": "artist",
                    "uri": "spotify:artist:3ao3jf5d70Tf4fPh2bnXVl"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2hc2nl6opteMmG3LCDVt0e"
                },
                "href": "https://api.spotify.com/v1/albums/2hc2nl6opteMmG3LCDVt0e",
                "id": "2hc2nl6opteMmG3LCDVt0e",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273a358003c337056b9965a9c0f",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02a358003c337056b9965a9c0f",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851a358003c337056b9965a9c0f",
                    "width": 64
                }],
                "name": "Somewhere Somehow",
                "release_date": "2013-01-01",
                "release_date_precision": "day",
                "total_tracks": 13,
                "type": "album",
                "uri": "spotify:album:2hc2nl6opteMmG3LCDVt0e"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3ao3jf5d70Tf4fPh2bnXVl"
                },
                "href": "https://api.spotify.com/v1/artists/3ao3jf5d70Tf4fPh2bnXVl",
                "id": "3ao3jf5d70Tf4fPh2bnXVl",
                "name": "We The Kings",
                "type": "artist",
                "uri": "spotify:artist:3ao3jf5d70Tf4fPh2bnXVl"
            }, {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/76rOhzdFrZx37hyeA5cQgZ"
                },
                "href": "https://api.spotify.com/v1/artists/76rOhzdFrZx37hyeA5cQgZ",
                "id": "76rOhzdFrZx37hyeA5cQgZ",
                "name": "Elena Coats",
                "type": "artist",
                "uri": "spotify:artist:76rOhzdFrZx37hyeA5cQgZ"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 226330,
            "explicit": false,
            "external_ids": {
                "isrc": "QMGKG1300017"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/05CrK6Q5VGtfPDtyQFJ4Kf"
            },
            "href": "https://api.spotify.com/v1/tracks/05CrK6Q5VGtfPDtyQFJ4Kf",
            "id": "05CrK6Q5VGtfPDtyQFJ4Kf",
            "is_local": false,
            "name": "Sad Song (feat. Elena Coats)",
            "popularity": 74,
            "preview_url": "https://p.scdn.co/mp3-preview/f29734710566ec78be15b1dfc783f72187d20378?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 12,
            "type": "track",
            "uri": "spotify:track:05CrK6Q5VGtfPDtyQFJ4Kf"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3LVYHgfHgCTy3QSRt5kKQg"
                    },
                    "href": "https://api.spotify.com/v1/artists/3LVYHgfHgCTy3QSRt5kKQg",
                    "id": "3LVYHgfHgCTy3QSRt5kKQg",
                    "name": "Rasster",
                    "type": "artist",
                    "uri": "spotify:artist:3LVYHgfHgCTy3QSRt5kKQg"
                }, {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5rGrDvrLOV2VV8SCFVGWlj"
                    },
                    "href": "https://api.spotify.com/v1/artists/5rGrDvrLOV2VV8SCFVGWlj",
                    "id": "5rGrDvrLOV2VV8SCFVGWlj",
                    "name": "Imanbek",
                    "type": "artist",
                    "uri": "spotify:artist:5rGrDvrLOV2VV8SCFVGWlj"
                }, {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5vPqlDBYNZiF5SrHGS6Cyt"
                    },
                    "href": "https://api.spotify.com/v1/artists/5vPqlDBYNZiF5SrHGS6Cyt",
                    "id": "5vPqlDBYNZiF5SrHGS6Cyt",
                    "name": "Erin Bloomer",
                    "type": "artist",
                    "uri": "spotify:artist:5vPqlDBYNZiF5SrHGS6Cyt"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GT", "HN", "HR", "HU", "ID", "IE", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PS", "PT", "PY", "QA", "RS", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TW", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0MoT8k5F7qoeCcP2DfW8GF"
                },
                "href": "https://api.spotify.com/v1/albums/0MoT8k5F7qoeCcP2DfW8GF",
                "id": "0MoT8k5F7qoeCcP2DfW8GF",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273c64869b1cf834c228839f25b",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02c64869b1cf834c228839f25b",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851c64869b1cf834c228839f25b",
                    "width": 64
                }],
                "name": "SAD (Imanbek xxx Remix)",
                "release_date": "2020-05-22",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:0MoT8k5F7qoeCcP2DfW8GF"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3LVYHgfHgCTy3QSRt5kKQg"
                },
                "href": "https://api.spotify.com/v1/artists/3LVYHgfHgCTy3QSRt5kKQg",
                "id": "3LVYHgfHgCTy3QSRt5kKQg",
                "name": "Rasster",
                "type": "artist",
                "uri": "spotify:artist:3LVYHgfHgCTy3QSRt5kKQg"
            }, {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5vPqlDBYNZiF5SrHGS6Cyt"
                },
                "href": "https://api.spotify.com/v1/artists/5vPqlDBYNZiF5SrHGS6Cyt",
                "id": "5vPqlDBYNZiF5SrHGS6Cyt",
                "name": "Erin Bloomer",
                "type": "artist",
                "uri": "spotify:artist:5vPqlDBYNZiF5SrHGS6Cyt"
            }, {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5rGrDvrLOV2VV8SCFVGWlj"
                },
                "href": "https://api.spotify.com/v1/artists/5rGrDvrLOV2VV8SCFVGWlj",
                "id": "5rGrDvrLOV2VV8SCFVGWlj",
                "name": "Imanbek",
                "type": "artist",
                "uri": "spotify:artist:5rGrDvrLOV2VV8SCFVGWlj"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GT", "HN", "HR", "HU", "ID", "IE", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PS", "PT", "PY", "QA", "RS", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TW", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 174720,
            "explicit": true,
            "external_ids": {
                "isrc": "GBUM72002044"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4x5ymi4akay9Fq5Xm1PW3E"
            },
            "href": "https://api.spotify.com/v1/tracks/4x5ymi4akay9Fq5Xm1PW3E",
            "id": "4x5ymi4akay9Fq5Xm1PW3E",
            "is_local": false,
            "name": "SAD - Imanbek xxx Remix",
            "popularity": 76,
            "preview_url": null,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:4x5ymi4akay9Fq5Xm1PW3E"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/33r8rPgsHXfVN1r3adlrWw"
                    },
                    "href": "https://api.spotify.com/v1/artists/33r8rPgsHXfVN1r3adlrWw",
                    "id": "33r8rPgsHXfVN1r3adlrWw",
                    "name": "Papithbk",
                    "type": "artist",
                    "uri": "spotify:artist:33r8rPgsHXfVN1r3adlrWw"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6dQAUhE6oE6YgxD0GPdEzF"
                },
                "href": "https://api.spotify.com/v1/albums/6dQAUhE6oE6YgxD0GPdEzF",
                "id": "6dQAUhE6oE6YgxD0GPdEzF",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273779567f1d9f78432ec374289",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02779567f1d9f78432ec374289",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851779567f1d9f78432ec374289",
                    "width": 64
                }],
                "name": "EP",
                "release_date": "2019-05-20",
                "release_date_precision": "day",
                "total_tracks": 7,
                "type": "album",
                "uri": "spotify:album:6dQAUhE6oE6YgxD0GPdEzF"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/33r8rPgsHXfVN1r3adlrWw"
                },
                "href": "https://api.spotify.com/v1/artists/33r8rPgsHXfVN1r3adlrWw",
                "id": "33r8rPgsHXfVN1r3adlrWw",
                "name": "Papithbk",
                "type": "artist",
                "uri": "spotify:artist:33r8rPgsHXfVN1r3adlrWw"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 150702,
            "explicit": false,
            "external_ids": {
                "isrc": "QZES51961234"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2TfoabXa0CbEwcqpxOn9z3"
            },
            "href": "https://api.spotify.com/v1/tracks/2TfoabXa0CbEwcqpxOn9z3",
            "id": "2TfoabXa0CbEwcqpxOn9z3",
            "is_local": false,
            "name": "Sad Nibba Hours",
            "popularity": 69,
            "preview_url": null,
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:2TfoabXa0CbEwcqpxOn9z3"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB"
                    },
                    "href": "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB",
                    "id": "2ye2Wgw4gimLv2eAKyk1NB",
                    "name": "Metallica",
                    "type": "artist",
                    "uri": "spotify:artist:2ye2Wgw4gimLv2eAKyk1NB"
                }],
                "available_markets": ["CA", "US"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6QdCohkHKNTVoaSx1ZzitH"
                },
                "href": "https://api.spotify.com/v1/albums/6QdCohkHKNTVoaSx1ZzitH",
                "id": "6QdCohkHKNTVoaSx1ZzitH",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273af07dc851962508661bbcfce",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02af07dc851962508661bbcfce",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851af07dc851962508661bbcfce",
                    "width": 64
                }],
                "name": "Metallica",
                "release_date": "1991-08-12",
                "release_date_precision": "day",
                "total_tracks": 12,
                "type": "album",
                "uri": "spotify:album:6QdCohkHKNTVoaSx1ZzitH"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB"
                },
                "href": "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB",
                "id": "2ye2Wgw4gimLv2eAKyk1NB",
                "name": "Metallica",
                "type": "artist",
                "uri": "spotify:artist:2ye2Wgw4gimLv2eAKyk1NB"
            }],
            "available_markets": ["CA", "US"],
            "disc_number": 1,
            "duration_ms": 324560,
            "explicit": false,
            "external_ids": {
                "isrc": "USEE10001993"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1Ug98CRiQYu7wiSym4uLY4"
            },
            "href": "https://api.spotify.com/v1/tracks/1Ug98CRiQYu7wiSym4uLY4",
            "id": "1Ug98CRiQYu7wiSym4uLY4",
            "is_local": false,
            "name": "Sad But True",
            "popularity": 63,
            "preview_url": "https://p.scdn.co/mp3-preview/577a4a4762be905cc26096d90e0e4663fafc2ec0?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:1Ug98CRiQYu7wiSym4uLY4"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5JMLG56F1X5mFmWNmS0iAp"
                    },
                    "href": "https://api.spotify.com/v1/artists/5JMLG56F1X5mFmWNmS0iAp",
                    "id": "5JMLG56F1X5mFmWNmS0iAp",
                    "name": "Chelsea Cutler",
                    "type": "artist",
                    "uri": "spotify:artist:5JMLG56F1X5mFmWNmS0iAp"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2oOAjpOoHkiOjFGsf2sION"
                },
                "href": "https://api.spotify.com/v1/albums/2oOAjpOoHkiOjFGsf2sION",
                "id": "2oOAjpOoHkiOjFGsf2sION",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273553de6179fd1ba659a9fbbb7",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02553de6179fd1ba659a9fbbb7",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851553de6179fd1ba659a9fbbb7",
                    "width": 64
                }],
                "name": "How To Be Human",
                "release_date": "2020-01-17",
                "release_date_precision": "day",
                "total_tracks": 16,
                "type": "album",
                "uri": "spotify:album:2oOAjpOoHkiOjFGsf2sION"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5JMLG56F1X5mFmWNmS0iAp"
                },
                "href": "https://api.spotify.com/v1/artists/5JMLG56F1X5mFmWNmS0iAp",
                "id": "5JMLG56F1X5mFmWNmS0iAp",
                "name": "Chelsea Cutler",
                "type": "artist",
                "uri": "spotify:artist:5JMLG56F1X5mFmWNmS0iAp"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 178253,
            "explicit": false,
            "external_ids": {
                "isrc": "USUG11904213"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2NPQbiRn9f5JWlCgNLNZJn"
            },
            "href": "https://api.spotify.com/v1/tracks/2NPQbiRn9f5JWlCgNLNZJn",
            "id": "2NPQbiRn9f5JWlCgNLNZJn",
            "is_local": false,
            "name": "Sad Tonight",
            "popularity": 64,
            "preview_url": null,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2NPQbiRn9f5JWlCgNLNZJn"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv"
                    },
                    "href": "https://api.spotify.com/v1/artists/5JZ7CnR6gTvEMKX4g70Amv",
                    "id": "5JZ7CnR6gTvEMKX4g70Amv",
                    "name": "Lauv",
                    "type": "artist",
                    "uri": "spotify:artist:5JZ7CnR6gTvEMKX4g70Amv"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6EgJXcGqaUvgZIF9bqPXfP"
                },
                "href": "https://api.spotify.com/v1/albums/6EgJXcGqaUvgZIF9bqPXfP",
                "id": "6EgJXcGqaUvgZIF9bqPXfP",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2736047672696efe2a146cf309e",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e026047672696efe2a146cf309e",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048516047672696efe2a146cf309e",
                    "width": 64
                }],
                "name": "~how i'm feeling~",
                "release_date": "2020-03-06",
                "release_date_precision": "day",
                "total_tracks": 21,
                "type": "album",
                "uri": "spotify:album:6EgJXcGqaUvgZIF9bqPXfP"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv"
                },
                "href": "https://api.spotify.com/v1/artists/5JZ7CnR6gTvEMKX4g70Amv",
                "id": "5JZ7CnR6gTvEMKX4g70Amv",
                "name": "Lauv",
                "type": "artist",
                "uri": "spotify:artist:5JZ7CnR6gTvEMKX4g70Amv"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 203520,
            "explicit": false,
            "external_ids": {
                "isrc": "GBKPL1951882"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1DVWkJEjgVStgU2EbR9vpz"
            },
            "href": "https://api.spotify.com/v1/tracks/1DVWkJEjgVStgU2EbR9vpz",
            "id": "1DVWkJEjgVStgU2EbR9vpz",
            "is_local": false,
            "name": "Sad Forever",
            "popularity": 69,
            "preview_url": "https://p.scdn.co/mp3-preview/1250fb3bea03aee6da908ea67420ddd954ad812a?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 18,
            "type": "track",
            "uri": "spotify:track:1DVWkJEjgVStgU2EbR9vpz"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7zp6bk2m1VLwR8iNR2ginn"
                    },
                    "href": "https://api.spotify.com/v1/artists/7zp6bk2m1VLwR8iNR2ginn",
                    "id": "7zp6bk2m1VLwR8iNR2ginn",
                    "name": "Watibinks",
                    "type": "artist",
                    "uri": "spotify:artist:7zp6bk2m1VLwR8iNR2ginn"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1En0loxIBEH5qq1oLZjrwJ"
                },
                "href": "https://api.spotify.com/v1/albums/1En0loxIBEH5qq1oLZjrwJ",
                "id": "1En0loxIBEH5qq1oLZjrwJ",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27377530ec296bc74db710862ee",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0277530ec296bc74db710862ee",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485177530ec296bc74db710862ee",
                    "width": 64
                }],
                "name": "Sadness",
                "release_date": "2020-01-17",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:1En0loxIBEH5qq1oLZjrwJ"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7zp6bk2m1VLwR8iNR2ginn"
                },
                "href": "https://api.spotify.com/v1/artists/7zp6bk2m1VLwR8iNR2ginn",
                "id": "7zp6bk2m1VLwR8iNR2ginn",
                "name": "Watibinks",
                "type": "artist",
                "uri": "spotify:artist:7zp6bk2m1VLwR8iNR2ginn"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 67008,
            "explicit": false,
            "external_ids": {
                "isrc": "QZFYY2051260"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2GyHpH4FddzOJgZfyr2wW3"
            },
            "href": "https://api.spotify.com/v1/tracks/2GyHpH4FddzOJgZfyr2wW3",
            "id": "2GyHpH4FddzOJgZfyr2wW3",
            "is_local": false,
            "name": "Sadness",
            "popularity": 59,
            "preview_url": "https://p.scdn.co/mp3-preview/1d56af1a71d836620065b0d7f081717d76c9627c?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2GyHpH4FddzOJgZfyr2wW3"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4r63FhuTkUYltbVAg5TQnk"
                    },
                    "href": "https://api.spotify.com/v1/artists/4r63FhuTkUYltbVAg5TQnk",
                    "id": "4r63FhuTkUYltbVAg5TQnk",
                    "name": "DaBaby",
                    "type": "artist",
                    "uri": "spotify:artist:4r63FhuTkUYltbVAg5TQnk"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/623PL2MBg50Br5dLXC9E9e"
                },
                "href": "https://api.spotify.com/v1/albums/623PL2MBg50Br5dLXC9E9e",
                "id": "623PL2MBg50Br5dLXC9E9e",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27320e08c8cc23f404d723b5647",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0220e08c8cc23f404d723b5647",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485120e08c8cc23f404d723b5647",
                    "width": 64
                }],
                "name": "BLAME IT ON BABY",
                "release_date": "2020-04-17",
                "release_date_precision": "day",
                "total_tracks": 13,
                "type": "album",
                "uri": "spotify:album:623PL2MBg50Br5dLXC9E9e"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4r63FhuTkUYltbVAg5TQnk"
                },
                "href": "https://api.spotify.com/v1/artists/4r63FhuTkUYltbVAg5TQnk",
                "id": "4r63FhuTkUYltbVAg5TQnk",
                "name": "DaBaby",
                "type": "artist",
                "uri": "spotify:artist:4r63FhuTkUYltbVAg5TQnk"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 217466,
            "explicit": true,
            "external_ids": {
                "isrc": "USUM72007940"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6ChpgWt7s2ksM1Y3l0D9sk"
            },
            "href": "https://api.spotify.com/v1/tracks/6ChpgWt7s2ksM1Y3l0D9sk",
            "id": "6ChpgWt7s2ksM1Y3l0D9sk",
            "is_local": false,
            "name": "SAD SH*T",
            "popularity": 62,
            "preview_url": null,
            "track_number": 5,
            "type": "track",
            "uri": "spotify:track:6ChpgWt7s2ksM1Y3l0D9sk"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3dz0NnIZhtKKeXZxLOxCam"
                    },
                    "href": "https://api.spotify.com/v1/artists/3dz0NnIZhtKKeXZxLOxCam",
                    "id": "3dz0NnIZhtKKeXZxLOxCam",
                    "name": "Porter Robinson",
                    "type": "artist",
                    "uri": "spotify:artist:3dz0NnIZhtKKeXZxLOxCam"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/7AJPV0L05IyIBid97AvwVD"
                },
                "href": "https://api.spotify.com/v1/albums/7AJPV0L05IyIBid97AvwVD",
                "id": "7AJPV0L05IyIBid97AvwVD",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2731f675e7b8bae408653346dd9",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e021f675e7b8bae408653346dd9",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048511f675e7b8bae408653346dd9",
                    "width": 64
                }],
                "name": "Worlds",
                "release_date": "2014-08-12",
                "release_date_precision": "day",
                "total_tracks": 12,
                "type": "album",
                "uri": "spotify:album:7AJPV0L05IyIBid97AvwVD"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3dz0NnIZhtKKeXZxLOxCam"
                },
                "href": "https://api.spotify.com/v1/artists/3dz0NnIZhtKKeXZxLOxCam",
                "id": "3dz0NnIZhtKKeXZxLOxCam",
                "name": "Porter Robinson",
                "type": "artist",
                "uri": "spotify:artist:3dz0NnIZhtKKeXZxLOxCam"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 350690,
            "explicit": false,
            "external_ids": {
                "isrc": "USUG11400374"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1JY6B9ILvmRla2IKKRZvnH"
            },
            "href": "https://api.spotify.com/v1/tracks/1JY6B9ILvmRla2IKKRZvnH",
            "id": "1JY6B9ILvmRla2IKKRZvnH",
            "is_local": false,
            "name": "Sad Machine",
            "popularity": 62,
            "preview_url": null,
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:1JY6B9ILvmRla2IKKRZvnH"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/24vm5FBjvLpwUiVNcYc8qy"
                    },
                    "href": "https://api.spotify.com/v1/artists/24vm5FBjvLpwUiVNcYc8qy",
                    "id": "24vm5FBjvLpwUiVNcYc8qy",
                    "name": "Scotty Sire",
                    "type": "artist",
                    "uri": "spotify:artist:24vm5FBjvLpwUiVNcYc8qy"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6iyxamR2YYNPPiq6nSxBO9"
                },
                "href": "https://api.spotify.com/v1/albums/6iyxamR2YYNPPiq6nSxBO9",
                "id": "6iyxamR2YYNPPiq6nSxBO9",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273a58b1b391ec86a859844796d",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02a58b1b391ec86a859844796d",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851a58b1b391ec86a859844796d",
                    "width": 64
                }],
                "name": "Sad Song",
                "release_date": "2017-02-09",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:6iyxamR2YYNPPiq6nSxBO9"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/24vm5FBjvLpwUiVNcYc8qy"
                },
                "href": "https://api.spotify.com/v1/artists/24vm5FBjvLpwUiVNcYc8qy",
                "id": "24vm5FBjvLpwUiVNcYc8qy",
                "name": "Scotty Sire",
                "type": "artist",
                "uri": "spotify:artist:24vm5FBjvLpwUiVNcYc8qy"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 179969,
            "explicit": false,
            "external_ids": {
                "isrc": "uscgh1780904"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/45IavwCzlcFrTnzTfVCGX2"
            },
            "href": "https://api.spotify.com/v1/tracks/45IavwCzlcFrTnzTfVCGX2",
            "id": "45IavwCzlcFrTnzTfVCGX2",
            "is_local": false,
            "name": "Sad Song",
            "popularity": 60,
            "preview_url": "https://p.scdn.co/mp3-preview/ded1f4e7a16b88c76e267e1c94158bfefcaf3d7e?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:45IavwCzlcFrTnzTfVCGX2"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2JSwnwAT1BupAQkhqcRCUw"
                    },
                    "href": "https://api.spotify.com/v1/artists/2JSwnwAT1BupAQkhqcRCUw",
                    "id": "2JSwnwAT1BupAQkhqcRCUw",
                    "name": "Sada Baby",
                    "type": "artist",
                    "uri": "spotify:artist:2JSwnwAT1BupAQkhqcRCUw"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/5Yqrd9k0j2CSi8v3ffr7KU"
                },
                "href": "https://api.spotify.com/v1/albums/5Yqrd9k0j2CSi8v3ffr7KU",
                "id": "5Yqrd9k0j2CSi8v3ffr7KU",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2733d464e9d0259a16477cc2cba",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e023d464e9d0259a16477cc2cba",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048513d464e9d0259a16477cc2cba",
                    "width": 64
                }],
                "name": "Whole Lotta Choppas",
                "release_date": "2020-08-14",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:5Yqrd9k0j2CSi8v3ffr7KU"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2JSwnwAT1BupAQkhqcRCUw"
                },
                "href": "https://api.spotify.com/v1/artists/2JSwnwAT1BupAQkhqcRCUw",
                "id": "2JSwnwAT1BupAQkhqcRCUw",
                "name": "Sada Baby",
                "type": "artist",
                "uri": "spotify:artist:2JSwnwAT1BupAQkhqcRCUw"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 153750,
            "explicit": true,
            "external_ids": {
                "isrc": "US39N2000446"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6hLZzCS4E7AWo3PRBWy6az"
            },
            "href": "https://api.spotify.com/v1/tracks/6hLZzCS4E7AWo3PRBWy6az",
            "id": "6hLZzCS4E7AWo3PRBWy6az",
            "is_local": false,
            "name": "Whole Lotta Choppas",
            "popularity": 78,
            "preview_url": "https://p.scdn.co/mp3-preview/5a951ba3abb24ab61ec4ea8f1b3db481668f3967?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:6hLZzCS4E7AWo3PRBWy6az"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5OdVywqKqyCWwfE2fZb7IX"
                    },
                    "href": "https://api.spotify.com/v1/artists/5OdVywqKqyCWwfE2fZb7IX",
                    "id": "5OdVywqKqyCWwfE2fZb7IX",
                    "name": "Chico Rose",
                    "type": "artist",
                    "uri": "spotify:artist:5OdVywqKqyCWwfE2fZb7IX"
                }, {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"
                    },
                    "href": "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
                    "id": "4D75GcNG95ebPtNvoNVXhz",
                    "name": "Afrojack",
                    "type": "artist",
                    "uri": "spotify:artist:4D75GcNG95ebPtNvoNVXhz"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3iyLP2ce8hthgd4ygzLRJD"
                },
                "href": "https://api.spotify.com/v1/albums/3iyLP2ce8hthgd4ygzLRJD",
                "id": "3iyLP2ce8hthgd4ygzLRJD",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273383e3a4822a5fda0267d19c4",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02383e3a4822a5fda0267d19c4",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851383e3a4822a5fda0267d19c4",
                    "width": 64
                }],
                "name": "Sad (feat. Afrojack)",
                "release_date": "2019-08-30",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:3iyLP2ce8hthgd4ygzLRJD"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5OdVywqKqyCWwfE2fZb7IX"
                },
                "href": "https://api.spotify.com/v1/artists/5OdVywqKqyCWwfE2fZb7IX",
                "id": "5OdVywqKqyCWwfE2fZb7IX",
                "name": "Chico Rose",
                "type": "artist",
                "uri": "spotify:artist:5OdVywqKqyCWwfE2fZb7IX"
            }, {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz"
                },
                "href": "https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz",
                "id": "4D75GcNG95ebPtNvoNVXhz",
                "name": "Afrojack",
                "type": "artist",
                "uri": "spotify:artist:4D75GcNG95ebPtNvoNVXhz"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 161280,
            "explicit": false,
            "external_ids": {
                "isrc": "NLZ541901236"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4ESPuOrSsRcBISzcMlzmY5"
            },
            "href": "https://api.spotify.com/v1/tracks/4ESPuOrSsRcBISzcMlzmY5",
            "id": "4ESPuOrSsRcBISzcMlzmY5",
            "is_local": false,
            "name": "Sad (feat. Afrojack)",
            "popularity": 73,
            "preview_url": "https://p.scdn.co/mp3-preview/0662422298035259dfbbaf11957591bad8a4a3bb?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:4ESPuOrSsRcBISzcMlzmY5"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1mmlWsyPJvvxMdabcGJjRn"
                    },
                    "href": "https://api.spotify.com/v1/artists/1mmlWsyPJvvxMdabcGJjRn",
                    "id": "1mmlWsyPJvvxMdabcGJjRn",
                    "name": "Lil Boom",
                    "type": "artist",
                    "uri": "spotify:artist:1mmlWsyPJvvxMdabcGJjRn"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/03S6ZM0hbdn0TjFwFGxgtk"
                },
                "href": "https://api.spotify.com/v1/albums/03S6ZM0hbdn0TjFwFGxgtk",
                "id": "03S6ZM0hbdn0TjFwFGxgtk",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273cdf8c2c464c0c6175c8e20c6",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02cdf8c2c464c0c6175c8e20c6",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851cdf8c2c464c0c6175c8e20c6",
                    "width": 64
                }],
                "name": "Sad Nigga Hours",
                "release_date": "2017-09-22",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:03S6ZM0hbdn0TjFwFGxgtk"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1mmlWsyPJvvxMdabcGJjRn"
                },
                "href": "https://api.spotify.com/v1/artists/1mmlWsyPJvvxMdabcGJjRn",
                "id": "1mmlWsyPJvvxMdabcGJjRn",
                "name": "Lil Boom",
                "type": "artist",
                "uri": "spotify:artist:1mmlWsyPJvvxMdabcGJjRn"
            }, {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/56HrCPz22OqbQLizgOEjm7"
                },
                "href": "https://api.spotify.com/v1/artists/56HrCPz22OqbQLizgOEjm7",
                "id": "56HrCPz22OqbQLizgOEjm7",
                "name": "904TEZZO",
                "type": "artist",
                "uri": "spotify:artist:56HrCPz22OqbQLizgOEjm7"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 96015,
            "explicit": true,
            "external_ids": {
                "isrc": "TCADG1798598"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/29Nr1r6Sn7zzyVFoEGCeqO"
            },
            "href": "https://api.spotify.com/v1/tracks/29Nr1r6Sn7zzyVFoEGCeqO",
            "id": "29Nr1r6Sn7zzyVFoEGCeqO",
            "is_local": false,
            "name": "Sad Nigga Hours",
            "popularity": 59,
            "preview_url": null,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:29Nr1r6Sn7zzyVFoEGCeqO"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/45eNHdiiabvmbp4erw26rg"
                    },
                    "href": "https://api.spotify.com/v1/artists/45eNHdiiabvmbp4erw26rg",
                    "id": "45eNHdiiabvmbp4erw26rg",
                    "name": "ILLENIUM",
                    "type": "artist",
                    "uri": "spotify:artist:45eNHdiiabvmbp4erw26rg"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/60xcVwuQJAOyu11xf9mObS"
                },
                "href": "https://api.spotify.com/v1/albums/60xcVwuQJAOyu11xf9mObS",
                "id": "60xcVwuQJAOyu11xf9mObS",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273529c6fa82d23f65076c1579b",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02529c6fa82d23f65076c1579b",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851529c6fa82d23f65076c1579b",
                    "width": 64
                }],
                "name": "ASCEND",
                "release_date": "2019-08-16",
                "release_date_precision": "day",
                "total_tracks": 17,
                "type": "album",
                "uri": "spotify:album:60xcVwuQJAOyu11xf9mObS"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/45eNHdiiabvmbp4erw26rg"
                },
                "href": "https://api.spotify.com/v1/artists/45eNHdiiabvmbp4erw26rg",
                "id": "45eNHdiiabvmbp4erw26rg",
                "name": "ILLENIUM",
                "type": "artist",
                "uri": "spotify:artist:45eNHdiiabvmbp4erw26rg"
            }, {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4LZ4De2MoO3lP6QaNCfvcu"
                },
                "href": "https://api.spotify.com/v1/artists/4LZ4De2MoO3lP6QaNCfvcu",
                "id": "4LZ4De2MoO3lP6QaNCfvcu",
                "name": "Said the Sky",
                "type": "artist",
                "uri": "spotify:artist:4LZ4De2MoO3lP6QaNCfvcu"
            }, {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0kErUwb6xgWfkdn0RyZWHZ"
                },
                "href": "https://api.spotify.com/v1/artists/0kErUwb6xgWfkdn0RyZWHZ",
                "id": "0kErUwb6xgWfkdn0RyZWHZ",
                "name": "Annika Wells",
                "type": "artist",
                "uri": "spotify:artist:0kErUwb6xgWfkdn0RyZWHZ"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 210423,
            "explicit": true,
            "external_ids": {
                "isrc": "USUG11901638"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4pioeMejnqa4T3QAEqwVA3"
            },
            "href": "https://api.spotify.com/v1/tracks/4pioeMejnqa4T3QAEqwVA3",
            "id": "4pioeMejnqa4T3QAEqwVA3",
            "is_local": false,
            "name": "Sad Songs (& Said The Sky with Annika Wells)",
            "popularity": 59,
            "preview_url": null,
            "track_number": 12,
            "type": "track",
            "uri": "spotify:track:4pioeMejnqa4T3QAEqwVA3"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4o4tLTIJ3eWMFerz73atcT"
                    },
                    "href": "https://api.spotify.com/v1/artists/4o4tLTIJ3eWMFerz73atcT",
                    "id": "4o4tLTIJ3eWMFerz73atcT",
                    "name": "Qveen Herby",
                    "type": "artist",
                    "uri": "spotify:artist:4o4tLTIJ3eWMFerz73atcT"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3Lg3r1tmDm2MCWSXrKLxeQ"
                },
                "href": "https://api.spotify.com/v1/albums/3Lg3r1tmDm2MCWSXrKLxeQ",
                "id": "3Lg3r1tmDm2MCWSXrKLxeQ",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273f97e1bcd9d4d5c6076bf0744",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02f97e1bcd9d4d5c6076bf0744",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851f97e1bcd9d4d5c6076bf0744",
                    "width": 64
                }],
                "name": "EP 3",
                "release_date": "2018-06-08",
                "release_date_precision": "day",
                "total_tracks": 5,
                "type": "album",
                "uri": "spotify:album:3Lg3r1tmDm2MCWSXrKLxeQ"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4o4tLTIJ3eWMFerz73atcT"
                },
                "href": "https://api.spotify.com/v1/artists/4o4tLTIJ3eWMFerz73atcT",
                "id": "4o4tLTIJ3eWMFerz73atcT",
                "name": "Qveen Herby",
                "type": "artist",
                "uri": "spotify:artist:4o4tLTIJ3eWMFerz73atcT"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 220800,
            "explicit": true,
            "external_ids": {
                "isrc": "QM24S1806201"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0S4kEeUTfzbh4dETER9ETx"
            },
            "href": "https://api.spotify.com/v1/tracks/0S4kEeUTfzbh4dETER9ETx",
            "id": "0S4kEeUTfzbh4dETER9ETx",
            "is_local": false,
            "name": "SADE IN THE 90s",
            "popularity": 57,
            "preview_url": "https://p.scdn.co/mp3-preview/3282c62495deb31afe8d87efce32ba542fd9c81a?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:0S4kEeUTfzbh4dETER9ETx"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4NHQUGzhtTLFvgF5SZesLK"
                    },
                    "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK",
                    "id": "4NHQUGzhtTLFvgF5SZesLK",
                    "name": "Tove Lo",
                    "type": "artist",
                    "uri": "spotify:artist:4NHQUGzhtTLFvgF5SZesLK"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/48I4Jtcqu5K5jZWadn035d"
                },
                "href": "https://api.spotify.com/v1/albums/48I4Jtcqu5K5jZWadn035d",
                "id": "48I4Jtcqu5K5jZWadn035d",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27393d6102524eaf03e19d0c11f",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0293d6102524eaf03e19d0c11f",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485193d6102524eaf03e19d0c11f",
                    "width": 64
                }],
                "name": "Sunshine Kitty (Paw Prints Edition)",
                "release_date": "2020-05-22",
                "release_date_precision": "day",
                "total_tracks": 22,
                "type": "album",
                "uri": "spotify:album:48I4Jtcqu5K5jZWadn035d"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4NHQUGzhtTLFvgF5SZesLK"
                },
                "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK",
                "id": "4NHQUGzhtTLFvgF5SZesLK",
                "name": "Tove Lo",
                "type": "artist",
                "uri": "spotify:artist:4NHQUGzhtTLFvgF5SZesLK"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 171247,
            "explicit": false,
            "external_ids": {
                "isrc": "SEUM72000520"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0T5eWUavIN647AcUFXfZve"
            },
            "href": "https://api.spotify.com/v1/tracks/0T5eWUavIN647AcUFXfZve",
            "id": "0T5eWUavIN647AcUFXfZve",
            "is_local": false,
            "name": "sadder badder cooler",
            "popularity": 61,
            "preview_url": null,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:0T5eWUavIN647AcUFXfZve"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2Waw2sSbqvAwK8NwACNjVo"
                    },
                    "href": "https://api.spotify.com/v1/artists/2Waw2sSbqvAwK8NwACNjVo",
                    "id": "2Waw2sSbqvAwK8NwACNjVo",
                    "name": "Bo Burnham",
                    "type": "artist",
                    "uri": "spotify:artist:2Waw2sSbqvAwK8NwACNjVo"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2raUWnH2AIOq6T4aCXrHwt"
                },
                "href": "https://api.spotify.com/v1/albums/2raUWnH2AIOq6T4aCXrHwt",
                "id": "2raUWnH2AIOq6T4aCXrHwt",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2737bcd00ad448241a28d7e2393",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e027bcd00ad448241a28d7e2393",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048517bcd00ad448241a28d7e2393",
                    "width": 64
                }],
                "name": "what.",
                "release_date": "2013-12-17",
                "release_date_precision": "day",
                "total_tracks": 18,
                "type": "album",
                "uri": "spotify:album:2raUWnH2AIOq6T4aCXrHwt"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2Waw2sSbqvAwK8NwACNjVo"
                },
                "href": "https://api.spotify.com/v1/artists/2Waw2sSbqvAwK8NwACNjVo",
                "id": "2Waw2sSbqvAwK8NwACNjVo",
                "name": "Bo Burnham",
                "type": "artist",
                "uri": "spotify:artist:2Waw2sSbqvAwK8NwACNjVo"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 263099,
            "explicit": true,
            "external_ids": {
                "isrc": "US85P1318902"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/07xM26pWCDsUWV2ialwgNf"
            },
            "href": "https://api.spotify.com/v1/tracks/07xM26pWCDsUWV2ialwgNf",
            "id": "07xM26pWCDsUWV2ialwgNf",
            "is_local": false,
            "name": "Sad",
            "popularity": 54,
            "preview_url": "https://p.scdn.co/mp3-preview/a79e6b402ecd0b03e67c855e1d655738a62505a0?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:07xM26pWCDsUWV2ialwgNf"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3pbKylceBTiUa0fZk4J4sJ"
                    },
                    "href": "https://api.spotify.com/v1/artists/3pbKylceBTiUa0fZk4J4sJ",
                    "id": "3pbKylceBTiUa0fZk4J4sJ",
                    "name": "Robert John",
                    "type": "artist",
                    "uri": "spotify:artist:3pbKylceBTiUa0fZk4J4sJ"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/48PU11yPb5ZWZ7cOHDXOxo"
                },
                "href": "https://api.spotify.com/v1/albums/48PU11yPb5ZWZ7cOHDXOxo",
                "id": "48PU11yPb5ZWZ7cOHDXOxo",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2731be24704f79a13b31882c1db",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e021be24704f79a13b31882c1db",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048511be24704f79a13b31882c1db",
                    "width": 64
                }],
                "name": "Classic Masters",
                "release_date": "2002",
                "release_date_precision": "year",
                "total_tracks": 8,
                "type": "album",
                "uri": "spotify:album:48PU11yPb5ZWZ7cOHDXOxo"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3pbKylceBTiUa0fZk4J4sJ"
                },
                "href": "https://api.spotify.com/v1/artists/3pbKylceBTiUa0fZk4J4sJ",
                "id": "3pbKylceBTiUa0fZk4J4sJ",
                "name": "Robert John",
                "type": "artist",
                "uri": "spotify:artist:3pbKylceBTiUa0fZk4J4sJ"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 253213,
            "explicit": false,
            "external_ids": {
                "isrc": "USEM30200081"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3w3rLh6wmne91BS2rwgcog"
            },
            "href": "https://api.spotify.com/v1/tracks/3w3rLh6wmne91BS2rwgcog",
            "id": "3w3rLh6wmne91BS2rwgcog",
            "is_local": false,
            "name": "Sad Eyes - Remastered",
            "popularity": 56,
            "preview_url": null,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:3w3rLh6wmne91BS2rwgcog"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/77SW9BnxLY8rJ0RciFqkHh"
                    },
                    "href": "https://api.spotify.com/v1/artists/77SW9BnxLY8rJ0RciFqkHh",
                    "id": "77SW9BnxLY8rJ0RciFqkHh",
                    "name": "The Neighbourhood",
                    "type": "artist",
                    "uri": "spotify:artist:77SW9BnxLY8rJ0RciFqkHh"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0ODLCdHBFVvKwJGeSfd1jy"
                },
                "href": "https://api.spotify.com/v1/albums/0ODLCdHBFVvKwJGeSfd1jy",
                "id": "0ODLCdHBFVvKwJGeSfd1jy",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2739b6ac98a52f62d5cb473da40",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e029b6ac98a52f62d5cb473da40",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048519b6ac98a52f62d5cb473da40",
                    "width": 64
                }],
                "name": "Hard To Imagine The Neighbourhood Ever Changing",
                "release_date": "2018-11-02",
                "release_date_precision": "day",
                "total_tracks": 21,
                "type": "album",
                "uri": "spotify:album:0ODLCdHBFVvKwJGeSfd1jy"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/77SW9BnxLY8rJ0RciFqkHh"
                },
                "href": "https://api.spotify.com/v1/artists/77SW9BnxLY8rJ0RciFqkHh",
                "id": "77SW9BnxLY8rJ0RciFqkHh",
                "name": "The Neighbourhood",
                "type": "artist",
                "uri": "spotify:artist:77SW9BnxLY8rJ0RciFqkHh"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 245826,
            "explicit": false,
            "external_ids": {
                "isrc": "USSM11707132"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7sIYHDxjteT6RY29gAGzP2"
            },
            "href": "https://api.spotify.com/v1/tracks/7sIYHDxjteT6RY29gAGzP2",
            "id": "7sIYHDxjteT6RY29gAGzP2",
            "is_local": false,
            "name": "Sadderdaze",
            "popularity": 61,
            "preview_url": "https://p.scdn.co/mp3-preview/63bfec4b36ab2f5c39d1ce0afa61fa36f896c365?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 20,
            "type": "track",
            "uri": "spotify:track:7sIYHDxjteT6RY29gAGzP2"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3vKT7DifMxpG9CWR7c8eC8"
                    },
                    "href": "https://api.spotify.com/v1/artists/3vKT7DifMxpG9CWR7c8eC8",
                    "id": "3vKT7DifMxpG9CWR7c8eC8",
                    "name": "JOBA",
                    "type": "artist",
                    "uri": "spotify:artist:3vKT7DifMxpG9CWR7c8eC8"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/5AttDpf4EjUKByRT8fbPHy"
                },
                "href": "https://api.spotify.com/v1/albums/5AttDpf4EjUKByRT8fbPHy",
                "id": "5AttDpf4EjUKByRT8fbPHy",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2732af3c3c3dbd49ea50d00ade8",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e022af3c3c3dbd49ea50d00ade8",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048512af3c3c3dbd49ea50d00ade8",
                    "width": 64
                }],
                "name": "Sad Saturdays",
                "release_date": "2015-07-11",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:5AttDpf4EjUKByRT8fbPHy"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3vKT7DifMxpG9CWR7c8eC8"
                },
                "href": "https://api.spotify.com/v1/artists/3vKT7DifMxpG9CWR7c8eC8",
                "id": "3vKT7DifMxpG9CWR7c8eC8",
                "name": "JOBA",
                "type": "artist",
                "uri": "spotify:artist:3vKT7DifMxpG9CWR7c8eC8"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 267040,
            "explicit": false,
            "external_ids": {
                "isrc": "USLD90812248"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/70A7N2jqbXrZnZgjQKGJUs"
            },
            "href": "https://api.spotify.com/v1/tracks/70A7N2jqbXrZnZgjQKGJUs",
            "id": "70A7N2jqbXrZnZgjQKGJUs",
            "is_local": false,
            "name": "Sad Saturdays",
            "popularity": 56,
            "preview_url": "https://p.scdn.co/mp3-preview/8ba21815b77617f1b93859b1d80764fc00f5cbae?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:70A7N2jqbXrZnZgjQKGJUs"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa"
                    },
                    "href": "https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa",
                    "id": "00FQb4jTyendYWaN8pK0wa",
                    "name": "Lana Del Rey",
                    "type": "artist",
                    "uri": "spotify:artist:00FQb4jTyendYWaN8pK0wa"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1ORxRsK3MrSLvh7VQTF01F"
                },
                "href": "https://api.spotify.com/v1/albums/1ORxRsK3MrSLvh7VQTF01F",
                "id": "1ORxRsK3MrSLvh7VQTF01F",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2731624590458126fc8b8c64c2f",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048511624590458126fc8b8c64c2f",
                    "width": 64
                }],
                "name": "Ultraviolence (Deluxe)",
                "release_date": "2014-01-01",
                "release_date_precision": "day",
                "total_tracks": 14,
                "type": "album",
                "uri": "spotify:album:1ORxRsK3MrSLvh7VQTF01F"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa"
                },
                "href": "https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa",
                "id": "00FQb4jTyendYWaN8pK0wa",
                "name": "Lana Del Rey",
                "type": "artist",
                "uri": "spotify:artist:00FQb4jTyendYWaN8pK0wa"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 317760,
            "explicit": false,
            "external_ids": {
                "isrc": "GBUM71402107"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/11MyiSGZSYSmhhqwGUTtAq"
            },
            "href": "https://api.spotify.com/v1/tracks/11MyiSGZSYSmhhqwGUTtAq",
            "id": "11MyiSGZSYSmhhqwGUTtAq",
            "is_local": false,
            "name": "Sad Girl",
            "popularity": 61,
            "preview_url": null,
            "track_number": 6,
            "type": "track",
            "uri": "spotify:track:11MyiSGZSYSmhhqwGUTtAq"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3nJWBJvK7uGvfp4iZh9CkN"
                    },
                    "href": "https://api.spotify.com/v1/artists/3nJWBJvK7uGvfp4iZh9CkN",
                    "id": "3nJWBJvK7uGvfp4iZh9CkN",
                    "name": "Relient K",
                    "type": "artist",
                    "uri": "spotify:artist:3nJWBJvK7uGvfp4iZh9CkN"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4sb1t4vquXRUBjVYYsWlCM"
                },
                "href": "https://api.spotify.com/v1/albums/4sb1t4vquXRUBjVYYsWlCM",
                "id": "4sb1t4vquXRUBjVYYsWlCM",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273803672f2a0c9ac6dcbd2e9f3",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02803672f2a0c9ac6dcbd2e9f3",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851803672f2a0c9ac6dcbd2e9f3",
                    "width": 64
                }],
                "name": "The Anatomy of the Tongue in Cheek",
                "release_date": "2001-08-28",
                "release_date_precision": "day",
                "total_tracks": 17,
                "type": "album",
                "uri": "spotify:album:4sb1t4vquXRUBjVYYsWlCM"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3nJWBJvK7uGvfp4iZh9CkN"
                },
                "href": "https://api.spotify.com/v1/artists/3nJWBJvK7uGvfp4iZh9CkN",
                "id": "3nJWBJvK7uGvfp4iZh9CkN",
                "name": "Relient K",
                "type": "artist",
                "uri": "spotify:artist:3nJWBJvK7uGvfp4iZh9CkN"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 177600,
            "explicit": false,
            "external_ids": {
                "isrc": "USGOT0646045"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5pZXriIfUJ5G0MiuoIkiww"
            },
            "href": "https://api.spotify.com/v1/tracks/5pZXriIfUJ5G0MiuoIkiww",
            "id": "5pZXriIfUJ5G0MiuoIkiww",
            "is_local": false,
            "name": "Sadie Hawkins Dance",
            "popularity": 54,
            "preview_url": "https://p.scdn.co/mp3-preview/ec5a4b0e6d86143248e3e3c824fde2df6da8fb4a?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:5pZXriIfUJ5G0MiuoIkiww"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1QRj3hoop9Mv5VvHQkwPEp"
                    },
                    "href": "https://api.spotify.com/v1/artists/1QRj3hoop9Mv5VvHQkwPEp",
                    "id": "1QRj3hoop9Mv5VvHQkwPEp",
                    "name": "Olivia O'Brien",
                    "type": "artist",
                    "uri": "spotify:artist:1QRj3hoop9Mv5VvHQkwPEp"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3E3BHUrEHQodei0Mtwjtmi"
                },
                "href": "https://api.spotify.com/v1/albums/3E3BHUrEHQodei0Mtwjtmi",
                "id": "3E3BHUrEHQodei0Mtwjtmi",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27320ad122b6aa29a7f17fafaab",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0220ad122b6aa29a7f17fafaab",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485120ad122b6aa29a7f17fafaab",
                    "width": 64
                }],
                "name": "It Was A Sad Fucking Summer",
                "release_date": "2019-11-15",
                "release_date_precision": "day",
                "total_tracks": 2,
                "type": "album",
                "uri": "spotify:album:3E3BHUrEHQodei0Mtwjtmi"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1QRj3hoop9Mv5VvHQkwPEp"
                },
                "href": "https://api.spotify.com/v1/artists/1QRj3hoop9Mv5VvHQkwPEp",
                "id": "1QRj3hoop9Mv5VvHQkwPEp",
                "name": "Olivia O'Brien",
                "type": "artist",
                "uri": "spotify:artist:1QRj3hoop9Mv5VvHQkwPEp"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 178000,
            "explicit": false,
            "external_ids": {
                "isrc": "USUM71922556"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1MijKOgtIl3uK70qYrZnoy"
            },
            "href": "https://api.spotify.com/v1/tracks/1MijKOgtIl3uK70qYrZnoy",
            "id": "1MijKOgtIl3uK70qYrZnoy",
            "is_local": false,
            "name": "Sad Songs In The Summer",
            "popularity": 56,
            "preview_url": null,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:1MijKOgtIl3uK70qYrZnoy"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
                    },
                    "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
                    "id": "06HL4z0CvFAxyc27GXpf02",
                    "name": "Taylor Swift",
                    "type": "artist",
                    "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
                }],
                "available_markets": ["CA", "US"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1KlU96Hw9nlvqpBPlSqcTV"
                },
                "href": "https://api.spotify.com/v1/albums/1KlU96Hw9nlvqpBPlSqcTV",
                "id": "1KlU96Hw9nlvqpBPlSqcTV",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273a7613d346501b828b56a0bc3",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02a7613d346501b828b56a0bc3",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851a7613d346501b828b56a0bc3",
                    "width": 64
                }],
                "name": "Red (Deluxe Edition)",
                "release_date": "2012-10-22",
                "release_date_precision": "day",
                "total_tracks": 22,
                "type": "album",
                "uri": "spotify:album:1KlU96Hw9nlvqpBPlSqcTV"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
                },
                "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
                "id": "06HL4z0CvFAxyc27GXpf02",
                "name": "Taylor Swift",
                "type": "artist",
                "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
            }],
            "available_markets": ["CA", "US"],
            "disc_number": 1,
            "duration_ms": 283680,
            "explicit": false,
            "external_ids": {
                "isrc": "USCJY1231024"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5QKhg4r4Ibt0LVTmWEXTEg"
            },
            "href": "https://api.spotify.com/v1/tracks/5QKhg4r4Ibt0LVTmWEXTEg",
            "id": "5QKhg4r4Ibt0LVTmWEXTEg",
            "is_local": false,
            "name": "Sad Beautiful Tragic",
            "popularity": 52,
            "preview_url": null,
            "track_number": 12,
            "type": "track",
            "uri": "spotify:track:5QKhg4r4Ibt0LVTmWEXTEg"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2yaQNwEXCHiKg0tq74M7qh"
                    },
                    "href": "https://api.spotify.com/v1/artists/2yaQNwEXCHiKg0tq74M7qh",
                    "id": "2yaQNwEXCHiKg0tq74M7qh",
                    "name": "Quentith Stallion",
                    "type": "artist",
                    "uri": "spotify:artist:2yaQNwEXCHiKg0tq74M7qh"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4Ym1uDuW1LNUm1UCWOXWuA"
                },
                "href": "https://api.spotify.com/v1/albums/4Ym1uDuW1LNUm1UCWOXWuA",
                "id": "4Ym1uDuW1LNUm1UCWOXWuA",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273499d0c77c749d51706552a0d",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02499d0c77c749d51706552a0d",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851499d0c77c749d51706552a0d",
                    "width": 64
                }],
                "name": "Last Ride",
                "release_date": "2020-08-25",
                "release_date_precision": "day",
                "total_tracks": 5,
                "type": "album",
                "uri": "spotify:album:4Ym1uDuW1LNUm1UCWOXWuA"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/2yaQNwEXCHiKg0tq74M7qh"
                },
                "href": "https://api.spotify.com/v1/artists/2yaQNwEXCHiKg0tq74M7qh",
                "id": "2yaQNwEXCHiKg0tq74M7qh",
                "name": "Quentith Stallion",
                "type": "artist",
                "uri": "spotify:artist:2yaQNwEXCHiKg0tq74M7qh"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 139885,
            "explicit": false,
            "external_ids": {
                "isrc": "QZK6K2000029"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3kYtA4GVx8hL9Xrg8J874D"
            },
            "href": "https://api.spotify.com/v1/tracks/3kYtA4GVx8hL9Xrg8J874D",
            "id": "3kYtA4GVx8hL9Xrg8J874D",
            "is_local": false,
            "name": "Sadness Fading",
            "popularity": 52,
            "preview_url": "https://p.scdn.co/mp3-preview/3241cc28baf5eca2b268499c60137dc9d8413276?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:3kYtA4GVx8hL9Xrg8J874D"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4AVFqumd2ogHFlRbKIjp1t"
                    },
                    "href": "https://api.spotify.com/v1/artists/4AVFqumd2ogHFlRbKIjp1t",
                    "id": "4AVFqumd2ogHFlRbKIjp1t",
                    "name": "Alesso",
                    "type": "artist",
                    "uri": "spotify:artist:4AVFqumd2ogHFlRbKIjp1t"
                }, {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7vXDAI8JwjW531ouMGbfcp"
                    },
                    "href": "https://api.spotify.com/v1/artists/7vXDAI8JwjW531ouMGbfcp",
                    "id": "7vXDAI8JwjW531ouMGbfcp",
                    "name": "TINI",
                    "type": "artist",
                    "uri": "spotify:artist:7vXDAI8JwjW531ouMGbfcp"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0D26ZmfHtg7309j2TEKxnR"
                },
                "href": "https://api.spotify.com/v1/albums/0D26ZmfHtg7309j2TEKxnR",
                "id": "0D26ZmfHtg7309j2TEKxnR",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2734f0d2e7ca8d89e39d1bcac37",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e024f0d2e7ca8d89e39d1bcac37",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048514f0d2e7ca8d89e39d1bcac37",
                    "width": 64
                }],
                "name": "Sad Song (feat. TINI)",
                "release_date": "2019-06-14",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:0D26ZmfHtg7309j2TEKxnR"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4AVFqumd2ogHFlRbKIjp1t"
                },
                "href": "https://api.spotify.com/v1/artists/4AVFqumd2ogHFlRbKIjp1t",
                "id": "4AVFqumd2ogHFlRbKIjp1t",
                "name": "Alesso",
                "type": "artist",
                "uri": "spotify:artist:4AVFqumd2ogHFlRbKIjp1t"
            }, {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7vXDAI8JwjW531ouMGbfcp"
                },
                "href": "https://api.spotify.com/v1/artists/7vXDAI8JwjW531ouMGbfcp",
                "id": "7vXDAI8JwjW531ouMGbfcp",
                "name": "TINI",
                "type": "artist",
                "uri": "spotify:artist:7vXDAI8JwjW531ouMGbfcp"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 154024,
            "explicit": false,
            "external_ids": {
                "isrc": "USUMV1900981"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2JoIjuzRplpYGvvLpSW2on"
            },
            "href": "https://api.spotify.com/v1/tracks/2JoIjuzRplpYGvvLpSW2on",
            "id": "2JoIjuzRplpYGvvLpSW2on",
            "is_local": false,
            "name": "Sad Song (feat. TINI)",
            "popularity": 64,
            "preview_url": null,
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2JoIjuzRplpYGvvLpSW2on"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6DvlemMOlMH6VD9tB7BPRf"
                    },
                    "href": "https://api.spotify.com/v1/artists/6DvlemMOlMH6VD9tB7BPRf",
                    "id": "6DvlemMOlMH6VD9tB7BPRf",
                    "name": "Tom MacDonald",
                    "type": "artist",
                    "uri": "spotify:artist:6DvlemMOlMH6VD9tB7BPRf"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0BA7Ub5PMeeH2hQMZwLVXY"
                },
                "href": "https://api.spotify.com/v1/albums/0BA7Ub5PMeeH2hQMZwLVXY",
                "id": "0BA7Ub5PMeeH2hQMZwLVXY",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2737a879007f056886941a9d55b",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e027a879007f056886941a9d55b",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048517a879007f056886941a9d55b",
                    "width": 64
                }],
                "name": "Sad Rappers",
                "release_date": "2019-03-01",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:0BA7Ub5PMeeH2hQMZwLVXY"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/6DvlemMOlMH6VD9tB7BPRf"
                },
                "href": "https://api.spotify.com/v1/artists/6DvlemMOlMH6VD9tB7BPRf",
                "id": "6DvlemMOlMH6VD9tB7BPRf",
                "name": "Tom MacDonald",
                "type": "artist",
                "uri": "spotify:artist:6DvlemMOlMH6VD9tB7BPRf"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 190918,
            "explicit": false,
            "external_ids": {
                "isrc": "QM24S1908711"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/52bj3WpsQgmroEejgUYvEM"
            },
            "href": "https://api.spotify.com/v1/tracks/52bj3WpsQgmroEejgUYvEM",
            "id": "52bj3WpsQgmroEejgUYvEM",
            "is_local": false,
            "name": "Sad Rappers",
            "popularity": 53,
            "preview_url": "https://p.scdn.co/mp3-preview/919f38f562fc84b42f0b80f07bd3e884724530e4?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:52bj3WpsQgmroEejgUYvEM"
        }, {
            "album": {
                "album_type": "album",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/08F3Y3SctIlsOEmKd6dnH8"
                    },
                    "href": "https://api.spotify.com/v1/artists/08F3Y3SctIlsOEmKd6dnH8",
                    "id": "08F3Y3SctIlsOEmKd6dnH8",
                    "name": "Yusuf / Cat Stevens",
                    "type": "artist",
                    "uri": "spotify:artist:08F3Y3SctIlsOEmKd6dnH8"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4d0yYXHa2zt2vZgfm7t8yP"
                },
                "href": "https://api.spotify.com/v1/albums/4d0yYXHa2zt2vZgfm7t8yP",
                "id": "4d0yYXHa2zt2vZgfm7t8yP",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273bd99dbad22272b5748bd7cae",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02bd99dbad22272b5748bd7cae",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851bd99dbad22272b5748bd7cae",
                    "width": 64
                }],
                "name": "Tea For The Tillerman²",
                "release_date": "2020-09-18",
                "release_date_precision": "day",
                "total_tracks": 11,
                "type": "album",
                "uri": "spotify:album:4d0yYXHa2zt2vZgfm7t8yP"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/08F3Y3SctIlsOEmKd6dnH8"
                },
                "href": "https://api.spotify.com/v1/artists/08F3Y3SctIlsOEmKd6dnH8",
                "id": "08F3Y3SctIlsOEmKd6dnH8",
                "name": "Yusuf / Cat Stevens",
                "type": "artist",
                "uri": "spotify:artist:08F3Y3SctIlsOEmKd6dnH8"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 237786,
            "explicit": false,
            "external_ids": {
                "isrc": "GBUM72001042"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4wEiuLPlURAWMZMvq6gRjF"
            },
            "href": "https://api.spotify.com/v1/tracks/4wEiuLPlURAWMZMvq6gRjF",
            "id": "4wEiuLPlURAWMZMvq6gRjF",
            "is_local": false,
            "name": "Sad Lisa",
            "popularity": 40,
            "preview_url": null,
            "track_number": 4,
            "type": "track",
            "uri": "spotify:track:4wEiuLPlURAWMZMvq6gRjF"
        }, {
            "album": {
                "album_type": "single",
                "artists": [{
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3wzxpKU7xhTFLQ8hQ4P3ug"
                    },
                    "href": "https://api.spotify.com/v1/artists/3wzxpKU7xhTFLQ8hQ4P3ug",
                    "id": "3wzxpKU7xhTFLQ8hQ4P3ug",
                    "name": "Evolvations",
                    "type": "artist",
                    "uri": "spotify:artist:3wzxpKU7xhTFLQ8hQ4P3ug"
                }],
                "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0zbPF1od6zcUfdvvH6iupD"
                },
                "href": "https://api.spotify.com/v1/albums/0zbPF1od6zcUfdvvH6iupD",
                "id": "0zbPF1od6zcUfdvvH6iupD",
                "images": [{
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273fd4c27b7c358538ad6fcf3bc",
                    "width": 640
                }, {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02fd4c27b7c358538ad6fcf3bc",
                    "width": 300
                }, {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851fd4c27b7c358538ad6fcf3bc",
                    "width": 64
                }],
                "name": "Evolvations",
                "release_date": "2018-10-06",
                "release_date_precision": "day",
                "total_tracks": 2,
                "type": "album",
                "uri": "spotify:album:0zbPF1od6zcUfdvvH6iupD"
            },
            "artists": [{
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3wzxpKU7xhTFLQ8hQ4P3ug"
                },
                "href": "https://api.spotify.com/v1/artists/3wzxpKU7xhTFLQ8hQ4P3ug",
                "id": "3wzxpKU7xhTFLQ8hQ4P3ug",
                "name": "Evolvations",
                "type": "artist",
                "uri": "spotify:artist:3wzxpKU7xhTFLQ8hQ4P3ug"
            }],
            "available_markets": ["AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA"],
            "disc_number": 1,
            "duration_ms": 126922,
            "explicit": false,
            "external_ids": {
                "isrc": "SE5IB1800892"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2ZHA2R52C71VuwGG6hKgny"
            },
            "href": "https://api.spotify.com/v1/tracks/2ZHA2R52C71VuwGG6hKgny",
            "id": "2ZHA2R52C71VuwGG6hKgny",
            "is_local": false,
            "name": "SAD!",
            "popularity": 52,
            "preview_url": "https://p.scdn.co/mp3-preview/360fb98861608e1375699eb1a2766d156a4a7c0c?cid=774b29d4f13844c495f206cafdad9c86",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:2ZHA2R52C71VuwGG6hKgny"
        }],
        "limit": 30,
        "next": "https://api.spotify.com/v1/search?query=sad&type=track&offset=30&limit=30",
        "offset": 0,
        "previous": null,
        "total": 100020
    }
}