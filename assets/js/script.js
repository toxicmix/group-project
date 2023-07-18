var userInput
var randomButtonArtist = document.querySelector('#random-btn')
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
        var rand = Math.floor(Math.random() * 19)
        console.log((response).tracks[rand].title)
        randomChosenSong = (response).tracks[rand].title
        console.log(randomChosenSong)
    });
}

randomSong()

function randomButton() {
    let queryString = './results.html?q='+randomChosenSong
    location.assign(queryString)
}

randomButtonArtist.addEventListener('click', randomButton)

var video = document.querySelector('video')
  , container = document.querySelector('#container');
 
var setVideoDimensions = function () {

  var w = video.videoWidth
    , h = video.videoHeight;
   

  var videoRatio = (w / h).toFixed(2);
   

  var containerStyles = window.getComputedStyle(container)
    , minW = parseInt( containerStyles.getPropertyValue('width') )
    , minH = parseInt( containerStyles.getPropertyValue('height') );
   
  
  var widthRatio = minW / w
    , heightRatio = minH / h;
   
 
  if (widthRatio > heightRatio) {
    var newWidth = minW;
    var newHeight = Math.ceil( newWidth / videoRatio );
  }
  else {
    var newHeight = minH;
    var newWidth = Math.ceil( newHeight * videoRatio );
  }
   
  video.style.width = newWidth + 'px';
  video.style.height = newHeight + 'px';
};
 
video.addEventListener('loadedmetadata', setVideoDimensions, false);
window.addEventListener('resize', setVideoDimensions, false);