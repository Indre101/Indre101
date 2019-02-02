let spiderman = 'spiderman.jpg'
let building = 'building.jpg';
let building1 = 'building1.jpg';
let building2 = 'building3.jpg';

let door1;
let door2;
let door3;

let closed = 'door.jpg'
let numOfClosedDoors = 3;

let firstDoor = document.getElementById('firstDoor');
let secondDoor = document.getElementById('secondDoor');
let thirdDoor = document.getElementById('thirdDoor');
let start = document.getElementById('start');

//  start button geting clicked



const notClicked = () => {

  if (start.innerHTML === 'Start!') {
    firstDoor.src = closed;
    secondDoor.src = closed;
    thirdDoor.src = closed;
  } else {
    return false;
  }

}

let startClicked = () => {

  start.style.webkitAnimationPlayState = 'paused';
  start.innerHTML = 'Good Luck!';
  // beginTheGame();

  // noDoubleClicking(event);
}

const isCliked = () => {
  if (notClicked() === true) {
    return true
  } else {
    startClicked();
  }
}

start.onclick = function () {
  isCliked();
  ////
}

// door opening;

// assigning different pictures to numbers


function radomPhotoToDoors(maxNumberToEnter) {

  let numberOfThePhoto = Math.floor(Math.random() * maxNumberToEnter);

  switch (numberOfThePhoto) {
    case 0:
      return building;

      break;
    case 1:
      return building1;
      break;

    case 2:
      return building2;
      break;

    default:
      return spiderman;
      break;
  };
}

//door opening with photos

function openDoors(door) {

  let randomScenario = Math.floor(Math.random() * 3);

  if (randomScenario === 0) {

    door1.src = spiderman;
    door2.src = radomPhotoToDoors(3);
    door3.src = radomPhotoToDoors(3);


  } else if (randomScenario === 1) {
    door1.src = radomPhotoToDoors(3);
    door2.src = spiderman;
    door3.src = radomPhotoToDoors(3);


  } else if (randomScenario === 2) {

    door1.src = radomPhotoToDoors(3);
    door2.src = radomPhotoToDoors(3);
    door3.src = spiderman;
    //event.target.style.pointerEvent = 'none';


  }
}

function gamePlay(door) {
  numOfClosedDoors--;

  if ()

}

/// nodouble clicking

// function noDoubleClicking(event) {

//   event.target.style.pointerEvent = 'none';

// }

////////////////////

firstDoor.onclick = function () {

  door1 = firstDoor;
  openDoors(door1);


}

secondDoor.onclick = function () {

  door2 = secondDoor;
  openDoors(door2);


}


thirdDoor.onclick = function () {
  door3 = thirdDoor;

  openDoors(door3);
}