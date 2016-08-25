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
  var leftOffset = "+=30px";
  var newOpacity = 1;
  var j = 0;
  
  for (var i = 0; i < 30; i++) {
	  this.viewBlock.animate({ top: recountedTop(), left:  leftOffset, opacity: recountedOpacity()}, 100);
  }

  function recountedTop() {
	  topOffset = topOffset + Math.sin(j++) * 20;
	  return topOffset + "px";
  }
  
  function recountedOpacity() {
	  newOpacity = newOpacity - 0.05;
	  return newOpacity.toString();
  }  
}





