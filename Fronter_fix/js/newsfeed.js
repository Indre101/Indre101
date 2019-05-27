const subButton = document.querySelectorAll(".inputDateButton_1");
const containerNews = document.getElementById("submissionsList");
const btn5Container = document.getElementById("btn5Container");


subButton.forEach((l) => {

  l.addEventListener("click", addTheNews)
})


function addTheNews() {
  btn5Container.removeChild(this);
  name = this.textContent;
  let aDiv = document.createElement("li");
  aDiv.innerHTML = "<ul><li class=" + "kea" + "><h2>" + name + "</h2><ul class=" + "keaAlign" + " > <li class=" + "dateInline inlineDate " + "> <h4 class=" + "date" + ">Date</h4></li> <li class=" + "inlineDate textWrap" + "> <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4></li></ul></li></ul>"
  containerNews.insertAdjacentElement("afterbegin", aDiv);

}




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