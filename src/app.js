const mainPage = document.getElementById("mainPage");
const startButton = document.getElementById("start");

const divMenu =
  '<div><h2>Ingrese los nombres de los usuarios:</h2><label>Jugador 1:</label><input type="text" id="jugador1" /><label>Jugador 2:</label><input type="text" id="jugador2" /><label>Jugador 3:</label><input type="text" id="jugador3" /><label>Jugador 4:</label><input type="text" id="jugador4" /></div>';

function initialize() {
  mainPage.innerHTML = divMenu;
  startButton.style.display = "none"; // Hide the start button after initialization
}

window.onload = function() {
  startButton.style.display = "block"; // Show the start button on page load
};

startButton.addEventListener("click", initialize);
