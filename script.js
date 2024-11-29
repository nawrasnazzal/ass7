const jsonData = {
    "recipes": [
        {
            "title": "Best Pizza Dough Ever",
            "image_url": "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
        },
        {
            "title": "Deep Dish Fruit Pizza",
            "image_url": "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg"
        },
        {
            "title": "Pizza Dip",
            "image_url": "http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg"
        },
        {
            "title": "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
            "image_url": "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg"
        },
        {
            "title": "Pizza Quesadillas (aka Pizzadillas)",
            "image_url": "http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg"
        }
    ]
};

function displayRecipes(recipes) {
    const container = document.getElementById("recipes-container");
    container.innerHTML = ""; 
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");
        recipeDiv.innerHTML = `
            <img src="${recipe.image_url}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
        `;
        container.appendChild(recipeDiv);
    });
}displayRecipes(jsonData.recipes);