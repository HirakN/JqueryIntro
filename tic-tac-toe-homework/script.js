// Two ways of checking if DOM is ready
$(function(event) {
	console.log("DOM is ready");
});

$(document).ready( function() {
	console.log("ready!");
});

$(document).ready(
	// All jquery in here
);

$(document).ready(function(){
	$("#reset").click(function(){
		$("h2").hide();
	})
	$("#show").click(function(){
		$("h2").show();
	})
})