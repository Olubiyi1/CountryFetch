
function loadAllCountry(){
const countryAPI ="https://restcountries.com/v3.1/all";
fetch(countryAPI)
.then((response)=>response.json())
.then(data=>{
let card="";
    data.map((item)=>{
      card += `<div class="country-card" id="${item.name.common}" onclick="getCountryByName('${item.name.common}')">
                    <img src="${item.flags.svg}" width="100px">
                    <h1 class="country"><b>${item.name.common}</b></h1>
                    <p class="population"><b>Population</b> : <span>${item.population}</span></p>
                    <p class="region"><b>Region</b> : <span>${item.region}</span></p>
                    <p class="capital"><b>Capital</b> : <span>${item.capital}</span></p>
                </div>`;
    })
    document.querySelector(".cards").innerHTML = card;
    // console.log(data);
    
})
.catch(error=>{
    console.error(error)
})
}
window.onload=loadAllCountry();


// dropdown functionality;

function dropdown(){ 
          
    const region = document.querySelector("#dropdown").value;
    // console.log(region);
    const filterRegion =`https://restcountries.com/v3.1/region/${region}`
    fetch(filterRegion)
    .then(response=>response.json())
    .then(data=>{
        let card="";
        data.map((item)=>{
          card += `<div class="country-card">
                        <img src="${item.flags.svg}">
                        <h1 class="country">${item.name.common}</h1>
                        <p class="population"><b>Population</b> : <span>${item.population}</span></p>
                        <p class="region"><b>Region</b> : <span>${item.region}</span></p>
                        <p class="capital"><b>Capital</b> : <span>${item.capital}</span></p>
                    </div>`;
        })
        document.querySelector(".cards").innerHTML = card;
    })
    .catch(error=>{
        console.error(error)
    })
}
    
document.getElementById("dropdown").addEventListener("change",dropdown)

//  search functionality

function searchCountry (e){
    e.preventDefault();
    console.log(e);

const searchValue = document.querySelector("#searchCountry").value;
if(searchValue.length > 3){
    const filterRegion =`https://restcountries.com/v3.1/name/${searchValue}`
    fetch(filterRegion)
    .then(response=>response.json())
    .then(data=>{
        let card="";
        data.map((item)=>{
          card += `<div class="country-card">
                        <img src="${item.flags.svg}" class="countryImage">
                        <h1 class="country">${item.name.common}</h1>
                        <p class="population"><b>Population</b> : <span>${item.population}</span></p>
                        <p class="region"><b>Region</b> : <span>${item.region}</span></p>
                        <p class="capital"><b>Capital</b> : <span>${item.capital}</span></p>
                    </div>`;
        })
        document.querySelector(".cards").innerHTML = card;
    })
    .catch(error=>{
        console.error(error)
    })
    console.log(searchValue);
}
else{
    if(searchValue == ""){
        console.log("fetch all");
        loadAllCountry();
    }
}
}
document.querySelector("#searchCountry").addEventListener("keyup",searchCountry);

// mode functionality
let night = document.querySelector("#darkMode");
let light = document.querySelector("#lightMode");
let wholeDoc = document.querySelector(".container");
let selectDropdown = document.querySelector("#dropdown")
let inputText = document.querySelector("#searchCountry")
let navigation = document.querySelector("top")

// night mode
function nightMode(){
    night.style.cursor="pointer"
    light.style.display="block"
    night.style.display="none"
    wholeDoc.style.backgroundColor="hsl(207, 26%, 17%)"
    wholeDoc.style.color="hsl(0, 0%, 100%)"
    selectDropdown.style.backgroundColor="hsl(207, 26%, 17%)"
    selectDropdown.style.color="hsl(0, 0%, 100%)"
    inputText.style.backgroundColor="hsl(207, 26%, 17%)"
    inputText.style.color="hsl(0, 0%, 100%)"
    navigation.style.borderBottom="none"

}
night.addEventListener("click",nightMode)

// light mode
function lightMode(){
    light.style.cursor="pointer"
    light.style.display="none"
    night.style.display="block"
   wholeDoc.style.backgroundColor="hsl(0, 0%, 98%)"
   wholeDoc.style.color="black"
   selectDropdown.style.backgroundColor="white"
   selectDropdown.style.color="black"
   inputText.style.backgroundColor="white"
   inputText.style.color="black"
   navigation.style.borderBottom="lightgrey"

}
light.addEventListener("click",lightMode)



















