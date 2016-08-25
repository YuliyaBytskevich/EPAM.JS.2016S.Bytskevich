Unit.ZombieSmall = function(id) {
	Unit.BaseZombie.call(this, id, "small");
}

Unit.ZombieSmall.prototype = Object.create(Unit.BaseZombie.prototype);
Unit.ZombieSmall.prototype.constructor = Unit.ZombieSmall;

Unit.ZombieSmall.prototype.die = function() {
	Unit.BaseZombie.prototype.die.apply(this);
	this.viewBlock.animate({ height: "0", width: "0", opacity: "0"}, 2000);
	var id = this.id;
	setTimeout(function(){
		$("div").remove("#" + id);
	}, 2500);
}
