// Document Ready Function

// Variables 
// References to DOM Elements (HTML)
// MOOD Buttons
// var happyBtn = $("happy-button");
// var sadBtn = $("happy-button");
// var focusedBtn = $("happy-button");
// var excitedBtn = $("happy-button");
// var litBtn = $("happy-button");
// var spiritualBtn = $("happy-button");
// var joyfulBtn = $("happy-button");
// var tiredBtn = $("happy-button");
// var chillBtn = $("happy-button");
// var creativeBtn = $("happy-button");

// var spotifyAPIKey = "BQD-B3lXyyP4fS9VMdrgVGJRJZB0haUcTt5Nfe0nGCPCF-OkM8tGcqWgvsYJ6rSD5Psqg7r3Zb6z6vCQF62hu5gLVSZ8F8CEuPZNmfbsyPnJ2hvEeipyb23NcPa7LbUKH2KWS8ADBAqZY-R1cF1JwnpdTSwmoQ"




// // API Ajax Request - Server Side API's

//     // Music Streaming Platform - Spotify?
//     $.ajax(musicVariable).done(function (response) {
//     	console.log(response);
//     });

//     // Spotify Playback SDK
//     window.onSpotifyWebPlaybackSDKReady = () => {
//         const token = 'BQAW0wvn2gG0dbuIBdV2_rKyP4FDw3jQ15STENc7H6hQlq2bnVydkRRrbZt7VqzQuDwtOs4gsMh75-SbCdPSw18c9MgYtbBARfMWCz9ML-o0HyWo3m0g53uU5N16HmmOGuSwZ1O1Dztg_bhiNZcx05lxTiE1nA';
//         const player = new Spotify.Player({
//           name: 'Web Playback SDK Quick Start Player',
//           getOAuthToken: cb => { cb(token);},
//         volume: 0.5});
//         // Error handling
//         player.addListener('initialization_error', ({ message }) => { console.error(message); });
//         player.addListener('authentication_error', ({ message }) => { console.error(message); });
//         player.addListener('account_error', ({ message }) => { console.error(message); });
//         player.addListener('playback_error', ({ message }) => { console.error(message); });
//         // Playback status updates
//         player.addListener('player_state_changed', state => { console.log(state); });
//         // Ready
//         player.addListener('ready', ({ device_id }) => {
//           console.log('Ready with Device ID', device_id);
//         });
//         // Not Ready
//         player.addListener('not_ready', ({ device_id }) => {
//           console.log('Device ID has gone offline', device_id);
//         });
//         // Connect to the player!
//         player.connect().then(success => {if (success) {console.log('The Web Playback SDK successfully connected to Spotify!')}});
//       };

//     //   Spotify Fetch Request:
//     const play = ({
//         spotify_uri,
//         playerInstance: {
//           _options: {
//             getOAuthToken,
//             id
//           }
//         }
//       }) => {
//         getOAuthToken(access_token => {
//           fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({ uris: [spotify_uri] }),
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${access_token}`
//             },
//           });
//         });
//       };
//       play({
//         playerInstance: new Spotify.Player({ name: "..." }),
//         spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
//       });


// Genius?





// Attaching event listener ("click") to the MOOD Buttons
// H

// Visualizer Container 


//Global Variables
var spotifyAPIToken = "BQDwKhs5PXP2xaguvErnUFwu_auh-xlUJ3bkLN1gHruS6LkIptaSaTJRergGnkW_OL4suy4QZtbo-2I29ylC482-zBFDXv484Mn9dX_6saWDRfjcpQmUYzRDlb8698o51-xfIzgEF29Utr63_u2R2_iweYBpuw";
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
    var trackId = getSongForMood(mood, player);
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

function deviceReadyCallback(device_id) {

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

function getSongForMood(mood, player){

}

window.onSpotifyWebPlaybackSDKReady = runWhenSDKPlayerReady;