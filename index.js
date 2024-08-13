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
const postList = document.getElementById('countries')


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
                postEl.id = e.name;
                postEl.innerHTML = `
                      <img src=${e.flag} alt="The Flag of ${e.name}" class="card-flag">
                      <h2 class="card-name">${e.name}</h2>
                     <span class="card-pop">Population: <p> ${e.population}</p></span>
                      <span class="card-region">Region: <p>${e.region}</p></span>
                      <span class="card-cap">Capital: <p>${e.capital}</p></span>
                `
                postContainer.appendChild(postEl)

                //Modal Setup

                const cardClick = document.getElementById(e.name);

                cardClick.addEventListener("click", c => {
                    c.preventDefault();
                    console.log(e.name)
                    document.getElementById('modal').style.display = "block";
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
const modalContain = document.getElementById('modalContain');
navClick = document.getElementById('navbar');

navClick.addEventListener("click", c => {
    c.preventDefault();
    modal.style.display = 'none';
})

modalContain.addEventListener("click", c => {
    c.preventDefault();
    modal.style.display = 'none';
})

