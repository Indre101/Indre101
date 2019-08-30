fetch("https://kea-alt-del.dk/twitter/api/?hashtag=ducks").then(function (res) {
  return res.json()
}).then(function (data) {

  data.statuses.forEach(showText)



})



// const 

function showText(e) {


  const template = document.querySelector("template").content;
  const myCln = template.cloneNode(true);
  const main = document.querySelector(".main");
  myCln.querySelector(".item").textContent = e.user.name
  myCln.querySelector(".text").textContent = e.text


  main.appendChild(myCln);

  console.log(e.text)

}