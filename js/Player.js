class Player{

    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
    }

    getCount(){
        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value",(data)=>{    //arrow functions
            playerCount=data.val();
          //  console.log("im here get count")
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount:count
        })
    }

    update(){

        var playerRefIndex="players/player"+this.index;
      //  console.log("im here update name "+pname);
      //  console.log("im here update "+playerRefIndex);
        database.ref(playerRefIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

//static function - called by class name, returns the same value who ever calls it
    static getPlayerInfo(){

        var playerInforef= database.ref('players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        })//.on meaning listen to

    }


}