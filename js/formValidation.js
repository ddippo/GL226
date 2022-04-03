function validate() {
    let username = /^[a-zA-Z][a-zA-Z0-9]{3,20}/;
    if(!document.reg.username.value.match(username)) {
        alert('Please use the correct username format')
        return false;
    }

    let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!document.reg.pass.value.match(pass)) {
        alert('Please use the correct password format')
        return false;
    }
    if(document.reg.conpass.value != document.reg.pass.value) {
        alert('Your passwords do not match')
        return false;
    }
} 