document.addEventListener("DOMContentLoaded", function() {

window.addEventListener('keydown', function(event){
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const div = document.querySelector(`div[data-key='${event.keyCode}']`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    div.classList.add('playing');
})

window.addEventListener('keyup', function(event){
    const div = document.querySelector(`div[data-key='${event.keyCode}']`);
    if(!div) return;
    div.classList.remove('playing');
})


});