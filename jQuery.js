//Popup of Login button
$(function (){
    $("#loginmodal").dialog({
        modal: true,
        autoOpen: false,
        title: "Login Box",
        width :700,
        height:400
    });
    $("#login").click(function(){
        $("#loginmodal").dialog('open');
    });
});

//Popup of Registration Button
$(function (){
    $("#RegistrationModal").dialog({
        modal: true,
        autoOpen: false,
        title: "Registration Box",
        width: 800,
        height:500
    });
    $("#reglink").click(function(){
        $("#RegistrationModal").dialog('open');
        $("#loginmodal").dialog('close');
    });
    $("#registration").click(function(){
        $("#RegistrationModal").dialog('open');
    });
});

//Validation on Registration Form
$(document).ready(function(){
    $('#info-name').hide();
    $('#info-email').hide();
    $('#info-num').hide();
    $('#info-add').hide();
    $('#info-state').hide();
    $('#info-city').hide();
    $('#info-pass').hide();
    $('#info-conpass').hide();
    $('#info-gen').hide();
    $('#info-hob').hide();

    $('#UserFullName').keyup(function(){
        checkFullName();
    });
    $('#UserEmail').keyup(function(){
        checkEmail();
    });
    $('#PhoneNumber').keyup(function(){
        checkPhoneNum();
    });
    $('#password').keyup(function(){
        checkPassword();
    });
    $('#ConfirmPassword').keyup(function(){
        checkConformPassword();
    });
    $('#UserAddress').keyup(function(){
        checkUserAddress();
    });
    $('#State').click(function(){
        checkState();
    });
    $('#CityName').keyup(function(){
        checkCity();
    });
    $('.gender').click(function(){
        checkGender();
    });
    $('.hobby').click(function(){
        checkHobby();
    });

    //Validation for name
    function checkFullName(){
        var pattern = /^[a-zA-Z\s_, ]*$/;
        var name = $('#UserFullName').val();
        var nameLength = $('#UserFullName').val().length;
        if (name == ''){
            $('#info-name').html("Name required");
            $('#info-name').show();
            $('#UserFullName').css("border","2px solid #F90A0A");
            console.log('fail');
        }
        else if(pattern.test(name) && name !== '' && nameLength >2){
            $('#info-name').hide();
            $('#UserFullName').css('border','2px solid #34F458');
            console.log('pass')
        }
        else{
            $('#info-name').html("!!Should contain only Characters and name length should be start with 3 letters!!");
            $('#info-name').show();
            $('#UserFullName').css("border","2px solid #F90A0A");
            console.log('fail');
        }
    }

        function checkEmail(){
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $('#UserEmail').val();
            if(email == ''){
                $('#info-email').html('Email Required');
                $('#info-email').show();
                $('#UserEmail').css("border","2px solid #F90A0A");
                console.log('fail');
            }
            else if(pattern.test(email) && email !== ''){
                $('#info-email').hide();
                $('#UserEmail').css("border","2px solid #34F458");
                console.log('pass');
            }
            else{
                $("#info-email").html("Invalid Email");
                $("#info-email").show();
                $("#UserEmail").css("border-bottom","2px solid #F90A0A");
            }
        }

        function checkPhoneNum(){
            var num =$('#PhoneNumber').val();
            var numLength =$("#PhoneNumber").val().length;
            if(num == ''){
                $('#info-num').html('Phone Number Required');
                $('#info-num').show();
                $('#PhoneNumber').css("border","2px solid #F90A0A");
                console.log('fail');
            }
            else if(num !== '' && numLength === 10 && num!== 'e'){
                $('#info-num').hide();
                $('#PhoneNumber').css('border','2px solid #34F458');
                console.log('pass')
            }
            else{
                $("#info-num").html("Mobile Number have only 10 digits number");
                $("#info-num").show();
                $("#PhoneNumber").css("border-bottom","2px solid #F90A0A");
                console.log('fail')
            }
        }

        function checkPassword(){
            var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[0-9]).{5,15}$/;
            var password = $('#password').val();
            var password_length =$('#password').val().length;
            if (password == ''){
                $("#info-pass").html("Password required");
                $("#password").css("border","2px solid #F90A0A");
                $("#info-pass").show();
                console.log('fail');
                
              }
            else if (pattern.test(password) && password !== '' && password_length > 5 && password_length < 16) {
               $("#password").css("border","2px solid #34F458");
               $("#info-pass").hide();
              console.log('pass');
               
            }
             else {
                $("#info-pass").html("!!Fill the password correctly in alphanumeric form and have atleast 6 character!!");
               $("#info-pass").show();
                $("#password").css("border","2px solid #F90A0A");
                console.log('fail');
            }
        }
        function checkConformPassword(){
            var password = $('#password').val();
            var conpass = $('#ConfirmPassword').val();
            if(conpass == ''){
                $("#info-conpass").html("Password required");
                $("#ConfirmPassword").css("border","2px solid #F90A0A");
                $("#info-conpass").show();
                console.log('fail');
            }
            else if (conpass === password){
                $("#info-conpass1").html('Password Match').fadeOut(5000);
                $("#ConfirmPassword").css("border","2px solid #34F458");
               $("#info-conpass").hide();
              console.log('pass');
            }
            else{
                $("#info-conpass").html("Password did not match");
                $("#ConfirmPassword").css("border","2px solid #F90A0A");
                $("#info-conpass").show();
                console.log('fail');
            }
        }

        //Validation for address
        function checkUserAddress(){
            var pattern =  /^[a-zA-Z0-9\s_, ]*$/
            var Address = $('#UserAddress').val();
            if(Address == ''){
                $("#info-add").html("Address required");
                $("#UserAddress").css("border","2px solid #F90A0A");
                $("#info-add").show();
                console.log('fail');
            }
            else if(pattern.test(Address) && Address !== '' && Address.length >=10){
                $("#UserAddress").css("border","2px solid #34F458");
                $("#info-add").hide();
               console.log('pass');
            }
            else{
                $("#info-add").html("You have to give proper Address with house number");
                $("#UserAddress").css("border","2px solid #F90A0A");
                $("#info-add").show();
                console.log('fail');
            }
        }

        //validation for city
        function checkCity(){
            var pattern =  /^[a-zA-Z\s_, ]*$/
            var city = $('#CityName').val();
            if(city == ''){
                $("#info-city").html("City required");
                $("#CityName").css("border","2px solid #F90A0A");
                $("#info-city").show();
                console.log('fail');
            }
            else if(pattern.test(city) && city !== '' && city.length > 3){
                $("#CityName").css("border","2px solid #34F458");
                $("#info-city").hide();
               console.log('pass');
            }
            else{
                $("#info-city").html("You have to give proper City");
                $("#CityName").css("border","2px solid #F90A0A");
                $("#info-city").show();
                console.log('fail');
            }
        }

        //Validation for gender selection
        var option = false;
        $('#male').click(function(){
            option = true;
            $('#info-gen').hide()
        });
        $('#female').click(function(){
            option = true;
            $('#info-gen').hide()
        });

        function checkGender(){
            var male = $('#male').attr('checked');
            var female = $('#female').attr('checked');
            if(male !== 'checked' && female !== 'checked' && option!== true){
                $('#info-gen').show().html("Select gender field")
            }
        }

    $('#AccountCreate').click(function(event){
        event.preventDefault();
        checkFullName();
        checkEmail();
        checkPhoneNum();
        checkUserAddress();
        checkState();
        checkCity();
        checkPassword();
        checkConformPassword();
        checkGender();
        checkHobby();
        var name = $('#UserFullName').val();
        var namepattern = /^[a-zA-Z\s_, ]*$/;
        var nameLength = $('#UserFullName').val().length;
        var email = $('#UserEmail').val();
        var emailpattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var num =$('#PhoneNumber').val();
        var numLength =$("#PhoneNumber").val().length;
        var password = $('#password').val();
        var passpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[0-9]).{5,15}$/;
        var password_length =$('#password').val().length;
        var conpass = $('#ConfirmPassword').val();
        var Address = $('#UserAddress').val();
        var Addresspattern =  /^[a-zA-Z0-9\s_, ]*$/
        var city = $('#CityName').val();
        var citypattern =  /^[a-zA-Z\s_, ]*$/
        var state = $('#State').val();
        var hobby = $('input[type="checkbox"]:checked');
        hobbylenght=hobby.length;
        console.log(hobbylenght)
        var male = $('#male').attr('checked');
        var female = $('#female').attr('checked');
        if (namepattern.test(name) && name !== '' && nameLength >2 && email !=='' && emailpattern.test(email) && 
            num !=='' && numLength === 10 && num!== 'e' && passpattern.test(password) && password !== '' && 
            password_length > 5 && password_length < 16 && conpass !=='' && conpass === password  && 
            Addresspattern.test(Address) && Address !== '' && Address.length >=10 && citypattern.test(city) && city !== '' 
            && city.length > 3 && state != '' && hobbylenght > 1  && (male == 'checked' || female == 'checked')){
                alert('Data Saved successfully.You have created your account');
                console.log(true);
                location.reload()
        }
        else{
            alert('Complete all the entries');
            console.log(false);

        } 
        
    });

    function checkHobby(){
        var Hobby = $('input[type="checkbox"]:checked');
        // console.log(Hobby)
        if(Hobby.length < 2){
            $('#info-hob').show();
            $('#info-hob').html('Select atleast 2 hobbies');
            return false;
        }
        else{
            $('#info-hob').hide();
            return true;
        }
    }

    //for State
    function checkState(){
        var state = $('#State').val();
        if(state == ''){
            $('#info-state').show().html("Select one State")
        }
        else{
            $('#info-state').hide()
        }
    }
    
});

$(document).ready(function(){
    $('#PassInfo').hide();
    $('#emailInfo').hide();

    $('#Useremail').keyup(function(){
        CheckLoginEmail();
    });

    $('#userpswd').keyup(function(){
        CheckLoginPswd();
    });

    $('#rememberme').click(function(){
        var email = $('#Useremail').val();
        var pswd = $('#userpswd').val();
        console.log('User Email is ' +email);
        console.log('User Password is ' +pswd);
    });

        function CheckLoginEmail(){
            var email = $('#Useremail').val();
            var patternEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if(email == ''){
                $('#emailInfo').html('Email Field required').show();
                $('#Useremail').css('border','2px solid red');
            }
            else if(patternEmail.test(email) && email !== ''){
                $('#emailInfo').hide();
                $('#Useremail').css('border','2px solid green');
            }
            else{
                $('#Useremail').css('border','2px solid red');
                $('#emailInfo').html('Invalid Email').show();
            }
        }

        function CheckLoginPswd(){
            var password = $('#userpswd').val();
            var patternPswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[0-9]).{5,15}$/;
            if(password == ''){
                $('#PassInfo').html('Password Field required').show();
                $('#userpswd').css('border','2px red solid');
            }
            else if(patternPswd.test(password) && password !== ''){
                $('#PassInfo').hide();
                $('#userpswd').css('border','2px green solid');
            }
            else{
                $('#PassInfo').html('Password should contain alphabets(A-Z and a-z) and numbers(0-9) and atleast have 6 characters').show();
                $('#userpswd').css('border','2px red solid');
            }
        }


    $('#LoginBtn').click(function(event){
        event.preventDefault();
            CheckLoginEmail();
            CheckLoginPswd();
        var email = $('#Useremail').val();
        var patternEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var password = $('#userpswd').val();
        var patternPswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[0-9]).{5,15}$/;

        if(patternEmail.test(email) && email !== '' && password !== '' && patternPswd.test(password)){
            alert ('You Logged In Successfully');
            location.reload('');
        }
        else{
            alert('Complete all the entries');
        }  
    });
});