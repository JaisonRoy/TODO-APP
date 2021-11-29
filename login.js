function validate() {
    var uname = document.getElementById("typeEmailX");
    var pass = document.getElementById("typePasswordX");
    var unameval = document.getElementById("unameerror");
    var passval = document.getElementById("passerror");
    var usernamevalue = "admin";
    var passwordvalue = "12345";

    // console.log((uname.value + "Username"));
    // console.log((pass.value + "pass"));

    if (uname.value == usernamevalue && pass.value == passwordvalue) {
        //  console.log("if")
        unameval.innerHTML = "&#10003;";
        passval.innerHTML = "&#10003;";

        redirect();

    } else if (uname.value !== usernamevalue && pass.value == passwordvalue) {
        unameval.innerHTML = "wrong username";
        passval.innerHTML = "&#10003;";

        // console.log("Else")  
    } else if (uname.value == usernamevalue && pass.value !== passwordvalue) {
        unameval.innerHTML = "&#10003;";
        passval.innerHTML = "wrong password";
    } else {
        unameval.innerHTML = "wrong username";
        passval.innerHTML = "wrong password";
    }

}

function redirect() {
    // console.log("redirect")
    window.location.replace("./main/todo.html");
}