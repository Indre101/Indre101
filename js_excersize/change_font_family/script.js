const heading = document.querySelector("h1");
const btn = document.querySelector("button");

const fonts = ["Arial", "Roboto", "Times New Roman", "Gill Sans", "Helvetica"];

btn.onclick = function () {

  heading.style.fontFamily = fonts[Math.floor(Math.random() * (fonts.length - 1))];

  let numberOf = (Math.floor(Math.random() * 40))
  heading.style.fontSize = `${numberOf}px`;

}