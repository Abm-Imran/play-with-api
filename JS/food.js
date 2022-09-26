

const toggleSpinner = spinnerStyle => {
  document.getElementById('spinner').style.display = spinnerStyle;
}
const toggleDisplayMeal = spinnerStyle => {
  document.getElementById('search-result').style.display = spinnerStyle;
}

const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  // console.log(searchText);

  if (searchField.value == '') {
    // console.log('Please Type Your Fav Food')
    document.getElementById('notFound').style.display = 'block';
  }
  else {
    toggleDisplayMeal('none')
    document.getElementById('single-meal').style.display = 'none';
    document.getElementById('notFound').style.display = 'none';
    document.getElementById('wrong-search').style.display = 'none';
    toggleSpinner('block');
    // searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
      .then(res => res.json())
      .then(data => searchFoodResult(data.meals))
  }

}

const searchFoodResult = meals => {
  console.log(meals);
  console.log(meals);
  const foodBox = document.getElementById('search-result');
  foodBox.textContent = '';

  if (meals == null) {
    const searchField = document.getElementById('search-field');
    console.log('No result found for', searchField.value);
    const div = document.getElementById('wrong-search');
    div.style.display = 'block';
    div.innerHTML = `
      <h3 class="text-center mt-4"> Oppps.. No result found for <span class="text-danger"> ${searchField.value} </span>Search again </h3>
      
      `
    searchField.value = '';

  }
  else {
    const div = document.getElementById('wrong-search');
    div.style.display = 'none';
    meals.forEach(meal => {
      // console.log(meal);
      const searchField = document.getElementById('search-field');
      searchField.value = '';
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

  toggleSpinner('none');
  toggleDisplayMeal('block');

}

const loadMealDetails = mealId => {
  // console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displaySingleMealDetails(data.meals[0]))

}

const displaySingleMealDetails = meal => {
  document.getElementById('single-meal').style.display = 'block';
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
              <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
              <a href="${meal.strYoutube}" class="btn btn-primary d-block w-50 text-warning mx-auto">Recipe link</a>
            </div>
    `
  mealBox.appendChild(div);

}