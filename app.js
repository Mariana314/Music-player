import { playList } from "./list.js";

let currentSong = 0;

window.addEventListener('DOMContentLoaded', () => {
    music(currentSong);
});

function music(songs) {
    const containerAlbum = document.querySelector('.container-album');
    containerAlbum.innerHTML = '';


    const musicCard = playList[songs];
    
    const container = document.createElement('div');
    container.id = 'container-album';
    container.classList.add('container-album');

    const imgMusic = document.createElement('img');
    imgMusic.src = musicCard.img;

    const titleMusic = document.createElement('h2');
    titleMusic.textContent = musicCard.titleMusic;

    const artistMusic = document.createElement('h3');
    artistMusic.textContent = musicCard.artistMusic;

    container.appendChild(imgMusic);
    container.appendChild(titleMusic);
    container.appendChild(artistMusic);

    containerAlbum.appendChild(container);

    const audio = document.getElementById('audio');
    audio.src = musicCard.song;
}

function followingSong() {
    if (currentSong === playList.length - 1) {
        currentSong = 0;  
    } else {
        currentSong++;    
    }
    music(currentSong);
}

function earlierSong() {
    if (currentSong === 0) {
        currentSong = playList.length - 1;  
    } else {
        currentSong--;    
    }
    music(currentSong);
}

const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');

    play.addEventListener('click', () => audio.play());
    pause.addEventListener('click', () => audio.pause());
    forward.addEventListener('click', followingSong);
    rewind.addEventListener('click', earlierSong);
    stop.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
    });