const subButton = document.querySelectorAll(".inputDateButton_1");
const containerNews = document.getElementById("submissionsList");
const btn5Container = document.getElementById("btn5Container");
const nameTags = document.querySelectorAll(".nameTag");

// addind the news feed
subButton.forEach((l) => {

  l.addEventListener("click", addTheNews)
})


function addTheNews() {
  btn5Container.removeChild(this);
  name = this.textContent;
  let aDiv = document.createElement("li");
  aDiv.classList.add("kea");
  aDiv.innerHTML = "<ul><li><h2 class=" + "nameTag" + ">" + name + "</h2><ul class=" + "keaAlign" + " > <li class=" + "dateInline inlineDate " + "> <h4 class=" + "date" + ">Date</h4></li> <li class=" + "inlineDate textWrap" + "> <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4></li></ul></li></ul>"
  containerNews.insertAdjacentElement("afterbegin", aDiv);

}

// addind the news feed



// removing from news feed;
nameTags.forEach((t) => {
  t.addEventListener("click", removeFromNewsfeed)
})



function removeFromNewsfeed() {

  let newB = document.createElement("button");
  newB.classList.add("inputDateButton");
  newB.classList.add("inputDateButton_1");
  newB.textContent = this.textContent;
  btn5Container.insertAdjacentElement("afterbegin", newB);


  let x = this.parentElement;

  containerNews.removeChild(x)



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