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
    return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
  }, "Enter valid email address");

  var $loginForm = $("#login_form")
  if($loginForm.length){
   $loginForm.validate({
    rules: {
     password:{
      required: true,
      space: true
     },
     email:{
     required: true,
     email: true,
     customEmail: true

     },
     captcha: {
     required: function () {
        if (grecaptcha.getResponse() == '') {
        return true;
        } else {
           return false;bn
            }
        }
     }
    },
     messages:{
      password:{
       required: 'password is mandatory'
      },
      captcha:{
       required: 'captcha mandatory'
      },
       email:{
        required: 'email is mandatory',
        email: 'Enter valid email address'
       }
     },

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
       if ( email === false && password === false && captchaVal === true) {
           window.location.href = "welcome.html";
           return true;
        }
  });
});
















//         $(function() {
//
//            $("#fname_error_message").hide();
//            $("#sname_error_message").hide();
//            $("#email_error_message").hide();
//            $("#password_error_message").hide();
//            $("#retype_password_error_message").hide();
//
//            var error_fname = false;
//            var error_sname = false;
//            var error_email = false;
//            var error_password = false;
//            var error_retype_password = false;
//
//            $("#form_fname").focusout(function(){
//               check_fname();
//            });
//            $("#form_sname").focusout(function() {
//               check_sname();
//            });
//            $("#form_email").focusout(function() {
//               check_email();
//            });
//            $("#form_password").focusout(function() {
//               check_password();
//            });
//            $("#form_retype_password").focusout(function() {
//               check_retype_password();
//            });
//
//            function check_fname() {
//               var pattern = /^[a-zA-Z]*$/;
//               var fname = $("#form_fname").val();
//               if (pattern.test(fname) && fname !== '') {
//                  $("#fname_error_message").hide();
//                  $("#form_fname").css("border-bottom","2px solid #34F458");
//               } else {
//                  $("#fname_error_message").html("Should contain only Characters");
//                  $("#fname_error_message").show();
//                  $("#form_fname").css("border-bottom","2px solid #F90A0A");
//                  error_fname = true;
//               }
//            }
//
//            function check_sname() {
//               var pattern = /^[a-zA-Z]*$/;
//               var sname = $("#form_sname").val()
//               if (pattern.test(sname) && sname !== '') {
//                  $("#sname_error_message").hide();
//                  $("#form_sname").css("border-bottom","2px solid #34F458");
//               } else {
//                  $("#sname_error_message").html("Should contain only Characters");
//                  $("#sname_error_message").show();
//                  $("#form_sname").css("border-bottom","2px solid #F90A0A");
//                  error_fname = true;
//               }
//            }
//
//            function check_password() {
//               var password_length = $("#form_password").val().length;
//               if (password_length < 8) {
//                  $("#password_error_message").html("Atleast 8 Characters");
//                  $("#password_error_message").show();
//                  $("#form_password").css("border-bottom","2px solid #F90A0A");
//                  error_password = true;
//               } else {
//                  $("#password_error_message").hide();
//                  $("#form_password").css("border-bottom","2px solid #34F458");
//               }
//            }
//
//            function check_retype_password() {
//               var password = $("#form_password").val();
//               var retype_password = $("#form_retype_password").val();
//               if (password !== retype_password) {
//                  $("#retype_password_error_message").html("Passwords Did not Matched");
//                  $("#retype_password_error_message").show();
//                  $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
//                  error_retype_password = true;
//               } else {
//                  $("#retype_password_error_message").hide();
//                  $("#form_retype_password").css("border-bottom","2px solid #34F458");
//               }
//            }
//
//            function check_email() {
//               var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//               var email = $("#form_email").val();
//               if (pattern.test(email) && email !== '') {
//                  $("#email_error_message").hide();
//                  $("#form_email").css("border-bottom","2px solid #34F458");
//               } else {
//                  $("#email_error_message").html("Invalid Email");
//                  $("#email_error_message").show();
//                  $("#form_email").css("border-bottom","2px solid #F90A0A");
//                  error_email = true;
//               }
//            }
//
//            $("#registration_form").submit(function() {
//               error_fname = false;
//               error_sname = false;
//               error_email = false;
//               error_password = false;
//               error_retype_password = false;
//
//               check_fname();
//               check_sname();
//               check_email();
//               check_password();
//               check_retype_password();
//
//               if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
//                  alert("Registration Successfull");
//                  return true;
//               } else {
//                  alert("Please Fill the form Correctly");
//                  return false;
//               }
//
//
//            });
//         });