const element = document.getElementById("darkmode");

element.addEventListener("click", mySecondFunction);
const x = document.getElementById("navbar");

function mySecondFunction() {
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

const listEl = document.querySelector('ul');
async function getFetch(){
    try{
        const url = `./data.json`
        const res = await fetch(url);
        const data = await res.json()

        data.forEach(e=> listEl.insertAdjacentHTML('beforeend', `<li>${e.name}</li>`))
        data.forEach(pic=> listEl.insertAdjacentElement('beforeend',`<img src=${pic.flag}\>`))

}   catch(err){
          console.log(`error ${err}`)
      } ;
}
getFetch();