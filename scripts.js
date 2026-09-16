const title = document.getElementById("main-title");
const button = document.getElementById("action-btn");

function toggleHighlight() {
  title.classList.toggle("highlight");
  console.log("Стан заголовка змінено");
}

function initApp() {
  console.log("Додаток ініціалізовано. Привіт з scripts.js!");
  button.addEventListener("click", toggleHighlight);
}

initApp();
