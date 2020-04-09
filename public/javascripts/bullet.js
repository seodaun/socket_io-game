const SPEED = 5;
function Bullet(pos, degree){ 
    this.isDead = false;
    this.degree = degree;
	this.pos = pos;
	this.tag = "BULLET";
	this.texture = resourceLoad.GetImage('bullet');
	this.coll = new Rect(this.pos.x-(this.texture.width/2),this.pos.y-(this.texture.height/2),this.texture.width,this.texture.height);
}
Bullet.prototype.Update = function(){
 	this.coll.SetRect(this.pos.x-(this.texture.width/2),this.pos.y-(this.texture.height/2),this.texture.width,this.texture.height);
 	if(isOutMap(this.pos)){
		 this.isDead = true; 
     } 
	this.pos.x += Math.cos(this.degree*3.141592 / 180) * SPEED;
	this.pos.y += Math.sin(this.degree*3.141592 / 180) * SPEED;  
}
Bullet.prototype.Render = function(){ 
	IMAGE.RotateCenterRender(this.texture,this.pos,this.degree); 
}

function isOutMap(pos){
	if(pos.x >= 800 || pos.x <= 0 || pos.y<=0 || pos.y>= 600){ 
		return true;
	}
	else return false;
}

Bullet.prototype.Collider = function(coll){  
	switch(coll){
		case "OBSTACLE":{
			this.isDead = true;
			break;
		}
		case "ENEMY":{
			break;
		}
		case "PLAYER":{
			break;
		}
	}
}