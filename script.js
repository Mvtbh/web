// Function to update the clock with Tehran's local time (without seconds)
const updateClock = () => {
    // Get the current date and time in Tehran's time zone
    const tehranTime = new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Tehran',
      hour12: false, // Use 24-hour format
      hour: '2-digit', // Display hours in 2-digit format
      minute: '2-digit' // Display minutes in 2-digit format
    });
  
    // Update the clock display with Tehran's local time (including "Time :")
    const clockElement = document.getElementById('clock');
    clockElement.textContent = '  ' + tehranTime;
  };
  
  // Update the clock every minute (60,000 milliseconds)
  setInterval(updateClock, 60000);
  
  // Initial call to display the clock immediately
  updateClock();


  document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio('files/bfm.mp3');
    const playBtn = document.getElementById('playBtn');
    const volumeSlider = document.getElementById('volumeSlider');

    audio.addEventListener('ended', function() {
        playBtn.textContent = 'Play'; // Change button text to 'Play' when music ends
    });

    playBtn.addEventListener('click', toggleAudioPlayback);
    volumeSlider.addEventListener('input', setVolume);

    function toggleAudioPlayback() {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playBtn.textContent = 'Play';
        }
    }

    function setVolume() {
        audio.volume = volumeSlider.value;
    }
});


document.addEventListener('DOMContentLoaded', function() {
  // Create an audio element for the music
  const audio = new Audio('your-music-file.mp3');
  
  // Automatically play the music
  audio.play();
    
    // Add the mousemove event listener for creating sparkles
    document.addEventListener('mousemove', function(e) {
        createSparkle(e.pageX, e.pageY);
    });
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);

    // Remove sparkle element after animation ends
    sparkle.addEventListener('animationend', function() {
        sparkle.remove();
    });
}


// Select elements to animate
const header = document.querySelector('.header');
const content = document.querySelector('.content');
const footer = document.querySelector('.footer');

// Set initial styles (optional)
gsap.set([header, content, footer], { autoAlpha: 0, y: 50 });

// Create a timeline for the animation
const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.inOut' } });

// Define animation sequence
tl.fromTo(header, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 })
  .fromTo(content, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 }, '-=0.5') // Start after 0.5s
  .fromTo(footer, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0 }, '-=0.5'); // Start after 0.5s

  document.addEventListener('DOMContentLoaded', function () {
    tl.play(); // Start the animation
  });
  