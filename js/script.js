function validate()
{
 var email=$("#email").val();
 var password=$("#password").val();

 var email_regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 var password_regex1=/([a-z].*[A-Z])|([A-Z].*[a-z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
 var password_regex2=/([0-9])/;
 var password_regex3=/([!,%,&,@,#,$,^,*,?,_,~])/;

 if(email_regex.test(email)==false)
 {
  alert("Please Enter Correct Email");
  return false;
 }
 else if(password.length<8 || password_regex1.test(password)==false || password_regex2.test(password)==false || password_regex3.test(password)==false)
 {
  alert("Please Enter Strong Password");
  return false;
 }
 else
 {
  return true;
 }
}