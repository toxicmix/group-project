var recentSearch = []
let string = JSON.stringify(recentSearch)
localStorage.setItem("recent search", string)

let retString = localStorage.getItem("recent search")
let retArray = JSON.parse(retString)
console.log(retArray);


recentSearch.push($('#TextInput').val())