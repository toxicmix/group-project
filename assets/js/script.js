


fetch`https://shazam.p.rapidapi.com/auto-complete?term=${userinput}`, {
"headers": {
"x-rapidapi-key": "d2c16f9919mshf8833d93f140df5p1b038djsn746b6bea0db0",
"x-rapidapi-host": "shazam.p.rapidapi.com"
}
}
.then(response => {
return response.json ()
})
.then (data => {console.log(data)})
.catch(err => {
console.error(err);
});



const fieldsetForm = document.querySelector('#fieldset')


function handleSearchFormSubmit(event) {
  event.preventDefault();
  const userinput = document.querySelector('#TextInput').value
  console.log(userinput)
  const queryString = './results.html?q='+userinput
  location.assign(queryString)
}

fieldsetForm.addEventListener('submit', handleSearchFormSubmit)