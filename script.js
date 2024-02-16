function updateClock() {
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
}
  
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
    const audio = new Audio('files/bfm.mp3');
    
    // Add the mousemove event listener for creating sparkles
    document.addEventListener('mousemove', function(e) {
        createSparkle(e.pageX, e.pageY);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let lastTimestamp = 0;

    document.addEventListener('mousemove', function(e) {
        const currentTimestamp = Date.now();
        if (currentTimestamp - lastTimestamp > 100) {
            lastTimestamp = currentTimestamp;
            requestAnimationFrame(() => createSparkle(e.pageX, e.pageY));
        }
    });

    // Track scrolling to update mouse trail position
    window.addEventListener('scroll', function() {
        const sparkles = document.querySelectorAll('.sparkle');
        sparkles.forEach(sparkle => {
            const rect = sparkle.getBoundingClientRect();
            sparkle.style.left = rect.left + window.scrollX + 'px';
            sparkle.style.top = rect.top + window.scrollY + 'px';
        });
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

    // Automatically remove sparkles after a certain duration (e.g., 1 second)
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}


// JavaScript to handle the Easter egg functionality
document.addEventListener('DOMContentLoaded', function() {
    // Track whether the keys in the combination are currently pressed
    var keysPressed = {
        ctrl: false,
        shift: false
    };

    // Event listener to track keydown events
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key matches any of the keys we're tracking
        switch (event.key) {
            case 'Control':
                keysPressed.ctrl = true;
                break;
            case 'Shift':
                keysPressed.shift = true;
                break;
        }

        // Check if the key combination is complete
        if (keysPressed.ctrl && keysPressed.shift) {
            // Show the Easter egg modal
            var modal = document.getElementById('easterEggModal');
            modal.style.display = 'block';
        }
    });

    // Event listener to track keyup events
    document.addEventListener('keyup', function(event) {
        // Check if the released key matches any of the keys we're tracking
        switch (event.key) {
            case 'Control':
                keysPressed.ctrl = false;
                break;
            case 'Shift':
                keysPressed.shift = false;
                break;
        }
    });
});