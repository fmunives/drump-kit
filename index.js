const allButtons = document.querySelectorAll(".drum");

allButtons.forEach((drum) => {
  drum.addEventListener("click", playbyClick);
});

document.addEventListener("keypress", playByKey);

function playByKey(event) {
  let key = event.key;
  let button = document.querySelector("." + key);
  keyPressed(key);
  Keyanimated(button);
}

function playbyClick(event) {
  let item = event.target;
  let key = event.target.innerHTML;
  Keyanimated(item);
  keyPressed(key);
}

function keyPressed(key) {
  switch (key) {
    case "w":
      playMusic("sounds/crash.mp3");
      break;
    case "a":
      playMusic("sounds/kick-bass.mp3");
      break;
    case "s":
      playMusic("sounds/snare.mp3");
      break;
    case "d":
      playMusic("sounds/tom-1.mp3");
      break;
    case "j":
      playMusic("sounds/tom-2.mp3");
      break;
    case "k":
      playMusic("sounds/tom-3.mp3");
      break;
    case "l":
      playMusic("sounds/tom-4.mp3");
      break;
    default:
      break;
  }
}

function playMusic(audio) {
  let sound = new Audio(audio);
  sound.play();
}

function Keyanimated(item) {
  item.classList.add("pressed");
  setTimeout(() => {
    item.classList.remove("pressed");
  }, 200);
}
