var recentSearch = []

const currentUrl = window.location.href;
var search = currentUrl.split('=')[1]
search = search.replace(/%20/g , " ")
console.log(search);
//recentSearchHandeler(search)
var searchHistoryContainer = document.querySelector('#history');
var resultContainer = document.querySelector('#result-text');




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
    .then (data => {console.log((data).tracks.hits[0].track.subtitle)
        resultContainer.innerHTML = ((data).tracks.hits[0].track.title);
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

// function recentSearchHandeler(input){
//     recentSearch.push(input)
//     let string = JSON.stringify(recentSearch)
// localStorage.setItem("recent search", string)
// let retString = localStorage.getItem("recent search")
// let retArray = JSON.parse(retString)
// console.log(retArray);
// }

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