$(function() {

    $('.form-holder').delegate("input", "focus", function() {
        $('.form-holder').removeClass("active");
        $(this).parent().addClass("active");
    });

    $('.form-holder').delegate("textarea", "focus", function() {
        $('.form-holder').removeClass("active");
        $(this).parent().addClass("active");
    });

});
let section = document.getElementById('sec1 ');

const username = document.getElementById('name');
const phone = document.getElementById('phone');
const parentPhone = document.getElementById('parentPhone');
const facebook = document.getElementById('facebook');
const age = document.getElementById('age');
const sectionTwo = document.getElementById('sec2 ');
const schoolName = document.getElementById('school');
const address = document.getElementById('address');
const education = document.getElementById('education');
const knowing = document.getElementById('knowing');

document.getElementById('next').addEventListener("click", (e) => {
    e.preventDefault();

    const usernameValue = username.value;
    const phoneValue = phone.value;
    const parentPhoneValue = parentPhone.value;
    const facebookvalue = facebook.value;
    const ageValue = age.value;
    var numberr = /^[-+]?[0-9]+$/;
    var letters = /^[A-Za-z]+$/;
    const pattern = /^[-+]?[2-9]+$/;
    var hasErrors = false;

    if (usernameValue === '') {
        hasErrors = true;
        setErrorFor(username, 'Username cannot be blank');
        hasErrors = true;

    } else if (usernameValue.length < 8) {
        hasErrors = true;
        setErrorFor(username, 'You must enter your fill name ');
    } else if (usernameValue.match(numberr)) {
        hasErrors = true;
        setErrorFor(username, 'Enter alphabets only');


    } else {
        setSuccessFor(username);
    }

    if (phoneValue === '') {
        hasErrors = true;
        setErrorFor(phone, 'Phone cannot be blank');
    }
    //  else if (phoneValue.startsWith(pattern)) {
    //     console.log("false")
    //     hasErrors = true;
    //     setErrorFor(phone, 'Your number is not valid  ');}
    else if (phoneValue.length != 11) {
        hasErrors = true;
        setErrorFor(phone, 'Phone number must be 11 numbers ');

    } else if (phoneValue.match(letters)) {
        hasErrors = true;
        setErrorFor(phone, 'Enter numbers only ');

    } else {
        setSuccessFor(phone);
    }

    if (parentPhoneValue === '') {
        hasErrors = true;
        setErrorFor(parentPhone, 'Parent Number cannot be blank');
    } else if (phoneValue === parentPhoneValue) {
        hasErrors = true;
        setErrorFor(parentPhone, 'You must put your Parent number');
    } else if (parentPhoneValue.length != 11) {
        hasErrors = true;
        setErrorFor(parentPhone, 'Phone number must be 11 numbers ');

    } else if (parentPhoneValue.match(letters)) {
        hasErrors = true;
        setErrorFor(parentPhone, 'Enter numbers only ');

    } else {
        setSuccessFor(parentPhone);
    }
    if (facebookvalue === '') {
        hasErrors = true;
        setErrorFor(facebook, 'Facebook account cannot be blank');
    } else {
        setSuccessFor(facebook);
    }
    if (ageValue === '') {
        hasErrors = true;
        setErrorFor(age, 'Age cannot be blank');
    } else if (ageValue >= 20) {
        hasErrors = true;
        setErrorFor(age, 'You must be a junior student ');
    } else {
        setSuccessFor(age);
    }

    if (!hasErrors) {
        $("#sec1").fadeOut(1000, function() {
            $("#sec2").fadeIn(500);
        });
    }

});
$(function() {
    /*
    $("#next").click(function() {

        $("#sec1").fadeOut(1000, function() {
            $("#sec2").fadeIn(500);
        });

    });*/
    $("#prev").click(function() {

        $("#sec2").fadeOut(500, function() {
            $("#sec1").fadeIn(500);
        });

    });
});
document.getElementById('submit').addEventListener("click", (e) => {


    const schoolNameValue = schoolName.value;
    const educationValue = education.value;
    const addressValue = address.value;
    const knowingValue = knowing.value;
    var hasErrors = false;

    if (schoolNameValue === '') {
        hasErrors = true;
        setErrorFor(schoolName, 'School Name cannot be blank');
    } else {
        setSuccessFor(schoolName);
    }
    if (educationValue === '') {
        hasErrors = true;
        setErrorFor(education, 'Education administration cannot be blank');
    } else {
        setSuccessFor(education);
    }

    if (addressValue === '') {
        hasErrors = true;
        setErrorFor(address, 'address cannot be blank');
    } else {
        setSuccessFor(address);
    }
    if (knowingValue === '') {
        hasErrors = true;
        setErrorFor(knowing, 'you must fill the blank');
    } else {
        setSuccessFor(knowing);
    }

    if (hasErrors) {
        e.preventDefault();
    }
    //e.preventDefault();
});




function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-holder error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-holder success';
    small.innerText = "";
}