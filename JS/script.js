const skipBack = document.querySelector(".fa-solid.fa-backward");
const playButton = document.querySelector(".fa-solid.fa-play");
const skipNext = document.querySelector(".fa-solid.fa-forward");

const goBack = document.querySelector(".fa-solid.fa-angle-left");
const settings = document.querySelector(".fa-solid.fa-bars");

const songName = document.querySelector("h1");
const artistName = document.querySelector("p");
const songs = [
    '..\\audio\\ERRA - White Noise.mp3',
    '..\\audio\\The Ghost Inside - Engine 45.mp3',
    '..\\audio\\V (Cyberpunk 2077 Soundtrack).mp3'
];

let isPlaying = false;
let currSongIndex = 0;
let audio = new Audio(songs[currSongIndex]);


function updateSongMetaData() {
    const songMetaData = [
        { name: 'White Noise', artist: 'ERRA' },
        { name: 'Engine 45', artist: 'The Ghost Inside' },
        { name: 'V (Cyberpunk 2077 Soundtrack)', artist: 'Various Artists' }
        // Add more songs as needed
    ];

    // Update song name and artist based on current song index
    songName.textContent = songMetaData[currSongIndex].name;
    artistName.textContent = songMetaData[currSongIndex].artist;
}


updateSongMetaData();


skipBack.addEventListener('click', function() {
    // Logic to skip to the previous audio file
    // You would implement the logic to change the audio here
});

playButton.addEventListener('click', function() {
    if(isPlaying) {
        audio.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>'; // Replace with your play icon class
    } else {
        audio.play();
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Replace with your pause icon class
    }
    isPlaying = !isPlaying;
});


skipNext.addEventListener('click', function() {
    // Logic to skip to the next audio file
    // You would implement the logic to change the audio here
    currSongIndex++;
    if(currSongIndex >= songs.length) {
        currSongIndex = 0;
    }

    // Changes audio to next song in list
    audio.src = songs[currSongIndex]; 
    audio.play();
    updateSongMetaData();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
});

settings.addEventListener('click', function() {
    // Logic to open settings, if applicable
    // You would implement the settings behavior here
});

goBack.addEventListener('click', function() {
    // Logic to go back to previous page or action
    // You would implement the go back behavior here
    currSongIndex--;
    if (currSongIndex < 0) {
        currSongIndex = songs.length - 1; // Wrap around to the last song if at the beginning
    }
    audio.src = songs[currSongIndex];
    audio.play();
    updateSongMetaData();
    playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
});

audio.addEventListener('ended', function() {
    currSongIndex++;
    if(currSongIndex >= songs.length) {
        currSongIndex = 0;
    }

    // Changes audio to next song in list
    audio.src = songs[currSongIndex]; 
    audio.play();
    updateSongMetaData();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
});




