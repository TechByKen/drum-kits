const kits = ["crash", "kick", "snare", "tom"];

const container = document.querySelector(".container");

kits.forEach((kit) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = kit;
  container.appendChild(btn);
});
