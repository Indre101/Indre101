const categoriesContainer = document.querySelector(".categoriesContainer");
const menuBtn = document.getElementById("menuBtn");

const dishListTemplate = document.getElementById("dishListTemplate").content;
const dishInformationTemplate = document.getElementById(
  "dishInformationTemplate"
).content;

const descriptionContainer = document.querySelector(".descriptionContainer");
const courseListContainer = document.querySelector(".courseListContainer");

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
  if (window.innerWidth <= 500) {
    toggleClass(categoriesContainer, "d-flex");
    toggleClass(categoriesContainer, "d-none");

    document.querySelectorAll(".category").forEach(c => {
      c.addEventListener("click", displayNone);
    });
  } else {
    categoriesContainer.classList.remove("d-none");
    categoriesContainer.classList.add("d-flex");

    document.querySelectorAll(".category").forEach(c => {
      c.removeEventListener("click", displayNone);
    });

    // toggleClass(categoriesContainer, "d-flex")
    // toggleClass(categoriesContainer, "d-none")
  }
}

// WINDOW RESIZE FUNCTION
window.onresize = function() {
  media_q();
};

// MENU BUTTON FUNCTION

menuBtn.onclick = function() {
  toggleClass(categoriesContainer, "d-none");
  toggleClass(categoriesContainer, "slideIn");
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
    if (this.isVegStatus === 1) {
      return "./img/icons-img/veg_1.svg";
    } else {
      return "./img/icons-img/non-veg_1.svg";
    }
  };

  this.isSoldOut = function() {
    if (soldOutStatus === 1) {
      return true;
    } else {
      return false;
    }
  };
}

let cabanossiWithBeetrootcreme = new Dish(
  "starter",
  "Cabanossi with beetrootcreme",
  49,
  0,
  10,
  "Cabanossi med rødbedecreme og løg",
  "Cabanossi med rødbedecreme og creme er egentlig en forret, men kammerat Vladimir elskede denne ret så højt, at han forbød restauranter i Krigien at sælge det som andet end en hovedret. Vi anbefaler det dog som forret, inden en god Bortsjs. Skylles helst ned med vodka.",
  1,
  ["laktose"],
  "./img/medium/rodbede-cabanossi-md.jpg"
);
let caviarBruschetta = new Dish(
  "starter",
  "Caviar bruschetta",
  49,
  0,
  0,
  "Brushcetta med russisk Caviar",
  "Til denne dejlige Bruschetta anvender vi kun de dejligste sibiriske Caviar. Caviarerne presses ud af fiskene mens de stadig er levende, og vædes derefter i Putinka Vodka. Der er masser af bjerggedesmør på bruschettaene.",
  0,
  [],
  "./img/medium/caviarbruschetta-md.jpg"
);
let stakeWithVegetables = new Dish(
  "main",
  "Stake with vegetables",
  179,
  0,
  20,
  "Diplomat-bøf med grønt",
  "Diplomatiet har haft mange udfordringer i USSR. Derfor blev der sørget godt for dem, og som nogen af de få, fik diplomaterne mange bøffer under den kolde krig. Diplomat-bøffen med grillede grøntsager og koldpresset olie er af ypperste kvalitet - kødet kommer fra udsultede ungkalve i Viktoriagrad.",
  0,
  [],
  "./img/medium/boef-md.jpg"
);
let guzni = new Dish(
  "dessert",
  "Guzni",
  69,
  0,
  0,
  "Guzni - Rødbede/nøddeis ",
  "Guzni - den verdenskendte rødbede/nøddeis fra Petrograd. Kammerat Boris Guzni var stor fan af den, og spiste den hver dag under Den kolde krig.",
  1,
  [],
  "./img/medium/guzni-md.jpg"
);
let vodka = new Dish(
  "drinks",
  "Voda-vodka",
  19,
  0,
  0,
  "Voda-vodka - vodka i rigelige mængder",
  "Voda-vodka - en vodka brygget på det pureste vand af smeltet sne fra Sibirien. Passer godt til alle hovedretter",
  1,
  ["kartofler"],
  "./img/medium/voda-md.jpg"
);
let zygroffsFarmersPlate = new Dish(
  "main",
  "Zygroffs farmers plate",
  109,
  1,
  0,
  "Zygroffs bondeplatte - bøndernes svar på Tapas",
  "Under de trange vilkår på landet Sibirien, bød husmændene på Zygroffs bondeplatte, når der var fest. Gode, grove grøntsager, tørret bøffelkod og masser af æg. Specielt for bondeplatten blev de dejlige caviar skiftet ud med billige kapers. ",
  0,
  ["Laktose"],
  "./img/medium/bondeplatte-md.jpg"
);

let russianRingbread = new Dish(
  "sideorders",
  "Russian Ringbread",
  29,
  1,
  0,
  "Russisk ringbrød bagt med det fineste gryzni-mel fra Gryzkigistan",
  "Russisk ringbrød bagt med det fineste gryzni-mel fra Gryzkigistan",
  1,
  ["laktose"],
  "./img/medium/ringbroed-md.jpg"
);

addNewElements(cabanossiWithBeetrootcreme);
addNewElements(caviarBruschetta);
addNewElements(stakeWithVegetables);
addNewElements(guzni);
addNewElements(vodka);
addNewElements(zygroffsFarmersPlate);
addNewElements(russianRingbread);

const startersList = document.querySelector(".starter");

function displayNoneAll(arrayTodisplayNone) {
  arrayTodisplayNone.forEach(element => {
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

  clnListItem.querySelector(".dishName").onclick = function() {
    displayNoneAll(informationContainer);

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

let courseArray = [
  cabanossiWithBeetrootcreme,
  caviarBruschetta,
  stakeWithVegetables,
  guzni,
  vodka,
  zygroffsFarmersPlate,
  russianRingbread
];

function listToShow(nameOfTheCategory) {
  let arrayIndex = [];

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

      // dishNameContainers[i].style.visibilyty = "hidden";
      dishNameContainers[i].style.display = "block";
    } else {
      informationContainer[i].style.display = "none";
      dishNameContainers[i].style.display = "none";
    }
  }
}

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

let dishNameContainers = document.querySelectorAll(".dishName");
let informationContainer = document.querySelectorAll(".informationContainer");

function displayfirst(array) {
  array[0].style.display = "grid";
}

displayNoneAll(informationContainer);
displayfirst(informationContainer);
