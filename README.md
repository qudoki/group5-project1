# Echo Chamber - A Musical Mood Experience   
- Composed by: Quinn Dong, Skyler Rencher, Brian Lalbeharry, and Kristen Jacobsen   

<br>

## Group 5 - Project 1   

Click to follow link(s):   
- [Echo Chamber Deployed App](https://qudoki.github.io/group5-project1/splash.html)   
- [Git Hub Project Link](https://github.com/users/qudoki/projects/1)

### Note to Graders:   
This app will only function with an active Spotify Access Token with an hourly expiration. If you have a Spotify Premium account, please generate a key here: https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
And paste it into the SpotifyAPIToken variable. If you do not have a Spotify Premium account, please email qdong327@gmail.com and we will generate and update the key.    

<br>

## Echo Chamber - An Introduction to the Vibes

Echo Chamber is a application for music enthusiasts to immerse themselves into ambient music to match their mood with a visual experience (gif) to match. Upon choosing a mood by clicking one of the buttons <strong>(sad, happy, or chill)</strong> the user will be presented with a randomized gif based on the mood selected as well as a randomized song with that same mood in mind. The user can switch between any of those moods should they have a change-of-heart. The somber tone of the aesthetic has an simple yet profounc impact on the user. It features clean text and perhaps the most defining feature, the Echo-Chamber itelf (the white rectangle) which illustrates the theoretical zone the user will be in.   

<br>

## The Journey to the Echo Chamber

Four perfect strangers <strong>(Quinn Dong, Kristin Jacobsen, Brian Lalbeharry, and Skyler Rencher)</strong> came together on this island called 'Group 5' and we were commissioned to synergize our CPUs (i.e brains) to create and build 'Project 1' which would be an application that would utilize two server-side APIs, a third-party API, and a slew of other required features. Needless to say, we were nervous about the endeavor and had concerns about our individual abilities coming together to deliver on this assignment.     

So after the initial angst, calmer minds prevailed and we came up with a basic concept:    

- User Story: The user would be any and all music enthusiasts. Our app helps the user pick a song to listen to that aligns with their mood. With their selection of "mood", we would generate a randomized song from a matrix of songs that range across genres and display a visualization, as well as information about the song and artist. This would bridge the gap between genres, introduce users to new music, and especially create an ambient environment that reflects the user's emotions.

- Server-Side API's: Giphy (generated emotion imagery) and Spotify (music).

- Third-Party API: Bootstrap    

Once the basic foundation was established we pitched the idea and after a "Q & A session" with our instructors we had been given the greenlight to work on the project.    

<br>

## The Heavy Lifting Begins!

The concept was approved and we were a tad bit naive to the challenge to come. It was at this stage where we started to learn the strengths and weaknesses of our team members. Turns out we got a winning ticket because our team meshed well and we at least were pretty good at communicating which helped in the long run of this process.    

So we began to work in steps:

- Step 1: Gettiing the HTML skeleton from which we all could work from:

<br>

<!-- HTML Skeleton Imgs -->
<p align="left">
<img src="assets\img\htmlskeleton1.jpg" alt="html code that generates the main elements of the application" width = 45% height = 400px>
<img src="assets\img\htmlskeleton2.jpg" alt="html code that generates the main elements of the application" width = 45% height = 400px>
</p>

<br>

- Step 2: Applying CSS to get the functional spacing and aesthetic of the user interface just right:

<br>

<!-- CSS Styling Imgs -->
<p align="left">
<img src="assets\img\stylingcss1.jpg" alt="css code that styles the application" width = 45% height = 400px>
<img src="assets\img\echochamb1.jpg" alt="main content of the application shown in real time" width = 45% height = 400px>
</p>

- When that was complete now we could focus on targeting the html elements.

<br>

- Step 3: Targeting the HTML elements in the script.js file and storing them into variables for reference:

<br>

<!-- JS Variable Img -->
<p align="center">
<img src="assets\img\jsvari1.jpg" alt="javascript code that targets html elements" width = 60% height = 400px>
</p>

<br>

- Step 4: Creating the Ajax requests for the server-side APIs:

<br>

<!-- Mood Button Ajax Img -->
<p align="center">
<img src="assets\img\sadbtn1.jpg" alt="javascript code that targets html elements" width = 60% height = 400px>
</p>

- The sad button ajax call requested sad themed gifs per each click of the button. The same ajax calls were replicated for each mood button <strong>(happy and sad buttons)</strong> to run the same requests for the same effect. 

<br>

- The Spotify API ajax call:

<br>

<!-- Spotify API Imgs -->
<p align="center">
<img src="assets\img\spotifyajax.jpg" alt="spotify api ajax call" width = 45% height = 400px>
<img src="assets\img\spotifyapi1.jpg" alt="spotify api event listeners and more" width = 45% height = 400px>
</p>

- This API was one of the most difficult things to get working during this project. Spotify's API is so complex with the code and the api authorization token constantly needed to be refresh every hour due to the restrictions. Also the player would only play if the user had a Spotify premium account. We had to find a work-around to allow the player to work even if you don't have a Spotify account. That was a huge challenge. 

- Another challenge with this Spotify API is that we had to find a way to pull songs from the ajax request and attach them to a randomizer function to respond in accordance with the click events. We defined the function and added it to each function in the mood buttons. We also didn't realize that we had to orient the position of the links to the different script files that we have to where the script.js is located below every other link so that everything could be defined when we are targeting them. 

<br>

## How Does Echo Chamber Function?

Well the best way to find out is to try for yourself! This has been a labor of turmoil and love for our team and we are proud of what we've been able to accomplish in the time given for this project.    

Click to follow link(s):   
- [Echo Chamber Deployed App](https://qudoki.github.io/group5-project1/splash.html)   
- [Git Hub Project Link](https://github.com/users/qudoki/projects/1)


## Enjoy Echo Chamber!
