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

// CATEGORY BUTTON PRESSED FUNCTION
categoryButtonsList.forEach(btn => {
  btn.addEventListener("click", changeBg);
});

function changeBg() {
  categoryButtonsList.forEach(btn => {
    btn.style.backgroundColor = "";
  });

  this.style.backgroundColor = "rgb(111, 111, 154)";
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

// MENU BUTTON FUNCTION

menuBtn.onclick = function () {
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
  dishImg,
  alcohol
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
  this.alcohol = alcohol;

  this.isCatogery = function () {
    if (!this.category) {
      return true;
    }
  };

  this.containsAlcohol = function () {
    if (this.alcohol > 0) {
      return true;
    } else {
      return false;
    }
  };


  this.disCountPrice = function () {
    let finalPrice;

    if (this.discountAmount > 0) {
      finalPrice = this.price - (this.discountAmount / 100) * this.price;
      return finalPrice;
    } else if (this.discountAmount <= 0) {
      return false;
    }
  };

  this.isVegIcon = function () {
    if (this.isVegStatus === true) {
      return "./img/icons-img/veg_1.svg";
    } else {
      return "./img/icons-img/non-veg_1.svg";
    }
  };

  this.isSoldOut = function () {
    if (soldOutStatus) {
      return true;
    } else {
      return false;
    }
  };
}

// FETCH FUNCTION
fetch("https://kea-alt-del.dk/t5/api/productlist")
  .then(res => res.json())
  .then(data => {

    data.forEach(showCourses);
    const A = filteredCategoriesArray()

    A.forEach(el => {
      let newCategory = document.createElement("div");
      newCategory.classList.add("category");
      let newCategoryName = document.createElement("h2");
      let categoryName = el.charAt(0).toUpperCase() + el.slice(1)
      console.log(categoryName)
      newCategoryName.textContent = categoryName;
      newCategory.appendChild(newCategoryName);
      newCategory.addEventListener("click", listToShow)
      categoriesContainer.appendChild(newCategory);
    })
  });








let courseArray = [];


let informationContainer = document.querySelectorAll(".informationContainer");

let categoriesArray = [];

let filteredCategoriesArray = () => categoriesArray.filter(function (item, index) {
  return categoriesArray.indexOf(item) >= index;
});





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
    course.image,
    course.alcohol
  );

  // PUSSHING CREATED OBJECTS
  courseArray.push(newDish);


  addNewElements(newDish);


  informationContainer = document.querySelectorAll(".informationContainer");


  displayNoneAll(informationContainer);
  informationContainer[0].style.display = "grid";


  categoriesArray.push(newDish.category)


}





// let informationContainer = document.querySelectorAll(".informationContainer");

function displayNoneAll(arrayTodisplayNone) {
  arrayTodisplayNone.forEach(element => {
    element.style.display = "none";
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

  //CATEGORIES
  cln.querySelector(
    ".categoryName"
  ).textContent = `(${newObjectName.category})`;


  // NAME
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
  cln.querySelector(".more").onmouseover = function () {
    longDes.classList.remove("d-none");
  };

  cln.querySelector(".more").onmouseout = function () {
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

  clnListItem.querySelector(".dishName").onclick = function () {
    // displayNoneAll(informationContainer);

    informationContainer.forEach(element => {
      element.style.display = "none";
    });

    oneInformationContainer.style.display = "grid";
  };

  // ALCOHOL

  if (newObjectName.containsAlcohol()) {
    cln.querySelector(".alcoContainer").style.visibility = "visible";

    cln.querySelector(
      ".alcoContainer h4"
    ).textContent = `Contains ${newObjectName.alcohol}%`;
  } else {
    cln.querySelector(".alcoContainer").style.visibility = "hidden";
  }

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



  // courseListContainer.appendChild(clnListItem);
  courseListContainer.appendChild(clnListItem);

  // APPEND TO THE DESCRIPTION
  descriptionContainer.appendChild(cln);


}



function listToShow(nameOfTheCategory) {

  informationContainer = document.querySelectorAll(".informationContainer");
  let dishNameContainers = document.querySelectorAll(".dishName");

  let arrayIndex = [];

  media_q();


  for (let i = 0; i < courseArray.length; i++) {


    if (
      courseArray[i].category.toLowerCase() === this.textContent.toLowerCase() &&
      window.innerWidth <= 700
    ) {
      arrayIndex.push(i);
      informationContainer[i].style.display = "grid";
    } else if (
      courseArray[i].category.toLowerCase() === this.textContent.toLowerCase() &&
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
      // arrayIndex = [];
    }
  }
}

window.onresize = function () {
  media_q();


  if (window.innerWidth > 700) {
    categoryButtonsList.forEach(btn => {
      let bgColor = getComputedStyle(btn).backgroundColor;

      if (bgColor === "rgb(111, 111, 154)") {
        let quotedVar = btn.textContent.toLowerCase();
        let str = quotedVar.replace(/\s+/g, "");
        listToShow(str);
      }
    });
  }
};




// let informationContainer = document.querySelectorAll(".informationContainer");



function displayfirst(array) {
  array[0].style.display = "grid";
}