var recentSearch = []

const currentUrl = window.location.href;
var search = currentUrl.split('=')[1]
search = search.replace(/%20/g , " ")
console.log(search);
recentSearch.push(search)


let string = JSON.stringify(recentSearch)
localStorage.setItem("recent search", string)
let retString = localStorage.getItem("recent search")
let retArray = JSON.parse(retString)
console.log(retArray);

$(function () {
    

    fetch(`https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=5`, {
    "headers": {
    "x-rapidapi-key": "d2c16f9919mshf8833d93f140df5p1b038djsn746b6bea0db0",
    "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
    })
    .then(response => {
    return response.json ()
    })
    .then (data => {console.log((data).tracks.hits[0].track.subtitle)})
    .catch(err => {
    console.error(err);
    });

    $('.btn-primary').on("click", function(event) {
        event.preventDefault();
        userInput = ($('#TextInput').val())
        if(($('#TextInput').val()) !== undefined){
            console.log($('#TextInput').val())
            queryString();
            getSearch();
        }  
    }
    );
});


function getSearch(){
    fetch(`https://shazam.p.rapidapi.com/search?term=${userInput}&locale=en-US&offset=0&limit=5`, {
    "headers": {
    "x-rapidapi-key": "d2c16f9919mshf8833d93f140df5p1b038djsn746b6bea0db0",
    "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
    })
    .then(response => {
    return response.json ()
    })
    .then (data => {console.log((data).tracks.hits[0].track.subtitle)})
    .catch(err => {
    console.error(err);
    });
}
