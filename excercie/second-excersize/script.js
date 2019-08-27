// OBJECT

const dog = {
  hasFourLegs: true,
  race: "Canine",
  breed: "pug",
  size: "small",
  name: "John",
  sex: "female",
  birthday: {
    year: 2010,
    month: 11,
    day: 1
  },
  owners: ["Lasse", "Jonas"],
  img: "./charles-K4mSJ7kc0As-unsplash (1).jpg"
}

const dogTemplate = document.querySelector("template").content;


const cln = dogTemplate.cloneNode(true);


const parent = document.querySelector(".main");
parent.appendChild(cln);

cln.querySelector("h1").textContent = "jokæ"