const before = document.getElementById("before");
const next = document.getElementById("next");
const carousel = document.getElementById("carousel");
const carouselImages = document.querySelectorAll(".image");
const subImage = document.querySelectorAll(".sub_image");
const modalTrigger = document.querySelectorAll(".modal_trigger");
const modalWindow = document.querySelector(".shoes_overview");
const closeModal = document.querySelector(".close_modal_btn");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");

let fondoTransparente = document.querySelectorAll(".modal_transparent_bg");
let contador = 1;
var carouselWidth = carousel.clientWidth;

// ----- ----- Carousel ----- -----

if(contador == 1){
    fondoTransparente[0].classList.add("show--transparency");
}
next.addEventListener("click", () => {
     carousel.scrollLeft += (carouselWidth * contador ) - carousel.scrollLeft;
     if (contador == carouselImages.length) {
          carousel.scrollLeft = carousel.clientWidth - (carouselImages.length * carousel.clientWidth);
          contador = 1;
     }else
          contador++;

     moveGuideForward();
})

before.addEventListener("click", () => {
    let carouselWidth = carousel.clientWidth;
    if (contador > 1) {
         contador--;
    } 
    carousel.scrollLeft = (carouselWidth * contador) - carouselWidth;

    moveGuideBackwards();

})

function moveGuideForward(){
    removeBackground();
    fondoTransparente[0].classList.remove("show--transparency");
    if(contador == 1){
        fondoTransparente[contador - 1].classList.add("show--transparency");
        fondoTransparente[carouselImages.length - 1].classList.remove("show--transparency");
    } else if(contador == 2){
        fondoTransparente[contador - 2].classList.remove("show--transparency");
        fondoTransparente[contador - 1].classList.add("show--transparency");
    } else if(contador == 3){
        fondoTransparente[contador - 2].classList.remove("show--transparency");
        fondoTransparente[contador - 1].classList.add("show--transparency");
    } else if(contador == 4){
        fondoTransparente[contador - 2].classList.remove("show--transparency");
        fondoTransparente[contador - 1].classList.add("show--transparency");
    }
}

function moveGuideBackwards(){
    removeBackground();
    if(contador == 3){
        fondoTransparente[carouselImages.length - 1].classList.remove("show--transparency");
        fondoTransparente[contador - 1].classList.add("show--transparency");
    } else if(contador == 2){
        fondoTransparente[contador].classList.remove("show--transparency");
        fondoTransparente[contador - 1].classList.add("show--transparency");
    } else if(contador == 1){
        fondoTransparente[contador].classList.remove("show--transparency");
        fondoTransparente[contador - 1].classList.add("show--transparency");
    } 
}

// ----- ----- Modal Window ----- -----

function removeBackground(){
    fondoTransparente[0].classList.remove("show--transparency");
    fondoTransparente[1].classList.remove("show--transparency");
    fondoTransparente[2].classList.remove("show--transparency");
    fondoTransparente[3].classList.remove("show--transparency");
}

modalTrigger[0].addEventListener("click",()=>{
    cartProducts.classList.add("cart--show");
    removeBackground();
    modalWindow.style.transform = "scale(1)";
    carousel.scrollLeft = 0;
    fondoTransparente[0].classList.add("show--transparency");
    contador = 1; 
    contador = 1;
})

modalTrigger[1].addEventListener("click",()=>{
    cartProducts.classList.add("cart--show");
    removeBackground();
    fondoTransparente[1].classList.add("show--transparency");
    modalWindow.style.transform = "scale(1)";
    carousel.scrollLeft += (carouselWidth ) - carousel.scrollLeft;
    contador = 2;
})
modalTrigger[2].addEventListener("click",()=>{
    cartProducts.classList.add("cart--show");
    removeBackground();
    fondoTransparente[2].classList.add("show--transparency");
    modalWindow.style.transform = "scale(1)";
    carousel.scrollLeft += (carouselWidth * 2 ) - carousel.scrollLeft;
    contador = 3;
})
modalTrigger[3].addEventListener("click",()=>{
    cartProducts.classList.add("cart--show");
    removeBackground();
    fondoTransparente[3].classList.add("show--transparency");
    modalWindow.style.transform = "scale(1)";
    carousel.scrollLeft += (carouselWidth * 3 ) - carousel.scrollLeft;
    contador = 4;
})

closeModal.addEventListener("click",()=>{
    modalWindow.style.transform = "scale(0)";
})

// ----- ----- Product Amount ----- -----
 let productAmount = 0;
 let quantity = document.querySelector(".quantity");
 
 add.addEventListener("click",()=>{
         productAmount++;
         quantity.textContent = productAmount;
 })

 subtract.addEventListener("click",()=>{
     if(productAmount >= 1){
         productAmount--;
         quantity.textContent = productAmount;
     }
 })

 // ----- ----- Cart Display ----- -----

const shoppingCart = document.querySelector(".cart");
const cartProducts = document.querySelector(".cart_products");
const addButton = document.querySelector(".add_btn");
let notification = document.querySelector(".notification");
let shoesPrice = document.querySelector(".shoes_price");
let shoesAmount = document.querySelector(".shoes_amount");
let totalPrice = document.querySelector(".total");
let cartMessage = document.querySelector(".cart_message");
let productContainer = document.querySelector(".product_container");
let productPrice = document.querySelector(".price");
let deleteButton = document.querySelector(".delete_icon");
let checkoutBtn = document.querySelector(".checkout");
let checkoutBtnContainer = document.querySelector(".checkout_btn_container");

 shoppingCart.addEventListener("click",()=>{
    cartProducts.classList.toggle("cart--show");
 })

 addButton.addEventListener("click",()=>{
    if(productAmount > 0){
        notification.style.display = "block";
        let resultado = parseFloat(notification.textContent) + productAmount;
        notification.textContent = resultado;
        cartMessage.style.display = "none";
        productContainer.style.display = "flex";
        checkoutBtnContainer.style.display = "block";
        shoesPrice.textContent = productPrice.textContent;
        shoesAmount.textContent = resultado;
        totalPrice.textContent = "$" + (Number(shoesPrice.textContent.slice(1,7)) * resultado);
        productAmount = 0;
        quantity.textContent = "0";
    } 
})

deleteButton.addEventListener("click",()=>{
    notification.textContent = "0";
    productContainer.style.display = "none";
    notification.style.display = "none";
    cartMessage.style.display = "flex";
    checkoutBtnContainer.style.display = "none";
 })
 // ----- ----- Horizontal Menu ----- -----

 const openMenu = document.querySelector(".menu_hamburguer");
 const closeMenu = document.querySelector(".close_menu");
 const menuSlide = document.querySelector(".menu_container");
 const menuBackground = document.querySelector(".menu");

openMenu.addEventListener("click",()=>{
    menuBackground.classList.toggle("menu_background--show");
    menuSlide.classList.toggle("menu_slide--show");
    menuBackground.style.pointerEvents = "auto";
})

closeMenu.addEventListener("click",()=>{
    menuBackground.classList.toggle("menu_background--show");
    menuSlide.classList.toggle("menu_slide--show");
    menuBackground.style.pointerEvents = "none";
})




