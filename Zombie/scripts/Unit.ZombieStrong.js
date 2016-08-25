Unit.ZombieStrong = function(id) {
	Unit.BaseZombie.call(this, id, "strong");
	this.speed = 1;
	this.health = 100;
}

Unit.ZombieStrong.prototype = Object.create(Unit.BaseZombie.prototype);
Unit.ZombieStrong.prototype.constructor = Unit.ZombieStrong;

Unit.ZombieStrong.prototype.die = function() {
	Unit.BaseZombie.prototype.die.apply(this);
	this.viewBlock.fadeOut(1500);
	var id = this.id;
	setTimeout(function(){
		$("div").remove("#" + id);
	}, 2000);
};