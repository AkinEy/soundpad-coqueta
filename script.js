const sounds = [
  { name: "Kımbıl", file: "sounds/example1.mp3" },
  { name: "Barisbra", file: "sounds/example2.mp3" }
];

const container = document.getElementById("buttons-container");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("sound-button");
  btn.innerText = sound.name;

  const audio = new Audio(sound.file);

  btn.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
  });

  container.appendChild(btn);
});
function playSound(name) {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}
