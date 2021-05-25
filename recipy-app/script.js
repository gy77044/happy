const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');


let searchQuery='';


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI(){
    const baseURL=`https://api.edamam.com/search?api_id=5ae5bd96&api_key=5463e956cbb4344f4489a6c926924320&q=searchQuery`;
   
    const response= await fetch(baseURL);
    const data= await response.json();
    generate(data.hits);
    console.log(data);
}
function generateHTML(results){
    container.classList.remove('initial');
    let generatedHTML ='';
    results.map(result => {
        generatedHTML += 
        `
        <div class="item">
        <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="tittle">${result.recipe.label}</h1>
                <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
                </div>
                <p class="item-data"> Calories: ${result.recipe.calories.tofixed(2)}</p>
                <p class="item-data"> Diet label: ${result.recipe.dietLabels.length>0 ? result.recipe.dietLabels : 'No Data Found'}</p>
                <p class="item-data"> Health Label: ${result.recipe.healthLabels}</p>
        </div>
        
        `

    })
    searchResultDiv.innerHTML= generatedHTML;
}