function Circle(pos,length){
	this.pos = pos;
	this.length = length;
}

function CircleCollision(c1,c2){
	var deltaX = c1.pos.x - c2.pos.x; 
	var deltaY = c1.pos.y - c2.pos.y;
	var length = Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaY,2));
	if(c1.length + c2.length >= length){
		return true;
	}
	else return false;
}

function Rect(left,top,right,bottom){ 
	this.left = left;
	this.top = top;
	this.right = right;
	this.bottom = bottom; 
	return this;
}
Rect.prototype.SetRect = function(left,top,right,bottom){
	this.left = left;
	this.top = top;
	this.right = right;
	this.bottom = bottom; 
}
function RectCollision(r1,r2){ 
	if(r1.left + r1.right >= r2.left && r1.left <= r2.left + r2.right &&r1.top +r1.bottom >= r2.top && r1.top <= r2.top + r2.bottom){
		return true;
	}
	return false; 
} 

