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
var hasNote = false;
var hasBand = false;
var hasKey = false;
var hasGlasses = false;
var noteSTR = "";
var bandSTR = "";
var keySTR = "";
var glassesSTR = "";
var timeout = 0;
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
var locationArray = new Array();
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
//CREATE THE PROTOTYPE LOCATION
function proto_location(_id, _name, _description, _item) {
   	this.id      		= _id;
   	this.name     		= _name;
   	this.description   	= _description;
  	this.item       	= _item;
  		
   this.toString = function() {
      var retVal = "";
      retVal = 
               "Id: " + this.id           		    + "\n" +
               "Name: " + this.name       		    + "\n" +
               "Description: " + this.description    + "\n" +
               "Item: " + this.item       			+ "\n";
      return retVal;
   }   
}

function protoLocations() {
    //FILL LOCATION ARRAY WITH LOCATIONS
 	location0 = new proto_location("0", "Start", "You are back to where you started!", "None");
  	location1 = new proto_location("1", "North1", "You walk along a narrow passage that seems to never end.", "None");
  	location2 = new proto_location("2", "North2", "Oh No! A dead end! But wait... there is are unused band-aids lying on the ground.", "Band-Aids");
  	location3 = new proto_location("3", "East1", "You stumble upon a bag.  Inside are some lock picks.", "Key");
  	location4 = new proto_location("4", "South1", "You Approach a dense forest as fog begins to surround your feet.", "None");
  	location5 = new proto_location("5", "South2", "You trip on an overgrown tree root and cut your face!", "None");
  	location6 = new proto_location("6", "south3", "You are in front of a giant monster!  Before you run back, you see a note on the ground.", "Note");
  	location7 = new proto_location("7", "west7", "There are several large branches scattered on the ground.", "None");
  	location8 = new proto_location("8", "west8", "As you take a step u just miss a pair of glasses!", "Glasses");
  	location9 = new proto_location("9", "west9", "You are faced with a swirling blue portal, nearly blinding you!", "None");
  	locationArray[0] = location0;
  	locationArray[1] = location1;
  	locationArray[2] = location2;
  	locationArray[3] = location3;
  	locationArray[4] = location4;
  	locationArray[5] = location5;
  	locationArray[6] = location6;
  	locationArray[7] = location7;
  	locationArray[8] = location8;
  	locationArray[9] = location9;
}
function move(direction) {
	moveCount = moveCount + 1
	var newLoc = nav[loc][direction];
	if (newLoc !== -1) {
		loc = newLoc;
		eachLoc(loc)
		protoLocations();
		replaceText(locationArray[loc]);
	}
	else{ 
	replaceText("You cannot go this way!");
	}
}
function eachLoc(loc) {
	clearTimeout(timeout);
	switch (loc) {
		case 0: 	
		showBtn("SOUTH");
		showBtn("EAST");
		showBtn("WEST");
		showBtn("NORTH");
			break;
		case 1: if (north1First === false) {
			score += 5;
			north1First = true;
		}	
		showBtn("SOUTH");
		hideBtn("EAST");
		hideBtn("WEST");
		showBtn("NORTH");
			break;
		case 2: if (north2First === false) {
			score += 5;
			bandSTR = "able";
			north2First = true;
		}
		else{
			bandSTR = "unable";
		}
		showBtn("SOUTH");
		hideBtn("EAST");
		hideBtn("WEST");
		hideBtn("NORTH");
			break;
		case 3: if (east1First === false) {
			score += 5;
			keySTR = "able";
			east1First = true;
		}
		else{
			keySTR = "unable";
		}
		hideBtn("SOUTH");
		hideBtn("EAST");
		showBtn("WEST");
		hideBtn("NORTH");
			break;
		case 4: if (south1First === false) {
			score += 5;
			south1First = true;
		}	
		showBtn("SOUTH");
		hideBtn("EAST");
		hideBtn("WEST");
		showBtn("NORTH");
			break;
		case 5: if (south2First === false) {
			score += 5;
			south2First = true;
		}	
		showBtn("SOUTH");
		hideBtn("EAST");
		hideBtn("WEST");
		showBtn("NORTH");
			break;
		case 6: if (south3First === false) {
			score += 5;
			noteSTR = "able";
			south3First = true;
		}else{
			noteSTR = "unable";
		}
		hideBtn("SOUTH");
		hideBtn("EAST");
		hideBtn("WEST");
		showBtn("NORTH");
			break;
		case 7: if (west1First === false) {
			score += 5;
			west1First = true;
		}	
		hideBtn("SOUTH");
		showBtn("EAST");
		showBtn("WEST");
		hideBtn("NORTH");
			break;
		case 8: if (west2First === false) {
			score += 5;
			glassesSTR = "able";
			west2First = true;
		}else {
			glassesSTR = "unable";
		}
		hideBtn("SOUTH");
		showBtn("EAST");
		showBtn("WEST");
		hideBtn("NORTH");
			break;
		case 9: if (west3First === false) {
			score += 5;
			west3First = true;
		}	
		hideBtn("SOUTH");
		showBtn("EAST");
		hideBtn("WEST");
		hideBtn("NORTH");
			break;		
	}
}
function Win() {
	replaceText("Congratulations!  You have won!" + "\n" + "Thank you for playing!");
	hideBtn("SOUTH");
	hideBtn("EAST");
	hideBtn("WEST");
	hideBtn("NORTH");
	hideBtn("ACTION");
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
   }else if (strInput === "WEAR"){
   		Wear();
   }else{
		replaceText ("Valid commands are \"North\", \"West\", \"East\", or \"South\"");
	}         
}
function help(){
	replaceText("Valid commands are \"North\", \"West\", \"East\", or \"South\"" +
				"\nThis game was created for your enjoyment by John Walsh"); 
}
function Wear(){
	if(loc === 0 && hasGlasses === true){
		replaceText("These glasses are special!  Written on the wall are the words \"Patience is a Virtue.\"");
		timeout = setTimeout(function(){
		Win()
	},120000);
	}
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
	item_Band		= new proto_item(0, "Band-Aids", "An unopened box of band-aids.");
	item_Key        = new proto_item(1, "Key",   "A shiny golden key.");
	item_Note    	= new proto_item(2, "Note", "A torn note that reads: \"It ends, at the start.\"");
	item_Glasses 	= new proto_item(3, "Glasses", "Glasses that look to be normal. Type \"wear\" to use the glasses.");
	
	switch (loc) {
		case NORTH2: 
			if(bandSTR === "able") {
				invenArray[0] = item_Band
				hasBand = true;
				replaceText("You have picked up band-aids!.")	
			}else{
				alert(bandSTR);
				replaceText("You already have the band-aids!")
			}
					break;
		case EAST1:
			if(keySTR === "able"){
				invenArray[3] = item_Key
				hasKey = true;
				replaceText("You have picked up a Key.")
			}else{
				replaceText("You already have the key!");
			}
					break;
		case SOUTH3:
			if(noteSTR === "able"){
				invenArray[2] = item_Note
				hasNote = true;
				replaceText("You have picked up a note")
			}else {
				replaceText("You already have the note!")
			}
					break;
		case WEST2:
			if(glassesSTR === "able"){
				invenArray[1] = item_Glasses
				hasGlasses = true;
				replaceText("You have picked up Glasses.")
			}else {
				replaceText("You already have the Glasses.");
			}
					break;	
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
	else if(btnName === "ACTION")
		document.getElementById("idAction").style.visibility="hidden";
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