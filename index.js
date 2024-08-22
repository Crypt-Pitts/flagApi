const element = document.getElementById("darkmode");

element.addEventListener("click", darkmodeHandler);
const navbar = document.getElementById("navbar");
const searchbar = document.getElementById("searchbar");

function darkmodeHandler() {
  document.body.id === "light" ? document.getElementById("light").id = "dark" : document.getElementById("dark").id = "light";
  navbar.id == "navbar_light" ? document.getElementById("navbar_light").id = "navbar" : document.getElementById("navbar").id = "navbar_light";
  searchbar.id == "searchbarLight" ? document.getElementById("searchbarLight").id = "searchbar" : document.getElementById("searchbar").id = "searchbarLight"
}



const postContainer = document.querySelector('.cards-container');
const postList = document.getElementById('countries');
const modalEL = document.getElementById('modal');

async function getFetch(){
    try{
        const url = `https://restcountries.com/v3.1/all`
        const res = await fetch(url);
        const data = await res.json()
        console.log(data)
        const postMethods = () => {
            data.map((e)=>{
                const postEl = document.createElement('div');
                postEl.classList.add('card');
                postEl.id = e.name.common;
                postEl.innerHTML = `
                    <img src=${e.flags.svg} alt="The Flag of ${e.name.common}" class="modal-flag"> 
                      <h2 class="card-name">${e.name.common}</h2>
                     <span class="card-pop">Population: <p> ${e.population}</p></span>
                      <span class="card-region">Region: <p>${e.region}</p></span>
                      <span class="card-cap">Capital: <p>${e.capital}</p></span>
                `
                postContainer.appendChild(postEl)

                //Modal Setup

                const cardClick = document.getElementById(e.name.common);

                cardClick.addEventListener("click", c => {
                    c.preventDefault();
                    console.log(e.name.common)
                    modalEL.style.display = "flex";
                    modalEL.innerHTML = `
                    <button  onclick="modalCloseBtn()" class="modal-close">Back</button>
                    <img src=${e.flags.svg} alt="The Flag of ${e.name.common}" class="modal-flag"> 

                    <div id="info">
                    <h2 class="modal-name">${e.name.official}</h2>
                    <span class="modal-pop">Population: <p> ${e.population}</p></span>
                    <span class="modal-region">Region: <p>${e.region}</p></span>
                    <span class="modal-cap">Capital: <p>${e.capital}</p></span>
                    </div>
                    `

                })

                    })
        }
        postMethods();

        const listCountries = () => {
            data.map((c)=>{
                const listEL = document.createElement('option');
                listEL.value = c.name;
                listEL.innerHTML = c.name;

            postList.appendChild(listEL)
            })
        }
        listCountries();


        
    
}   catch(err){
          console.log(`error ${err}`)
      } ;
}
getFetch();



const formSubmit = document.getElementById('formSub');
const searchbarSubmit = document.getElementById('searchbar')
// const cardsIds = (document.getElementsByClassName('.card')).forEach((card) => card.id)

formSubmit.addEventListener("submit", (s) => {
    s.preventDefault();
    console.log(searchbarSubmit.value);
})

// console.log(cardsIds)


// Modal for page
const modal = document.getElementById('modal');


navClick = document.getElementById('navbar');
const modalCloseBtn = () => modal.style.display = 'none';

// navClick.addEventListener("click", c => {
//     c.preventDefault();
//     modal.style.display = 'none';
// })

// modalCloseBtn.addEventListener("click", c => {
//     c.preventDefault();
//     modal.style.display = 'none';
// })

