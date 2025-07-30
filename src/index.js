import "./style.css";

import { loadInitialContent, removeContent } from "./initialContent.js";
import { loadMenuContent } from "./menuContent.js";
import { loadAboutContent } from "./aboutContent.js";

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

loadInitialContent();

homeBtn.addEventListener("click", () => {
    removeContent();
    loadInitialContent();
});

menuBtn.addEventListener("click", () => {
    removeContent();
    loadMenuContent();
});

aboutBtn.addEventListener("click", () => {
    removeContent();
    loadAboutContent();
});

console.log("Webpack is Functioning");