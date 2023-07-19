var recentSearch = []

const currentUrl = window.location.href;
var search = currentUrl.split('=')[1]
search = search.replace(/%20/g , " ")
console.log(search);
//recentSearchHandeler(search)
var searchHistoryContainer = document.querySelector('#history');
var resultContainer = document.querySelector('#result-text');
var titleContainer = document.querySelector('#songTitle');
var artistContainer = document.querySelector('#artistName');
var imageContainer = (document.querySelector('#albumCover'));
var linkContainer = (document.querySelector('#url'));
var linkEl = document.querySelector('#link');
var imageEl = document.querySelector('#coverImage');
var adamId = ""


returnButton = document.querySelector('#return-btn')
returnButton.addEventListener('click', returnHome)
var today = dayjs()
$('#todaysDate').text(today.format('dddd'))


function returnHome() {
    let queryString = './index.html?q='
    location.assign(queryString)
}



$(function () {
    

    fetch(`https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=5`, {
    "headers": {
    "x-rapidapi-key": "4ac1b5c699msha0388287f4d5944p19ae56jsn0e4cb01579fa",
    "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
    })
    .then(response => {
    return response.json ()
    })
    .then (data => {console.log((data))
        resultContainer.innerHTML = ((data).tracks.hits[0].track.title);
        titleContainer.innerHTML = ((data).tracks.hits[0].track.title);
        artistContainer.innerHTML = ((data).tracks.hits[0].track.subtitle);
        imageEl.src = ((data).tracks.hits[0].track.images.coverart);
        linkEl.href = ((data).tracks.hits[0].track.url); 
        adamId = ((data).artists.hits[0].artist.adamid)

    })
    .catch(err => {
    console.error(err);
    });
   
    initSearchHistory();

    $('.btn').on("click", function(event) {
        event.preventDefault();
        userInput = ($('#search-input').val())
        if(($('#search-input').val()) !== undefined && ($('#search-input').val()) !== ""){
            console.log($('#search-input').val())
            appendToHistory($('#search-input').val())
            console.log(recentSearch)
            getSearch();
        }  
    }
    );
});

function getSearch(){
    fetch(`https://shazam.p.rapidapi.com/search?term=${userInput}&locale=en-US&offset=0&limit=5`, {
    "headers": {
    "x-rapidapi-key": "4ac1b5c699msha0388287f4d5944p19ae56jsn0e4cb01579fa",
    "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
    })
    .then(response => {
    return response.json ()
    })
    .then (data => {console.log((data))
    resultContainer.innerHTML = ((data).tracks.hits[0].track.title);
    titleContainer.innerHTML = ((data).tracks.hits[0].track.title);
    artistContainer.innerHTML = ((data).tracks.hits[0].track.subtitle);
    imageEl.src = ((data).tracks.hits[0].track.images.coverart);
    linkEl.href = ((data).tracks.hits[0].track.url); 
    })
    .catch(err => {
    console.error(err);
    });
}


// Function to display the search history list.
function renderSearchHistory() {
    searchHistoryContainer.innerHTML = '';
  
    // Start at end of history array and count down to show the most recent at the top.
    for (var i = recentSearch.length - 1; i >= 0; i--) {
      var btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-controls', 'today forecast');
      btn.classList.add('history-btn', 'btn-history');
  
      // `data-search` allows access to city name when click handler is invoked
      btn.setAttribute('data-search', recentSearch[i]);
      btn.textContent = recentSearch[i];
      searchHistoryContainer.append(btn);
    }
  }
  
  // Function to update history in local storage then updates displayed history.
  function appendToHistory(search) {
    // If there is no search term return the function
    if (recentSearch.indexOf(search) !== -1) {
      return;
    }
    recentSearch.push(search);
  
    localStorage.setItem('search-history', JSON.stringify(recentSearch));
    renderSearchHistory();
  }
  
  // Function to get search history from local storage
  function initSearchHistory() {
    var storedHistory = localStorage.getItem('search-history');
    if (storedHistory) {
        recentSearch = JSON.parse(storedHistory);
    }
    renderSearchHistory();
  }

  songSection1 = document.getElementById('songs-results1')


function DailyTopSongDisplay(){
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=1&startFrom=0',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ac1b5c699msha0388287f4d5944p19ae56jsn0e4cb01579fa',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
    
    var createList1 = document.createElement('ul')
    var listArtist1 = document.createElement('li')
    var listSong1 = document.createElement('li')
    var listImg1 = document.createElement('img')
    var listLink1 = document.getElementById('link1')
    listImg1.setAttribute("style", "width:50px")
    createList1.setAttribute('style', 'list-style:none')
    songSection1.setAttribute('style', 'text-align:center')
    

    listArtist1.textContent = response.tracks[0].subtitle
    listSong1.textContent = response.tracks[0].title
    listImg1.src = response.tracks[0].images.coverart
    listLink1.href = response.tracks[0].url
    
    songSection1.appendChild(createList1)
    createList1.appendChild(listImg1)
    createList1.appendChild(listSong1)
    createList1.appendChild(listArtist1)
    createList1.appendChild(listLink1)
});

}

DailyTopSongDisplay() 

function artistTopSong() {
const settings = {
	async: true,
	crossDomain: true,
	url: `https://shazam.p.rapidapi.com/artists/get-top-songs?id=${adamId}=en-US`,
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ff7ed044a1msh8cba868d333ad14p154791jsn93407cfb12ef',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
}