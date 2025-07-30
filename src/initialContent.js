export {loadInitialContent, removeInitialContent};

import restaurantImage from "./img/restaurant-image.jpg";

function loadInitialContent () {
    const content = document.getElementById("content");

    const restaurantName = document.createElement("h1");
    const restaurantImg = document.createElement("img");
    const restaurantMotto = document.createElement("p");

    restaurantName.textContent = "Franccesco's Ristoranti";
    restaurantImg.src = restaurantImage;
    restaurantMotto.textContent = "The best pasta in tutto il mondo";

    content.appendChild(restaurantName);
    content.appendChild(restaurantImg);
    content.appendChild(restaurantMotto);
}

function removeInitialContent () {
    const content = document.getElementById("content");

    for (let i = 0 ; i < content.children.length ; i++) {
        content.remove(content.children[i]);
    }
}