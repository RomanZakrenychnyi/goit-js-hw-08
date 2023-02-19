import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


const onPlay = function ({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds)
};

const throttledOnPlay = throttle(onPlay, 1000)

player.on('timeupdate', throttledOnPlay);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));