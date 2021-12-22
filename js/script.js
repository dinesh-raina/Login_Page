function validate()
{
 var email=$("#email").val();
 var password=$("#password").val();
 var email_val=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 var password_1=/([a-z].*[A-Z])|([A-Z].*[a-z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
 var password_2=/([0-9])/;
 var password_3=/([!,%,&,@,#,$,^,*,?,_,~])/;

 if(email_val.test(email)==false)
 {

//  alert("Please Enter Correct Email");
  return false;
 }
 else if(password.length<8 || password_1.test(password)==false || password_2.test(password)==false || password_3.test(password)==false)
 {
  alert("Please Enter Strong Password");
  return false;
 }
 else
 {
  return true;
 }
}
function showalert(message){
 $("#emailVal").append(
 " <div  class="alert alert-danger alert-dismissible fade show">" + "<strong>Error!</strong> Enter a valid Email Id <button type="button" class="btn-close" data-bs-dismiss="alert"></button>" + message + "</div>");
}

showalert("alert");
$(document).ready(function){
  $(".login").click(function){
    if($("#email").val()=="dinesh@gmail.com" && $("#password").val()=="Dinesh123@"){
    alert("success")
    }else{
    alert("failed")
    }
  });
});

