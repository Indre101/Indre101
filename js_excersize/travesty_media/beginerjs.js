//objects

const person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "Main50",
    city: "Cph"
  },
  hobbies: ["music", "singing"]

}

// getting the value

console.log(person.firstName);

// getting few values in a row

console.log(person.firstName, person.lastName);
// getting a value in array from objects

console.log(person.hobbies[0]);

//getting value of an embedded 

console.log(person.address.city);

// using destructuring for pulling info from objects

const {
  firstName,
  lastName
} = person;
console.log(lastName);

// usidn destructuring for pulling out info in embedded

const {
  hobbies,
  address: {
    street
  }
} = person;

console.log(hobbies[0]);
console.log(street);