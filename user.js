document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

    
        const confirmation = confirm(`Registration Successful!\nUsername: ${username}\nEmail: ${email}`);

        if (confirmation) {
            window.location.href = 'first.html'; 
        }
    });
});

