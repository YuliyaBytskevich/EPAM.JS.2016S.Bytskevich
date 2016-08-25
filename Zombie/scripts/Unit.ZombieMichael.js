Unit.ZombieMichael = function(id) {
	Unit.BaseZombie.call(this, id, "michael");
	this.speed = 2;
	this.health = 70;
}

Unit.ZombieMichael.prototype = Object.create(Unit.BaseZombie.prototype);
Unit.ZombieMichael.prototype.constructor = Unit.ZombieMichael;

Unit.ZombieMichael.prototype.die = function() {
	Unit.BaseZombie.prototype.die.apply(this);
  
	var leftOffset = "+=20px";
	var newOpacity = 1;
	var j = 0;
    var block = this.viewBlock;
	var id = this.id;
  
	for (var i = 0; i < 10; i++) {
		setTimeout(moonWalk, 300);
	}
	setTimeout(function(){
		$("div").remove("#" + id);
	}, 2500);
	
	function moonWalk(){
		block.animate({ left: leftOffset, opacity: recountedOpacity()}, 400);
	}
  
	function recountedOpacity() {
		newOpacity = newOpacity - 0.15;
		return newOpacity.toString();
	}  
}

