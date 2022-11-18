import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playVideo, 1000));

function playVideo ({seconds})  {
    localStorage.setItem(CURRENT_TIME, seconds);
};

function auditLocalStorage() {
  if(!localStorage.getItem(CURRENT_TIME)) {
    return;
    };
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}