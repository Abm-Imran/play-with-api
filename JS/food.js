const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => searchFoodResult(data.meals))
}

const searchFoodResult = meals => {
    // console.log(meals);
    const foodBox = document.getElementById('search-result');
    foodBox.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetails('${meal.idMeal}')" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        `
        foodBox.appendChild(div);
    })

}

const loadMealDetails = mealId=>{
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = meal=>{
    console.log(meal);
    const mealBox = document.getElementById('single-meal');
    mealBox.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    // div.classList.add('h-25');
    div.innerHTML =
    `
    <img src="${meal.strMealThumb}" class="card-img-top " alt="...">
            <div class="card-body">
              <h5 class="card-title text-warning">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
              <a href="${meal.strYoutube}" class="btn btn-primary d-block w-50 text-warning mx-auto">Recipe link</a>
            </div>
    `
    mealBox.appendChild(div);

}