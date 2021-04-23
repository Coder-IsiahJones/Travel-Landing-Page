// Menu Toggle
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});

// Pause video function
const video = document.getElementById('video');

function pauseVideo(event) {
    // Console test
    // console.log(video.duration)
    // console.log(event.currentTime)

    // Pause video 0.5 seconds before end time.
    if (event.currentTime > video.duration - 0.5) {
        video.pause();
    }
}