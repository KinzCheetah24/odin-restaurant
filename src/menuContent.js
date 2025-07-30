export {loadMenuContent};

import firstMealImg from "./img/pasta-fromaggi.jpg";
import secondMealImg from "./img/lasagna.jpg";
import thirdMealImg from "./img/risotto.jpg";

function loadMenuContent () {
    const content = document.getElementById("content");

    const menuTitle = document.createElement("h1");
    const menuPickUpLine = document.createElement("p");
    const menuMealsDiv = document.createElement("div");

    menuTitle.textContent = "The best meals of Italy";
    menuPickUpLine.textContent = "Take a look, take a bite!";

    const firstMeal = document.createElement("div");
    const firstMealPicture = document.createElement("img");
    const firstMealName = document.createElement("p");

    firstMealPicture.src = firstMealImg;
    firstMealName.textContent = "Pasta Fromaggi";

    firstMeal.appendChild(firstMealName);
    firstMeal.appendChild(firstMealPicture);

    const secondMeal = document.createElement("div");
    const secondMealPicture = document.createElement("img");
    const secondMealName = document.createElement("p");

    secondMealPicture.src = secondMealImg;
    secondMealName.textContent = "Lasagna";

    secondMeal.appendChild(secondMealName);
    secondMeal.appendChild(secondMealPicture);

    const thirdMeal = document.createElement("div");
    const thirdMealPicture = document.createElement("img");
    const thirdMealName = document.createElement("p");

    thirdMealPicture.src = thirdMealImg;
    thirdMealName.textContent = "Risotto";

    thirdMeal.appendChild(thirdMealName);
    thirdMeal.appendChild(thirdMealPicture);

    menuMealsDiv.appendChild(firstMeal);
    menuMealsDiv.appendChild(secondMeal);
    menuMealsDiv.appendChild(thirdMeal);

    content.appendChild(menuTitle);
    content.appendChild(menuPickUpLine);
    content.appendChild(menuMealsDiv);
}