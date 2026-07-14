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
    The jail door creaks open.

    Cold air rushes through the hallway.

    Sheriff Crowe looks at you.

    "Cell 7 is where it happened..."
    `;


};




// ADD ITEM FUNCTION


function addItem(item){

    if(!inventory.includes(item)){

        inventory.push(item);

        items.innerHTML =
        inventory.join("<br>");

    }

}



// ADD CLUE FUNCTION


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
You search the old sheriff's desk.

Inside the drawer you find a rusty key.

The tag reads:

"Cell 7"

`;



addItem("Rusty Cell Key");


addClue("A key labeled Cell 7 was found.");



}




// CELL


function inspectCell(){


messageBox.innerHTML =

`
You approach Cell 7.

The bars are covered in scratches.

On the wall someone carved:

<br><br>

<b>"HE NEVER LEFT."</b>

<br><br>

Something is hidden beneath the old blanket...

`;



addClue("Message found inside Cell 7.");



}




// LANTERN


function inspectLantern(){


messageBox.innerHTML =

`
You lift the lantern.

The flame flickers.

For a moment...

you see a shadow standing behind you.

You turn around.

Nobody is there.

`;



addClue("A strange shadow appeared near the lantern.");



}



// DOOR


function inspectDoor(){


if(inventory.includes("Rusty Cell Key")){


messageBox.innerHTML =

`
The rusty key fits.

The lock clicks open.

The next part of the jail awaits...

`;

addClue("Cell 7 has been unlocked.");



}

else{


messageBox.innerHTML =

`
The iron door will not open.

A keyhole stares back at you.

`;

}


}



// RANDOM LIGHTNING EFFECT


setInterval(()=>{


if(!gameScreen.classList.contains("hidden")){


document.body.style.filter="brightness(1.8)";


setTimeout(()=>{

document.body.style.filter="brightness(1)";


},120);


}


},15000);
