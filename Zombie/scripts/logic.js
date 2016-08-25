function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
	
	var $container = $(".global-container");
	var $field = $(".field");
	var $lines = $(".field-line");
	var $generate = $("#generate");	
	var $slow = $("#slow");	
	var $aging = $("#aging");
	var $explode = $("#explode");
	var $reset = $("#reset");
	
	var id = 0;
	var zombies = [];
	var finishIsReached = false;
	
	$generate.click(function() {
		if (finishIsReached == false) {
			var randomZombie = getRandomZombie();
			zombies.push(randomZombie);
			var div = getRandomFieldLine().append(randomZombie.viewBlock);
			div.id = 10;
			runMoving(randomZombie);
		}	
    	});	
			
	$slow.click(function() {
		if (zombies.length) {		
			var base = new Unit.BaseZombie();
			zombies.forEach(function(zombie, i) {	
				zombie.speed = base.speed;
			});
			$slow.prop("disabled", true);
			setTimeout(function () {
				zombies.forEach(function(zombie, i){	
					zombie.speed = (new zombie.constructor()).speed;
				});
				$slow.prop("disabled", false);
			}, 10000);
		}
    	});		

	$aging.click(function() {
		if (zombies.length) {
			$aging.prop("disabled", true);
			var repeats = 0;
			var timer = setTimeout(looseOneHP, 1000);	
			function looseOneHP() {
				zombies.forEach(function(zombie, i) {	
					zombie.health -= 1;
					if (zombie.health > 0) {
						var persentage = zombie.health * 100 / (new zombie.constructor()).health;
						$(zombie.healthSelector).width(persentage + "%");
						$(zombie.healthSelector + " p").text(Math.floor(persentage) + "%");
					}
					else {
						$(zombie.healthSelector).width("0");
						$(zombie.healthSelector + " p").text("0%");
						zombie.die();
						var indexOfDead = zombies.indexOf(zombie);
						zombies.splice(indexOfDead, 1);
					}
				});
				if (repeats < 9) {
					repeats ++;
					timer = setTimeout(looseOneHP, 1000);	
				}
				else {
					clearTimeout(timer);
					$aging.prop("disabled", false);
				}
			}
		}
    	});	
	
	$explode.click(function() {
		if (zombies.length) {
			zombies.forEach(function(zombie, i) {	
				zombie.health -= 15;
				if (zombie.health > 0) {
					var persentage = zombie.health * 100 / (new zombie.constructor()).health;
					$(zombie.healthSelector).width(persentage + "%");
					$(zombie.healthSelector + " p").text(Math.floor(persentage) + "%");
				}
				else {
					$(zombie.healthSelector).width("0");
					$(zombie.healthSelector + " p").text("0%");
					zombie.die();
				}
			});
			var dead; 
			while ((dead = zombies.find(isDead)) != undefined) {
				zombies.splice(zombies.indexOf(dead), 1);
			}	
			function isDead(zombie) {
				return zombie.viewBlock.hasClass("dead");
			}
		}
    	});	
			
	$reset.click(function() {	
		id = 0;
		zombies = [];
		$(".game-over-banner").remove();
		finishIsReached = false;
		$reset.hide();
	});
			
	function runMoving(zombie) {
		zombie.timer = setTimeout(moving, 100);
		function moving() {
			var position = zombie.viewBlock.position();
			if (position.left > zombie.speed) {
				zombie.move();
				zombie.timer = setTimeout(moving, 100);
			}	
			else {
				clearTimeout(zombie.timer);
				if (finishIsReached == false) {
					$lines.each(function(i, line) {
						$(line).empty();
					});
					$container.append('<div class="game-over-banner">GAME OVER</div>');
					$reset.show();
					finishIsReached = true;
				}
			}
		}
	}	
		
	function getRandomZombie() {
		var zombieType = random(0, 4);
		var newZombie;
		switch (zombieType) {
			case 0:
				newZombie = new Unit.ZombieMichael(id++);
				break;
			case 1:
				newZombie = new Unit.ZombieStrong(id++);
				break;
			case 2:
				newZombie = new Unit.ZombieSmall(id++);
				break;
			case 3:
				newZombie = new Unit.ZombieFly(id++);
				break;
			case 4:
				newZombie = new Unit.ZombieBaloon(id++);
				break;
		}
		return newZombie;
	}		
		
	function getRandomFieldLine() {
		var lineNumber = random(0, 4);
		return $lines.eq(lineNumber);
	}	
});
