function Texture(){ 
	return this;
} 
Texture.prototype.Render = function(img,pos){ 
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d"); 
	Context.drawImage(img,pos.x,pos.y);
} 
Texture.prototype.CenterRender = function(img,pos){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d"); 
	var w = img.width;
	var h = img.height;
	Context.save();
	Context.translate(pos.x,pos.y);
	Context.drawImage(img,-(w/2),-(h/2));
	Context.restore();
}
Texture.prototype.BGRender = function(img,pos){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");  
	Context.save();
	Context.translate(pos.x - 800 / 2, pos.y - 600 / 2);
	Context.drawImage(img,0,0);
	Context.restore();
}
Texture.prototype.RotateRender = function(img,pos,degree){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d"); 
	Context.save();
	Context.rotate(degree*(Math.PI/180)); 
	Context.drawImage(img,pos.x,pos.y);
	Context.restore();
}

Texture.prototype.RotateCenterRender = function(img,pos,degree){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");  
	Context.save();
	Context.translate(pos.x,pos.y);
	Context.rotate(degree*(Math.PI/180));  
	Context.drawImage(img,-(img.width/2),-(img.height/2));
	Context.restore();
} 
var IMAGE = new Texture();    