function getData() {
    const myUsername = document.getElementById("username").value;
    const result = document.getElementById("result");
    const success = document.getElementById("success");
    const myPassword = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password2").value;
    let signedUp = false;
    if(myUsername.length <= 3) {
        result.textContent = "Username must be longer than 3 characters";
    }
    else if(myPassword != confirmPassword) {
        result.textContent = "Passwords do not match";
    }
    else {
        success.textContent = "Signed up successfully";
        localStorage.setItem("newUsername", myUsername);
        localStorage.setItem("newPassword", myPassword);
        signedUp = true;
        localStorage.setItem("signtag", signedUp);
    }
}

function checkData() {
    const loginUsername = document.getElementById("username").value;
    const loginPassword = document.getElementById("password").value;
    const badResult = document.getElementById("badresult");
    const goodResult = document.getElementById("goodresult");
    let loggedIn = false;
    if (loginUsername != localStorage.getItem("newUsername")) {
        badResult.textContent = "Username is invalid";
    }
    else if (loginPassword != localStorage.getItem("newPassword")) {
        badResult.textContent = "Password is invalid";
    }
    else {
        goodResult.textContent = "Logged in successfully";
        loggedIn = true;
        localStorage.setItem("logtag", loggedIn);
    }
}

function changePage() {
    console.log("change Page");
    if (localStorage.getItem("logtag") == 'true') {
        document.getElementById("logincheck").textContent = "Already logged in";
    }
    if(localStorage.getItem("signtag") == 'true') {
        document.getElementById("signupcheck").textContent = "Already signed up";
    }
}