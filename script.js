//Add to Cart
let cart = []
function addCart(name,price){
cart.push({name:name,price:price})
updateCart()
}
function updateCart(){
let cartItems=document.getElementById("cart-items")
let cartCount=document.getElementById("cart-count")
cartItems.innerHTML=""
let total=0
cart.forEach(item=>{
total+=item.price
cartItems.innerHTML+=`
<div class="cart-item">
<span>${item.name}</span>
<span>$${item.price}</span>
</div>
`})

cartCount.innerText=cart.length
document.getElementById("cart-total").innerText=total
document.getElementById("cart-panel").classList.add("active")
}
function closeCart(){
document.getElementById("cart-panel").classList.remove("active")
}


// let cart = 0;
// /* Add to cart */
// function addCart(){
// cart++
// document.getElementById("cart-count").innerText = cart
// alert("Cake added to cart 🛒")
// }

/* Explore cakes button */
function exploreCakes(){
document.getElementById("products").scrollIntoView({
behavior:"smooth"
})
}

// Explorebutton = openproductspage
// function exploreCakes(){
// window.location.href = "products";
// }

function slideRight(){
document.getElementById("productSlider")
.scrollBy({
left:300,
behavior:"smooth"
});
}

function slideLeft(){
document.getElementById("productSlider")
.scrollBy({
left:-300,
behavior:"smooth"
});
}




//odering products
// const params = new URLSearchParams(window.location.search);

// document.getElementById("product-name").innerText = params.get("name");
// document.getElementById("product-price").innerText = params.get("price");
// document.getElementById("product-img").src = params.get("img");


// document.addEventListener("DOMContentLoaded", function () {
// const form = document.querySelector("#contactForm");
// const msg = document.querySelector("#successMsg");
// form.addEventListener("submit", function(e){
// e.preventDefault(); // page reload stop
// msg.style.display = "block"; // message show
// form.reset(); // form clear
// });
// });

//orderproducts

