const element = document.getElementById("darkmode");

element.addEventListener("click", darkmodeHandler);
const x = document.getElementById("navbar");

function darkmodeHandler() {
  document.body.id === "light" ? document.getElementById("light").id = "dark" : document.getElementById("dark").id = "light";
  x.id == "navbar_light" ? document.getElementById("navbar_light").id = "navbar" : document.getElementById("navbar").id = "navbar_light";
}



const postContainer = document.querySelector('.card-container');



async function getFetch(){
    try{
        const url = `./data.json`
        const res = await fetch(url);
        const data = await res.json()
        // console.log(data)
        const postMethods = () => {
            data.map((e)=>{
                const postEl = document.createElement('div');
                postEl.classList.add('card');
                postEl.innerHTML = `
                      <img src=${e.flag} alt="" class="card-flag">
                      <h2 class="card-name">${e.name}</h2>
                      <p class="card-pop">Population: ${e.population}</p>
                      <p class="card-region">Region: ${e.region}</p>
                      <p class="card-cap">Capital: ${e.capital}</p>
                `
                postContainer.appendChild(postEl)
            })
        }
        postMethods();


    
}   catch(err){
          console.log(`error ${err}`)
      } ;
}
getFetch();