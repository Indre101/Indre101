const btn1 = document.getElementById("btn1");
const monster1 = document.getElementById("monster1");
const monter2 = document.getElementById("monster2");
const Wmonster = document.getElementById("Wmonster");
const interaction = document.getElementById("interaction");
const optionsOf = document.getElementById("optionsContainer");


console.log(optionsOf)

// added animation to the start button
function firstClick() {
  btn1.classList.add("changes");
}

//the start Button
btn1.addEventListener("animationend", listener, false);


function listener(event) {
  switch (event.type) {
    case "animationend":
      btn1.innerHTML = "START?";
      break;

  }
}

//the start Button

function isClicked() {

  btn1.style.display = "none";
  monster1.style.display = "block";

}

btn1.onclick = function () {
  firstClick()

  if (btn1.innerHTML === "START?") {
    isClicked()
  }
}

// finished with the start button
// animation time

monster1.addEventListener("animationend", monsterListener, false);


function monsterListener(event) {
  switch (event.type) {
    case "animationend":
      monter2.style.display = "block";
      Wmonster.style.display = "block";
      break;

  }
}

// interaction

monster2.addEventListener("animationend", monsterListener2, false);


function monsterListener2(event) {
  switch (event.type) {
    case "animationend":
      monter2.style.display = "none";
      Wmonster.style.display = "none";
      interaction.style.display = "block"
      break;

  }
}

// showing options

interaction.addEventListener("animationend", monsterListener3, false);


function monsterListener3(event) {
  switch (event.type) {
    case "animationend":
      optionsOf.style.display = "block";
      break;

  }
}