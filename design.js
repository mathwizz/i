$(document).ready(function (){
//text color change on hovering
$("#d1").on("mouseover",function (){
$("#p2").css("color","violet");
$("#p5,#p4").css("color","#4D5656");
$("#h2").animate({
"left":"5em",
"font-size":"20px"
          });
$("#h3").css({
"left":"1em",
"font-size":"14px"
           });
});
$("#d4").on("mouseover",function (){
$("#p5").css("color","violet");
$("#p2,#p4").css("color","#4D5656");
$("#h3").animate({
"left":"5em",
"font-size":"20px"
          });
 $("#h2").css({
 "left":"1px",
 "font-size":"14px"
          });
});
});
//inform function 
function init(){
alert("This portfolio was built using Html5,Css3,Jquery and mobile first responsive design.");
alert("And thanks for taking your time to view.");
}
window.onload=init;