Unit.BaseZombie = function(id, zombieType) {
	this.id = id;
	this.speed = 1;
	this.health = 50;
	this.viewBlock = $('<div id=' + id + ' class="zombie ' + zombieType + '"><div class="health-line"><div class="progress"><p>100%</p></div></div></div>');
	this.healthSelector = '#' + id + '.zombie.' + zombieType + ' .health-line .progress';
	this.timer;
}

Unit.BaseZombie.prototype.move = function() {
	var leftOffset = this.viewBlock.offset().left - this.speed;
	this.viewBlock.offset({left: leftOffset});
}

Unit.BaseZombie.prototype.die = function() {
	this.viewBlock.addClass("dead");
	clearTimeout(this.timer);
}
