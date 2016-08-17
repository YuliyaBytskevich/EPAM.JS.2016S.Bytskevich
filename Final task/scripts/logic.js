function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}

$(document).ready(function() {
	
	var $button = $("button");	
	var $field = $(".resource-field");
	var resourceTimer;
	var bombTimer;
	
	$button.click(function() {
		if ($button.hasClass("starting")) {
			$button.text("Stop")
			$button.removeClass("starting");
			$button.addClass("stopping");		
			resourceTimer = setTimeout(showNewResource, 500);
			bombTimer = setTimeout(showBomb, 5000);
		}
		else {		
			clearTimeout(resourceTimer);
			clearTimeout(bombTimer);
			$button.text("Start");
			$button.removeClass("stopping");
			$button.addClass("starting");
		}
    });	
	
	$(".resource-field").on("click", ".new-resource", function() {
		var counterId = $(this).data("type") + "Counter";
		var $counter = $("#" + counterId);
		var score = $counter.text();
		if (score == "-") {
			$counter.text(1);
		}
		else {
			score = Number(score) + 1;
			$counter.text(score);
		}
		$(this).remove();	
	});
	
	function showNewResource() {
		var $newResource = $('<div class="new-resource"></div>');
		var resourceType = getRandomResourceName();
		$newResource.addClass(resourceType).data('type', resourceType);
		showObjectWithFading($newResource, 700);
		setObjectPosition($newResource);	
		resourceTimer = setTimeout(showNewResource, 500);
	}
	
	function showBomb() {
		$bomb = $('<div class="bomb"></div>');
		showObjectWithFading($bomb, 2000);
		setObjectPosition($bomb);
		setTimeout(function() {
			var $counter = $("#" + getRandomResourceName() + "Counter");
			var score = Number($counter.text());
			if (score > 10) {
				$counter.text(score - 10);
			}
			else {
				$counter.text("-");
			}
			$bomb.remove();
		}, 2000);
		bombTimer = setTimeout(showBomb, 5000);
	}
	
	function getRandomResourceName() {
		var resourceType = random(1, 4);
		var resourceName;
		switch (resourceType) {
			case 1:
				resourceName = "cheese";
				break;
			case 2:
				resourceName = "cherry";
				break;
			case 3:
				resourceName = "orange";
				break;
			case 4:
				resourceName = "pumpkin";
				break;
		}
		return resourceName;
	}
	
	function showObjectWithFading(object, interval) {
		$field.append(object);	
		object.hide();
		object.fadeIn(interval);
	}
	
	function setObjectPosition(object) {
		var newTop = $field.offset().top + random(5, 263);
		var newLeft = $field.offset().left + random(5, 255);
		object.offset({top: newTop, left: newLeft});	
	}
	
});