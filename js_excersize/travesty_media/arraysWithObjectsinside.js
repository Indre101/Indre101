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

//logging a value

console.log(todos[1].todo);

// JSON sending data to a server

const todosJSON = JSON.stringify(todos);

console.log(todosJSON);

//for of loop;

for (let todo of todos) {
  console.log(todo)
}

for (let todo of todos) {
  console.log(todo.id);
}