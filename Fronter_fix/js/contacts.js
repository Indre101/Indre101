const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("insertName");
const nameOfKea = document.querySelectorAll(".nameOfKea");
const emailOfKea = document.querySelectorAll(".emailOfKea");
const keaListContainer = document.getElementById("keaListContainer");



let resultName = []
let resultNameID = [];


searchButton.onclick = function () {
  event.preventDefault();
  searchTheName();
}

function searchTheName() {

  nameOfKea.forEach((n) => {

    document.getElementById(n.id).parentElement.classList.remove("resultName");

    if (n.innerHTML.toLowerCase().includes(searchInput.value.toLowerCase())) {
      // resultName.push(n.innerHTML)

      console.log(n.id);
      let x_1 = document.getElementById(n.id).parentElement

      appednResult(x_1)
    }
  })
}



function checkIfNameBelongs() {

  // for()

}



// appending function

function appednResult(res) {


  // res.style.backgroundColor = "rgba(253,215,87,0.3)"
  res.classList.add("resultName");

  keaListContainer.insertAdjacentElement('afterbegin', res)



}