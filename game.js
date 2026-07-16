console.log("GAME.JS IS LOADING");
alert("GAME.JS LOADED");
// ==============================
// BLACK HOLLOW V1
// ==============================

// Screens
const titleScreen = document.getElementById("titleScreen");
const gameScreen = document.getElementById("gameScreen");

// Button
const startButton = document.getElementById("startButton");

// Dialogue
const speaker = document.getElementById("speaker");
const dialogue = document.getElementById("dialogue");

// Notebook
const notes = document.getElementById("notes");

// Hotspots
const deskSpot = document.getElementById("deskSpot");
const cellSpot = document.getElementById("cellSpot");
const doorSpot = document.getElementById("doorSpot");
const windowSpot = document.getElementById("windowSpot");

// ==============================
// START GAME
// ==============================

startButton.addEventListener("click", () => {

    alert("Button works!");

    titleScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

});

    speaker.textContent = "Sheriff Crowe";

    dialogue.textContent =
        "Welcome to Black Hollow Jail, Detective. Judge Theodore Graves was found dead inside Cell 7. Search the room carefully.";

});

// ==============================
// HOTSPOTS
// ==============================

deskSpot.addEventListener("click", () => {

    speaker.textContent = "Desk";

    dialogue.textContent =
        "The Sheriff's desk is covered in old reports. One drawer appears to be locked.";

});

cellSpot.addEventListener("click", () => {

    speaker.textContent = "Cell 7";

    dialogue.textContent =
        "The victim was discovered here. Something about the scratches on the wall seems unusual.";

});

doorSpot.addEventListener("click", () => {

    speaker.textContent = "Front Door";

    dialogue.textContent =
        "The heavy jail door is locked from the inside.";

});

windowSpot.addEventListener("click", () => {

    speaker.textContent = "Window";

    dialogue.textContent =
        "Rain pours outside. You notice faint muddy footprints beneath the window.";

});
