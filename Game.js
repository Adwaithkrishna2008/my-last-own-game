class Game{

constructor(){}


getState(){
var gameStateref=database.ref('gameState')
gameStateref.on("value",function(data)
{
    gameState=data.val()
})
}

update(state){
database.ref('/').update({
    gameState:state
})
}


async start(){
    
    
if(gameState===0){
    player= new Player()
    var playerCountref=await database.ref('playerCount').once("value")
    if(playerCountref.exists()){
        playerCount=playerCountref.val();
        player.getCount();
    }
  form= new Form()
    form.display()}

    tank1=createSprite(150,250) 
    tank1.addImage(tank2_img); 
    tank1.scale=2; 
    tank2=createSprite(999,250);
    tank2.addImage(tank1_img);
    tank2.scale=0.5;
       
    bomb1=createSprite(350,250);
    bomb1.addImage(bomb2_img);
    bomb1.scale=0.1;
    bomb1.visible=true;
       
    bomb2=createSprite(850,250);
    bomb2.addImage(bomb2_img);
    bomb2.scale=0.1;
    bomb2.visible=true;

    life1=createSprite(200,75)
    life1.addImage(life_bar1);
    life1.scale=0.15;

    life2=createSprite(999,75)
    life2.addImage(life_bar1);
    life2.scale=0.15;

       
        tanks=[tank1,tank2];
         
    }

play(){
    form.hide()
    Player.getPlayerInfo()
    
    if(allPlayers!=undefined){
        image(bg,0,0,displayWidth,displayHeight);
        var index=0;
        var x=100;
        var y
        for(var plr in allPlayers){
            index+=1;
            x=0+(index*200)+allPlayers[plr].XPos;
            y=displayHeight-allPlayers[plr].distance
            bomb1.position.y=tank1.position.y;
            bomb2.position.y=tank2.position.y;
                

            }
        }
        if(keyDown("w")){
            tank1.position.y-=10;
        }
        if(keyDown("s")){
            tank1.position.y+=10;
        }
        if(keyDown(UP_ARROW)){
            tank2.position.y-=10;
        }
        if(keyDown(DOWN_ARROW)){
            tank2.position.y+=10;
        }
        if(keyDown("space")){
            bomb1.visible=true;
            bomb2.visible=true;
            bomb1.velocityX=15;
           bomb2.velocityX=-5;
        }
if(bomb1.isTouching(bomb2)){
    bomb1.velocityX=false;
    bomb2.visisble=false;
}
if(bomb1.isTouching(tank2)){
    lives=lives-1;
    
     if(lives===3){
life2.addImage(life_bar2);

}else if(lives===1){
life2.addImage(life_bar3);

}else if(lives===0){
//end();
console.log("End");
}
}

if(bomb2.isTouching(tank1)){
    lives=lives-1;
    
     if(lives===3){
life1.addImage(life_bar2);

}else if(lives===1){
life1.addImage(life_bar3);
}else if(lives===0){
    //end();
    console.log("End");
    
}
}
        drawSprites();
}
end(){
    console.log("End");
}
















}