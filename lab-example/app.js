//Jquery onload
$(function() {
	console.log("It's alive");
	
	var colors = ["red", "blue", "yellow", "green"];

	for (var i = 0; i < 16; i++) {
		setTimeout(function() {
			var num = Math.floor(Math.random()*4);
			var li = $("<li></li>").addClass('box');
			// by def. jquery makes variables from id's
			$(grid).append(li);
			$(li).css("backgroundColor", colors[num]).hide().slideDown();
		}, 20*i*i);
		
	}
})