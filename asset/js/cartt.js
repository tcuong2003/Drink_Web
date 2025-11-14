let login = JSON.parse(localStorage.getItem("loginUser"));
let dataUsers = JSON.parse(localStorage.getItem("DataUsers"));

document.addEventListener("DOMContentLoaded", function () {
    // Cập nhật biến login từ localStorage (để lấy giá trị mới nhất sau khi đăng nhập)
    let login = JSON.parse(localStorage.getItem("loginUser"));
    let dataUsers = JSON.parse(localStorage.getItem("DataUsers"));

    // Kiểm tra nếu chưa đăng nhập, redirect về index
    if (!login) {
        alert("Bạn phải đăng nhập để xem giỏ hàng");
        window.location.href = "./index.html";
        return;
    }

    let dataUsersNow = dataUsers;
    let userIndex = dataUsersNow.findIndex((user) => user.id == login.id);

    if (userIndex === -1) {
        alert("Không tìm thấy người dùng");
        window.location.href = "./index.html";
        return;
    }

    //Hiển thị danh sách sản phẩm trong giỏ hàng ra giao diện
    function render(arr) {
        const productListContainer = document.querySelector(".main-left__product");
        productListContainer.innerHTML = "";

        arr.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("main-product");

            productDiv.innerHTML = `
            <img class="image" src="${product.image}" alt="" />
            <div class="info-product">
                <div class="info-product__title">
                    <h3 class="heading">${product.nameProduct}</h3>
                    <div class="price">$${product.price}</div>
                </div>
                <div class="info-product__action">
                    <div class="amount-aciton">
                        <button class="up-and-down btn-down" data-id="${product.idProduct}">-</button>
                        <div class="amount" id="amount-${product.idProduct}">${product.quantity}</div>
                        <button class="up-and-down btn-up" data-id="${product.idProduct}">+</button>
                    </div>
                    <div class="delete-action" data-id="${product.idProduct}">
                        <img src="./asset/img/Delete.svg" alt="Delete"/>
                        <div class="title">Delete</div>
                    </div>
                </div>
            </div>
            `;

            productListContainer.appendChild(productDiv);
        });

        // Thêm event listeners sau khi render
        attachEventListeners();
    }

    // Gắn event listeners cho nút tăng/giảm/xóa
    function attachEventListeners() {
        // Nút giảm
        document.querySelectorAll(".btn-down").forEach(btn => {
            btn.addEventListener("click", function() {
                const idProduct = parseInt(this.dataset.id);
                down(idProduct);
            });
        });

        // Nút tăng
        document.querySelectorAll(".btn-up").forEach(btn => {
            btn.addEventListener("click", function() {
                const idProduct = parseInt(this.dataset.id);
                up(idProduct);
            });
        });

        // Nút xóa
        document.querySelectorAll(".delete-action").forEach(btn => {
            btn.addEventListener("click", function() {
                const idProduct = parseInt(this.dataset.id);
                deleteProduct(idProduct);
            });
        });
    }

    render(dataUsersNow[userIndex].cartItems);
//Tính toán và hiển thị tổng tiền, tổng số lượng, phí vận chuyển, và tổng thanh toán
    function renderPrice() {
        const totalQuantity = document.querySelector(".total-quantity");
        const price = document.querySelector(".price-checkout");
        const priceShip = document.querySelector(".price-ship");
        const totalPrice = document.querySelector(".total-price-full");

        let sumQuantity = 0;
        let sumPrice = 0;
        dataUsersNow[userIndex].cartItems.forEach((item) => {
            sumQuantity += item.quantity;
            sumPrice += item.price * item.quantity;
        });

        const shipTotal = 2 * sumQuantity;
        const totalPriceFull = sumPrice + shipTotal;

        totalQuantity.textContent = sumQuantity;
        price.textContent = `$${sumPrice.toFixed(2)}`;
        priceShip.textContent = `$${shipTotal.toFixed(2)}`;
        totalPrice.textContent = `$${totalPriceFull.toFixed(2)}`;
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

// Tăng số lượng sản phẩm
function up(idProduct) {
    const amount = document.getElementById(`amount-${idProduct}`);
    dataUsersNow[userIndex].cartItems.forEach((item) => {
        if (item.idProduct == idProduct) {
            item.quantity++;
            localStorage.setItem("DataUsers", JSON.stringify(dataUsersNow));
            amount.textContent = item.quantity;
            renderPrice();
        }
    });
}

// Giảm số lượng sản phẩm (không nhỏ hơn 1)
function down(idProduct) {
    const amount = document.getElementById(`amount-${idProduct}`);
    dataUsersNow[userIndex].cartItems.forEach((item) => {
        if (item.idProduct == idProduct) {
            if (item.quantity > 1) {
                item.quantity--;
                localStorage.setItem("DataUsers", JSON.stringify(dataUsersNow));
                amount.textContent = item.quantity;
                renderPrice();
            }
        }
    });
}

// Xóa sản phẩm khỏi giỏ hàng
function deleteProduct(idProduct) {
    const indexToDelete = dataUsersNow[userIndex].cartItems.findIndex(item => item.idProduct === idProduct);
    if (indexToDelete !== -1) {
        dataUsersNow[userIndex].cartItems.splice(indexToDelete, 1);
        localStorage.setItem("DataUsers", JSON.stringify(dataUsersNow));
        
        // Re-render lại giỏ hàng bằng renderCart để render đầy đủ và gắn lại event
        renderCart();
        renderPrice();
        renderCartUI(); // cập nhật preview mini-cart
    }
    
}

// Cập nhật giá sau khi thay đổi giỏ hàng
function renderPrice() {
    const totalQuantity = document.querySelector(".total-quantity");
    const price = document.querySelector(".price-checkout");
    const priceShip = document.querySelector(".price-ship");
    const totalPrice = document.querySelector(".total-price-full");

    let sumQuantity = 0;
    let sumPrice = 0;
    dataUsersNow[userIndex].cartItems.forEach((item) => {
        sumQuantity += item.quantity;
        sumPrice += item.price * item.quantity;
    });

    const shipTotal = 2 * sumQuantity;
    const totalPriceFull = sumPrice + shipTotal;

    totalQuantity.textContent = sumQuantity;
    price.textContent = `$${sumPrice.toFixed(2)}`;
    priceShip.textContent = `$${shipTotal.toFixed(2)}`;
    totalPrice.textContent = `$${totalPriceFull.toFixed(2)}`;
}

// Xử lý khi người dùng nhấn nút thanh toán
function checkOut(){
    const checkOutBtn = document.querySelector('.action-checkout')
    checkOutBtn.onclick = function(){
        updateListOrders(dataUsersNow[userIndex])
    }
}
//Sinh ID mới cho đơn hàng
function setId(){
    let max=0
    for(let i=0;i<listOrders.length;i++){
        if(listOrders[i].id > max) max=listOrders[i].id
    }
    return max+1;
 }
 //Thêm đơn hàng mới vào danh sách listOrders
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
//Lưu danh sách listOrders vào localStorage
function updateListOrderstoLocalStorage(){
    let order = JSON.stringify(listOrders);
    localStorage.setItem('listOrders', order);
}
//Hoàn tất quá trình thanh toán
function afterUpdate(){
    alert("Thank you!")
    dataUsersNow[userIndex].cartItems = [];
    localStorage.setItem("DataUsers", JSON.stringify(dataUsersNow));
    window.location = "./index.html"
}
// render tên người dùng khi đăng nhập (cả desktop + mobile)
function renderName() {
    const desktopNameEl = document.querySelector(".hello-name");
    const mobileNameEl = document.querySelector(".hello-mobile-name");
    const loginUser = JSON.parse(localStorage.getItem("loginUser"));

    if (loginUser && loginUser.name) {
        const text = `Welcome back, "${loginUser.name}"`;
        if (desktopNameEl) desktopNameEl.textContent = text;
        if (mobileNameEl) mobileNameEl.textContent = text;
    }
}
renderName();

// Cập nhật giao diện xem nhanh giỏ hàng (preview mini-cart)
function renderCartUI() {
    const noProduct = document.querySelector(".no-product");
    const haveProduct = document.querySelector(".have-product");
    if (!login) {
        return;
    }
    let userIndex = dataUsers.findIndex((user) => user.id === login.id);
    if (dataUsers[userIndex].cartItems.length > 0) {
        renderImageCart(dataUsers[userIndex].cartItems);
        renderNumberCart(dataUsers[userIndex].cartItems);
    } else {
        noProduct.classList.remove("hidden");
        haveProduct.classList.add("hidden");
    }
}
renderCartUI();

// Hiển thị 3 sản phẩm đầu tiên trong giỏ hàng ở phần xem nhanh (preview).
function renderImageCart(cartItems) {
    const cartItemsList = document.querySelector(".row-2");
    const noProduct = document.querySelector(".no-product");
    const haveProduct = document.querySelector(".have-product");
    const listPreview = document.querySelector(".list-preview");
    cartItemsList.innerHTML = "";

    let itemCount = 1;

    cartItems.forEach((item) => {
        if (itemCount <= 3 && item.check == 0) {
            const cartItem = document.createElement("div");
            cartItem.className = "block-each-preview";
            cartItem.innerHTML = `
                <img src="${item.image}" alt="" class="img-preview">
                <h2 class="title">${item.nameProduct}</h2>
                <span class="price">$${(item.price * item.quantity).toFixed(
                    2
                )}</span>
                <span class="quantity">x ${item.quantity}</span>
            `;
            cartItemsList.appendChild(cartItem);
            itemCount++;
            noProduct.classList.add("hidden");
            haveProduct.classList.remove("hidden");
            listPreview.style.width = "500px";
            listPreview.style.top = "67px";
            listPreview.style.left = "-372px";
        }
    });
}

// Hiển thị tổng số lượng và tổng giá trong phần xem nhanh giỏ hàng
function renderNumberCart(cartItems) {
    const cartQuantity = document.querySelector(".you-have"); // Số lượng sản phẩm trong giỏ hàng
    const cartTotal = document.querySelector("#price-total"); // Tổng giá trị cuối cùng
    const subtotal = document.querySelector(".price-subtotal"); // Tổng giá trị trước khi tính phí vận chuyển
    const shipping = document.querySelector(".price-shipping"); // Phí vận chuyển
    const feeTotal = document.querySelector(".price-buy-cart"); // Tổng giá trị cuối cùng trong giỏ hàng

    let totalQuantity = 0; // Tổng số lượng tất cả sản phẩm
    let totalPrice = 0; // Tổng giá tiền tất cả sản phẩm
    let shippingPrice = 2; // Giá vận chuyển cho mỗi sản phẩm

    cartItems.forEach((item) => {
        if (item.check == 0) {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        }
    });
    cartQuantity.textContent = `You have ${totalQuantity} item`;
    subtotal.textContent = `$${totalPrice.toFixed(2)}`;
    shipping.textContent = `$${shippingPrice * totalQuantity}`;
    cartTotal.textContent = `$${(
        totalPrice +
        shippingPrice * totalQuantity
    ).toFixed(2)}`;
    feeTotal.textContent = cartTotal.textContent;
}

// Nếu người dùng nhấn nút "Product" trên trang Cart: lưu flag và chuyển về index#product
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-product-all");
    if (!btn) return;
    e.preventDefault();
    localStorage.setItem("showProductPage", "true");
    window.location.href = "./index.html#product";
});

// Header links handling (Product / Sale / About / Contact)
document.addEventListener("click", (e) => {
    const btnProduct = e.target.closest(".btn-product-all");
    const btnSale = e.target.closest(".btn-sale");
    const btnAbout = e.target.closest(".btn-about");
    const btnContact = e.target.closest(".btn-contact");
    if (!btnProduct && !btnSale && !btnAbout && !btnContact) return;
    e.preventDefault();

    if (btnProduct) {
        localStorage.setItem("showProductPage", "true");
        window.location.replace("./index.html#product");
        return;
    }

    let target = null;
    if (btnSale) target = "#sale";
    if (btnAbout) target = "#about";
    if (btnContact) target = "#footer";

    if (target) {
        localStorage.setItem("navigateTo", target);
        window.location.replace(`./index.html${target}`);
    }
});

// Thêm hàm renderCart (re-render toàn bộ danh sách giỏ hàng và gắn lại event)
function renderCart() {
    const productListContainer = document.querySelector(".main-left__product");
    const cart = (dataUsersNow && dataUsersNow[userIndex] && dataUsersNow[userIndex].cartItems) ? dataUsersNow[userIndex].cartItems : [];
    productListContainer.innerHTML = "";

    if (!productListContainer) return;

    if (cart.length === 0) {
        productListContainer.innerHTML = '<p style="padding: 20px; text-align: center;">Giỏ hàng của bạn trống</p>';
        return;
    }

    cart.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("main-product");

        productDiv.innerHTML = `
            <img class="image" src="${product.image}" alt="" />
            <div class="info-product">
                <div class="info-product__title">
                    <h3 class="heading">${product.nameProduct}</h3>
                    <div class="price">$${product.price}</div>
                </div>
                <div class="info-product__action">
                    <div class="amount-aciton">
                        <button class="up-and-down btn-down" data-id="${product.idProduct}">-</button>
                        <div class="amount" id="amount-${product.idProduct}">${product.quantity}</div>
                        <button class="up-and-down btn-up" data-id="${product.idProduct}">+</button>
                    </div>
                    <div class="delete-action" data-id="${product.idProduct}">
                        <img src="./asset/img/Delete.svg" alt="Delete"/>
                        <div class="title">Delete</div>
                    </div>
                </div>
            </div>
        `;
        productListContainer.appendChild(productDiv);
    });

    // Gắn lại event listeners cho các nút sau khi render
    productListContainer.querySelectorAll(".btn-down").forEach(btn => {
        btn.addEventListener("click", function() {
            const idProduct = parseInt(this.dataset.id);
            down(idProduct);
        });
    });
    productListContainer.querySelectorAll(".btn-up").forEach(btn => {
        btn.addEventListener("click", function() {
            const idProduct = parseInt(this.dataset.id);
            up(idProduct);
        });
    });
    productListContainer.querySelectorAll(".delete-action").forEach(btn => {
        btn.addEventListener("click", function() {
            const idProduct = parseInt(this.dataset.id);
            deleteProduct(idProduct);
        });
    });
}
