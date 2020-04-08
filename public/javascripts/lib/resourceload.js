 
function ResourceLoad(){
	this.isLoadComplete = false;
	this.nowResourceLoadedCnt = 0;
	this.intAllResourceCnt = 0;
	this.arrResource = new Array();
	return this;
}

ResourceLoad.prototype.AddImage = function(imgPath,imgKey){ 
	var img = new Image();   
	img.src = imgPath; 
	img.addEventListener("load",onLoadImageResourceComplete,false);
	this.arrResource.push({name: imgKey, image: img}); 
	this.intAllResourceCnt++;
}
ResourceLoad.prototype.AddImages = function(imgPath,imgKey,imgCnt){//수정해야함
	for(var i =0 ; i<imgCnt;i++){
		var img = new Image();
		img.src = imgPath+i+".png";
		img.addEventListener("load",onLoadImageResourceComplete,false);
		this.arrResource.push({name: imgKey, image: img});
		this.intAllResourceCnt++;
	}    
} 
ResourceLoad.prototype.GetImage = function(imgKey){ 
	for(var i =0; i<this.arrResource.length;i++){
		if(this.arrResource[i].name == imgKey){  
			return this.arrResource[i].image;
		}
	}
	return null;
} 
var resourceLoad = new ResourceLoad();
function onLoadImageResourceComplete(){
	resourceLoad.nowResourceLoadedCnt++;
	if(resourceLoad.nowResourceLoadedCnt <= resourceLoad.intAllResourceCnt){
		resourceLoad.isLoadComplete = true;
	}
}


function LoadingState(){
	return this;
}

LoadingState.prototype.Render = function(){ 
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillText("Now Loading..",350,280);
}

LoadingState.prototype.Update = function(){ 
	if(resourceLoad.isLoadComplete){     
		ChangeGameState(new GameState);
	}
}
