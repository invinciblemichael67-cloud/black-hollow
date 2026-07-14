// BLACK HOLLOW GAME LOGIC


const startButton = document.getElementById("startButton");

const titleScreen = document.getElementById("titleScreen");

const gameScreen = document.getElementById("gameScreen");

const speaker = document.getElementById("speaker");

const dialogue = document.getElementById("dialogue");

const items = document.getElementById("items");

const clues = document.getElementById("clues");



let inventory = [];

let evidence = [];



// START GAME

startButton.onclick = function(){

    titleScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");


    speaker.innerHTML = "Sheriff Crowe";


    dialogue.innerHTML =

    `
    "You're the detective they sent?"

    <br><br>

    Judge Theodore Graves was found inside Cell 7.

    <br><br>

    Nobody entered.

    Nobody left.

    <br><br>

    Find the truth hidden inside Black Hollow Jail.
    `;

};




// INVENTORY

function addItem(item){

    if(!inventory.includes(item)){

        inventory.push(item);

        items.innerHTML =
        inventory.join("<br>");

    }

}



// CLUES

function addClue(clue){

    if(!evidence.includes(clue)){

        evidence.push(clue);

        clues.innerHTML =
        evidence.map(x => `<li>✓ ${x}</li>`).join("");

    }

}




// OBJECTS


function inspectDesk(){

speaker.innerHTML="Old Desk";

dialogue.innerHTML=

`
You search the desk.

<br><br>

Inside the drawer you find a rusty key.

`;

addItem("🔑 Rusty Cell Key");

addClue("A key labeled Cell 7 was found.");

}




function inspectCell(){

speaker.innerHTML="Cell 7";

dialogue.innerHTML=

`
The cell walls are scratched.

<br><br>

Someone carved:

<br><br>

<b>HE NEVER LEFT</b>

`;

addClue("A mysterious message was found.");

}




function inspectLantern(){

speaker.innerHTML="Lantern";

dialogue.innerHTML=

`
The flame flickers.

<br><br>

For a moment...

a shadow moves behind you.

`;

addClue("A strange shadow appeared.");

}




function inspectDoor(){

speaker.innerHTML="Jail Door";


if(inventory.includes("🔑 Rusty Cell Key")){


dialogue.innerHTML=

`
The key turns.

<br><br>

The door slowly opens...
`;

addClue("Cell 7 has been unlocked.");


}

else{


dialogue.innerHTML=

`
The door is locked.

<br><br>

You need a key.

`;

}

}
