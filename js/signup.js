



$(document).ready(function() {

var maxLength = 200;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var result = maxLength-length;
  $('#chars').html(result + ' characters remaining');
});

 $(function() {

    $( "#datepicker" ).datepicker({  maxDate: new Date() });
  });

$("#country").select2();
$("#phone_error_message").hide();
$("#email_error_message").hide();
$("#password_error_message").hide();
$("#retype_password_error_message").hide();

  $.validator.addMethod("customPhone", function(value, element) {
    return this.optional(element) || /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(value);
  },"Enter valid phone number");
    $.validator.addMethod("cutomPassword", function(value, element){
      return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value);
    }, "pass contains min 7 char and 1 caps");
    $.validator.addMethod("customEmail", function(value, element) {
        return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value );
      }, "Enter valid email address");
        $.validator.addMethod("customName", function(value, element) {
            return this.optional(element) || /^[a-zA-Z]*$/.test(value );
          }, "Enter valid Name");

var $signupForm = $("#hide")
if($signupForm.length){
    $signupForm.validate({
        rules:{
          phone: {
            required: true,
            customPhone: true,
         },
          firstname:{
           customName:true
          },
           lastname:{
            customName:true
             },
          email:{
          required: true,
          customEmail: true,
           },
          password:{
            required:true,
            required:true,
            cutomPassword: true
          },
          dateOfBirth:{
           required:true
          },
           confromPassword:{
                    required: true,
                     equalTo: "#password"
        }

        },
        messages:{
           phone:{
            required: 'phone number is required',
            customPhone: 'enter valid phone number'
           },
            email:{
              required: 'email is mandatory',
              customEmail: 'Enter valid email address'
                  },
            dateOfBirth:{
                      required: 'date of birth is required'
                      },
           password:{
             required: 'password is required',
             cutomPassword: 'pass must contain 1caps, 1small, 1special char minium 8 char'
           },
           confromPassword:{
             required: 'confrom password required',
             equalTo: 'please enter same password'
           }
        }

    })
}


$("#click").click(function() {
 if ( $("#hide").valid()) {
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
var dob = document.getElementById("datepicker").value;
var countryLabel = document.getElementById("nationlabel").textContent;
var country = document.getElementById("country").value;
var hobbiesLabel = document.getElementById("hobbieslabel").textContent;
var genderLabel = document.getElementById("genlabel").textContent;
var gender = document.getElementsByName("gender");
// var checks = $("input[type=checkbox][name=hobb]:checked").val();
var check = document.getElementsByClassName('hobb');
var str = '';
for(i=0; i < check.length; i++){
      if(check[i].checked === true){
          str += check[i].value + " ";
      document.getElementById("hobbies").innterHTML = str;
      console.log(str);
      }
}
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
document.getElementById("hobbies_label").innerHTML = hobbiesLabel;

document.getElementById("gen_label").innerHTML = genderLabel;
for(i = 0; i < gender.length; i++) {
if(gender[i].checked){
document.getElementById("gen").innerHTML = gender[i].value;
}
}
    return true;
   }
   });
});