const hardcodedRecipes1 = [
  {
    idMeal: "1",
    strMeal: "Keema Noodles",
    strCategory: "chicken",
    strMealThumb:
      "https://i.pinimg.com/1200x/13/e9/41/13e941111d7cd1de0fde41f941187e88.jpg",
  },
];

const hardcodedRecipes2 = [
  {
    idMeal: "2",
    strMeal: "Egg drop soup",
    strCategory: "Eggs",
    strMealThumb:
      "https://i.pinimg.com/1200x/13/e9/41/13e941111d7cd1de0fde41f941187e88.jpg",
  },
];

const hardcodedRecipes3 = [
  {
    idMeal: "3",
    strMeal: "Mo:Mo",
    strCategory: "chicken",
    strMealThumb:
      "https://i.pinimg.com/1200x/13/e9/41/13e941111d7cd1de0fde41f941187e88.jpg",
  },
];

const hardcodedRecipes4 = [
  {
    idMeal: "4",
    strMeal: "Bara",
    strCategory: "lentils",
    strMealThumb:
      "https://i.pinimg.com/1200x/13/e9/41/13e941111d7cd1de0fde41f941187e88.jpg",
  },
];

const hardcodedRecipes5 = [
  {
    idMeal: "5",
    strMeal: "Roujiamo",
    strCategory: "chicken",
    strMealThumb:
      "https://i.pinimg.com/1200x/13/e9/41/13e941111d7cd1de0fde41f941187e88.jpg",
  },
];

const resultsSection = document.getElementById("results-section");
const resultCount = document.getElementById("results-count"); // fix: was "result-count", missing the "s"
const resultsGrid = document.getElementById("results-grid");

function createRecipe(recipe) {
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
            onclick="saveRecipe(
              '${recipe.idMeal}',
              '${recipe.strMeal}',
              '${recipe.strCategory}',
              '${recipe.strMealThumb}'
            )"
          >
            Save recipe
          </button>
        </div>
      </div>
    </div>
  `;
}

function showResults(recipes) {
  resultsSection.style.display = "block";
  resultCount.textContent = `${recipes.length} recipe(s) found`;

  let html = "";
  for (let recipe of recipes) {
    html += createRecipe(recipe);
  }
  resultsGrid.innerHTML = html;
}