const startButton = document.getElementById("startButton");

const titleScreen = document.getElementById("titleScreen");

const gameScreen = document.getElementById("gameScreen");

const message = document.getElementById("messageBox");

startButton.onclick = function(){

titleScreen.classList.add("hidden");

gameScreen.classList.remove("hidden");

}

function inspectDesk(){

message.innerHTML="You search the dusty desk and find an old key.";

}

function inspectCell(){

message.innerHTML="Cell 7 is stained with dried blood. The words 'HE NEVER LEFT' are scratched into the wall.";

}

function inspectDoor(){

message.innerHTML="The heavy iron door won't budge.";

}
