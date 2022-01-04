//
//function login(){
//if($("#email").val()=="dinesh" && $("#password").val()=="12345"){
//$(".success-message:hidden").show();
//}else{
//       $(".error-message:hidden").show();
//    }
//}

//$(document).ready(function() {
//
//$("#email_error_message").hide();
//$("#password_error_message").hide();
//
//var error_email = false;
//var error_password = false;
//
//   $("#email").focusout(function(){
//   check_email();
//});
//   $("#password").focusout(function() {
//    check_password();
//});
//
//function check_email() {
//var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//var email = $("#email").val();
//     if (pattern.test(email) && email !== '') {
//        $("#email_error_message").hide();
//   } else {
//               $("#email_error_message").html("Enter a Valid Email");
//               $("#email_error_message").css("color","#F90A0A");
//               $("#email_error_message").show();
//               error_email = true;
//            }
//     }
//function check_password() {
//var password_length = $("#password").val().length;
//    if (password_length < 8) {
//       $("#password_error_message").html(" Minimum 8 Characters");
//       $("#password_error_message").show();
//       $("#password_error_message").css("color","#F90A0A")
//       error_password = true;
//    } else {
//            $("#password_error_message").hide();
//           }
//   }
//
//$("#click").click(function() {
//   error_email = false;
//   error_password = false;
//   var captchaVal = false;
//   var response = grecaptcha.getResponse();
//   if(response.length == 0) {
//    captchaVal = false;
//    alert('verify the captcha.');
//} else {
//    captchaVal = true;
//}
//   check_email();
//   check_password();
//
//  if ( error_email === false && error_password === false && captchaVal === true) {
//      window.location.href = "welcome.html";
//      return true;
//   }
//  });
//});

      function onClick(e) {
        e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute('6LeuqNcdAAAAAMhCd2o2CqPDyVHu_Iq60Q8YiqoB', {action: 'click'}).then(function(token) {
              // Add your logic to submit to your backend server here.
          });
        });
      }


$(document).ready(function(){

  $.validator.addMethod("space", function(value,element){
   return value == '' || value.trim().length != 0;
  }, "empty space not allowed");
    $.validator.addMethod("customEmail", function(value, element) {
        return this.optional(element) || /^([A-Z])+([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value );
      }, "Enter valid email address");
    $.validator.addMethod("customName", function(value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Enter valid Name");
  $.validator.addMethod("cutompassword", function(value, element){
    return this.optional(element) || /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value);
  }, "pass must contain 1caps, 1small, 1special char minium 8 char");
         $.validator.addMethod("placeholder", function(value, element) {
           return value!=$(element).attr("placeholder");
         }, $.validator.messages.required);

  var $loginForm = $("#login_form")
  if($loginForm.length){
   $loginForm.validate({

    rules: {
     password:{
      required: true,
      space: true,
      cutompassword: true,

     },
     email:{
     required: true,
     customEmail: true,

  }

    },

     messages:{
      password:{
       required: 'password is mandatory',
        placeholder: "Username required"
      },


       email:{
        required: 'email is mandatory',
        customEmail: 'Enter valid email address',
         placeholder: "Username required"
       }
     }


   })
  }
  $("#click").click(function(){
   var response = grecaptcha.getResponse();
   var captchaVal = false;
      var response = grecaptcha.getResponse();
      if(response.length == 0) {
       captchaVal = false;
       alert('verify the captcha.');
   } else {
       captchaVal = true;
   }
       if ( $("#login_form").valid() && captchaVal === true) {
           window.location.href = "welcome.html";
           return true;
        }
  });
});








