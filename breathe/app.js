const container = document.querySelector('#container');
const text = document.querySelector('.text');
const audio = document.querySelector('audio');
const toggleSoundBtn = document.querySelector('#toggleSound');

//Declared new variables for time
const totalTime = 8000;
const breathTime = (totalTime/4.8) * 2;
const holdTime = (totalTime/4.8);

breathAnimate();

function breathAnimate() {
    text.innerText= 'Breathe In';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText= 'Hold';

        setTimeout(() => {
            text.innerText= 'Breathe Out';
            container.className = 'container shrink';
        }, holdTime)
    }, breathTime)
}

setInterval(breathAnimate, totalTime);

audio.muted = true;
toggleSoundBtn.addEventListener('click', () => {
    audio.play(); 
  audio.muted = !audio.muted;
});


