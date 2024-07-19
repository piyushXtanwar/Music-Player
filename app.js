const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.querySelector("#play");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const songs = [{
    name:"thapa-1",
    title: "WINNING SPEECH",
    artist: "Jass-Manak",

    name:"thapa-2",
    title: "DANDELIONS",
    artist: "Karan-Aujla",

    name:"thapa-3",
    title: "FAMOUS-ENOUGH",
    artist: "AKHIL",
},
]



let isPlaying = false;

const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
}

const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime");
}

play.addEventListener('click', () => {
if(isPlaying) {
    pauseMusic();
} else {
    playMusic();
}
})

const loadSong = (songs) => {
title.textContent = songs.title;
artist.textContent = songs.artist;
music.src = "music/" +songs.name +".mp3";
img.src = "images/"+songs.name+".jpeg";

}

songIndex = 0;


const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
    };
   

    const prevSong = () => {
        songIndex = (songIndex - 1 + songs.length)% songs.length;
        loadSong(songs[songIndex]);
        playMusic();
        };
       



next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);











