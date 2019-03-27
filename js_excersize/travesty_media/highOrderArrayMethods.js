const todos = [{
    id: 1,
    todo: "take out trash",
    isdone: true
  },
  {
    id: 2,
    todo: "Sing a song",
    isdone: true
  },
  {
    id: 3,
    todo: "go to dentist",
    isdone: false
  }

]

//forEach;
todos.forEach(printOut);

function printOut(element) {

  console.log(element);

}

//for each second

todos.forEach(getJusttodo);

function getJusttodo(element) {

  console.log(element.todo);

}

//map method returns a new Array

const textArray = todos.map(returnTodos)

function returnTodos(element) {

  return element.todo

}

console.log(textArray);

// filter method

const isDoneArray = todos.filter(function (element) {

  return element.isdone === true;

})

console.log(isDoneArray);

//chaining methods

const justDone = todos.filter(function (element) {

  return element.id < 3;

}).map(function (element) {

  return element.todo;
})

console.log(justDone);