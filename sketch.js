var life_bar1,life_bar2,life_bar3,life1,life2;
var bomb1,bomb2,bg,tank1,tank2,tank1_img,tank2_img,bomb1_img,bomb2_img,tanks;
var playerCount=0,gameState=0,player,form,game,allPlayers,database,distance=0,
lives=5;


function preload(){
    life_bar1=loadImage("life_bar1.png")
    life_bar2=loadImage("life bar2.png")
    life_bar3=loadImage("life bar3.png")
    tank1_img=loadImage("tank1.png")
    tank2_img=loadImage("tank2.png")
    bg=loadImage("bg battlefield.jpg")
    bomb1_img=loadImage("bomb1.png")
    bomb2_img=loadImage("bomb2.png")

}




function setup(){
    
createCanvas(displayWidth-20,displayHeight-30)
database=firebase.database();

game=new Game();
game.getState();
game.start();

   
}


function draw(){

if(playerCount===2){
    game.update(1)
    }

if(gameState===1){
    game.play();
}

if(gameState===2){
    game.end();
}



}



