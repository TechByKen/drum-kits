const kits = ["crash", "kick", "snare", "tom"];

const container = document.querySelector(".container");

kits.forEach((kit) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = kit;
  btn.style.backgroundImage = "url(images/" + kit + ".png)";
  container.appendChild(btn);

  const audio = document.createElement("audio");
  audio.src = "sounds/" + kit + ".mp3";
  container.appendChild(audio);

  btn.addEventListener("click", () => {
    audio.play();
  });
});
