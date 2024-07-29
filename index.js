const element = document.getElementById("darkmode");

element.addEventListener("click", darkmodeHandler);
const x = document.getElementById("navbar");

function darkmodeHandler() {
  document.body.id === "light" ? document.getElementById("light").id = "dark" : document.getElementById("dark").id = "light";
  x.id == "navbar_light" ? document.getElementById("navbar_light").id = "navbar" : document.getElementById("navbar").id = "navbar_light";
}



//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// document.querySelector('h2').innerText = localStorage.getItem('books')

// const input = document.querySelector('input')

// input.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     event.preventDefault(); // prevent default behavior
//     getFetch(); // submit the form
    
//   }
// });

const card = document.getElementById('card')
async function getFetch(){
    try{
        const url = `./data.json`
        const res = await fetch(url);
        const data = await res.json()
        console.log(data)
        data.forEach(country => {
            card.insertAdjacentHTML("beforeend",`<img src="${country.flag}" alt="">`)
            card.insertAdjacentHTML("beforeend",`<h2>${country.name}</h2>`) 
            card.insertAdjacentHTML("beforeend",`<p>Population: ${country.population}</p>`)
            card.insertAdjacentHTML("beforeend",`<p>Region: ${country.region}</p>`)
            card.insertAdjacentHTML("beforeend",`<p>Capitol: ${country.capital}</p>`)

             
        
    })
        // data.forEach(pic=> listEl.insertAdjacentHTML('beforeend',`<img src="${pic.flag}" alt="">`))

}   catch(err){
          console.log(`error ${err}`)
      } ;
}
getFetch();