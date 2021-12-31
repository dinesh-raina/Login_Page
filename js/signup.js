
//$(function() {
//var date = new Date();
//var currentMonth = date.getMonth();
//var currentDate = date.getDate();
//var currentYear = date.getFullYear();
//$('#dob').datepicker({
//maxDate: new Date(currentYear, currentMonth, currentDate)
//});
//});
function reset(){
document.getElementById("hide").reset();
}

$(document).ready(function() {
$("#country").select2();
$("#phone_error_message").hide();
$("#email_error_message").hide();
$("#password_error_message").hide();
$("#retype_password_error_message").hide();
var error_phone = false;

$("#phone").focusout(function(){
   check_phone();
});

function check_phone() {
var pattern = /^\d{10}$/;
var email = $("#phone").val();
     if (pattern.test(email) && email !== '') {
        $("#phone_error_message").hide();
   } else {
               $("#phone_error_message").html("Enter a Valid 10 Digit Number");
               $("#phone_error_message").css("color","#F90A0A");
               $("#phone_error_message").show();
               error_phone = true;
            }
 }


$("#click").click(function() {
   error_phone = false;
   check_phone();

  if ( error_phone === false) {
//      alert("Registration Successfull");
$(".hide:hidden").show();
$(".hides").hide();
document.getElementById("hide").style.display="none";
var fLabel = document.getElementById("flabel").textContent;
var full_name = document.getElementById("fname").value;
var uLabel = document.getElementById("ulabel").textContent;
var username = document.getElementById("lname").value;
var pasLabel = document.getElementById("paslabel").textContent;
var password = document.getElementById("password").value;
var cLabel = document.getElementById("confromlabel").textContent;
var confromPassword = document.getElementById("c_password").value;
var emailLabel = document.getElementById("emaillabel").textContent;
var email = document.getElementById("email").value;
var phoneLabel = document.getElementById("phonelabel").textContent;
var phone = document.getElementById("phone").value;
var cityLabel = document.getElementById("citylabel").textContent;
var city = document.getElementById("city").value;
var dobLabel = document.getElementById("doblabel").textContent;
var dob = document.getElementById("dob").value;
var countryLabel = document.getElementById("nationlabel").textContent;
var country = document.getElementById("country").value;
var genderLabel = document.getElementById("genlabel").textContent;
var gender = document.getElementsByName("gender");
document.getElementById("f_label").innerHTML = fLabel;
document.getElementById("f_name").innerHTML = full_name;
document.getElementById("u_label").innerHTML = uLabel;
document.getElementById("uname").innerHTML = username;
document.getElementById("email_label").innerHTML = emailLabel;
document.getElementById("e_mail").innerHTML = email
document.getElementById("pass_label").innerHTML = pasLabel;
document.getElementById("pass").innerHTML = password;
document.getElementById("confrom_label").innerHTML = cLabel;
document.getElementById("cpass").innerHTML = confromPassword ;
document.getElementById("mobile_label").innerHTML = phoneLabel;
document.getElementById("mob").innerHTML = phone;
document.getElementById("town_label").innerHTML = cityLabel;
document.getElementById("town").innerHTML = city;
document.getElementById("date_label").innerHTML = dobLabel;
document.getElementById("date").innerHTML = dob;
document.getElementById("country_label").innerHTML = countryLabel;
document.getElementById("nation").innerHTML = country;
document.getElementById("gen_label").innerHTML = genderLabel
for(i = 0; i < gender.length; i++) {
if(gender[i].checked){
document.getElementById("gen").innerHTML = gender[i].value;
}
}

      return true;
   } else {
           alert("Please Fill the form Correctly");
           return false;
           }
   });
});