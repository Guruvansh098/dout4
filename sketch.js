 var canvas,backgroundimage,gameState=0,playerCount,form,player,game,distance=0,allPlayers
var database,ballposition
function setup(){
  database=firebase.database()
    createCanvas(400,400);
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
  if(playerCount==4) {
    game.update(1)
  }
if (gameState==1){
  clear()
  game.play()
}
}


