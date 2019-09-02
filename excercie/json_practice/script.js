fetch("https://kea-alt-del.dk/twitter/api/?hashtag=sports").then(res => {
  return res.json()
}).then(data => {

  data.statuses.forEach(showItems)
})


function showItems(element) {

  console.log(element);

}