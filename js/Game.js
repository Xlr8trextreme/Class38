class Game{

    constructor(){}

    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",function(data){ //anonymous function    
            gameState=data.val();
        })
      //  console.log("im here 2 get state" + gameState);
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){

        if(gameState===0){
            player= new Player();
            player.getCount();
           // console.log("im here 3")
            form= new Form();
            form.display();

        }

        car1= createSprite(100,200);
        car2= createSprite(300,200);
        car3= createSprite(500,200);
        car4= createSprite(700,200);

        cars=[car1,car2,car3,car4];        
    }


    play(){

        form.hide();
       // textSize(32);
        //text("Game Started ",150,100);
        Player.getPlayerInfo();

        if(allPlayers!=undefined){
            var index=0;
            var x= 100;
            var y;
           // var ypos=200
            console.log(allPlayers);
            for(var plr in allPlayers){
             /*   ypos+=40;
                if(plr==="player"+player.index){
                    fill("red");
                }else{
                    fill("black")
                }
                textSize(20)
                text(allPlayers[plr].name+" : "+allPlayers[plr].distance,150,ypos);
                */

                index= index+1;

                x=x+200;

                y=displayHeight-allPlayers[plr].distance;

                cars[index-1].x=x;
                cars[index-1].y=y;


                if(index===player.index){
                    cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }
                
            }
        }

        if(keyIsDown(UP_ARROW) && player.index!=null){
            player.distance+=10;
            player.update();
        }
        drawSprites();
    }
}