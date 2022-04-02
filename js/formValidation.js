document.myForm = undefined;

function validate()
{
    var username=  /^[a-zA-Z][a-zA-Z0-9]{3,20}/;

    if(!document.myForm.username.value.match(username))
    {
        alert('Please enter correct Username format');
        return false;
    }

    var pass=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(!document.myForm.pass.value.match(pass))
    {
        alert('Please enter correct password format');
        return false;
    }
    if(document.myForm.conpass.value != document.myForm.password.value)
    {
        alert('Your password do not matches');
        return false;
    }
    var email = document.myForm.email.value;

    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID");
        return false;
    }

}