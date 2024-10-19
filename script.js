// Countdown Timer
const weddingDate = new Date("December 15, 2024 20:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("time").innerHTML = "The wedding has started!";
  }
}, 1000);

// Mute/Unmute Background Music
const bgMusic = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

muteBtn.addEventListener("click", () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteBtn.innerText = "Mute";
  } else {
    bgMusic.muted = true;
    muteBtn.innerText = "Unmute";
  }
});

// Handle RSVP form submission
document.getElementById('rsvp-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert("Thank you for your RSVP!");
  document.getElementById('rsvp-form').reset();
});
