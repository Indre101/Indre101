// const listItems = document.querySelectorAll("li");

// listItems.forEach(crossItems)

// let counter = 0;

// function crossItems(listItem) {

//   listItem.addEventListener("click", crossOut)

// }

// function crossOut() {
//   this.classList.add("crossOut")
//   counter++;
//   if (counter == 3) {
//     this.classList.remove("crossOut");
//     counter = 0;
//   }
// };


// // flower part
// const imageList = document.querySelectorAll("img");
// const backGroundColor = document.querySelector("body");

// imageList.forEach(fadeout);

// function fadeout(imageElement) {

//   imageElement.addEventListener("click", fading)

// }



// function fading() {
//   counter++
//   this.classList.toggle("fadeout");

//   if (counter == 2) {
//     counter = 0;
//     backGroundColor.style.backgroundColor = "blue";
//   } else if (counter < 3) {
//     backGroundColor.style.backgroundColor = "";

//   }

// };

// input filling form

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("newList");



button.addEventListener("click", newItem);

function newItem() {

  const newLi = document.createElement("li");

  newLi.textContent = input.value;
  list.appendChild("newLi");
}