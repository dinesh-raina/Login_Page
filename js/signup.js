
function getdata(){
$(".hide:hidden").show();
$(".hides").hide();
document.getElementById("hide").style.display="none";
var full_name = document.getElementById("fname").value;
var username = document.getElementById("lname").value;
var password = document.getElementById("password").value;
var confromPassword = document.getElementById("c_password").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var city = document.getElementById("city").value;
var dob = document.getElementById("dob").value;
var country = document.getElementById("country").value;
var gender = document.getElementsByName("gender");
document.getElementById("f_name").innerHTML = full_name;
document.getElementById("uname").innerHTML = username;
document.getElementById("e_mail").innerHTML = email
document.getElementById("pass").innerHTML = password;
document.getElementById("cpass").innerHTML = confromPassword ;
document.getElementById("mob").innerHTML = phone;
document.getElementById("town").innerHTML = city;
document.getElementById("date").innerHTML = dob;
document.getElementById("nation").innerHTML = country;

for(i = 0; i < gender.length; i++) {
if(gender[i].checked){
document.getElementById("gen").innerHTML = gender[i].value;
}
}
}
//$(function() {
//var date = new Date();
//var currentMonth = date.getMonth();
//var currentDate = date.getDate();
//var currentYear = date.getFullYear();
//$('#dob').datepicker({
//maxDate: new Date(currentYear, currentMonth, currentDate)
//});
//});

$(document).ready(function() {
$("#phone_error_message").hide();

var error_phone = false;

$("#phone").focusout(function(){
   check_phone();
});
   $("#password").focusout(function() {
    check_password();
});

function check_phone() {
var pattern = ([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4});
var email = $("#phone").val();
     if (pattern.test(email) && email !== '') {
        $("#phone_error_message").hide();
   } else {
               $("#phone_error_message").html("Enter a Valid Email");
               $("#phone_error_message").css("color","#F90A0A");
               $("#phone_error_message").show();
               error_phone = true;
            }
     }

$("#click").click(function() {
   error_phone = false;
   check_phone();
  if ( error_phone === false) {
      alert("Registration Successfull");
      return true;
   } else {
           alert("Please Fill the form Correctly");
           return false;
           }
   });
});