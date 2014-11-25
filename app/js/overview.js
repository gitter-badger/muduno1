$(document).ready(function(){
	createHourlyGraph();
})

$(".hourButton").on('click', function () {
	$('.chart').empty();
 	createHourlyGraph();
 });

$(".dailyButton").on('click', function () {
	$('.chart').empty();
 	createDailyGraph();
 });



	
	

