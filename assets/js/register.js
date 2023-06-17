if(localStorage.getItem("users")){
    window.location = "index.html";
}
let name = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let btn = document.getElementById("btn");
let alert = document.getElementById("alert");
let users = [];
// if(localStorage.getItem("users") == null){
//      users = [];
// }
// else{
//     users = JSON.parse(localStorage.getItem("users"));
// }

btn.addEventListener("click",function(e){
    e.preventDefault();
    if(name.value == "" || email.value == "" || pass.value == ""){
        alert.style.display = "block";
        setTimeout(() => {
            alert.style.display = "none";
        }, 3000);
    }
    else{
        let user = {
            regName : name.value,
            regEmail : email.value,
            regPass : pass.value,
       }
       //console.log(user);
       users.push(user);
       console.log(users);
       name.value = "";
       email.value = "";
       pass.value = "";
       localStorage.setItem("users",JSON.stringify(users));
       window.location = "login.html";
    }
})


