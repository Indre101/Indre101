const categoriesContainer = document.querySelector(".categoriesContainer");
const menuBtn = document.getElementById("menuBtn");

const dishListTemplate = document.getElementById("dishListTemplate").content;
const dishInformationTemplate = document.getElementById(
  "dishInformationTemplate"
).content;

const descriptionContainer = document.querySelector(".descriptionContainer");
const courseListContainer = document.querySelector(".courseListContainer");

let categoryButtonsList = document.querySelectorAll(".category");

// FUNCTION TO TOGGLE CLASSES
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// CATEGORIES MENU

function displayNone() {
  categoriesContainer.style.display = "none";
}

// MEDIA QUERY TO ADD CLASSES
function media_q() {
  if (window.innerWidth <= 700) {
    categoriesContainer.classList.toggle("d-none");
    categoriesContainer.classList.toggle("d-flex");

    // CATEGORY BUTTONS CLICKED REMOVES THE CATEGORY MENU
  } else {
    categoriesContainer.classList.remove("d-none");
    categoriesContainer.classList.add("d-flex");
  }
}

media_q();

// WINDOW RESIZE FUNCTION
window.onresize = function() {
  media_q();
};

// MENU BUTTON FUNCTION

menuBtn.onclick = function() {
  media_q();
};

// OBJECT BLUEPRINT

function Dish(
  category,
  name,
  price,
  soldOutStatus,
  discountAmount,
  shortDes,
  longDes,
  isVegStatus,
  allergies,
  dishImg
) {
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

  this.whichCategory = function() {
    let categoryName;

    if (this.category.toLowerCase() === "starter") {
      categoryName = "starter";
    } else if (this.category.toLowerCase() === "main") {
      categoryName = "main";
    } else if (this.category.toLowerCase() === "dessert") {
      categoryName = "dessert";
    } else if (this.category.toLowerCase() === "drinks") {
      categoryName = "drinks";
    } else if (this.category.toLowerCase() === "sideorders") {
      categoryName = "sideorders";
    }

    return categoryName;
  };

  this.disCountPrice = function() {
    let finalPrice;

    if (this.discountAmount > 0) {
      finalPrice = this.price - (this.discountAmount / 100) * this.price;
      return finalPrice;
    } else if (this.discountAmount <= 0) {
      return false;
    }
  };

  this.isVegIcon = function() {
    if (this.isVegStatus === true) {
      return "./img/icons-img/veg_1.svg";
    } else {
      return "./img/icons-img/non-veg_1.svg";
    }
  };

  this.isSoldOut = function() {
    if (soldOutStatus) {
      return true;
    } else {
      return false;
    }
  };
}

// FETCH FUNCTION
fetch("https://kea-alt-del.dk/t5/api/productlist")
  .then(res => {
    return res.json();
  })
  .then(data => {
    data.forEach(showCourses);
  });

let courseArray = [];

function showCourses(course) {
  // CREATING NEW OBJECTS
  let newDish = new Dish(
    course.category,
    course.name,
    course.price,
    course.soldout,
    course.discount,
    course.shortdescription,
    course.shortdescription,
    course.vegetarian,
    course.vegetarian,
    course.image
  );

  // PUSSHING CREATED OBJECTS
  courseArray.push(newDish);

  addNewElements(newDish);
  informationContainer = document.querySelectorAll(".informationContainer");

  displayNoneAll(informationContainer);
  informationContainer[0].style.display = "grid";
}

let informationContainer = document.querySelectorAll(".informationContainer");

function displayNoneAll(arrayTodisplayNone) {
  arrayTodisplayNone.forEach(element => {
    element.style.display = "none";
    console.log("jklk");
  });
}

function addNewElements(newObjectName) {
  // displayfirst(informationContainer);
  informationContainer = document.querySelectorAll(".informationContainer");
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
  cln.querySelector(
    ".dishImg"
  ).src = `./img/medium/${newObjectName.dishImg}-md.jpg`;

  // LONG DESCRIPTION
  const longDes = cln.querySelector(".longDescribtions");
  longDes.textContent = newObjectName.longDes;
  cln.querySelector(".more").onmouseover = function() {
    longDes.classList.remove("d-none");
  };

  cln.querySelector(".more").onmouseout = function() {
    longDes.classList.add("d-none");
  };

  // SHORT DESCRIPTION
  cln.querySelector(".shortDescirbtion").textContent = newObjectName.shortDes;

  // PRICE
  cln.querySelector(".price").textContent = `${newObjectName.price},-`;

  // DISCOUNT PRICE

  let discountPrice = cln.querySelector(".discount");

  if (!newObjectName.disCountPrice()) {
    discountPrice.style.visibilyty = "hidden";
  } else {
    cln.querySelector(".price").classList.add("strikethrough");
    discountPrice.style.fontSize = "1.5rem";
    discountPrice.style.color = "red";
    discountPrice.textContent = `Price now  ${newObjectName.disCountPrice()},-`;
  }

  let oneInformationContainer = cln.querySelector(".informationContainer");
  oneInformationContainer.style.display = "none";

  clnListItem.querySelector(".dishName").onclick = function() {
    // displayNoneAll(informationContainer);

    console.log(informationContainer.length);

    informationContainer.forEach(element => {
      element.style.display = "none";
    });

    oneInformationContainer.style.display = "grid";
  };

  // VEGETARIAN OR NOT
  cln.querySelector(".vegetarian").src = newObjectName.isVegIcon();

  // ALERGENS

  let arr = newObjectName.allergies;

  if (newObjectName.allergies.length === 2) {
    cln.querySelector(".allergies").textContent = `Alergies: ${
      newObjectName.allergies[0]
    }, ${newObjectName.allergies[1]}`;
  } else if (newObjectName.allergies.length === 1) {
    cln.querySelector(".allergies").textContent = `Alergies: ${
      newObjectName.allergies[0]
    }`;
  } else {
    cln.querySelector(".allergies").style.visibilyty = "hidden";
  }

  // APPEND TO LIST
  // courseListContainer.appendChild(clnListItem);
  courseListContainer.appendChild(clnListItem);

  // APPEND TO THE DESCRIPTION
  descriptionContainer.appendChild(cln);
}

function listToShow(nameOfTheCategory) {
  let informationContainer = document.querySelectorAll(".informationContainer");
  let dishNameContainers = document.querySelectorAll(".dishName");

  let arrayIndex = [];

  media_q();

  for (let i = 0; i < courseArray.length; i++) {
    if (
      courseArray[i].whichCategory() === nameOfTheCategory &&
      window.innerWidth <= 700
    ) {
      arrayIndex.push(i);

      informationContainer[i].style.display = "grid";
    } else if (
      courseArray[i].whichCategory() === nameOfTheCategory &&
      window.innerWidth > 700
    ) {
      arrayIndex.push(i);

      let minIndex = Math.min.apply(Math, arrayIndex);
      informationContainer[i].style.display = "none";
      informationContainer[minIndex].style.display = "grid";
      // NAMES OF THE DISHES
      dishNameContainers[i].style.display = "block";
    } else {
      informationContainer[i].style.display = "none";
      dishNameContainers[i].style.display = "none";
    }
  }
}

const startersList = document.querySelector(".starter");

startersList.onclick = function() {
  listToShow("starter");
};

document.querySelector(".sideOrder").onclick = function() {
  listToShow("sideorders");
};

document.querySelector(".main").onclick = function() {
  listToShow("main");
};

document.querySelector(".desserts").onclick = function() {
  listToShow("dessert");
};

document.querySelector(".drinks").onclick = function() {
  listToShow("drinks");
};

// let informationContainer = document.querySelectorAll(".informationContainer");

function displayfirst(array) {
  array[0].style.display = "grid";
}
