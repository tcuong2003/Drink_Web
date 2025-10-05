let ListProducts = localStorage.getItem("listProducts")
    ? JSON.parse(localStorage.getItem("listProducts"))
    : [
        {
            id: 1,
            name: "Áo Khoác",
            price: 20.99,
            image: "./asset/img/product-sweater/sweater-101.jpg",
            star: "4.6",
            nature: {
                color: ["blue"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 2,
            name: "Áo khoác 2",
            price: 39.99,
            image: "./asset/img/product-sweater/sweater-102.jpg",
            star: "5",
            nature: {
                color: ["white", "grey"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 3,
            name: "Áo thun nam cổ",
            price: 20.99,
            image: "./asset/img/product-sweater/sweater-103.jpg",
            star: "4.9",
            nature: {
                color: ["white", "blue"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 4,
            name: "Áo thun nam nữ",
            price: 20.99,
            image: "./asset/img/product-sweater/sweater-104.jpg",
            star: "4.8",
            nature: {
                color: ["white", "brown"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 5,
            name: "Áo len",
            price: 20.99,
            image: "./asset/img/product-sweater/sweater-105.jpg",
            star: "4.3",
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 6,
            name: "Áo thun 2",
            price: 20.99,
            image: "./asset/img/product-sweater/sweater-106.jpg",
            star: "4.3",
            nature: {
                color: ["white", "grey"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 7,
            name: "Hoddie",
            price: 20.99,
            image: "./asset/img/product-sweater/sweater-107.jpg",
            star: "4.3",
            nature: {
                color: ["white", "grey"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
       
        {
            id: 8,
            name: "Hoddie nam",
            price: 20.99,
            image: "./asset/img/product-sweater/sweater-108.jpg",
            star: "4.3",
            nature: {
                color: ["white", "black","grey"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 9,
            name: "Quần jean J1",
            price: 39.99,
            image: "./asset/img/product-pants/pants-201.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 10,
            name: "Quần Thun J1",
            price: 39.99,
            image: "./asset/img/product-pants/pants-206.jpg",
            star: 4.2,
            nature: {
                color: ["white", "blue"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 11,
            name: "Đầm J1",
            price: 39.99,
            image: "./asset/img/product-pants/pants-204.jpg",
            star: 4.2,
            nature: {
                color: ["white", "grey"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 12,
            name: "Quần ngắn J1",
            price: 39.99,
            image: "./asset/img/product-pants/pants-205.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 13,
            name: "Quần Thun J2",
            price: 39.99,
            image: "./asset/img/product-pants/pants-206.jpg",
            star: 4.2,
            nature: {
                color: ["white", "blue"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 14,
            name: "Quần Ngắn J2",
            price: 39.99,
            image: "./asset/img/product-pants/pants-207.jpg",
            star: 4.2,
            nature: {
                color: ["blue", "black"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 15,
            name: "Quần jean J2",
            price: 39.99,
            image: "./asset/img/product-pants/pants-208.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black","blue"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 16,
            name: "Quần jean J3",
            price: 39.99,
            image: "./asset/img/product-pants/pants-209.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black","blue"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 17,
            name: "AIR JORDAN 1",
            price: 39.99,
            image: "./asset/img/product-shoe/shoe1.jpg",
            star: 4.2,
            nature: {
                color: ["blue", "black"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
        {
            id: 18,
            name: "NIKE SB FORCE 58",
            price: 39.99,image: "./asset/img/product-shoe/shoe2.jpg",
            star: 4.2,
            nature: {
                color: ["white", "brown"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
        {
            id: 19,
            name: "AIR MAX 2017",
            price: 39.99,
            image: "./asset/img/product-shoe/shoe3.jpg",
            star: 4.2,
            nature: {
                color: ["white", "grey"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
        {
            id: 20,
            name: "AIR JORDAN 1 MID SE",
            price: 39.99,
            image: "./asset/img/product-shoe/shoe4.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black","blue"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
        {
            id: 21,
            name: "NIKE TECH HERA",
            price: 39.99,
            image: "./asset/img/product-shoe/shoe5.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
        {
            id: 22,
            name: "NIKE AIR MAX 90",
            price: 39.99,
            image: "./asset/img/product-shoe/shoe6.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black","blue"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
        {
            id: 23,
            name: "ADIDAS NMD_G1",
            price: 39.99,
            image: "./asset/img/product-shoe/shoe7.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black","browm"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
        {
            id: 24,
            name: "AIR JORDAN LEGACY 312 LOW",
            price: 39.99,
            image: "./asset/img/product-shoe/shoe8.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
        {
            id: 25,
            name: "Long bào",
            price: 69.99,
            image: "./asset/img/product-sweater/sweater-109.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 26,
            name: "Áo phông ngộ nghĩnh",
            price: 19.99,
            image: "./asset/img/product-sweater/sweater-110.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 27,
            name: "Áo thun",
            price: 21.99,
            image: "./asset/img/product-sweater/sweater-111.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "sweater",
            },
        },
        {
            id: 28,
            name: "Quần túi hộp cargo",
            price: 27.99,
            image: "./asset/img/product-pants/pants-210.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black","blue"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 29,
            name: "Quần short",
            price: 14.99,
            image: "./asset/img/product-pants/pants-211.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black","blue"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 30,
            name: "Quần short thun",
            price: 12.99,
            image: "./asset/img/product-pants/pants-212.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black","blue"],
                size: ["S", "M", "L"],
                type: "pants",
            },
        },
        {
            id: 31,
            name: "Giầy cầu lông LI-NING",
            price: 42.99,
            image: "./asset/img/product-shoe/shoe9.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
        {
            id: 32,
            name: "AIR JORDAN LEGACY 312 LOW",
            price: 59.99,
            image: "./asset/img/product-shoe/shoe10.jpg",
            star: 4.2,
            nature: {
                color: ["white", "black"],
                size: ["S", "M", "L"],
                type: "shoe",
            },
        },
    ];
    // Lấy ID sản phẩm từ URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    return parseInt(productId); // Chuyển đổi thành số nguyên
}

// Tìm sản phẩm dựa trên ID
function findProductById(productId) {
    return ListProducts.find(product => product.id === productId);
}
document.addEventListener("DOMContentLoaded", displayProduct);

// Hiển thị thông tin sản phẩm
function displayProductDetails(product) {
    if (product) {
    const productTitle = document.querySelector(".heading");
    const productPrice = document.querySelector(".card .body-card .heading");
    const productImage = document.querySelector(".product-image");
    const productReviews = document.querySelector(".row-review .title");
    const addToCartButton=document.querySelector(".add-to-cart-button");
    const titlePrice = document.querySelector(".title-price");
    
    // const addToCart=document.querySelector(".addToCart2");
    
    productTitle.textContent = product.name;
    productPrice.textContent = "$" + product.price.toFixed(2);
    productImage.src = product.image;
    productReviews.textContent = `(${product.star}) 1100 reviews`;
    titlePrice.textContent = "$" + (product.price * 1.1).toFixed(2);

    if (addToCartButton) {
        addToCartButton.onclick = function () {
            addToCart(product.id); // Assuming product.id is the unique identifier for the product
        };
    } 
    } else {
        console.error("Sản phẩm không tồn tại");
 }
}

// Hàm chính để hiển thị chi tiết sản phẩm
function displayProduct() {
    const productId = getProductIdFromURL();
    const product = findProductById(productId);
    displayProductDetails(product);  
}

// Gọi hàm để hiển thị sản phẩm khi trang được tải
document.addEventListener("DOMContentLoaded", displayProduct);





let datausers = JSON.parse(localStorage.getItem("DataUsers"));
let login = JSON.parse(localStorage.getItem("loginUser"));

// =========== Thêm sản phẩm vào giỏ hàng =============
function addToCart(productId) {
    if (!login) {
        alert("Bạn phải đăng nhập để mua hàng");
        //sau đó hiện hộp thoại đăng nhập
        Object.assign(document.querySelector(".loginBackground").style, {
            visibility: "visible",
            "animation-name": "backgroundeffect1",
        });
        Object.assign(document.querySelector(".loginBlock").style, {
            display: "block",
        });
        return;
    }
    let userIndex = datausers.findIndex((user) => user.id == login.id);

    if (userIndex !== -1) {
        let productToAdd = ListProducts.find(
            (product) => product.id == productId
        );

        if (productToAdd) {
            const existingCartItemIndex = datausers[
                userIndex
            ].cartItems.findIndex((item) => item.idProduct == productId);

            if (
                existingCartItemIndex !== -1 &&
                datausers[userIndex].cartItems[existingCartItemIndex].check == 0
            ) {
                datausers[userIndex].cartItems[existingCartItemIndex]
                    .quantity++;
            } else {
                let cartItem = {
                    idProduct: productToAdd.id,
                    nameProduct: productToAdd.name,
                    price: productToAdd.price,
                    image: productToAdd.image,
                    quantity: 1,
                    check: 0,
                    time: new Date(),
                };
                datausers[userIndex].cartItems.push(cartItem);
            }
            localStorage.setItem("DataUsers", JSON.stringify(datausers));
            renderCartUI();
        }
    }
}

// ============ render UI layout Cart ==============
function renderCartUI() {
    const noProduct = document.querySelector(".no-product");
    const haveProduct = document.querySelector(".have-product");
    // const listPreview = document.querySelector(".list-preview");
    if (!login) {
        return;
    }
    let userIndex = datausers.findIndex((user) => user.id === login.id);
    if (datausers[userIndex].cartItems.length > 0) {
        renderImageCart(datausers[userIndex].cartItems);
        renderNumberCart(datausers[userIndex].cartItems);
        // noProduct.classList.add("hidden");
        // haveProduct.classList.remove("hidden");
        // listPreview.style.width = "500px";
        // listPreview.style.top = "67px";
        // listPreview.style.left = "-372px";
    } else {
        noProduct.classList.remove("hidden");
        haveProduct.classList.add("hidden");
    }
}
renderCartUI();

// ============ render UI Cart về hình ảnh ============
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

// ============ render UI Cart về số liệu =============
function renderNumberCart(cartItems) {
    const cartQuantity = document.querySelector(".you-have"); // Số lượng sản phẩm trong giỏ hàng
    const cartTotal = document.querySelector("#price-total"); // Tổng giá trị cuối cùng
    const subtotal = document.querySelector(".price-subtotal"); // Tổng giá trị trước khi tính phí vận chuyển
    const shipping = document.querySelector(".price-shipping"); // Phí vận chuyển
    const feeTotal = document.querySelector(".price-buy-cart"); // Tổng giá trị cuối cùng trong giỏ hàng

    let totalQuantity = 0; // Tổng số lượng tất cả sản phẩm
    let totalPrice = 0; // Tổng giá tiền tất cả sản phẩm
    let shippingPrice = 5; // Giá vận chuyển cho mỗi sản phẩm

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

// ============ render tên người dùng khi đăng nhập ===============
// function renderName() {
//     const name = document.querySelector(".hello-name");
//     if (login) {
//         name.textContent = login.name;
//     }
// }
// renderName();