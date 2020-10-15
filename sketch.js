var canvas, bgimg;
var gameState = 0;
var playercount;
var database;
var form1, player1, game1;
var allplayers;
var cars,car1, car2, car3, car4;

function setup(){
    createCanvas(displayWidth-20, displayHeight-20);
    
    database = firebase.database();
    game1 =  new gameobject();
    game1.getState();
    game1.start();
}

function draw(){
    if(playercount == 4){
        game1.update(1);
    }
    if(gameState == 1){
        clear();
        game1.play();
    }
    
}