$(document).ready (function (){
//text color change on hovering
$("#d1").hover(function (){
$("#p2").css("color","violet");
$("#p5,#p4").css("color","black");
      });
$("#d3").hover(function (){
$("#p4").css("color","violet");
$("#p2,#p5").css("color","black");
        });
$("#d4").hover(function (){
$("#p5").css("color","violet");
$("#p2,#p4").css("color","black");
         });
 $(".im").hide();
 $("#d4").hover(function (){
 $(".im").show();
 });
});