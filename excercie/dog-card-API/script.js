// OBJECT

const dog = {
  hasFourLegs: true,
  race: "Canine",
  breed: "Pug",
  size: "Small",
  name: "John",
  sex: "Female",
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



cln.querySelector("h1").textContent = `${dog.name} the ${dog.breed}`;
cln.querySelector(".race").textContent = `${dog.race}`;
cln.querySelector(".size").textContent = `${dog.size}`;
cln.querySelector(".sex").textContent = `${dog.sex}`;
cln.querySelector(".birthday").textContent = `${dog.birthday.year}-${dog.birthday.month}-${dog.birthday.day}`;
cln.querySelector(".owners").textContent = `${dog.owners[0]} and ${dog.owners[1]}`;
cln.querySelector("img").src = dog.img


parent.appendChild(cln);