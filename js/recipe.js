import {  BASE_URL } from './info.js';

let recipeID = new URLSearchParams(window.location.search);
recipeID = recipeID.get('id');

fetch(`${BASE_URL}/lookup.php?i=${recipeID}`)
.then(response => response.json())
.then(data => {
    data = data.meals[0];
    document.querySelector('h2').innerText = data.strMeal;
    
    const picture = document.querySelector('#picture_meal');
    picture.src = data.strMealThumb;
    picture.alt = data.strMeal;

    document.querySelector('#description').innerText = data.strInstructions;

    const ingredients = document.createDocumentFragment();
    for (let index = 0; index < 20; index++) {
        const ingredientText = data[`strIngredient${index + 1}`]; 
        // Fix the condition - check if ingredient exists
        if (ingredientText === '' || ingredientText === null || ingredientText === undefined) {
            continue; // Skip empty ingredients instead of breaking
        }

        const ingredient = document.createElement('li');
        const measure = data[`strMeasure${index + 1}`] || '';
        ingredient.innerText = `${ingredientText}${measure ? ', ' + measure : ''}`;

        ingredients.append(ingredient);
    }
    document.querySelector('#ingredients').append(ingredients);
})
.catch(error => console.log(error));