
function Player(id,pos){
	this.id = id;
	this.isDead = false; 
	this.pos = pos;
	this.tag = "player";
	this.texture = resourceLoad.GetImage('player');
	this.coll = new Rect(this.pos.x-(this.texture.width/2),this.pos.y-(this.texture.height/2),this.texture.width,this.texture.height);
}
Player.prototype.Render = function(){
	if(IMAGE === undefined){
		console.log('image undefined');
	}
	IMAGE.CenterRender(this.texture,this.pos); 
}
Player.prototype.Update = function(){ 
	this.coll.SetRect(this.pos.x-(this.texture.width/2),this.pos.y-(this.texture.height/2),this.texture.width,this.texture.height);
    let data = {id:this.id,pos: this.pos};
	socket.emit('updateState',data);
}
Player.prototype.Collider = function(coll){ 
	switch(coll){
		case "BULLET":{
			break;
		}
		case "ENEMY":{
			break;
		}
		case "OBSTACLE":{
			break;
		}
	}
}