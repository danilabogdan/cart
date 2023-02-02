
let label = document.getElementById("label");

let ShoppingCart = document.getElementById("shopping-cart");

// console.log(shopItemsData);

let basket = JSON.parse(localStorage.getItem("data")) || []


// console.log(basket);



let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    // console.log("calc its running");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x+y,0);

    // console.log()
 };


 calculation();



 let generateCartItems = () => {
    if (basket.length !== 0) {
        // console.log("basket is not empty blud");
        return ShoppingCart.innerHTML = basket.map((x) => {
            return `
            <div class="cart-item">
            <img src="" alt=""/>
            </div>
            `;
        }).join((""))
    } else {
        // console.log("basket is totally empty blud");
        ShoppingCart.innerHTML = ``

        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
        <button class="HomeBtn">Back to home</button>
        </a>
        `
    }
 }


 generateCartItems();


