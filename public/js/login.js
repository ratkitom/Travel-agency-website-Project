let signInForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form");

signInForm.addEventListener("submit",function(e){

e.preventDefault();

let email = document.getElementById("login-email").value;

let password = document.getElementById("login-password").value;

fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((resp) => {
        if(resp.status === 400) {
            throw new Error();
        }
        return resp.json();
    }).then((data) => {
        window.location.href = data.redirectURL;
    }).catch(() => alert('Wrong email or password'));


});



registerForm.addEventListener("submit",function(e){

    e.preventDefault();

    let email = document.getElementById("register-email").value;

    let password = document.getElementById("register-password").value;

    

    let reEnterPassword = document.getElementById("register-ReEnterpassword").value;

    if(password !== reEnterPassword) {
        return;
    }

    fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then((resp) => resp.text()).then((data) => alert(data));
    
    
    });

