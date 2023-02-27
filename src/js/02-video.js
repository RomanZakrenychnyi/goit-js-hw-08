import throttle from 'lodash.throttle'

const LS_KEY = "videoplayer-current-time"

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const onPlay = function ({ seconds }) {
    localStorage.setItem(LS_KEY, seconds)
};

const throttledOnPlay = throttle(onPlay, 1000)

player.on('timeupdate', throttledOnPlay);

player.setCurrentTime(localStorage.getItem(LS_KEY) || 0);