function login(){
    const correctUsername = "admin";
    const correctpassword = "12345";
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message')
    if(username === "" ||password === ""){
    message.textContent = "Plesae Write Username And Password";
    message.style.color = "red";

    }
    else if(username === correctUsername && password === correctpassword){
    message.textContent = "Login successful Redirecting.."
    message.style.color = "green"

    setTimeout(function(){
        window.location.href = "dashboard.html";
    }, 2000)
    }
    else{
    message.textContent = "Username & password wrong";
    message.style.color="blue";
  }
}