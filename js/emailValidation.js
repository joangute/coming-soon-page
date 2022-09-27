const input= document.querySelector("input");
input.addEventListener("invalid", function(e){

  e.preventDefault();
  document.querySelector(".submit").classList.add("error_border");
  input.classList.add("error_icon");

  if(input.value=="")
    document.querySelector(".error_message").innerHTML="The field is empty, please provide an email";
  else
    document.querySelector(".error_message").innerHTML="Please provide a valid email";
});

input.addEventListener("focus", function(){
  input.classList.remove("error_icon");
  document.querySelector(".error_message").innerHTML="";
  document.querySelector(".submit").classList.remove("error_border");
});