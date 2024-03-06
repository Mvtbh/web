(() => {
  let temp = [0, 0];
  const limit = [document.body.offsetWidth, document.body.offsetHeight];
  document.addEventListener("mousemove", (e) => {
    let ttemp = temp,
      tttemp = [e.clientX, e.clientY];
    const el = document.createElement("div");
    el.className = "spark";
    el.style.top = e.clientY + "px";
    el.style.left = e.clientX + "px";
    document.body.appendChild(el);
    let i = 0;
    let iv = setInterval(() => {
      el.style.opacity = (100 - i) / 100;

      el.style.scale = (100 - i) / 33;
      if (i >= 100) {
        document.body.removeChild(el);
        clearInterval(iv);
      }

      el.style.top = tttemp[1] - i * ((ttemp[1] - e.clientY) / 10) + "px";
      el.style.left = tttemp[0] - i * ((ttemp[0] - e.clientX) / 10) + "px";

      i += 1;
    }, 1000 / 60);
    temp = [e.clientX, e.clientY];
  });
})();
