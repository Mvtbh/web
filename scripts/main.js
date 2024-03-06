{
  const e = document.querySelector("[data-time]");
  function step() {
    const d = new Date();

    const [h, m, s, ms] = [d.getHours(), d.getMinutes(), d.getSeconds()].map((x) => x.toString().padStart(2, "0"));

    e.textContent = `${h}:${m}:${s}`;
    requestAnimationFrame(step);
  }
  step();
}
{
  fetch("https://api.lanyard.rest/v1/users/443136409835012116").then(async (r) => {
    if (!r.ok) return;
    const { data } = await r.json();

    {
      const e = document.querySelector("[data-dc-status]");
      const num = {
        offline: ["bg-slate-600 text-white", "Offline"],
        idle: ["bg-amber-400 ", "Idle"],
        dnd: ["bg-red-600 text-white", "Do not Disturb"],
        online: ["bg-green-400 ", "Online"]
      };

      e.className += ` ${num[data.discord_status][0]}`;
      e.children[1].textContent = num[data.discord_status][1];
    }
  });
}
