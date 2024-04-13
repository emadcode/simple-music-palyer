function playAudio() {
    var audio = document.getElementById('audioPlayer');
    audio.play();
}

function pauseAudio() {
    var audio = document.getElementById('audioPlayer');
    audio.pause();
}
function nextAudio(){
    var audio =document.getElementById('nextAudio');
    audio.next();
}
function setVolume() {
    var audio = document.getElementById('audioPlayer');
    var volume = document.getElementById('volumeControl').value;
    audio.volume = volume;
}
