class Form{

    constructor(){

        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting= createElement('h2');
        this.title = createElement('h1'); 
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

    display(){

        //creates html element
        this.title.html("CAR RACING GAME"); //text of html element
        this.title.position(displayWidth/2-50,20); //position of it x y

       
        this.input.position(displayWidth/2-50,100);

       
        this.button.position(displayWidth/2+50,150);
        //console.log("im here 4")
        this.button.mousePressed(()=>{ // Make it an arrow function to refer to the parent who is calling it

            this.input.hide();
            this.button.hide();// this should refer to the parent that is calling it the form and not button
           // console.log("im here 5")
            player.name= this.input.value(); // value() is for html
            playerCount +=1;

            player.index=playerCount;

            player.updateCount(playerCount);
            player.update();
          //  console.log("im here 6 name" +name);
           
            this.greeting.html("Hello "+player.name+" !");
            this.greeting.position(displayWidth/2-50,60);
        });




    }



}