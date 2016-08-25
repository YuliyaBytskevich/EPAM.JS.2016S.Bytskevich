Unit.ZombieFly = function(id) {
	Unit.BaseZombie.call(this, id, "fly");
	this.speed = 4;
}

Unit.ZombieFly.prototype = Object.create(Unit.BaseZombie.prototype);
Unit.ZombieFly.prototype.constructor = Unit.ZombieFly;

Unit.ZombieFly.prototype.die = function() {
	Unit.BaseZombie.prototype.die.apply(this);
	this.viewBlock.animate({ top: "-500px", opacity: "0" }, 1500);
}