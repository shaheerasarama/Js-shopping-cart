if(localStorage.getItem("login")){
    window.location = "index.html";
}
let email = document.getElementById("email");
let pass = document.getElementById("password");
let btn = document.getElementById("btn");
let alert = document.getElementById("alert");
let users = JSON.parse(localStorage.getItem("users"));
btn.addEventListener("click",function(e){
    e.preventDefault();
    if(email.value == "" || pass.value == ""){
        alert.style.display = "block";
        setTimeout(() => {
            alert.style.display = "none";
        }, 3000);
    }
    else{
        for(let i = 0;i < users.length;i++){
            if(email.value == users[i].regEmail && pass.value == users[i].regPass){
                window.location = "index.html";
                localStorage.setItem("login","true");
            }
            else{
                console.log("error");
            }
        }
    }
})


