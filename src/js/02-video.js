import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(data => {
    localStorage.setItem('video-player-current-time', data.seconds)
}, 1000),
);
const saverTime = localStorage.getItem('video-player-current-time');
if (saverTime) {
    player.setCurrentTime(saverTime);  
}

