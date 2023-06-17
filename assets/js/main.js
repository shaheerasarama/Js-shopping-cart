let links = document.getElementById("links");
let userinfo = document.getElementById("userinfo");
let username = document.getElementById("username");
// let users = JSON.parse(localStorage.getItem("users"));
let logout = document.getElementById("logout");
let userCart;
if(localStorage.getItem("cart") == null){
    userCart = [];
    document.getElementById("cartnum").innerHTML += 0;
}
else{
    userCart = JSON.parse(localStorage.getItem("cart"));
    let cartNum = JSON.parse(localStorage.getItem("cart")).length;
    document.getElementById("cartnum").innerHTML += cartNum;
}
if(localStorage.getItem("users") == null){
    links.style.display = "flex";
    userinfo.style.display = "none";
}
else{
    links.style.display = "none";
    userinfo.style.display = "flex";
    let userName = JSON.parse(localStorage.getItem("users"));
    username.innerHTML = userName[0].regName;
}
logout.addEventListener("click",function(){
     localStorage.removeItem("users");
     localStorage.removeItem("login");
});
let products = [
    {
        id:1,
        title:"headphone",
        img:"imgs/head.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, laboriosam?",
        price:70,
        qty:1
    },
    {
        id:2,
        title:"Phone Holder",
        img:"imgs/keycov.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, laboriosam?",
        price:15,
        qty:1
    },
    {
        id:3,
        title:"Laptop Stand",
        img:"imgs/laptops1.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, laboriosam?",
        price:30,
        qty:1
    },
    {
        id:4,
        title:"Laptop Case",
        img:"imgs/cov1.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, laboriosam?",
        price:10,
        qty:1
    },
    {
        id:5,
        title:"Laptop",
        img:"imgs/lap.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, laboriosam?",
        price:1200,
        qty:1
    },
    {
        id:6,
        title:"Iphone 14 Pro Max",
        img:"imgs/iphone.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, laboriosam?",
        price:3000,
        qty:1
    }
];
localStorage.setItem("products",JSON.stringify(products));
function display(){
let prods = products.map((item)=>{
    return `
    <div class="prod">
        <img src="${item.img}" alt="">
        <a onclick="detail(${item.id})">${item.title}</a>
        <p>${item.desc}</p>
        <p class="price">${item.price}$</p>
        <button onclick ="cart(${item.id})">add to cart</button>
    </div>
    `
});
document.getElementById("prods").innerHTML = prods.join(""); //join to remove the ; from the map function
console.log(prods);
}
display();
function cart(id){
    if(localStorage.getItem("users") == null){
        window.location = "login.html";
    }
    else{
        let res = products.find((item) => item.id == id);
        let check = userCart.find((item) => item.id == res.id);
        //console.log(userCart);
        if(check){
            check.qty+=1;
            localStorage.setItem("cart",JSON.stringify(userCart));
        }
        else{
            userCart.push(res);
            localStorage.setItem("cart",JSON.stringify(userCart));
            document.getElementById("cartnum").innerHTML = userCart.length;
        }
        console.log(check);
    }
}
function check(){
    if(localStorage.getItem("users")){
        window.location = "cart.html";
    }
    else{
        window.location = "login.html";
    }
}
function detail(id){
    localStorage.setItem("itemid",id);
    window.location = `cartDet.html?${id}`;
}

// search 
let input = document.querySelector("#search");
input.addEventListener("keyup",function(e){
   document.getElementById("prods").style.display = "none";
   let res = products.filter((item) => {
     return item.title.toLocaleLowerCase().includes(e.target.value.toLowerCase());
   })
   let searchRes = res.map((item) => {
    return `
    <div class="Sprod">
        <img src="${item.img}" alt="">
         <div class="Sprod-text">
            <a>${item.title}</a>
            <p>${item.desc}</p>
            <p class="price">${item.price}$</p>
            <button onclick ="cart(${item.id})">add to cart</button>
        </div>
    </div>  
    `
   })
   document.getElementById("Sprods").innerHTML = searchRes;
})