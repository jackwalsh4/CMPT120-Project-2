//DECLARATION OF VARIABLES
var playerName = "";
var score = 0;
var NOLOC = -1;
var NORTH1 = 1;
var NORTH2 = 2;
var EAST1 = 3;
var SOUTH1 = 4;
var SOUTH2 = 5;
var SOUTH3 = 6;
var WEST1 = 7;
var WEST2 = 8;
var WEST3 = 9;
var START = 0;
var NORTH = 0;
var SOUTH = 1;
var EAST = 2;
var WEST = 3;
var neverNeg1 = START;
var loc = START;
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
var moveCount = 0;
var stickSTR = "";
var swordSTR = "";
var lockSTR = "";
var glassesSTR = "";
playerName = prompt("What is your name?");
//ALERT THE SCORE TO A PLAYER
function alertScore() {
	alert("Your Score is " + score);
}
//Primary Directional Function
//MAIN STARTING POINT 
function startingPoint(){
	loc = START;
	if(startFirst === false){
		replaceText("Hello, " + playerName + ", Welcome to the Maze of Mystery!");
		startFirst = true;
	}
	else{
		replaceText("You are back to where you started!");
	}
	showBtn("NORTH");
	showBtn("SOUTH");
	showBtn("EAST");
	showBtn("WEST");			
}
var invenArray = new Array();
var nav = [ 
			 //        0      1     2     3
			 //      North  South  East  West 
			 /* 0 */[NORTH1,SOUTH1,EAST1,WEST1],
		     /* 1 */[NORTH2,START ,NOLOC,NOLOC],
			 /* 2 */[NOLOC ,NORTH1,NOLOC,NOLOC], 
			 /* 3 */[NOLOC ,NOLOC ,NOLOC,START],
			 /* 4 */[START ,SOUTH2,NOLOC,NOLOC],
		     /* 5 */[SOUTH1,SOUTH3,NOLOC,NOLOC],
			 /* 6 */[SOUTH2,NOLOC ,NOLOC,NOLOC], 
			 /* 7 */[NOLOC ,NOLOC ,START,WEST2],
			 /* 8 */[NOLOC ,NOLOC ,WEST1,WEST3],
		     /* 9 */[NOLOC ,NOLOC ,WEST2,NOLOC],
]
function displayArray(array2Display) {
	for(var i = 0; i < array2Display.length; i++){
		updateText(i + ";" + array2Display[i]);
	}
}
function move(direction) {
	moveCount = moveCount + 1;
	neverNeg1 = loc;
	var newLoc = nav[loc][direction];
	loc = newLoc;
	displayCurrentLoc();
	if(loc === -1){
		loc = neverNeg1;
	} 
}

function displayCurrentLoc(){
	switch(loc){
		case START : startingPoint(); break;
		case NORTH1 : North1(); break;
		case NORTH2 : North2(); break;
		case EAST1 : East1(); break;
		case SOUTH1 : South1(); break;
		case SOUTH2 : South2(); break;
		case SOUTH3 : South3(); break;
		case WEST1 : West1(); break;
		case WEST2 : West2(); break;
		case WEST3 : West3(); break;
		default : noLocation();
	}
}
function noLocation(){
	updateText("You cannot go that way.");
}
//FUNCTION FOR EACH LOCATION ON MAP
function North1(){
	if(north1First === false){
		score += 5;
	}
	north1First = true;
	replaceText("You walk along a narrow passage that seems to never end.");
	showBtn("SOUTH");
	hideBtn("EAST");
	hideBtn("WEST");
	showBtn("NORTH");
}
function North2(){
	if(north2First === false){
		score += 5;
		swordSTR = "able";
		replaceText("Oh No! A dead end! But wait... there is a sword lying on the ground.");
	}
	else{
		replaceText("Oh No! A dead end!");
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
		lockSTR = "able";
	}
	else{
		lockSTR = "unable";
	}
	south1First = true;
	replaceText("You stumble upon a bag.  Inside are some lock picks.");
	showBtn("SOUTH");
	hideBtn("EAST");
	hideBtn("WEST");
	showBtn("NORTH");
}
function South2(){
	if(south2First === false){
		score += 5;
	}
	if(south2First === false){
		replaceText("You trip on an overgrown tree root and cut your face!");
	}
	else{
		replaceText("You walk through the roots where you fell.");
	}
	south2First = true;
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
	replaceText("You are in front of a giant monster!  Your only choice is to turn back!");
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
	replaceText("Careful!  You almost walked off a cliff!");
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
		replaceText("There are several large branches scattered on the ground.");
		stickSTR = "able";
	}
	else{
		replaceText("You walk through a wooded area");
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
		glassesSTR = "able";
	}
	else{
		glassesSTR = "unable";
	}
	west2First = true;
	replaceText("As you take a step u just miss a pair of glasses!");
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
	replaceText("You are faced with a swirling blue portal, nearly blinding you!");
	hideBtn("SOUTH");
	showBtn("EAST");
	hideBtn("WEST");
	hideBtn("NORTH");
}
//UPDATE THE TEXT IN THE TEXT AREA
function replaceText(msg) {
	var wel = document.getElementById("welcome");
	wel.value = msg;
}
function updateText(msg) {
	var wel = document.getElementById("welcome");
	wel.value = msg + "\n" + wel.value;
}
function readText() {
   var strInput = "";
   var userInput = document.getElementById("txtCommand");     
   strInput = userInput.value.toUpperCase();
   if (strInput === "N" || strInput === "NORTH"){
	  move(NORTH);                
   }else if (strInput === "E" || strInput === "EAST"){ 
	  move(EAST);
   }else if (strInput === "S" || strInput === "SOUTH"){
	  move(SOUTH);
   }else if (strInput === "W" || strInput === "WEST"){ 
	  move(WEST);                       
   }else{
	replaceText ("Valid commands are \"North\", \"West\", \"East\", or \"South\"");                   
  }
}
function help(){
	replaceText("Valid commands are \"North\", \"West\", \"East\", or \"South\"" +
				"\nThis game was created for your enjoyment by John Walsh"); 
}

function proto_item(_id, _name, _description) {
  		
  		this.id      		= _id;
   		this.name     		= _name;
   		this.description   	= _description;
   		
	   this.toString = function() {
	      var retVal = "";
	      retVal = "[Item]"                 	        + "\n" + 
	               "Id: " + this.id           		    + "\n" +
	               "Name: " + this.name       		    + "\n" +
	               "Description: " + this.description    + "\n";
	      return retVal;
  		}   
}
function showInven() {
	replaceText(invenArray);
}

function take(){
	item_Sword		= new proto_item(0, "Sword", "A very large broad sword that weighs a ton.");
	item_bigStick   = new proto_item(1, "Big Stick", "A large strong stick.");
	item_lockPicks 	= new proto_item(2, "Lock Picks", "Silver Lock Picks.  Could come in handy!");
	item_Glasses 	= new proto_item(3, "Glasses", "Glasses that look to be normal.  But not when u wear them!");
	
	switch (loc) {
		case NORTH2: 
			if(swordSTR === "able"){
				invenArray[0] = item_Sword
				replaceText ("You have picked up a sword.")	
					break;
			}
		case WEST1:
			if(stickSTR === "able"){
				invenArray[3] = item_bigStick
				replaceText ("You have picked up a big stick.")
			}
					break;
		case SOUTH1:
			if(lockSTR === "able"){
				invenArray[2] = item_lockPicks
				replaceText ("You have picked up lock picks.")
					break;
			}
		case WEST2:
			if(glassesSTR === "able"){
				invenArray[1] = item_Glasses
				replaceText ("You have picked up Glasses.")
					break;
			}
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