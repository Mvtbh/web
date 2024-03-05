const updateClock = () => {
    const tehranTime = new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Tehran',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit' 
    });
  
    const clockElement = document.getElementById('clock');
    clockElement.textContent = '  ' + tehranTime;
  };
  
  setInterval(updateClock, 60000);
  
  updateClock();

document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio('files/bfm.mp3');
    const playBtn = document.getElementById('playBtn');
    const volumeSlider = document.getElementById('volumeSlider');

    audio.addEventListener('ended', function() {
        playBtn.textContent = 'Play'; 
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
    const audio = new Audio('files/bfm.mp3');
});

document.addEventListener('DOMContentLoaded', function() {
    let lastTimestamp = 0;

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

  i+=1;
    }, 1000/60
  )
  temp = [e.clientX, e.clientY]
})

});


function closeContent(id) {
  const pinkWindow = document.getElementById(`${id}Window`);
  pinkWindow.style.display = 'none';

  const contentBox = document.getElementById(id);
  contentBox.style.height = '100%';
  contentBox.style.overflow = 'hidden';
}

const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function nextImage() {
  currentIndex++;
  if (currentIndex >= carousel.children.length) {
    currentIndex = 0;
  }
  carousel.style.transition = 'transform 0.5s';
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

carousel.addEventListener('touchstart', (event) => {
  const touchStartX = event.touches[0].clientX;
  carousel.addEventListener('touchmove', (event) => {
    const touchMoveX = event.touches[0].clientX;
    const diffX = touchStartX - touchMoveX;
    if (diffX > 50) {
      nextImage();
    } else if (diffX < -50) {
      previousImage();
    }
  });
});