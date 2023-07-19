var userInput
var randomButtonArtist = document.querySelector('#random-btn')

$(function () {
    
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


function queryString() {
  const userinput = document.querySelector('#TextInput').value
  console.log(userinput)
  let queryString = './results.html?q='+userinput
  location.assign(queryString)
}

function randomSong() {
    const settings = {
        async: false,
        crossDomain: true,
        url: 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ac1b5c699msha0388287f4d5944p19ae56jsn0e4cb01579fa',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        var rand = Math.floor(Math.random() * 19)
        console.log((response).tracks[rand].title)
        randomChosenSong = (response).tracks[rand].title
        console.log(randomChosenSong)
    });
}



function randomButton() {
    randomSong()
    let queryString = './results.html?q='+randomChosenSong
    location.assign(queryString)
}

randomButtonArtist.addEventListener('click', randomButton)

