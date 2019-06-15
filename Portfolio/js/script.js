// canvas
const menuItem3 = document.getElementById("menuItemPortfolio");
const menuItem = document.querySelectorAll(".projectItem");

window.onload = function() {
  menuItem.forEach(e => {
    e.style.display = "none";
  });
};

// drawing starts
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

function drawStarts() {
  for (let index = 0; index < 100; index++) {
    let randomStar = Math.floor(Math.random() * 100);
    let randomWidth = Math.random() * 3;
    let randomHeight = Math.random() * 3;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    ctx.fillStyle = "white";
    ctx.fillRect(x, y, randomWidth, randomHeight);
  }
}
drawStarts();

setInterval(() => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  drawStarts();
}, 3000);

// drawing starts

// soul Bass

// slder effect
// const arrow = document.getElementById("arrow");
const styleTileBass = document.getElementById("styleTileBass");
const saulBassIMG = document.querySelectorAll(".saulBassIMG");
const imageDisplay = document.getElementById("displayImagesSaulBassContainer");

let i = -1;
let a = 0;

// function to generate images to display in displayImagesSaulBassContainer

saulBassIMG.forEach(e => {
  showImages(e);
});

// function to generate images to display in displayImagesSaulBassContainer

const textConatainer = document.getElementById("textConatainer");
const project1 = document.getElementById("textProject1");
// const project2 = document.getElementById("textProject2");
const project3 = document.getElementById("textProject3");
const project4 = document.getElementById("textProject4");
const project5 = document.getElementById("textProject5");
const project6 = document.getElementById("textProject6");
const project7 = document.getElementById("textProject7");
const btnPortfolio = document.getElementById("btnPortfolio");
const btnPortfolioBack = document.getElementById("btnPortfolioBack");

const projectName = document.getElementById("projectName");
let textFieldsProject = document.querySelectorAll(".textAboutSoulBass");

let imageAraySoulBass = [
  "../Images_and_icons/saul_bass/bass1.png",
  "../Images_and_icons/saul_bass/style_tile.png",
  "../Images_and_icons/saul_bass/bass2_1.png",
  "../Images_and_icons/saul_bass/bass3.png",
  "../Images_and_icons/saul_bass/bass5.png",
  "../Images_and_icons/saul_bass/bass6.png",
  "../Images_and_icons/saul_bass/bass4.png",
  "../Images_and_icons/saul_bass/bass7.png",
  "../Images_and_icons/saul_bass/bass2.png",
  "../Images_and_icons/saul_bass/bass8.png",
  "../Images_and_icons/saul_bass/bass9.png"
];
let spongebobImageArray = [
  "../Images_and_icons/spongebob/sponge1.png",
  "../Images_and_icons/spongebob/sponge4.png",
  "../Images_and_icons/spongebob/sponge2.png",
  "../Images_and_icons/spongebob/sponge3.png",
  "../Images_and_icons/spongebob/sponge5.png"
];
let biking = [
  "../Images_and_icons/bicycle/biking1_0.png",
  "../Images_and_icons/bicycle/biking1.png",
  "../Images_and_icons/bicycle/biking2.png",
  "../Images_and_icons/bicycle/biking3.png",
  "../Images_and_icons/bicycle/biking4.png",
  "../Images_and_icons/bicycle/biking5.png",
  "../Images_and_icons/bicycle/biking6.png",
  "../Images_and_icons/bicycle/biking7.png",
  "../Images_and_icons/bicycle/biking8.png",
  "../Images_and_icons/bicycle/biking9.png",
  "../Images_and_icons/bicycle/biking10.png",
  "../Images_and_icons/bicycle/biking11.png",
  "../Images_and_icons/bicycle/biking12.png"
];
let chad = [
  "../Images_and_icons/chad/chad1.png",
  "../Images_and_icons/chad/chad2.png",
  "../Images_and_icons/chad/chad3.png",
  "../Images_and_icons/chad/chad4.png",
  "../Images_and_icons/chad/chad5.png",
  "../Images_and_icons/chad/chad6.png",
  "../Images_and_icons/chad/chad7.png",
  "../Images_and_icons/chad/chad8.png",
  "../Images_and_icons/chad/chad9.png",
  "../Images_and_icons/chad/chad10.png",
  "../Images_and_icons/chad/chad11.png",
  "../Images_and_icons/chad/chad12.png",
  "../Images_and_icons/chad/chad13.png",
  "../Images_and_icons/chad/chad14.png"
];
let shining = [
  "../Images_and_icons/shining/shine1.png",
  "../Images_and_icons/shining/shine2.png",
  "../Images_and_icons/shining/shine3.png",
  "../Images_and_icons/shining/shine4.png",
  "../Images_and_icons/shining/shine5.png",
  "../Images_and_icons/shining/shine6.png",
  "../Images_and_icons/shining/shine7.png",
  "../Images_and_icons/shining/shine8.png",
  "../Images_and_icons/shining/shine9.png",
  "../Images_and_icons/shining/shine10.png",
  "../Images_and_icons/shining/shine10.png"
];
let sprint = [
  "../Images_and_icons/sprint_1/sprint1.png",
  "../Images_and_icons/sprint_1/sprint2.png",
  "../Images_and_icons/sprint_1/sprint3.png",
  "../Images_and_icons/sprint_1/sprint4.png",
  "../Images_and_icons/sprint_1/sprint5.png",
  "../Images_and_icons/sprint_1/sprint6.png"
];
let webPrototype = [
  "../Images_and_icons/web_prototype/sprint1_1.png",
  "../Images_and_icons/web_prototype/sprint1_2.png",
  "../Images_and_icons/web_prototype/sprint1_3.png",
  "../Images_and_icons/web_prototype/sprint1_4.png",
  "../Images_and_icons/web_prototype/sprint1_5.png",
  "../Images_and_icons/web_prototype/sprint1_6.png",
  "../Images_and_icons/web_prototype/sprint2_1.png",
  "../Images_and_icons/web_prototype/sprint2_2.png"
];

let j = 0;

let arrayOfpages = [
  {
    projecName: "Saul Bass responsive website",
    functionToCall: function() {
      takeImages(imageAraySoulBass);
    },
    functionTochangeText: function() {
      clickedProjectName(project1, imageAraySoulBass);
    }
  },
  {
    projecName: "The adventures of Chad",
    functionToCall: function() {
      takeImages(chad);
    },
    functionTochangeText: function() {
      clickedProjectName(project4, chad);
    }
  },
  {
    projecName: "Interactive The Shining poster",
    functionToCall: function() {
      takeImages(shining);
    },
    functionTochangeText: function() {
      clickedProjectName(project5, shining);
    }
  },
  {
    projecName: "Biking 101",
    functionToCall: function() {
      takeImages(biking);
    },
    functionTochangeText: function() {
      clickedProjectName(project3, biking);
    }
  },
  {
    projecName: "Fronter fix",
    functionToCall: function() {
      takeImages(sprint);
    },
    functionTochangeText: function() {
      clickedProjectName(project6, sprint);
    }
  },
  {
    projecName: "Fronter fix web prototype",
    functionToCall: function() {
      takeImages(webPrototype);
    },
    functionTochangeText: function() {
      clickedProjectName(project7, webPrototype);
    }
  }
];

btnPortfolio.onclick = function() {
  j++;
  console.log(j);

  if (j < 0) {
    j = 0;
    return false;
  } else if (j > arrayOfpages.length - 1) {
    j = arrayOfpages.length - 1;
    return false;
  }
  moveThePage(j);
};

btnPortfolioBack.onclick = function() {
  j--;
  console.log(j);
  if (j < 0) {
    j = 0;
  } else if (j > arrayOfpages.length - 1) {
    j = arrayOfpages.length - 1;
    return false;
  }

  moveThePage(j);
};

function moveThePage(k) {
  projectName.textContent = arrayOfpages[k]["projecName"];
  arrayOfpages[k].functionToCall();
  arrayOfpages[k].functionTochangeText();
}

// menu buttons

document.getElementById("projectBTN_1").onclick = function() {
  takeImages(imageAraySoulBass);

  projectName.textContent = "Saul Bass responsive website";
  clickedProjectName(project1, imageAraySoulBass);
};

document.getElementById("projectBTN_3").onclick = function() {
  takeImages(biking);
  projectName.textContent = "Biking 101";

  clickedProjectName(project3, biking);
};

document.getElementById("projectBTN_4").onclick = function() {
  takeImages(chad);
  projectName.textContent = "The adventures of Chad";

  clickedProjectName(project4, chad);
};

document.getElementById("projectBTN_5").onclick = function() {
  takeImages(shining);
  projectName.textContent = "Interactive The Shining poster";

  clickedProjectName(project5, shining);
};

document.getElementById("projectBTN_6").onclick = function() {
  takeImages(sprint);
  projectName.textContent = "Fronter fix";

  clickedProjectName(project6, sprint);
};

document.getElementById("projectBTN_7").onclick = function() {
  takeImages(webPrototype);
  projectName.textContent = "Fronter fix web prototype";

  clickedProjectName(project7, webPrototype);
};

// function to add event once the project name is pressed

function clickedProjectName(pNToShow, ar) {
  textFieldsProject.forEach(l => {
    l.style.display = "none";
  });

  // add Image to the display
  imageDisplay.innerHTML = "";

  let imageToShowOnceClicked = new Image();
  imageToShowOnceClicked.classList.add("saulBassIMG_1");
  imageToShowOnceClicked.src = ar[0];
  imageDisplay.appendChild(imageToShowOnceClicked);

  //

  textConatainer.insertAdjacentElement("afterbegin", pNToShow);

  pNToShow.classList.add("textAnimation");
  pNToShow.style.display = "block";
}

// function to display generated images to in displayImagesSaulBassContainer

function takeImages(a) {
  styleTileBass.innerHTML = "";

  for (let m = 0; m < a.length; m++) {
    let newImage = new Image();
    newImage.src = a[m];
    newImage.classList.add("saulBassIMG");
    styleTileBass.appendChild(newImage);

    showImages(newImage);
  }
}

// function to display generated images to in displayImagesSaulBassContainer

// function to make images functioonal
function showImages(anImage) {
  anImage.onmouseover = function() {
    anImage.style.opacity = "0.5";
  };

  anImage.onmouseout = function() {
    anImage.style.opacity = "1";
  };

  anImage.onclick = function name() {
    anImage.style.opacity = "0.5";

    imageDisplay.innerHTML = "";
    var cln = anImage.cloneNode(true);

    cln.style.transform = "translate(0,0)";
    cln.style.height = "50vh";
    cln.style.width = "50vw";
    cln.style.opacity = "1";

    cln.style.objectFit = "contain";
    // cln.style.boxShadow = " 2vh 2vh 2vh black";
    imageDisplay.appendChild(cln);

    imageDisplay.classList.add("displayImagesSaulBass");
  };
}

// portfolio button menu pop up
const ulPortoflioListContainer = document.getElementById("protfolioList");

menuItem3.onmouseover = function() {
  menuItem3.style.transition = "1s";
  menuItem3.style.transform = "rotate(0deg) skewX(0deg) translate(0,0)";
  menuItem3.style.width = "50%";

  menuItem3.style.transformOrigin = "left";
  menuItem3.style.perspective = "10000px";
  ulPortoflioListContainer.classList.remove("displayNone");

  menuItem.forEach(e => {
    e.style.transition = "0.5s";
    e.style.display = "inline";
    e.classList.add("projectItem1");
  });
};

menuItemPortfolio.onmouseout = function() {
  menuItem3.style.transform = "rotate(-30deg) skewX(25deg) translate(0, 0)";
  ulPortoflioListContainer.classList.add("displayNone");
  menuItem3.style.width = "";

  menuItem.forEach(e => {
    // e.style.display = "none";
  });
};

// THE BOOK PART

const bookCover = document.getElementById("bookCover");
const firstStoryPart = document.getElementById("firstStoryPart");
const lastPage = document.getElementById("lastPage");
const firstPageBack = document.getElementById("firstPageBack");
const secondPageBack = document.getElementById("secondPageBack");
const thirdpageBack = document.getElementById("thirdpageBack");
const pages = document.querySelectorAll(".pageContainer");
const pagesGoBack = document.querySelectorAll(".pagesGoBack");
const pageBack = document.querySelectorAll(".pageBack");

function flipPage(p) {
  p.style.transform = "rotateY(-180deg)";
  p.style.transition = "1s";
}

function closeBook(p) {
  p.style.transform = "";
}

let pageNumber = -1;

function displayNone(d) {
  d.classList.add("opacity");
  // d.style.opacity = "0";
}

pages.forEach(a => {
  a.onclick = function() {
    pageNumber++;
    flipPage(this);
    displayNone(pagesGoBack[pageNumber]);

    console.log(pageNumber);
    if (pageNumber === 2) {
      setTimeout(() => {
        pageNumber = -1;
        pages.forEach(a => {
          closeBook(a);
        });

        pagesGoBack.forEach(s => {
          s.classList.remove("opacity");
        });
      }, 1000);
    }
  };
});

// lastPage.onclick = function() {};
