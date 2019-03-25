let hobbyArray = ["walking", "dancing", "coding", "singing", "running"];

console.log(hobbyArray[0]);
console.log(hobbyArray[hobbyArray.length - 1]);
console.log(hobbyArray.length);


for (let i in hobbyArray) {

  console.log(hobbyArray[i]);


};


hobbyArray.forEach(function (elm, i) {

  console.log(elm + " " + i)

});