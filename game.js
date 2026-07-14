// BLACK HOLLOW: THE GALLOWS MYSTERY
// Main Game Logic


const startButton = document.getElementById("startButton");

const titleScreen = document.getElementById("titleScreen");

const gameScreen = document.getElementById("gameScreen");

const messageBox = document.getElementById("messageBox");

const items = document.getElementById("items");

const clues = document.getElementById("clues");


let inventory = [];

let discoveredClues = [];



// START GAME

startButton.onclick = function(){

    titleScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");


    messageBox.innerHTML =

    `
    <div id="speaker">
    Sheriff Crowe
    </div>

    <div id="dialogue">

    "You're the detective they sent?"

    <br><br>

    The sheriff adjusts his coat.

    <br><br>

    "Judge Graves was found inside Cell 7."

    <br><br>

    "Nobody entered. Nobody left."

    <br><br>

    "Find the truth... before Black Hollow buries it forever."

    </div>
    `;

};



// ADD ITEM

function addItem(item){

    if(!inventory.includes(item)){

        inventory.push(item);

        items.innerHTML =
        inventory.join("<br>");

    }

}



// ADD CLUE

function addClue(clue){

    if(!discoveredClues.includes(clue)){

        discoveredClues.push(clue);

        clues.innerHTML =
        discoveredClues
        .map(c => `<li>✓ ${c}</li>`)
        .join("");

    }

}



// DESK

function inspectDesk(){

    messageBox.innerHTML =

    `
    <div id="speaker">
    Investigation
    </div>

    You search the old sheriff's desk.

    <br><br>

    Inside you find a rusty key.

    The tag reads:

    <b>Cell 7</b>
    `;


    addItem("Rusty Cell Key");

    addClue("A key labeled Cell 7 was discovered.");

}



// CELL

function inspectCell(){

    messageBox.innerHTML =

    `
    <div id="speaker">
    Cell 7
    </div>

    The bars are covered in scratches.

    <br><br>

    Someone carved:

    <br><br>

    <b>"HE NEVER LEFT"</b>

    `;


    addClue("A strange message was found in Cell 7.");

}



// LANTERN

function inspectLantern(){

    messageBox.innerHTML =

    `
    <div id="speaker">
    Lantern
    </div>

    The flame flickers.

    <br><br>

    For a moment, a shadow appears behind you...

    <br><br>

    Then it disappears.

    `;


    addClue("A mysterious shadow appeared near the lantern.");

}



// DOOR

function inspectDoor(){

    if(inventory.includes("Rusty Cell Key")){


        messageBox.innerHTML =

        `
        <div id="speaker">
        Locked Door
        </div>

        The rusty key turns.

        <br><br>

        The door slowly opens...

        `;


        addClue("The Cell 7 door has been unlocked.");


    }

    else{


        messageBox.innerHTML =

        `
        <div id="speaker">
        Locked Door
        </div>

        The iron door will not open.

        <br><br>

        A keyhole is visible.

        `;

    }

}
