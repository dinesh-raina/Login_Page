//function validate()
//{
// var email=$("#email").val();
// var password=$("#password").val();
// var email_val=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// var password_1=/([a-z].*[A-Z])|([A-Z].*[a-z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
// var password_2=/([0-9])/;
// var password_3=/([!,%,&,@,#,$,^,*,?,_,~])/;
//
// if(email_val.test(email)==false)
// {
//
////  alert("Please Enter Correct Email");
//  return false;
// }
// else if(password.length<8 || password_1.test(password)==false || password_2.test(password)==false || password_3.test(password)==false)
// {
//  alert("Please Enter Strong Password");
//  return false;
// }
// else
// {
//  return true;
// }
//}

//$(document).ready(function(){
//$(".success-message").hide();
//$(".error-message").hide();
//  $(".login").click(function(){
//    if($("#email").val()=="dinesh" && $("#password").val()=="12345"){
//$(".success-message:hidden").show();
//}else{
////    alert("Login Failed")
//    $(".error-message:hidden").show();
//    }
//  });
//});
function login(){
if($("#email").val()=="dinesh" && $("#password").val()=="12345"){
$(".success-message:hidden").show();
}else{
       $(".error-message:hidden").show();
    }
}