import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(TIME_KEY, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

player.on('pause', function () {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(TIME_KEY, seconds);
  });
});


const videoTime = localStorage.getItem(TIME_KEY);

if (videoTime) {
  player.setCurrentTime(videoTime);
}

player.on('ended', function () {
  localStorage.removeItem(TIME_KEY);
});
