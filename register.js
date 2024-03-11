//string = "raniel", 'raniel" , "23" 
//number - 24, 24.1, 1230c
//boolen - true, false, 1 or 0, = false, >

console.log("Hello World");

let txtUsername = document.querySelector("#txtUsername");
let txtPassword = document.querySelector("#txtPassword");
let txtConfirmPassword = document.querySelector("#txtConfirmPassword");
let btnRegister = document.querySelector("#btnRegister");


btnRegister.onclick = function () {
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}
function register (username, password, confirmPassword) {
    console.log(username, password, confirmPassword)
    // If...else if...else
    // Conditional Operators (Greater Than >, Less than <, Equal ==, Not !, Or ||)
    // Greater Than or Equal >=, Less Than or Equal <=
    //Not Equal !=
    

    
    if(password == confirmPassword){
       return console.log("Password match!")
    } else if ( password == "" || confirmPassword == ""){
        return console.log("Password must not be empty.")
    }
    else {
      return console.log("Password does not match!")
    }
}