document.getElementById('btn-submit').addEventListener('click', function () {
    const emailInputValue = document.getElementById('user-email');
    let email_id = emailInputValue.value;
    emailInputValue.value = "";
    console.log(email_id)
    const passwordInputValue = document.getElementById('user-password');
    const password = passwordInputValue.value;
    passwordInputValue.value = '';
    if (email_id.endsWith('@gmail.com') === true && password == 1234) {
        console.log(window.location.href = 'bank.html')
    }
    else {
        alert("Enter a valid email or password");
    }
})


