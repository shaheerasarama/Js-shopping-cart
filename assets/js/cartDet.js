let prooductsLocal = JSON.parse(localStorage.getItem("products"));
let prodid = localStorage.getItem("itemid");
let re = prooductsLocal.find((item) => item.id == prodid);
console.log(re);
document.getElementById("prodDet").innerHTML = 
`<div>
    <img src="${re.img}" alt="">
    <h2>${re.title}</h2>
    <p>${re.desc}</p>
    <p class="price">${re.price}$</p>
</div>
`;
