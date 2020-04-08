
function Vector2d(_x,_y){
	this.x = _x;
	this.y = _y;
	return this;
}
Vector2d.prototype.setVec2 = function(_x,_y){
	this.x = _x;
	this.y = _y;
}
function substract(temp1,temp2){
	temp = new Vector2d(0,0);
	temp.x = temp1.x - temp2.x;
	temp.y = temp1.y - temp2.y;
	return temp;
}
function getLength(temp){
	return Math.sqrt((Math.pow(temp.x,2)+Math.pow(temp.y,2)));
}
function normalize(temp){
	length = getLength(temp);
	temp.x /= length;
	temp.y /= length;
}
function getDegree(temp1,temp2){  
	return (Math.atan2( temp2.y - temp1.y , temp2.x - temp1.x ) * 180 / Math.PI);
}
function Lerp(objPos,startPos,endPos,speed){
	objPos = startPos + (endPos - startPos) * speed;
}