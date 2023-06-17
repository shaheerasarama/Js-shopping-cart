if(!localStorage.getItem("users")){
    window.location = "index.html";
}
console.log((!localStorage.getItem("cart")));
if((localStorage.getItem("cart")) != "[]"){
    displayCart();
    document.getElementById("message").style.display = "none";
    }
else{
    document.getElementById("message").style.display = "block";
    document.getElementById("cartShow").style.display = "none";
}
function displayCart()
{
    let cartItems = userCart.map((item,index)=>{
        return `
        <div class="prod">
            <img src="${item.img}" alt="">
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
            <span>${item.qty}</span>
            <button onclick ="remove(${index})">remove from cart</button>
        </div>
        `;
    });
    document.getElementById("cartShow").innerHTML = cartItems;
}
//function remove 
function remove(id)
{
    userCart.splice(id,1);
    localStorage.setItem("cart",JSON.stringify(userCart));
    displayCart();
    document.getElementById("cartnum").innerHTML = userCart.length;
    if(localStorage.getItem("cart") == "[]"){
    location.reload();
    }
}