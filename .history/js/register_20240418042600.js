var username=document.querySelector("#username")
var email=document.querySelector("#email")
var password=document.querySelector("#password")
var register=document.querySelector("#sign_up")

register.addEventListener("click" , function(e) {
    e.preventDefault()
    if(username.value === "" || email.value==="" || password.value=="")
    {
        alert("Please Enter Your Data")
    }
    else {
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        setTimeout(() => {
            window.location="login.html"

        } , 1000)
    }
})