function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}

$(document).ready(function(){
	
	var $fieldContainer = $(".field-container");
	
	$("#generate").click(function(){
		if ($fieldContainer.length){
			$fieldContainer.empty();
		}
		for (var i = 0; i < 50; i++){
			var newTile = '<div class="tile">' + random(1, 100) + '</div>';
			$fieldContainer.append(newTile);
		}   
    });
	
	$("#setColor").click(function(){
		var $tiles = $(".tile");
		$tiles.each(function(i){
			if ($tiles.eq(i).text() > 75){
				$tiles.eq(i).addClass("red-filling");
			}
			else if ($tiles.eq(i).text() > 50){
				$tiles.eq(i).addClass("orange-filling");
			}
			else if ($tiles.eq(i).text() > 25){
				$tiles.eq(i).addClass("green-filling");
			}
		});
    });
	
	$("#reset").click(function(){
		$fieldContainer.empty();
	});
	
});