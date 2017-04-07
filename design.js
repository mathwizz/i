$(document).ready (function (){
//text color change on hovering
$("#d1").hover(function (){
$("#p2").css("color","violet");
$("#p5,#p4").css("color","#f0f0f0");
      });
$("#d3").hover(function (){
$("#p4").css("color","violet");
$("#p2,#p5").css("color","#f0f0f0");
        });
$("#d4").hover(function (){
$("#p5").css("color","violet");
$("#p2,#p4").css("color","#f0f0f0");
         });
 $(".im").hide();
 $("#d4").hover(function (){
 $(".im").show();
 });
});
//inform function 
function init(){
alert("This portfolio was built using Html5,Css3,Jquery and mobile first responsive design.");
alert("And thanks for taking your time to view.");
}
window.onload=init;