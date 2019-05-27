const containerNews = document.getElementById("submissionsList");
const btn5Container = document.getElementById("btn5Container");
let nameTags = document.querySelectorAll(".nameTag");

let nameTags_01 = Array.prototype.slice.call(nameTags);

let subButton = document.querySelectorAll(".inputDateButton_1");
let subButton_01 = Array.prototype.slice.call(subButton);




// addind the news feed
subButton_01.forEach((l) => {

  l.addEventListener("click", addTheNews)
})


let i = 0;
let j = 0;

function addTheNews() {
  // btn5Container.removeChild(this);

  this.style.display = "none";
  name = this.textContent;
  let aDiv = document.createElement("li");
  aDiv.classList.add("kea");
  aDiv.innerHTML = "<ul><li><h2 class=" + "nameTag" + ">" + name + "</h2><ul class=" + "keaAlign" + " > <li class=" + "dateInline inlineDate " + "> <h4 class=" + "date" + ">Date</h4></li> <li class=" + "inlineDate textWrap" + "> <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4></li></ul></li></ul>"
  containerNews.insertAdjacentElement("afterbegin", aDiv);


  nameTags_01.push(aDiv);
  console.log(nameTags_01)


  aDiv.onclick = function () {
    aDiv.style.display = "none";

    let newB = document.createElement("button");
    newB.classList.add("inputDateButton");
    newB.classList.add("inputDateButton_1");
    newB.textContent = name
    btn5Container.insertAdjacentElement("afterbegin", newB);



  }



}

// addind the news feed



// removing from news feed;
nameTags_01.forEach((t) => {
  t.addEventListener("click", removeFromNewsfeed)
})



function removeFromNewsfeed() {

  let newB = document.createElement("button");
  newB.classList.add("inputDateButton");
  newB.classList.add("inputDateButton_1");
  newB.textContent = this.textContent;
  btn5Container.insertAdjacentElement("afterbegin", newB);
  let x = this.parentElement;
  x.style.display = "none";
  containerNews.removeChild(x)
  subButton_01.push(newB)
  console.log(subButton_01);


  newB.onclick = function () {
    newB.style.display = "none";
    let aDiv = document.createElement("li");
    aDiv.classList.add("kea");
    aDiv.innerHTML = "<ul><li ><h2 class=" + "nameTag" + ">" + newB.textContent + "</h2><ul class=" + "keaAlign" + " > <li class=" + "dateInline inlineDate " + "> <h4 class=" + "date" + ">Date</h4></li> <li class=" + "inlineDate textWrap" + "> <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4></li></ul></li></ul>"
    containerNews.insertAdjacentElement("afterbegin", aDiv);


  }



}



// /adding the date

const dateArray = document.querySelectorAll(".date");


dateArray.forEach((e) => {

  setTheDate(e)
})


function setTheDate(f) {

  let b = Math.floor((Math.random() * 5) + 1);
  let c = Math.floor((Math.random() * 28) + 1);

  let d = new Date(`${b}- ${c}-2019`)
  f.textContent = d.toLocaleDateString("eu-EU");

}