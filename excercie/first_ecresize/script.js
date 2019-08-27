const template = document.querySelector("template").content;

let color = ["blue", "green", "red", "yellow"];



for (let index = 0; index < 20; index++) {
  const myCln = template.cloneNode(true);

  myCln.querySelector(".infoText").textContent = "Morning Morning";

  myCln.querySelector(".infoText").style.backgroundColor = color[Math.floor(Math.random() * color.length)]

  myCln.querySelector(".infoText").classList.add("rotate");

  myCln.querySelector(".infoText").classList.add("rotate");

  const main = document.querySelector(".main");

  main.appendChild(myCln);


}