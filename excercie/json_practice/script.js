fetch("https://api.iconfinder.com/v3/").then(res => {
  return res.json()
}).then(data => {
  console.log(data);
})