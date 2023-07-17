var recentSearch = []
let string = JSON.stringify(recentSearch)
localStorage.setItem("recent search", string)

let retString = localStorage.getItem("recent search")
let retArray = JSON.parse(retString)
console.log(retArray);
var randomButtonArtist = document.querySelector('#random-btn')

$(function () {
    var userInput = ($('#TextInput').val())

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
        var userInput = ($('#TextInput').val())
        if(($('#TextInput').val()) !== undefined){
            recentSearch.push($('#TextInput').val())
            console.log($('#TextInput').val())
            queryString()
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

// const fieldsetForm = document.querySelector('#fieldset')


function queryString() {
  const userinput = document.querySelector('#TextInput').value
  console.log(userinput)
  let queryString = './results.html?q='+userinput
  location.assign(queryString)
}

function randomSong() {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=100&startFrom=0',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd2c16f9919mshf8833d93f140df5p1b038djsn746b6bea0db0',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

randomSong()

function randomButton() {
    var ran
    let queryString = './results.htmls?q='
    location.assign(queryString)
}

randomButtonArtist.addEventListener('click', randomButton)