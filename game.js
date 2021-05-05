class Game{
getState(){
    database.ref('gamestate').on("value",function(data){
        gameState = data.val()
}

)
}
updateState(x){database.ref('/').update({
    gameState:x 
})}
play(){
    form.greeting1.hide()
    form.greeting2.hide()
    player.getPlayers()
    image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
    drawSprites()
    if (allplayers !== undefined){

        var index = 0
        var x = 0
        var y = 0
        for(var plr in allplayers){
            index = index + 1
            x = x+200
            y = displayHeight - allplayers[plr].distance
            cars[index - 1].x = x
            cars[index - 1].y = y
        }
    }
    if(keyDown(UP_ARROW)){
player.distance=player.distance+10
    }
}
}
