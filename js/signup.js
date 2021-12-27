
//var name = $("#name").val();
//var username = $("#username").val();
//var password = $("#password").val();
//var email = $("email").val();
//var phone = $("phone").val();
//var city = $("city").val();
//$(document).ready(function(){
//  $("#click").click(function(){
//  $("form").hide();
//  $("#value") = $("#name").val();
//
//});
//$(document).ready(function(){
//$(".title").html("login");
//});
//alert($("#name").val());
function getdata(){
document.getElementById("hide").style.display="none";
var full_name = document.getElementById("name").value;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var city = document.getElementById("city").value;
var dob = document.getElementById("dob").value;
var country = document.getElementById("drop").value;
document.getElementById("fname").innerHTML = full_name;
document.getElementById("uname").innerHTML = username;
document.getElementById("e_mail").innerHTML = email
document.getElementById("pass").innerHTML = password;
document.getElementById("mob").innerHTML = phone;
document.getElementById("town").innerHTML = city;
document.getElementById("date").innerHTML = dob;
document.getElementById("nation").innerHTML = country;
}