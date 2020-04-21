const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay () {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    } 
}

function updateButton () {
    if (video.paused) {
        toggle.innerText = '►';
    } else {
        toggle.innerText = '||';
    }    
}

function skip() {
     video.currentTime += parseFloat(this.dataset.skip);
}

function handleUpdate () { 
    video[this.name] = this.value;   
}

function handdleProgress () {
    const percent = (video.currentTime / video.duration ) * 100;
    progressBar.style.flexBasis = `${percent}% `;
}

function handdleBar (e) {
    let percent = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = percent; 
}
  
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton); 
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handdleProgress);
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        togglePlay();
    }
  })

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleUpdate));

let mousedown = false;
progress.addEventListener('click', handdleBar);
progress.addEventListener('mousemove', (e) => mousedown && handdleBar(e));
progress.addEventListener('mousedown', () => {mousedown = true});
progress.addEventListener('mouseup', () => {mousedown = false});