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
    const audio = new Audio('files/bfm.mp3');
});

document.addEventListener('DOMContentLoaded', function() {
    let lastTimestamp = 0;

    // document.addEventListener('mousemove', function(e) {
    //     const currentTimestamp = Date.now();
    //     if (currentTimestamp - lastTimestamp > 100) {
    //         lastTimestamp = currentTimestamp;
    //         requestAnimationFrame(() => createSparkle(e.pageX, e.pageY));
    //     }
    // });

    // Track scrolling to update mouse trail position
    // window.addEventListener('scroll', function() {
    //     const sparkles = document.querySelectorAll('.sparkle');
    //     sparkles.forEach(sparkle => {
    //         const rect = sparkle.getBoundingClientRect();
    //         sparkle.style.left = rect.left + window.scrollX + 'px';
    //         sparkle.style.top = rect.top + window.scrollY + 'px';
    //     });
    // });

    // Made By Kyuiki @ 2024 - kyuiki.com

    let temp = [0,0];
const limit = [document.body.offsetWidth, document.body.offsetHeight];
document.addEventListener("mousemove",(e)=>{
  let ttemp = temp, tttemp = [e.clientX, e.clientY]
  const el = document.createElement("div")
  el.className = "spark"
  el.style.top = e.clientY+"px"
  el.style.left = e.clientX+"px"
  document.body.appendChild(el)
  let i = 0
  let iv = setInterval(
    ()=>{
      el.style.opacity = (100-i)/100
      
      el.style.scale = (100-i)/33
  if(i>=100) {document.body.removeChild(el);clearInterval(iv)}
  
  el.style.top = tttemp[1]-(i*((ttemp[1]-e.clientY)/10))+"px"
  el.style.left = tttemp[0]-(i*((ttemp[0]-e.clientX)/10))+"px"
//   el.innerHTML = "Penis"

  i+=1;
    }, 1000/60
  )
  temp = [e.clientX, e.clientY]
})

});


// OUTDATED SPARKLE (DONT USE)
// function createSparkle(x, y) {
//     const sparkle = document.createElement('div');
//     sparkle.classList.add('sparkle');
//     sparkle.style.left = x + 'px';
//     sparkle.style.top = y + 'px';
//     document.body.appendChild(sparkle);

//     // Remove sparkle element after animation ends
//     sparkle.addEventListener('animationend', function() {
//         sparkle.remove();
//     });

//     // Automatically remove sparkles after a certain duration (e.g., 1 second)
//     setTimeout(() => {
//         sparkle.remove();
//     }, 1000);
// }z
