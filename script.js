$('document').ready(function () {

  // Variables / References to DOM Elements (HTML)
  // MOOD Buttons
  var happyBtn = $("#happy-button");
  var sadBtn = $("#sad-button");
  var chillBtn = $("#chill-button");

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
        console.log(response);

        var randomSong = getRandomSongByMood("happy");

        // get random song by mood function
        playSongThroughWebAPI(randomSong.uri, player);
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

  // sad giphy ajax request
  var sadURL = "https://api.giphy.com/v1/gifs/random?api_key=KNlTgJabkqAK66NkPnBuEEWTVntHdFAb&tag=sad";

  $(sadBtn).on("click", function (event) {
    event.preventDefault();

    $.ajax({
      url: sadURL,
      method: "GET"
    })

      // .then statement to attach to the html elements
      .then(function (response) {
        $(giphyContainer).text("");
        console.log(sadURL);
        console.log(response);

        var randomSong = getRandomSongByMood("sad");

        // get random song by mood function
        playSongThroughWebAPI(randomSong.uri, player);

        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var sadImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        sadImage.attr("src", imageUrl);
        sadImage.attr("alt", "sad image");

        // Prepending the catImage to the images div
        $(giphyContainer).prepend(sadImage);
      });
  });



  // chillBtn ajax request 
  var chillURL = "https://api.giphy.com/v1/gifs/random?api_key=KNlTgJabkqAK66NkPnBuEEWTVntHdFAb&tag=chill";

  $(chillBtn).on("click", function (event) {
    event.preventDefault();

    $.ajax({
      url: chillURL,
      method: "GET"
    })

      // .then statement to attach to the html elements
      .then(function (response) {
        $(giphyContainer).text("");
        console.log(happyURL);
        console.log(response);

        var randomSong = getRandomSongByMood("chill");

        // get random song by mood function
        playSongThroughWebAPI(randomSong.uri, player);

        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var chillImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        chillImage.attr("src", imageUrl);
        chillImage.attr("alt", "cat image");

        // Prepending the catImage to the images div
        $(giphyContainer).prepend(chillImage);
      });
  });

  // BELOW: PRIMARY FOCUS IS GENERATING SONG
  //Global Variables for Spotify Player

  var spotifyAPIToken = "BQBm-Uk-XglXH-56DzsWRM-P_X12_7fy-vWXSakwZea5eBH5XbTIRrmqO9cHo_VMtCSvPJHl_pPAM8K3q7V8DE1EIxbOz7gummJBgCk4sl8B2zyWj20g7S50Nx6aRV5lYyeNAMsGm24AHLY27EOQDGazrCn8yw";

  var songTitle = $(".title");
  var songArtist = $(".artist");
  var trackId;
  var player;

  function setUpSpotifyPlayer(mood) {
    console.log("playerAssigned");
    console.log(player);
    player = new Spotify.Player({
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
    console.log(song_uri, player);

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

  function getRandomSongByMood(userMood) {
    console.log(userMood);

    var moodArray = [];

    if (userMood === "sad") {
      moodArray = moodSadData.tracks.items;
    }
    else if (userMood === "happy") {
      moodArray = moodHappyData.tracks.items;
    }
    else if (userMood === "chill") {
      moodArray = moodChillData.tracks.items;
    }
    else {
      moodArray = moodChillData.tracks.items;
    }
    // Returning a random song from the static object
    var randomNumber = Math.floor(Math.random() * moodArray.length);
    displayData(randomNumber, moodArray);
    return moodArray[randomNumber];
    
  };

  function displayData(x,y) {
      if (moodArray = []) {
        songArtist = $(".artist").text("Artist: Carly Rae Jepsen");
        songTitle = $(".title").text("Title: Run Away With Me");
      }
      // songTitle = $(".title").text("blah");
      songArtist = $(".artist").text("Artist: " + (y[x].artists[0].name) + "  ");
      songTitle = $(".title").text("Title: " + (y[x].name));
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

  onSpotifyWebPlaybackSDKReady = runWhenSDKPlayerReady;
});
var onSpotifyWebPlaybackSDKReady;

