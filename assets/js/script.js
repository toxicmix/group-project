var recentSearch = []
let string = JSON.stringify(recentSearch)
localStorage.setItem("recent search", string)

let retString = localStorage.getItem("recent search")
let retArray = JSON.parse(retString)
console.log(retArray);




// fetch`https://shazam.p.rapidapi.com/auto-complete?term=${userinput}`, {
// "headers": {
// "x-rapidapi-key": "d2c16f9919mshf8833d93f140df5p1b038djsn746b6bea0db0",
// "x-rapidapi-host": "shazam.p.rapidapi.com"
// }
// }
// .then(response => {
// return response.json ()
// })
// .then (data => {console.log(data)})
// .catch(err => {
// console.error(err);
// });



$(function () {
    var userInput = "west coast"//($('#TextInput').val())

    fetch(`https://shazam.p.rapidapi.com/search?term=${userInput}&locale=en-US&offset=0&limit=5`, {
    "headers": {
    "x-rapidapi-key": "d2c16f9919mshf8833d93f140df5p1b038djsn746b6bea0db0",
    "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
    })
    .then(response => {
    return response.json ()
    })
    .then (data => {console.log((data)/*.tracks.hits[0].track.subtitle*/)})
    .catch(err => {
    console.error(err);
    });
    
    $('.btn-primary').on("click", function(event) {
        event.preventDefault();
        if(($('#TextInput').val()) !== undefined){
            recentSearch.push($('#TextInput').val())
            console.log($('#TextInput').val())
            getSearch();
        }  
    }
    );
});


// function getSearch(){
//     fetch(`https://shazam.p.rapidapi.com/search?term=${userInput}&locale=en-US&offset=0&limit=5`, {
//     "headers": {
//     "x-rapidapi-key": "d2c16f9919mshf8833d93f140df5p1b038djsn746b6bea0db0",
//     "x-rapidapi-host": "shazam.p.rapidapi.com"
//     }
//     })
//     .then(response => {
//     return response.json ()
//     })
//     .then (data => {console.log((data)/*.tracks.hits[0].track.subtitle*/)})
//     .catch(err => {
//     console.error(err);
//     });
// }
