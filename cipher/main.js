var element = document.querySelector("#greeting");
element.innerText = "Hello, world!";

$(document).ready(function (){
  $('#hidden').hide();
});
$("#mytext").click(function (){
  $('#hidden').fadeIn(200);
});
var text=document.querySelector('#mytext');
text.style.background.color="red";
$("#hidden").click(function (){
  $(this).hide();
  $("#mytext").css('');
});

var jsonString = JSON.stringify({
    make: "McLaren",
    model: "MP4-12C",
    miles: 5023
});

var car = JSON.parse(jsonString);
alert(car.model);

