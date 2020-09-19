$('document').ready(function(){

// Variables 

    // References to DOM Elements (HTML)
    // MOOD Buttons
    var happyBtn = $("#happy-button");
    var sadBtn = $("#sad-button");
    var chillBtn = $("#chill-button");
    

    // Playback Buttons

    // Gif Container
    var giphyContainer = $("#gif-container");
    

var spotifyAPIKey = "BQD-B3lXyyP4fS9VMdrgVGJRJZB0haUcTt5Nfe0nGCPCF-OkM8tGcqWgvsYJ6rSD5Psqg7r3Zb6z6vCQF62hu5gLVSZ8F8CEuPZNmfbsyPnJ2hvEeipyb23NcPa7LbUKH2KWS8ADBAqZY-R1cF1JwnpdTSwmoQ"
var giphyAPIKey = "api_key=KNlTgJabkqAK66NkPnBuEEWTVntHdFAb"

    // GIPHY API  

    var giphyURL = "api.giphy.com/v1/gifs/random?";
    // var happyURL = giphyURL + giphyAPIKey + "tag=happy";
    var happyURL = "https://api.giphy.com/v1/gifs/random?api_key=KNlTgJabkqAK66NkPnBuEEWTVntHdFAb&tag=happy";

    $(happyBtn).on("click", function(event) {
      event.preventDefault();

      $.ajax({
          url: happyURL,
          method: "GET"
      })

    // .then statement to attach to the html elements
    .then(function(response) {
      console.log(happyURL);
      console.log(response);

      var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var happyImage = $("<img>");

      // Setting the catImage src attribute to imageUrl
      happyImage.attr("src", imageUrl);
      happyImage.attr("alt", "cat image");

      // Prepending the catImage to the images div
      $(giphyContainer).prepend(happyImage);


    });

  });

 
  });


// BELOW: PRIMARY FOCUS IS GENERATING SONG

//Global Variables
var spotifyAPIToken = "BQCbXXGZubx_1BFJltx8UUYkrS7gauCFZHEjpqTGDTQErw29PrvZMnRl25vRvYJSwf20xATV5xbwP3ey5oa-bmpZk-p0utch1NZRy_6nAK5kzveH65fGYkFbCFL-dKgBBp09IALC5WjfJM6WGQOQL6dd0e-i6Q";
var songName;


function setUpSpotifyPlayer(mood) {
  var player = new Spotify.Player({
    name: 'Echo Chamber',
    getOAuthToken: cb => { cb(spotifyAPIToken); }
  });
  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready (means successful)
  player.addListener('ready', (device_id) => {
    var trackId = "spotify:track:7xGfFoTpQ2E7fRF5lN10tr"
    // var trackId = getSongForMood(mood, player);
    console.log('Ready with Device ID', device_id);
    playSongThroughWebAPI(trackId, player);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
  console.log("Spotify Play Function Run")
}

function runWhenSDKPlayerReady() {
  setUpSpotifyPlayer();
}

//Note - url's are a subset of uri - uri is unique to track
function playSongThroughWebAPI(song_uri, player) {
  const play = ({
    spotify_uri,
    playerInstance: {
      _options: {
        getOAuthToken,
        id
      }
    }
  }) => {
    getOAuthToken(access_token => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: 'PUT',
        body: JSON.stringify({ uris: [spotify_uri] }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${spotifyAPIToken}`
        },
      });
    });
  };

  play({
    playerInstance: player,
    spotify_uri: song_uri,
  });
}

/* function getRndInteger() {
  return Math.floor(Math.random()*30);
} */

//This was generated from Spotify based on a query of "sad", we can build objects from these and make a randomizer function that takes from them.
var moodSadData = {
  "tracks" : {
    "href" : "https://api.spotify.com/v1/search?query=sad&type=track&offset=0&limit=2",
    "items" : [ {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4"
          },
          "href" : "https://api.spotify.com/v1/artists/15UsOTVnJzReFVN1VCnxy4",
          "id" : "15UsOTVnJzReFVN1VCnxy4",
          "name" : "XXXTENTACION",
          "type" : "artist",
          "uri" : "spotify:artist:15UsOTVnJzReFVN1VCnxy4"
        } ],
        "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2Ti79nwTsont5ZHfdxIzAm"
        },
        "href" : "https://api.spotify.com/v1/albums/2Ti79nwTsont5ZHfdxIzAm",
        "id" : "2Ti79nwTsont5ZHfdxIzAm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273806c160566580d6335d1f16c",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02806c160566580d6335d1f16c",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851806c160566580d6335d1f16c",
          "width" : 64
        } ],
        "name" : "?",
        "release_date" : "2018-03-16",
        "release_date_precision" : "day",
        "total_tracks" : 18,
        "type" : "album",
        "uri" : "spotify:album:2Ti79nwTsont5ZHfdxIzAm"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4"
        },
        "href" : "https://api.spotify.com/v1/artists/15UsOTVnJzReFVN1VCnxy4",
        "id" : "15UsOTVnJzReFVN1VCnxy4",
        "name" : "XXXTENTACION",
        "type" : "artist",
        "uri" : "spotify:artist:15UsOTVnJzReFVN1VCnxy4"
      } ],
      "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "KZ", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "UY", "VN", "XK", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 166605,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USUG11800208"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3ee8Jmje8o58CHK66QrVC2"
      },
      "href" : "https://api.spotify.com/v1/tracks/3ee8Jmje8o58CHK66QrVC2",
      "id" : "3ee8Jmje8o58CHK66QrVC2",
      "is_local" : false,
      "name" : "SAD!",
      "popularity" : 86,
      "preview_url" : null,
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:3ee8Jmje8o58CHK66QrVC2"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3LVYHgfHgCTy3QSRt5kKQg"
          },
          "href" : "https://api.spotify.com/v1/artists/3LVYHgfHgCTy3QSRt5kKQg",
          "id" : "3LVYHgfHgCTy3QSRt5kKQg",
          "name" : "Rasster",
          "type" : "artist",
          "uri" : "spotify:artist:3LVYHgfHgCTy3QSRt5kKQg"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5rGrDvrLOV2VV8SCFVGWlj"
          },
          "href" : "https://api.spotify.com/v1/artists/5rGrDvrLOV2VV8SCFVGWlj",
          "id" : "5rGrDvrLOV2VV8SCFVGWlj",
          "name" : "Imanbek",
          "type" : "artist",
          "uri" : "spotify:artist:5rGrDvrLOV2VV8SCFVGWlj"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5vPqlDBYNZiF5SrHGS6Cyt"
          },
          "href" : "https://api.spotify.com/v1/artists/5vPqlDBYNZiF5SrHGS6Cyt",
          "id" : "5vPqlDBYNZiF5SrHGS6Cyt",
          "name" : "Erin Bloomer",
          "type" : "artist",
          "uri" : "spotify:artist:5vPqlDBYNZiF5SrHGS6Cyt"
        } ],
        "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GT", "HN", "HR", "HU", "ID", "IE", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PS", "PT", "PY", "QA", "RS", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TW", "US", "UY", "VN", "XK", "ZA" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0MoT8k5F7qoeCcP2DfW8GF"
        },
        "href" : "https://api.spotify.com/v1/albums/0MoT8k5F7qoeCcP2DfW8GF",
        "id" : "0MoT8k5F7qoeCcP2DfW8GF",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273c64869b1cf834c228839f25b",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02c64869b1cf834c228839f25b",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851c64869b1cf834c228839f25b",
          "width" : 64
        } ],
        "name" : "SAD (Imanbek xxx Remix)",
        "release_date" : "2020-05-22",
        "release_date_precision" : "day",
        "total_tracks" : 1,
        "type" : "album",
        "uri" : "spotify:album:0MoT8k5F7qoeCcP2DfW8GF"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3LVYHgfHgCTy3QSRt5kKQg"
        },
        "href" : "https://api.spotify.com/v1/artists/3LVYHgfHgCTy3QSRt5kKQg",
        "id" : "3LVYHgfHgCTy3QSRt5kKQg",
        "name" : "Rasster",
        "type" : "artist",
        "uri" : "spotify:artist:3LVYHgfHgCTy3QSRt5kKQg"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5vPqlDBYNZiF5SrHGS6Cyt"
        },
        "href" : "https://api.spotify.com/v1/artists/5vPqlDBYNZiF5SrHGS6Cyt",
        "id" : "5vPqlDBYNZiF5SrHGS6Cyt",
        "name" : "Erin Bloomer",
        "type" : "artist",
        "uri" : "spotify:artist:5vPqlDBYNZiF5SrHGS6Cyt"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5rGrDvrLOV2VV8SCFVGWlj"
        },
        "href" : "https://api.spotify.com/v1/artists/5rGrDvrLOV2VV8SCFVGWlj",
        "id" : "5rGrDvrLOV2VV8SCFVGWlj",
        "name" : "Imanbek",
        "type" : "artist",
        "uri" : "spotify:artist:5rGrDvrLOV2VV8SCFVGWlj"
      } ],
      "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GT", "HN", "HR", "HU", "ID", "IE", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PS", "PT", "PY", "QA", "RS", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TW", "US", "UY", "VN", "XK", "ZA" ],
      "disc_number" : 1,
      "duration_ms" : 174720,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "GBUM72002044"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4x5ymi4akay9Fq5Xm1PW3E"
      },
      "href" : "https://api.spotify.com/v1/tracks/4x5ymi4akay9Fq5Xm1PW3E",
      "id" : "4x5ymi4akay9Fq5Xm1PW3E",
      "is_local" : false,
      "name" : "SAD - Imanbek xxx Remix",
      "popularity" : 77,
      "preview_url" : null,
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:4x5ymi4akay9Fq5Xm1PW3E"
    } ],
    "limit" : 2,
    "next" : "https://api.spotify.com/v1/search?query=sad&type=track&offset=2&limit=2",
    "offset" : 0,
    "previous" : null,
    "total" : 100002
  }
}
function getSongForMood(mood, player){

}

window.onSpotifyWebPlaybackSDKReady = runWhenSDKPlayerReady;

