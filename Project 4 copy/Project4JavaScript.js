//DECLARATION OF VARIABLES
var playerName = "";
var score = 0;
var north1First = false;
var north2First = false;
var south1First = false;
var south2First = false;
var south3First = false;
var east1First = false;
var west1First = false;
var west2First = false;
var west3First = false;
var startFirst = false;
var loc = "START";
var largeStick = false;
var stickSTR = "";
var sword = false;
var swordSTR = "";
playerName = prompt("What is your name?");
//ALERT THE SCORE TO A PLAYER
function alertScore() {
	alert("Your Score is " + score);
}
//Primary Directional Function
//MAIN STARTING POINT 
function startingPoint(){
	loc = "START";
	if(startFirst === false){
		updateText("Hello, " + playerName + ", Welcome to the Maze of Mystery!");
		startFirst = true;
	}
	else{
		updateText("You are back to where you started!");
	}
	showBtn("NORTH");
	showBtn("SOUTH");
	showBtn("EAST");
	showBtn("WEST");			
}
//CALLED WHEN NORTH IS THE DESIRED DIRECTION 
function north(){
	switch(loc){
		case "START": 
			loc = "NORTH1";
			North1();
				break;
		case "NORTH1":
			loc = "NORTH2";
			North2();
				break;
		case "SOUTH1":
			loc = "START";
			startingPoint();
				break;
		case "SOUTH2":
			loc = "SOUTH1";
			South1();
				break;
		case "SOUTH3":
			loc = "SOUTH2";
			South3();
				break;
		default:
			updateText("You cannot go North");
			
	}	
}
//CALLED WHEN SOUTH IS THE DESIRED DIRECTION
function south(){
	switch(loc){
		case "START":
			loc = "SOUTH1";
			South1();
				break;
		case "SOUTH1":
			loc = "SOUTH2";
			South2();
				break;
		case "SOUTH2":
			loc = "SOUTH3";
			South3();
				break;
		case "NORTH1":
			loc = "START";
			startingPoint();
				break;
		case "NORTH2":
			loc = "NORTH1";
			North1();
				break;
		default:
			updateText("You cannot go South");
	}
}//CALLED WHEN EAST IS THE DESIRED DIRECTION
function east(){
	switch(loc){
		case "START":
			loc = "EAST1";
			East1();
				break;
		case "WEST1":
			loc = "START";
			startingPoint();
				break;
		case "WEST2":
			loc = "WEST1";
			West1();
				break;
		case "WEST3":
			loc = "WEST2";
			West2();
				break;
		default:
			updateText("You cannot go East");
	}
}//CALLED WHEN WEST IS THE DESIRED DIRECTION
function west(){
	switch(loc){
		case "START":
			loc = "WEST1";
			West1();
				break;
		case "EAST1":
		loc = "START";
			startingPoint();
				break;
		case "WEST1":
			loc = "WEST2";
			West2();
				break;
		case "WEST2":
			loc = "WEST3";
			West3();
				break;
		default:
			updateText("You cannot go West");
	}
}
//FUNCTION FOR EACH LOCATION ON MAP
function North1(){
	if(north1First === false){
		score += 5;
	}
	north1First = true;
	updateText("You walk along a narrow passage that seems to never end.");
	showBtn("SOUTH");
	hideBtn("EAST");
	hideBtn("WEST");
	showBtn("NORTH");
}
function North2(){
	if(north2First === false){
		score += 5;
	}
	if(north2First === false){
		swordSTR = "able";
		updateText("Oh No! A dead end! But wait... there is a sword lying on the ground.");
	}
	else{
		updateText("Oh No! A dead end!");
		swordSTR = "unable";
	}
	north2First = true;
	showBtn("SOUTH");
	hideBtn("EAST");
	hideBtn("WEST");
	hideBtn("NORTH");
}
function South1(){
	if(south1First === false){
		score += 5;
	}
	south1First = true;
	updateText("You find yourself walking through a thick fog.");
	showBtn("SOUTH");
	hideBtn("EAST");
	hideBtn("WEST");
	showBtn("NORTH");
}
function South2(){
	if(south2First === false){
		score += 5;
	}
	south2First = true;
	updateText("You trip on an overgrown tree root and cut your face!");
	showBtn("SOUTH");
	hideBtn("EAST");
	hideBtn("WEST");
	showBtn("NORTH");
}
function South3(){
	if(south3First === false){
		score += 5;
	}
	south3First = true;
	updateText("You are in front of a giant monster!  Your only choice is to turn back!");
	hideBtn("SOUTH");
	hideBtn("EAST");
	hideBtn("WEST");
	showBtn("NORTH");
}
function East1(){
	if(east1First === false){
		score += 5;
	}
	east1First = true;
	updateText("Careful!  You almost walked off a cliff!");
	hideBtn("SOUTH");
	hideBtn("EAST");
	showBtn("WEST");
	hideBtn("NORTH");
}
function West1(){
	if(west1First === false){
		score += 5;
	}
	if(west1First === false){
		updateText("There are several large branches scattered on the ground.");
		stickSTR = "able";
	}
	else{
		updateText("You walk through a wooded area");
		stickSTR = "unable";
	}
	west1First = true;
	hideBtn("SOUTH");
	showBtn("EAST");
	showBtn("WEST");
	hideBtn("NORTH");
}
function West2(){
	if(west2First === false){
		score += 5;
	}
	west2First = true;
	updateText("You tread carefully as you begin hearing strange sounds!");
	hideBtn("SOUTH");
	showBtn("EAST");
	showBtn("WEST");
	hideBtn("NORTH");
}
function West3(){
	if(west3First === false){
		score += 5;
	}
	west3First = true;
	updateText("You are faced with a swirling blue portal, nearly blinding you!");
	hideBtn("SOUTH");
	showBtn("EAST");
	hideBtn("WEST");
	hideBtn("NORTH");
}
//UPDATE THE TEXT IN THE TEXT AREA
function updateText(msg) {
	var wel = document.getElementById("welcome");
	wel.value = msg;
}
function readText() {
   var strInput = "";
   var userInput = document.getElementById("txtCommand");     
   strInput = userInput.value.toUpperCase();
   if (strInput === "N" || strInput === "NORTH"){
	  north();                
   }else if (strInput === "E" || strInput === "EAST"){ 
	  east();
   }else if (strInput === "S" || strInput === "SOUTH"){
	  south();
   }else if (strInput === "W" || strInput === "WEST"){ 
	  west();                       
   }else{
	updateText ("Valid commands are \"North\", \"West\", \"East\", or \"South\"");                   
  }
}
function help(){
	updateText("Valid commands are \"North\", \"West\", \"East\", or \"South\"" +
				"\nThis game was created for your enjoyment by John Walsh"); 
}
function take(){
	if(loc === "NORTH2" && swordSTR === "able"){
		updateText("You have taken the sword!");
	}
	if(loc === "WEST1" && stickSTR === "able"){
		updateText("You have taken a Large Stick!");
	}
}
		
// CREATES FUNCTION TO HIDE AND SHOW BUTTONS
function hideBtn(btnName){
	if(btnName === "NORTH")
		document.getElementById("idNorth").style.visibility="hidden";
	else if(btnName === "SOUTH")
		document.getElementById("idSouth").style.visibility="hidden";
	else if(btnName === "EAST")
		document.getElementById("idEast").style.visibility="hidden";
	else if(btnName === "WEST")
		document.getElementById("idWest").style.visibility="hidden";
	}
function showBtn(btnName){
	if(btnName === "NORTH")
		document.getElementById("idNorth").style.visibility="visible";
	else if(btnName === "SOUTH")
		document.getElementById("idSouth").style.visibility="visible";
	else if(btnName === "EAST")
		document.getElementById("idEast").style.visibility="visible";
	else if(btnName === "WEST")
		document.getElementById("idWest").style.visibility="visible";
}