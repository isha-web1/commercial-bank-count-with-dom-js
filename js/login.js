document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if(email === 'isha@web.com' && password === 'khan'){
        window.location.href = 'bank.html'
    }
    else{
       alert('please submit the valid password')
    }
})