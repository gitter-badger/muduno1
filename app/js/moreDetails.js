$(document).ready(function (){
    $("#kingsCrossVisualised").hide();
    $("#coventGardenVisualised").hide();
    $("#embankmentVisualised").hide();
    $("#barbicanVisualised").hide();
    $("#liverpoolstVisualised").hide();
    $("#oxfordCircusVisualised").hide();  
    console.log("ben"); 
});
$("#new").on("click", function (){
    $("#kingsCrossVisualised").show();
    $("#map-canvas").hide();
    $("#coventGardenVisualised").hide();
    $("#embankmentVisualised").hide();
    $("#barbicanVisualised").hide();
    $("#liverpoolstVisualised").hide();
    $("#oxfordCircusVisualised").hide();  

});
 $("#new2").on("click", function (){
    $("#coventGardenVisualised").show();
   
    $("#kingsCrossVisualised").hide();
    $("#embankmentVisualised").hide();
    $("#barbicanVisualised").hide();
    $("#liverpoolstVisualised").hide();
    $("#oxfordCircusVisualised").hide(); 
});
  $("#new3").on("click", function (){
    $("#embankmentVisualised").show();
    
    $("#kingsCrossVisualised").hide();
    $("#coventGardenVisualised").hide();
    $("#barbicanVisualised").hide();
    $("#liverpoolstVisualised").hide();
    $("#oxfordCircusVisualised").hide(); 
});
      $("#new4").on("click", function (){
    $("#barbicanVisualised").show();
   
    $("#kingsCrossVisualised").hide();
    $("#coventGardenVisualised").hide();
    $("#embankmentVisualised").hide();
    $("#liverpoolstVisualised").hide();
    $("#oxfordCircusVisualised").hide(); 
});
    $("#new5").on("click", function (){
    $("#liverpoolstVisualised").show();
    
    $("#kingsCrossVisualised").hide();
    $("#coventGardenVisualised").hide();
    $("#embankmentVisualised").hide();
    $("#barbicanVisualised").hide();
    $("#oxfordCircusVisualised").hide(); 
});
      $("#new6").on("click", function (){
    $("#oxfordCircusVisualised").show();
    
    $("#kingsCrossVisualised").hide();
    $("#coventGardenVisualised").hide();
    $("#embankmentVisualised").hide();
    $("#barbicanVisualised").hide();
    $("#liverpoolstVisualised").hide(); 
});
       $("#accordion").on("click", function (){
    $("#map-canvas").show();
    $("#oxfordCircusVisualised").hide();
    $("#kingsCrossVisualised").hide();
    $("#coventGardenVisualised").hide();
    $("#embankmentVisualised").hide();
    $("#barbicanVisualised").hide();
    $("#liverpoolstVisualised").hide(); 
});

