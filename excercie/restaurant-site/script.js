const catogoriesContainer = document.querySelector(".catogoriesContainer");
const menuBtn = document.getElementById("menuBtn")

const dishListTemplate = document.getElementById("dishListTemplate").content;
const dishInformationTemplate = document.getElementById("dishInformationTemplate").content;

const descriptionContainer = document.querySelector(".descriptionContainer");
const courseListContainer = document.querySelector(".courseListContainer");

// FUNCTION TO TOGGLE CLASSES
function toggleClass(element, className) {

  element.classList.toggle(className)

}


// MEDIA QUERY TO ADD CLASSES
function media_q() {
  if (window.innerWidth <= 500) {
    toggleClass(catogoriesContainer, "d-flex")
    toggleClass(catogoriesContainer, "d-none")
  } else {

    catogoriesContainer.classList.remove("d-none");
    catogoriesContainer.classList.add("d-flex");

    // toggleClass(catogoriesContainer, "d-flex")
    // toggleClass(catogoriesContainer, "d-none")
  }
}

// WINDOW RESIZE FUNCTION
window.onresize = function () {
  media_q()
}


// MENU BUTTON FUNCTION

menuBtn.onclick = function () {

  toggleClass(catogoriesContainer, "d-none");
  toggleClass(catogoriesContainer, "slideIn");

}



// OBJECT BLUEPRINT

function Dish(category, name, isVegStatus, price, discountAmount, dishImg, shortDes, longDes, soldOutStatus, allergies) {
  this.category = category;
  this.name = name;
  this.isVegStatus = isVegStatus;
  this.price = price;
  this.discountAmount = discountAmount;
  this.dishImg = dishImg;
  this.shortDes = shortDes;
  this.longDes = longDes;
  this.soldOutStatus = soldOutStatus;
  this.allergies = allergies;

  this.whichCategory = function () {
    let categoryName;

    if (this.category.toLowerCase() === "starter") {
      categoryName = "starter"

    } else if (this.category.toLowerCase() === "main") {
      categoryName = "main"

    } else if (this.category.toLowerCase() === "dessert") {
      categoryName = "dessert"

    } else if (this.category.toLowerCase() === "drinks") {
      categoryName = "drinks"

    } else if (this.category.toLowerCase() === "sideorders") {
      categoryName = "sideorders"

    }


    return categoryName

  }

  this.disCountPrice = function () {
    let finalPrice;

    if (this.discountAmount > 0) {
      finalPrice = this.price - ((this.discountAmount / 100) * this.price);
      return finalPrice
    } else if (this.discountAmount < 0) {

      return "Not a valid number"
    } else {
      return false;
    }

  }

  this.isVegIcon = function () {

    if (this.isVegStatus === 1) {
      return "./img/icons-img/veg_1.svg"
    } else {
      return "./img/icons-img/non-veg_1.svg"
    }
  }

  this.isSoldOut = function () {

    if (soldOutStatus === 1) {
      return true

    } else {
      return false;
    }

  }

}





let newDish = new Dish("starter", "Voda", 2, 25, 1, "./img/medium/cola-md.jpg", "lorem4dsælæa", "loremijkæ", 2, ["peanut", "sun"])
let russianRingbread = new Dish("main", "Russian Ringbread", 2, 30, 1, "./img/medium/ringbroed-druer-md.jpg", "Russisk ringbrød af Karapatisk mel", "Russisk ringbrød efter en klassisk opskrift fra Karapatien. Dejen blandes koldhæver 30 dage, inde brødet bages over bål. Meget sprødt, godt med Karapatisk bjerggedsmør.", 1, ["laktose"])
let russianRingbreadTwo = new Dish("starter", "Russian Ringbread", 2, 30, 1, "./img/medium/ringbroed-druer-md.jpg", "Russisk ringbrød af Karapatisk mel", "Russisk ringbrød efter en klassisk opskrift fra Karapatien. Dejen blandes koldhæver 30 dage, inde brødet bages over bål. Meget sprødt, godt med Karapatisk bjerggedsmør.", 1, ["laktose"])



addNewElements(newDish)
addNewElements(russianRingbread)
addNewElements(russianRingbreadTwo)

const startersList = document.querySelector(".starter");


function displayNoneAll(arrayTodisplayNone) {

  arrayTodisplayNone.forEach(element => {
    console.log(informationContainer)
    element.style.display = "none";
  });
}


function addNewElements(newObjectName) {
  // CLONE LIST ITEM
  let clnListItem = dishListTemplate.cloneNode(true);
  clnListItem.querySelector("h2").textContent = newObjectName.name;
  clnListItem.querySelector("img").src = newObjectName.isVegIcon();



  // ASSIGN NAMES
  let cln = dishInformationTemplate.cloneNode(true);




  cln.querySelector("h1").textContent = newObjectName.name;
  // CLONE DISH INFO


  // SOLD OUT
  if (newObjectName.isSoldOut()) {
    cln.querySelector(".soldOut").style.display = "block";
  }


  // DISH IMAGE
  cln.querySelector(".dishImg").src = newObjectName.dishImg;


  // LONG DESCRIPTION
  const longDes = cln.querySelector(".longDescribtions")
  longDes.textContent = newObjectName.longDes;
  cln.querySelector(".more").onmouseover = function () {

    longDes.classList.remove("d-none");
  }

  cln.querySelector(".more").onmouseout = function () {

    longDes.classList.add("d-none");
  }

  // SHORT DESCRIPTION
  cln.querySelector(".shortDescirbtion").textContent = newObjectName.shortDes;

  // PRICE
  cln.querySelector(".price").textContent = `${newObjectName.price},-`;

  // DISCOUNT PRICE
  cln.querySelector(".discount").textContent = `Price now  ${newObjectName.disCountPrice()},-`


  if (!newObjectName.disCountPrice()) {

    cln.querySelector(".discount").style.visibilyty = "hidden"
  } else {
    cln.querySelector(".price").classList.add("strikethrough")
    cln.querySelector(".discount").style.fontSize = "1.5rem";
    cln.querySelector(".discount").style.color = "red";
  }



  let oneInformationContainer = cln.querySelector(".informationContainer")

  clnListItem.querySelector(".dishName").onclick = function () {

    displayNoneAll(informationContainer)

    oneInformationContainer.style.display = "grid";

  }


  // VEGETARIAN OR NOT 
  cln.querySelector(".vegetarian").src = newObjectName.isVegIcon();

  // ALERGENS 


  let arr = newObjectName.allergies;

  if (newObjectName.allergies.length === 2) {
    cln.querySelector(".allergies").textContent = `Alergies: ${newObjectName.allergies[0]}, ${newObjectName.allergies[1]}`;

  } else if (newObjectName.allergies.length === 1) {

    cln.querySelector(".allergies").textContent = `Alergies: ${newObjectName.allergies[0]}`;

  };




  // APPEND TO LIST
  // courseListContainer.appendChild(clnListItem);
  courseListContainer.appendChild(clnListItem);


  // APPEND TO THE DESCRIPTION
  descriptionContainer.appendChild(cln)



}





let courseArray = [newDish, russianRingbread, russianRingbreadTwo]



function listToShow(nameOfTheCategory) {
  descriptionContainer.innerHTML = "";

  courseListContainer.innerHTML = "";


  for (let i = 0; i < courseArray.length; i++) {

    if (courseArray[i].whichCategory() === nameOfTheCategory) {
      addNewElements(courseArray[i]);

    }

  }

}



startersList.onclick = function () {

  listToShow("starter");
}

document.querySelector(".sideOrder").onclick = function () {

  listToShow("sideOrder");
}

document.querySelector(".main").onclick = function () {

  listToShow("main");
}

document.querySelector(".desserts").onclick = function () {

  listToShow("desserts");
}

document.querySelector(".drinks").onclick = function () {

  listToShow("drinks");
}







let dishNameContainers = document.querySelectorAll(".dishName");
let informationContainer = document.querySelectorAll(".informationContainer")



function displayfirst(array) {

  array[0].style.display = "grid";

}


displayNoneAll(informationContainer)
displayfirst(informationContainer)