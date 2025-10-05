document.addEventListener("DOMContentLoaded", function () {


    function render(arr) {
        const productListContainer = document.querySelector(".main-left__product");
        productListContainer.innerHTML = "";

        arr.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("main-product"); // Add the "product" class

            productDiv.innerHTML = `
            <img
            class="image"
            src=".${product.image}"
            alt=""
        />
        <div class="info-product">
            <div class="info-product__title">
                <h3 class="heading">
                    ${product.nameProduct}
                </h3>
                <div class="price">$${product.price}</div>
            </div>
            <div class="info-product__action">
                <div class="amount-aciton">
                    <button class="up-and-down btn-down" onclick = "down(${product.idProduct})">
                        -
                    </button>
                    <div class="amount" id="amount-${product.idProduct}">${product.quantity}</div>
                    <button class="up-and-down btn-up" onclick = "up(${product.idProduct})">
                        +
                    </button>
                </div>
                <div class="delete-action" onclick="deleteProduct(${product.idProduct})">
                        <img
                            src="./asset/img/Delete.svg"
                            alt="Delete"/>
                    <div class="title">Delete</div>
                </div>
            </div>
        </div>
            `;

            productListContainer.appendChild(productDiv);
        });
    }
    render(dataUsersNow[userIndex].cartItems);
    function renderPrice() {
        const totalQuantity = document.querySelector(".total-quantity");
        console.log(totalQuantity);
        const price = document.querySelector(".price-checkout");
        console.log(price);
        const priceShip = document.querySelector(".price-ship");
        const totalPrice = document.querySelector(".total-price-full");

        let sumQuantity = 0;
        let sumPrice = 0;
        let shipTotal = 0;
        dataUsersNow[userIndex].cartItems.forEach((item) => {
            sumQuantity += item.quantity;
            sumPrice += item.price * item.quantity;
            shipTotal += 5 * item.quantity;
        })
        totalQuantity.textContent = sumQuantity;
        price.textContent = sumPrice.toFixed(2);
        priceShip.textContent = shipTotal;
        let totalPriceFull = sumPrice + shipTotal;
        console.log(totalPriceFull);
        totalPrice.textContent = totalPriceFull.toFixed(2);
    }
    renderPrice();
    checkOut();
});
let listOrders = localStorage.getItem('listOrders') ? JSON.parse(localStorage.getItem('listOrders')): [];

let dataUsersNow = JSON.parse(localStorage.getItem("DataUsers"));

const loginUserNow = JSON.parse(localStorage.getItem("loginUser"));
let userIndex = dataUsersNow.findIndex((user) => user.id == loginUserNow.id);
console.log(dataUsersNow[userIndex]);
console.log(dataUsersNow[userIndex].cartItems);

function up(idProduct) {
    const amount = document.getElementById(`amount-${idProduct}`)
    console.log("fjsadkfasdfdsfsdaf");
    dataUsersNow[userIndex].cartItems.forEach((item) => {
        if (item.idProduct == idProduct) {
            item.quantity++;
            localStorage.setItem("DataUsers", JSON.stringify(dataUsersNow));
            const newQuantity = JSON.parse(localStorage.getItem("DataUsers"));
            newQuantity[userIndex].cartItems.forEach((item) => {
                if (item.idProduct == idProduct) {
                    amount.textContent = item.quantity;
                    renderPriceAfter(newQuantity[userIndex].cartItems);
                }
            })
        }
    })
}
function down(idProduct) {
    const amount = document.getElementById(`amount-${idProduct}`)
    dataUsersNow[userIndex].cartItems.forEach((item) => {
        if (item.idProduct == idProduct) {
            if (item.quantity > 1) {
                item.quantity--;
                localStorage.setItem("DataUsers", JSON.stringify(dataUsersNow));
                const newQuantity = JSON.parse(localStorage.getItem("DataUsers"));
                newQuantity[userIndex].cartItems.forEach((item) => {
                    if (item.idProduct == idProduct) {
                        amount.textContent = item.quantity;
                        renderPriceAfter(newQuantity[userIndex].cartItems);
                    }
                })
            }
        }
    })
}

function deleteProduct(idProduct) {
    const indexToDelete = dataUsersNow[userIndex].cartItems.findIndex(item => item.idProduct === idProduct);
    if (indexToDelete !== -1) {
        const deletedItem = dataUsersNow[userIndex].cartItems.splice(indexToDelete, 1)[0];
        localStorage.setItem("DataUsers", JSON.stringify(dataUsersNow));
        const productDiv = document.querySelector(`.main-product #amount-${idProduct}`).closest(".main-product");
        if (productDiv) {
            productDiv.remove();
            renderPriceAfter(deletedItem);
            render(dataUsersNow[userIndex].cartItems);
            renderPrice();
        }
    }
}

function renderPriceAfter(deletedItem) {
    const totalQuantity = document.querySelector(".total-quantity");
    const price = document.querySelector(".price-checkout");
    const priceShip = document.querySelector(".price-ship");
    const totalPrice = document.querySelector(".total-price-full");

    let sumQuantity = 0;
    let sumPrice = 0;
    let shipTotal = 0;
    dataUsersNow[userIndex].cartItems.forEach((item) => {
        sumQuantity += item.quantity;
        sumPrice += item.price * item.quantity;
        shipTotal += 5 * item.quantity;
    });

    totalQuantity.textContent = sumQuantity;
    price.textContent = sumPrice.toFixed(2);
    priceShip.textContent = shipTotal;

    let totalPriceFull = sumPrice + shipTotal;
    console.log(totalPriceFull);
    sumPrice -= deletedItem.price * deletedItem.quantity;
    totalPrice.textContent = totalPriceFull.toFixed(2);
}

function checkOut(){
    const checkOutBtn = document.querySelector('.action-checkout')
    checkOutBtn.onclick = function(){
        updateListOrders(dataUsersNow[userIndex])
    }
}
function setId(){
    let max=0
    for(let i=0;i<listOrders.length;i++){
        if(listOrders[i].id > max) max=listOrders[i].id
    }
    return max+1;
 }
function updateListOrders(data){
    listOrders.unshift(
        {
            id: setId(),
            userId: data.id,
            email: data.email,
            nameCustomer: data.name,
            order: data.cartItems,
        }
    )
    updateListOrderstoLocalStorage()
    afterUpdate()
}
function updateListOrderstoLocalStorage(){
    let order = JSON.stringify(listOrders);
    localStorage.setItem('listOrders', order);
}
function afterUpdate(){
    alert("Thank you!")
    dataUsersNow[userIndex].cartItems = [];
    localStorage.setItem("DataUsers", JSON.stringify(dataUsersNow));
    window.location = "./index.html"
}