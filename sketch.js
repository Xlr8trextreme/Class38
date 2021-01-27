var database;
var gameState=0,playerCount;
var game,form,player;
var allPlayers;
var car1,car2,car3,car4, cars;

function preload(){

}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database();
   console.log("im here 1")
    game= new Game();
    game.getState();
    game.start();
    //. ref() - refers to a node in db
    // .on()= listens to a node .ref is refering to
    // .update()- updates the node .ref is referring to
    // .set() - set the value .ref is referring to
    // .remove() - to remove the node  .ref is referring to
    
}

function draw(){
   
    if(playerCount===4){
        game.update(1);// gamestate updated to play
    }

    if(gameState===1){
        clear();
        game.play(); //if gamestate is play we are calling play
    }
}