export {loadAboutContent};

function loadAboutContent () {
    const content = document.getElementById("content");

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "Contact Us!";

    const phone = document.createElement("p");
    phone.textContent = "Phone: +34 987 654 321";

    const email = document.createElement("p");
    email.textContent = "Email: info@italianrestaurant.com";

    const location = document.createElement("p");
    location.textContent = "Where we are: Gran Vía, Madrid (Spain)";

    content.appendChild(aboutTitle);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(location);
}