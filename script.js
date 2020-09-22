$('document').ready(function () {

  // Variables 

  // References to DOM Elements (HTML)
  // MOOD Buttons
  var happyBtn = $("#happy-button");
  var sadBtn = $("#sad-button");
  var chillBtn = $("#chill-button");


  // Playback Buttons

  // Gif Container
  var giphyContainer = $("#gif-container");
  var giphyAPIKey = "api_key=KNlTgJabkqAK66NkPnBuEEWTVntHdFAb"

  // GIPHY API  
  var giphyURL = "api.giphy.com/v1/gifs/random?";
  // var happyURL = giphyURL + giphyAPIKey + "tag=happy";
  var happyURL = "https://api.giphy.com/v1/gifs/random?api_key=KNlTgJabkqAK66NkPnBuEEWTVntHdFAb&tag=happy";

  $(happyBtn).on("click", function (event) {
    event.preventDefault();

    $.ajax({
      url: happyURL,
      method: "GET"
    })

      // .then statement to attach to the html elements
      .then(function (response) {
        $(giphyContainer).text("");
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
//Global Variables for Spotify Player
var spotifyAPIToken = "BQA8_GDRcNSqM3k8e7vZawOxTti7W9j27NCMFkMc58Zpx8iXv8L6ykc1GUwjthdou-h26_ICcoAVUsWg1zZPTShkCK8t1-C8L4sH9zEhZ831h7f1vQrJ0MxdwS7HO0HYknN2cNDsdAM1I5dlEiADHa39vkncuA";
var songTitle = $("#title");
var songArtist = $("#artist");
var trackId;

function setUpSpotifyPlayer(mood) {
  var player = new Spotify.Player({
    name: 'Echo Chamber',
    getOAuthToken: cb => { cb(spotifyAPIToken); }
  });
  console.log(player);
  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready (means successful)
  player.addListener('ready', (device_id) => {
    console.log(moodSadData);
    //Function to get song plus data by mood
    getRandomSongByMood();
    //Render song data on the page.

    //test track below (carly rae jepsen)
    trackId = "spotify:track:7xGfFoTpQ2E7fRF5lN10tr"
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

function getRndInteger() {
  var randomInteger = Math.floor(Math.random() * 10);
  console.log(randomInteger);
  // tracks.items[randomInteger]...........uri
}
function getRandomSongByMood(userMood) {
  console.log(userMood);
  console.log(moodSadData);
}

//See other JS files for 10 generated songs each, make sure to adjust the above function
$.getScript("happysongs.js", function () {
  console.log("Script loaded but not executed.");
});
$.getScript("sadsongs.js", function () {
  console.log("Script loaded but not executed.");
});
$.getScript("chillsongs.js", function () {
  console.log("Script loaded but not executed.");
});

function getSongForMood(mood, player) {

}

//Function to get authorization from Spotify for refresh access tokens, will eventually need to be attached to document ready. Not finished yet.
function getAuthorization() {
  var appClientId = "dbb197ca82bf4b6ab710b4701c2b80df"
  var redirectUri = "https://qudoki.github.io/group5-project1/"
  $.ajax({
    url: "https://accounts.spotify.com/authorize" + "&client_id=" + appClientId + "&response_type=code&redirect_uri=" + redirectUri,
    method: "GET"
  })

    // .then statement to return auth code (this is not working)
    .then(function (response) {
      var authCode = response;
      console.log(authCode);
    });
  // exchange auth for access token and refresh tokens
  $.ajax({
    url: "https://accounts.spotify.com/api/token&grant_type=authorization_code&/authorization endpoint=" + authCode + "&redirect_uri=" + redirectUri,
    method: "POST"
  })
    .then(function (response) {
      console.log(response);
    });
}

window.onSpotifyWebPlaybackSDKReady = runWhenSDKPlayerReady;

