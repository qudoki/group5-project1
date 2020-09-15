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

var spotifyAPIKey = "BQD-B3lXyyP4fS9VMdrgVGJRJZB0haUcTt5Nfe0nGCPCF-OkM8tGcqWgvsYJ6rSD5Psqg7r3Zb6z6vCQF62hu5gLVSZ8F8CEuPZNmfbsyPnJ2hvEeipyb23NcPa7LbUKH2KWS8ADBAqZY-R1cF1JwnpdTSwmoQ"




// API Ajax Request - Server Side API's

    // Music Streaming Platform - Spotify?
    // $.ajax(musicVariable).done(function (response) {
    // 	console.log(response);
    // });

    // Spotify Playback SDK
    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = '[My Spotify Web API access token]';
        const player = new Spotify.Player({
          name: 'Web Playback SDK Quick Start Player',
          getOAuthToken: cb => { cb(token); }
        });
        // Error handling
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });
        // Playback status updates
        player.addListener('player_state_changed', state => { console.log(state); });
        // Ready
        player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
        });
        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });
        // Connect to the player!
        player.connect();
      };

    //   Spotify Fetch Request:
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
              'Authorization': `Bearer ${access_token}`
            },
          });
        });
      };
      play({
        playerInstance: new Spotify.Player({ name: "..." }),
        spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
      });

    
    // Genius?





// Attaching event listener ("click") to the MOOD Buttons
    // H

// Visualizer Container 

