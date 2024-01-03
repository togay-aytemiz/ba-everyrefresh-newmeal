const mealContainer = document.querySelector(".meal-container");
const imgContainer = document.querySelector(".img-container");

let url = "https://www.themealdb.com/api/json/v1/1/random.php";

const showMeal = function (data) {
  const htmlMeal = `
    <div class="general-info">
      <img src="${data.strMealThumb}" class="mainImage"/>
      <h2>${data.strMeal}</h2>
      <h4>${data.strCategory} | ${data.strArea}</h4>
    </div>
    <div class="meal-desc">
      <p>${data.strInstructions}</p>
      <a href="${data.strYoutube}">Watch video of this recipe</a>
    </div>
    <hr />
  `;

  mealContainer.insertAdjacentHTML("beforeend", htmlMeal);

  let ingName1 = data.strIngredient1;
  ingName1 = ingName1.split(" ").join("%20");

  let ingName2 = data.strIngredient2;
  ingName2 = ingName2.split(" ").join("%20");

  let ingName3 = data.strIngredient3;
  ingName3 = ingName3.split(" ").join("%20");

  let ingName4 = data.strIngredient4;
  ingName4 = ingName4.split(" ").join("%20");

  let ingName5 = data.strIngredient5;
  ingName5 = ingName5.split(" ").join("%20");

  let ingName6 = data.strIngredient6;
  ingName6 = ingName6.split(" ").join("%20");

  let ingName7 = data.strIngredient7;
  ingName7 = ingName7.split(" ").join("%20");

  const htmlImage = `
    <img src="https://www.themealdb.com/images/ingredients/${ingName1}.png" />
    <img src="https://www.themealdb.com/images/ingredients/${ingName2}.png" />
    <img src="https://www.themealdb.com/images/ingredients/${ingName3}.png" />
    <img src="https://www.themealdb.com/images/ingredients/${ingName4}.png" />
    <img src="https://www.themealdb.com/images/ingredients/${ingName5}.png" />
    <img src="https://www.themealdb.com/images/ingredients/${ingName6}.png" />
    <img src="https://www.themealdb.com/images/ingredients/${ingName7}.png" />

  `;

  imgContainer.insertAdjacentHTML("beforeend", htmlImage);
};

// function for getting JSON and sending error if needed
const getJSON = function (url, errorMessage = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} ${response.status}`);
    return response.json();
  });
};

const getMealData = function () {
  getJSON(url)
    .then((data) => {
      const meal = data.meals[0];
      console.log(meal);
      showMeal(meal);
    })
    .catch((err) => console.log(err));
};

getMealData();
