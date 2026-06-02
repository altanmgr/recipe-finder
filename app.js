const hardcodedRecipes = [
  {
    idMeal: "2",
    strMeal: "Keema Noodles",
    strCategory: "chicken",
    strMealThumb:
      "https://www.recipetineats.com/tachyon/2024/08/Hokkien-noodles-with-chicken_2.jpg?resize=1200%2C1500&zoom=0.86",
  },
  {
    idMeal: "3",
    strMeal: "Laphing",
    strCategory: "chicken",
    strMealThumb:
      "https://www.recipetineats.com/tachyon/2024/08/Hokkien-noodles-with-chicken_2.jpg?resize=1200%2C1500&zoom=0.86",
  },
];

const resultsSection = document.getElementById("results-section");
const resultsCount = document.getElementById("results-count");
const resultsGrid = document.getElementById("results-grid");

function createRecipeCard(recipe) {
  return `
  <div class="recipe-card">
  <img
    src="${recipe.strMealThumb}"
    alt="${recipe.strMeal}"
    class="card-photo"
  />

  <div class="card-body">
    <div class="card-name">${recipe.strMeal}</div>
    <div class="card-category">${recipe.strCategory}</div>
    <div class="card-footer">
      <button
        class="btn-save"
        onclick="
          saveRecipe(
            '${recipe.idMeal}',
            '${recipe.strMeal}',
            '${recipe.strCategory}',
            '${recipe.strMealThumb}',
          )
        "
      >
        Save Recipe
      </button>
    </div>
  </div>
</div>

  `;
}

function showResults(recipes) {
  resultsSection.style.display = "block";
  resultsCount.textContent = `${recipes.length} recipes found`;

  let html = "";
  for (let recipe of recipes) {
    html += createRecipeCard(recipe);
  }
  resultsGrid.innerHTML = html;
}
// showResults(hardcodedRecipes);

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchError = document.getElementById("search-error");

const searchRecipes = async (query) => {
  const trimmed = query.trim();
  if (trimmed === "") {
    searchError.textContent = "please type something to search for";
    searchError.style.display = "block";
    return;
  }

  searchError.style.display = "none";
  searchBtn.textContent = "searching...";

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${trimmed}`,
    );

    const data = await response.json();
    searchBtn.textContent = "find recipes";
    if (!data.meals) {
      searchError.textContent = `No recipe found for "${trimmed}". try something else`;
      searchError.style.display = "block";
      resultsSection.style.display = "none";
    }
    showResults(data.meals);
  } catch (error) {
    searchBtn.textContent = "find recipes";
    searchError.textContent = "please check your internet connection";
    searchError.style.display = "block";
    console.error(error);
  }
};

searchBtn.addEventListener("click", () => {
  searchRecipes(searchInput.value);
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchRecipes(searchInput.value);
  }
});