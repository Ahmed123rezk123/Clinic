var userInfo=document.querySelector("#user_info")

var userData=document.querySelector("#user")

var links=document.querySelector("#links")

if(localStorage.getItem("username")){ 
    links.remove();

    userInfo.style.display="flex";

    userData.innerHTML=localStorage.getItem("username");

}
var logout=document.querySelector("#logout")
logout.addEventListener("click",function () {
    localStorage.clear()
    setTimeout(()=> {
        window.location="login.html"
    } , 1500)
})
