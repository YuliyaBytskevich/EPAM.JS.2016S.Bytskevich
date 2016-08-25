Unit.ZombieBaloon = function(id) {
	Unit.BaseZombie.call(this, id, "baloon");
	this.speed = 3;
	this.health = 70;
}

Unit.ZombieBaloon.prototype = Object.create(Unit.BaseZombie.prototype);
Unit.ZombieBaloon.prototype.constructor = Unit.ZombieBaloon;

Unit.ZombieBaloon.prototype.die = function() {
	Unit.BaseZombie.prototype.die.apply(this);
  
	var topOffset = this.viewBlock.position().top;
	var leftOffset = "+=10px";
	var newOpacity = 1;
	var j = 0;
	var id = this.id;
  
	for (var i = 0; i < 100; i++) {
		this.viewBlock.animate({ top: recountedTop(), left:  leftOffset, opacity: recountedOpacity()}, 100);
	}
	setTimeout(function(){
		$("div").remove("#" + id);
	}, 3000);
  
	function recountedTop() {
		topOffset = topOffset + Math.sin(j++) * 20;
		return topOffset + "px";
	}
  
	function recountedOpacity() {
		newOpacity = newOpacity - 0.05;
		return newOpacity.toString();
	}  
}





