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
    "x-rapidapi-key": "5e5c5dcd9dmsh6104ddc534fba7dp170c60jsn3d6d9f75dea7",
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
            'X-RapidAPI-Key': '5e5c5dcd9dmsh6104ddc534fba7dp170c60jsn3d6d9f75dea7',
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

<<<<<<< HEAD
=======
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
>>>>>>> 30ac60c6dee6f3a9872cdcf4d47c875118a0a4e7
