const btn1 = document.getElementById("btn1");
const monster1 = document.getElementById("monster1");
const monter2 = document.getElementById("monster2");
const Wmonster = document.getElementById("Wmonster");
const interaction = document.getElementById("interaction");
const optionsOf = document.getElementById("optionsContainer");
const mainPart = document.getElementById("container");


console.log(optionsOf)

// added animation to the start button
function firstClick() {
  btn1.classList.add("changes");
  btn1.classList.remove("blinking");
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
  mainPart.style.backgroundImage = "url('./images/background.png')"

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

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const monster3 = document.getElementById("monster3");
const wmonster2 = document.getElementById("wmonster2");
const gotoTitle = document.getElementById("gotitles");


function showingAButton() {
  setTimeout(() => {
    gotoTitle.style.display = "block";
  }, 6000);

}


option2.onclick = function () {
  interaction.style.display = "none";
  option1.style.display = "none";
  option2.style.display = "none";
  monster3.style.display = "block";
  wmonster2.style.display = "block";
  showingAButton();

}

// changing to home atmosphere
monster3.addEventListener("animationend", monsterListener4, false);


function monsterListener4(event) {
  switch (event.type) {
    case "animationend":
      mainPart.style.backgroundImage = "url('./images/homebackground.png')";
      document.getElementById("swinging").style.display = "block";
      document.getElementById("tvnews").style.display = "block";
      break;

  }
}

// option1 isClicked

const together = document.getElementById("together");
const datetv = document.getElementById("datetv");
const dateEnd = document.getElementById("dateend")

together.addEventListener("animationend", monsterListener5, false);


function monsterListener5(event) {
  switch (event.type) {
    case "animationend":
      dateEnd.style.display = "block";
      datetv.style.display = "block";
      mainPart.style.backgroundImage = "url('./images/dateBacground.png')";

      break;

  }
}

option1.onclick = function () {
  interaction.style.display = "none";
  option1.style.display = "none";
  option2.style.display = "none";
  together.style.display = "block";


}

// transferring to date 


const replay1 = document.getElementById("replaybtn1");


datetv.addEventListener("animationend", monsterListener6, false);


function monsterListener6(event) {
  switch (event.type) {
    case "animationend":
      replay1.style.display = "block";
      gotoTitle.style.display = "block";
      datetv.classList.remove("datenews");
      dateEnd.classList.remove("dateEnding");

      break;

  }
}



// element.style.webkitAnimationPlayState = "running";

replay1.onclick = function () {

  datetv.classList.add("datenews");
  dateEnd.classList.add("dateEnding");

}