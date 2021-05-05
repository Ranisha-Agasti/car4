class Player{
    constructor(){
        this.index = 0;
        this.name = 0;
        this.distance = 0
    }
    getCount(){
    database.ref('playercount').on("value",function(data){
        playerCount = data.val()
    })
}
updateCount(x){database.ref('/').update({
    playercount:x 
})}
update(){
    var playerInfo = 'players/player'+ this.index
    database.ref(playerInfo).update({
        name: this.name,
        distance:this.distance
    })
}
getPlayers(){database.ref('players').on("value",(data)=>{
    allplayers = data.val()}
)}

}