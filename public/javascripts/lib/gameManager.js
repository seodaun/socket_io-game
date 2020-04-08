var game_state; 
var GAME_FPS = 60; 
function Update(){   
	if(game_state) game_state.Update();   
}

function Render(){  
    if(game_state) game_state.Render(); 
}  
function gameLoop() {   
	Update();
	Render();   
}
 
function onPageLoadComplete(){   
    setInterval(gameLoop,1000 / GAME_FPS);   
	resourceLoad.AddImage("./images/player.png", "player");  
	game_state = new LoadingState(); 
}  
function ChangeGameState(nextGameState){
	if(nextGameState.Update == undefined)
		return;
	if(nextGameState.Render == undefined)
		return;  
	game_state = nextGameState;
}
function onGameDestroy(){ 
}
window.addEventListener("load", onPageLoadComplete, false);
window.addEventListener("unload", onGameDestroy,false); 