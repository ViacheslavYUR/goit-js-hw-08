import Player from '@vimeo/player';

const vimeoPlayer = document.querySelector('iframe');
const player = new Player(vimeoPlayer);

function catchTimeWatch(data) {
  const saveTime = JSON.stringify(data);
  localStorage.setItem('videoplayer-current-time', saveTime);
}

player.on('timeupdate', catchTimeWatch);

const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(savedTime.seconds);

// console.log(savedTime);
