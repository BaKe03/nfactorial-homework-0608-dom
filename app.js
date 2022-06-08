const audio = document.getElementById("audio")
const video = document.getElementById("video")

const clips = ["https://www.youtube.com/embed/U5UHCvxo7Gw?autoplay=1&loop=1&mute=1&controls=0", "https://www.youtube.com/embed/qQRPJraguOk?autoplay=1&loop=1&mute=1&controls=0", "https://www.youtube.com/embed/A-r9sj7zHJ4?autoplay=1&loop=1&controls=0&mute=1"]

function Play() {
    audio.play();  
}

function Pause() {
    audio.pause();
}

function Change() {
    video.src = "https://www.youtube.com/embed/U5UHCvxo7Gw?autoplay=1&loop=1&mute=1&controls=0"/*clips[Math.floor(Math.random() * clips.length)];*/
}
