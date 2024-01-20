const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");
var arrow = document.querySelector("button[type='submit']");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

   

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        
    }

};



arrow.addEventListener("click", function() {
    if (pass.value.length === 0) {
        alert("Tip💡: Add UPPERCASE, lowercase, symbols, letters for more secure passwords");
    } else if (pass.value.length < 4) {
        alert("🙅🏻‍♀️Password seems to be weak, Try more secure passwords.");
    } else if (pass.value.length >= 6 && pass.value.length < 12) {
        alert("📈Password seems to be medium, update it to be more secure.");
    } else if (pass.value.length >= 15 )  {
        alert("Account Created");
    } 
});

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (pass.value.length < 4) {
        strength.innerHTML = "Weak";
        pass.style.borderColor="#ff5925";
        msg.style.color="#ff5925";
    } else if (pass.value.length >= 6 && pass.value.length < 12) {
        strength.innerHTML = "Medium";
        pass.style.borderColor="orange";
        msg.style.color="orange";
    } else if (pass.value.length >= 12) {
        strength.innerHTML = "Strong";
        pass.style.borderColor="#26d730";
        msg.style.color="#26d730";
    }
});
