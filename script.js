let cart = 0;
/* Add to cart */
function addCart(){
cart++
document.getElementById("cart-count").innerText = cart
alert("Cake added to cart 🛒")
}

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