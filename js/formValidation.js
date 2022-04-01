<script type = "text/javascript">

    validate()
    {
        var user=  /^[a-zA-Z][a-zA-Z0-9]{3,20}/;
        if(!document.myForm.userName.value.match(user))
    {
        alert('Please enter correct Username format')
        return false;
    }
        var pass=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(!document.myForm.password.value.match(pass))
    {
        alert('Please enter correct password format')
        return false;
    }
        if(document.myForm.confirmPassword.value != document.myForm.password.value)
    {
        alert('Your password do not matches')
        return false;
    }
        var emailID = document.myForm.email.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID");
        return false;
        }
    }
</script>