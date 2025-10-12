let listProducts = localStorage.getItem("listProducts")
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
                  color: ["white", "black", "grey"],
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
                  color: ["white", "black", "blue"],
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
                  color: ["white", "black", "blue"],
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
              price: 39.99,
              image: "./asset/img/product-shoe/shoe2.jpg",
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
                  color: ["white", "black", "blue"],
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
                  color: ["white", "black", "blue"],
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
                  color: ["white", "black", "browm"],
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
                  color: ["white", "black", "blue"],
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
                  color: ["white", "black", "blue"],
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
                  color: ["white", "black", "blue"],
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
let productSweaters = [];
let productPants = [];
let productshoe = [];
function fillterProduct() {
    listProducts.forEach((product) => {
        if (product.nature.type === "sweater") {
            productSweaters.push(product);
        } else if (product.nature.type === "pants") {
            productPants.push(product);
        } else if (product.nature.type === "shoe") {
            productshoe.push(product);
        }
    });
}
fillterProduct();

// ============= Gọi hàm render để hiển thị sản phẩm ============
const showShirtsButtons = document.querySelectorAll(".btn-sweater");
const showPantsButtons = document.querySelectorAll(".btn-pants");
const showshoeButtons = document.querySelectorAll(".btn-shoe");

showShirtsButtons.forEach((e) => {
    e.addEventListener("click", function () {
        document.querySelector(".no-product-search").classList.add("hidden");
        document.querySelector(".search-field").value = "";
        document.querySelector(".icon-delete").classList.add("hidden");
        pagnigation.classList.remove("hidden");
        productSweaters.splice(0, productSweaters.length);
        fillterProduct();
        currentProductList = productSweaters;
        getProduct(productSweaters);
        renderPageNumber(productSweaters, perPage);
    });
});
showPantsButtons.forEach((e) => {
    e.addEventListener("click", function () {
        document.querySelector(".no-product-search").classList.add("hidden");
        document.querySelector(".search-field").value = "";
        document.querySelector(".icon-delete").classList.add("hidden");
        pagnigation.classList.remove("hidden");
        productPants.splice(0, productPants.length);
        fillterProduct();
        currentProductList = productPants;
        getProduct(productPants);
        renderPageNumber(productPants, perPage);
    });
});
showshoeButtons.forEach((e) => {
    e.addEventListener("click", function () {
        document.querySelector(".no-product-search").classList.add("hidden");
        document.querySelector(".search-field").value = "";
        document.querySelector(".icon-delete").classList.add("hidden");
        pagnigation.classList.remove("hidden");
        productshoe.splice(0, productshoe.length);
        fillterProduct();
        currentProductList = productshoe;
        getProduct(productshoe);
        renderPageNumber(productshoe, perPage);
    });
});

// ========== 2 biến toàn cục là dữ liệu data và tài khoản hiện tại đang login ==========
let dataUsers = JSON.parse(localStorage.getItem("DataUsers"));
let login = JSON.parse(localStorage.getItem("loginUser"));

// ========== Chức năng phân trang sản phảm =================
let currentPage = 1;
let perPage = 8;
let totalPage = 0;
let perProduct = [];

let productSearch = [];

function renderProduct(arr) {
    const productListContainer = document.querySelector(".list-show-product");
    if (productListContainer) {
        productListContainer.innerHTML = "";

        arr.forEach((product) => {
            const productSection = document.createElement("section");
            productSection.classList.add("cart");

            productSection.innerHTML = `
                    <div class="wrap-img-cart">
                        <img src="${product.image}" alt="${product.name}" 
                        class="img-cart" onclick="window.location = './details.html?id=${
                            product.id
                        }' " />
                    </div>
                    <h3 class="title">${product.name}</h3>
                    <div class="row">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <div class="row-price-star">
                            <img src="./asset/img/main-star.svg" alt="Star Rating" class="star" />
                            <span class="star-num">${product.star}</span>
                        </div>
                        <button class="add-to-cart-button" onclick = "addToCart(${
                            product.id
                        })">Add to Cart</button>
                    </div>
                `;

            // Thêm sản phẩm vào danh sách sản phẩm
            productListContainer.appendChild(productSection);
        });
    }
}

function getProduct(arr) {
    perProduct = arr.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    );
    renderProduct(perProduct);
    currentPage = 1;
}
getProduct(listProducts);
function renderPageNumber(arr, perPage) {
    totalPage = Math.ceil(arr.length / perPage); // Use Math.ceil to round up

    document.querySelector(".pagnigation-ul").innerHTML = "";
    for (let i = 1; i <= totalPage; i++) {
        document.querySelector(
            ".pagnigation-ul"
        ).innerHTML += `
        <a href="#recommend"><li class="li li${i}" onclick="handlePageNumber(event, ${i})">${i}</li></a>
        `;
    }
    if (totalPage > 1) {
        document.querySelector(".li1").classList.add("active");
    } else if (totalPage <= 1) {
        document.querySelector(".li1").style.display = "none";
    }
}

let currentProductList = listProducts;
function handlePageNumber(event, num) {
    listLi = document.querySelectorAll(".li");
    for (li of listLi) {
        li.classList.remove("active");
    }
    event.target.classList.add("active");
    currentPage = num;
    // Assuming getProduct is a function that needs to be called when the page changes
    getProduct(currentProductList);
}

renderPageNumber(listProducts, perPage);

// =========== Thêm sản phẩm vào giỏ hàng =============
function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    document.body.appendChild(notification);
    notification.style.display = "flex";

    setTimeout(function () {
        document.body.removeChild(notification);
    }, 3000);
}

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
    let userIndex = dataUsers.findIndex((user) => user.id == login.id);

    if (userIndex !== -1) {
        let productToAdd = listProducts.find(
            (product) => product.id == productId
        );

        if (productToAdd) {
            const existingCartItemIndex = dataUsers[
                userIndex
            ].cartItems.findIndex((item) => item.idProduct == productId);

            if (
                existingCartItemIndex !== -1 &&
                dataUsers[userIndex].cartItems[existingCartItemIndex].check == 0
            ) {
                dataUsers[userIndex].cartItems[existingCartItemIndex]
                    .quantity++;
            } else {
                let cartItem = {
                    idProduct: productToAdd.id,
                    nameProduct: productToAdd.name,
                    price: productToAdd.price,
                    image: productToAdd.image,
                    quantity: 1,
                    type: productToAdd.nature.type,
                    check: 0,
                    time: new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Ho_Chi_Minh",
                    }),
                };
                dataUsers[userIndex].cartItems.push(cartItem);
            }
            localStorage.setItem("DataUsers", JSON.stringify(dataUsers));
            renderCartUI();
            renderProductQuantityMb();
        }
    }
    showNotification("Add to cart successfully");
}
// =========== thêm sản phẩm của mobile ===============
// hiển thị tổng số lượng sản phẩm

function renderProductQuantityMb() {
    let screenWidthNow = window.innerWidth;
    let maxWidthMobile = 767.98;
    if (screenWidthNow < maxWidthMobile) {
        if (login == null) return;
        let userIndex = dataUsers.findIndex((user) => user.id == login.id);
        const cartQuantity = document.querySelector(".cart-quantity");
        let totalQuantity = 0;
        dataUsers[userIndex].cartItems.forEach((item) => {
            if (item.check == 0) totalQuantity += item.quantity;
        });
        cartQuantity.textContent = totalQuantity;
    }
}
renderProductQuantityMb();

function handleDeleteCartItem(productId) {
    // Xử lý xóa sản phẩm từ giỏ hàng, cập nhật Local Storage và cập nhật giao diện
    const storedCartItems = localStorage.getItem("DataUsers");
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    const updatedCartItems = cartItems.filter(
        (item) => item.idProduct !== productId
    );

    localStorage.setItem("DataUsers", JSON.stringify(updatedCartItems));

    window.location.href = "cart.html";
}

// ============ render UI layout Cart ==============
function renderCartUI() {
    const noProduct = document.querySelector(".no-product");
    const haveProduct = document.querySelector(".have-product");
    // const listPreview = document.querySelector(".list-preview");
    if (!login) {
        return;
    }
    let userIndex = dataUsers.findIndex((user) => user.id === login.id);
    if (dataUsers[userIndex].cartItems.length > 0) {
        renderImageCart(dataUsers[userIndex].cartItems);
        renderNumberCart(dataUsers[userIndex].cartItems);
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
function renderName() {
    const name = document.querySelector(".hello-name");
    if (login) {
        name.textContent = login.name;
    }
}
renderName();

// ============== hinh anh truot qua lai ===============
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;

const goToSlide = function (slide) {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
};

const nextSlide = function () {
    if (curSlide === slides.length - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
};
const prevSlide = function () {
    if (curSlide == 0) {
        curSlide = slides.length - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
};
// Nhan nut de qua lai slide
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
// Nhan ban phim mui ten de qua lai slide
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
});
// Dot
const createDots = function () {
    slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
        );
    });
};
const activateDot = function (slide) {
    document
        .querySelectorAll(".dots__dot")
        .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add("dots__dot--active");
};
const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
};
init();
dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
    }
});
const startAutoSlide = function () {
    setInterval(nextSlide, 3000);
};
startAutoSlide();

// =============== Xu li nut backToTop ======================
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
    ) {
        // Hiển thị nút khi người dùng cuộn xuống 30px
        document.querySelector(".backToTop").style.display = "block";
    } else {
        // Ẩn nút khi người dùng ở đầu trang
        document.querySelector(".backToTop").style.display = "none";
    }
}

// Xử lý khi người dùng nhấn nút "Back to Top"
document.querySelector(".backToTop").onclick = function () {
    document.body.scrollTop = 0; // Cho trình duyệt Chrome, Safari, Edge
    document.documentElement.scrollTop = 0; // Cho trình duyệt Firefox, IE
};

// ========= chức năng xem lại đơn hàng đã mua =============
function displayHideHistory() {
    const history = document.querySelector(".historyOrder");
    history.classList.toggle("active");
}
function hideHistoryOrder1() {
    const btnHistory = document.querySelector(".history");
    btnHistory.addEventListener("click", () => {
        displayHideHistory();
    });
}
function hideHistoryOrder2() {
    const btnCloseHistory = document.querySelector(".close-history");
    btnCloseHistory.addEventListener("click", () => {
        displayHideHistory();
    });
}
let ListOrders = localStorage.getItem("listOrders")
    ? JSON.parse(localStorage.getItem("listOrders"))
    : [];

// render trong historyOrder
function handleRenderHistoryOrder() {
    if (login == null) return;
    const historyOrder = document.querySelector(".historyOrder");
    historyOrder.innerHTML = `
        <div class="table-header">
            <h2 class="title">History Order</h2>
        </div>
        <div class="container">
            <img class="close-history" src="./asset/img/bx-x.svg" alt="">
            <table>
                <thead class = "tableHistoryHead"> 
            
                </thead>
                <tbody class = "tableHistoryBody">

                </tbody>
            </table>
        </div>
    `;
    const tableHead = document.querySelector(".tableHistoryHead");
    tableHead.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Order time</th>
            <th>Total Price</th>
            <th>Status</th>
            <th></th>
        </tr> 
    `;
    hideHistoryOrder1();
    hideHistoryOrder2();
    const tableBody = document.querySelector(".tableHistoryBody");
    let userIndex = dataUsers.findIndex((user) => user.id == login.id);
    let number = 0;
    ListOrders.forEach((item) => {
        if (dataUsers[userIndex].id == item.userId) {
            number++;
            let row = `
                <tr>
                    <td>${number}</td> // day la doan can them ham render de tinh totalprice // kho hieu
                    <td>${item.order[0].time}</td> // tai sao lai k hien dc ma qua ham MB ms hien duoc
                    <td></td>
                    <td>${status(item.order[0].check)}</td>
                    <td onclick = "renderHistoryOrderItem(${item.id})">
                        <img class="showmore" src="./asset/img/showmore.png" alt="">
                    </td>
                </tr>`;
            tableBody.innerHTML += row;
        }
    });
}
function renderHistoryOrderItem(orderId) {
    const historyOrder = document.querySelector(".historyOrder");
    historyOrder.innerHTML = `
        <div class="table-header">
            <h2 class="title">History Order</h2>
        </div>
        <div class="container">
            <div>
                <img class="close-history" src="./asset/img/back_3114883.png" alt="Quay lại" onclick="handleRenderHistoryOrder()">
            </div>
            <table>
                <thead class = "tableHistoryHead"> 
            
                </thead>
                <tbody class = "tableHistoryBody">

                </tbody>
            </table>
        </div>
    `;
    hideHistoryOrder1();
    const tableHead = document.querySelector(".tableHistoryHead");
    tableHead.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Quatity</th>    
            <th>Price</th>
        </tr> 
    `;
    const table = document.querySelector(".tableHistoryBody");
    table.innerHTML = "";
    let number = 0;
    let totalPrice = 0;
    for (var i = 0; i < ListOrders.length; i++) {
        if (ListOrders[i].id === orderId) {
            ListOrders[i].order.forEach((item) => {
                number++;
                let row = `
                <tr>
                    <td>${number}</td>
                    <td><img class="img-history" src="${item.image}" alt=""></td>
                    <td>${item.nameProduct}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price}</td>
                </tr>`;
                table.innerHTML += row;
            });
        }
    }
}
handleRenderHistoryOrder();
function status(check) {
    if (check == 0) {
      return "Đang chờ...";
    } else {
        if(check == 1){
          return "Đã xác nhận!";
        }
        else{
          return "Đã hủy";
      }
    }
  }
const textInput = document.querySelector(".search-field");
const textInputMb = document.querySelector(".search-field-mb"); // mobile
const iconDelete = document.querySelector(".icon-delete");
const iconDeleteMb = document.querySelector(".icon-delete-mb");
const textInputAdvance = document.getElementById("name");
const iconDeleteAdvance = document.querySelector(".icon-delete-advance");

// ============ Xoa text in input =================
function deleteText(nameObj, nameIcon) {
    nameObj.addEventListener("input", function () {
        if (nameObj.value.length > 0) {
            nameIcon.classList.remove("hidden");
            nameIcon.addEventListener("click", function () {
                nameObj.value = "";
                nameIcon.classList.add("hidden");
            });
        } else {
            nameIcon.classList.add("hidden");
        }
    });
}
deleteText(textInput, iconDelete); // Xoa ở header
deleteText(textInputMb, iconDeleteMb); // Xoa ở header mobile
deleteText(textInputAdvance, iconDeleteAdvance); // Xoá ở phần form tìm kiếm nâng cao

// ========= chức năng xem lại đơn hàng đã mua Mobile =============
function displayHideHistoryMB() {
    const history = document.querySelector(".historyOrder");
    history.classList.toggle("active");
}
function hideHistoryOrderMB1() {
    const btnHistoryMB = document.querySelector(".group-history");
    btnHistoryMB.addEventListener("click", () => {
        displayHideHistoryMB();
    });
}
function hideHistoryOrderMB2() {
    const btnCloseHistoryMB = document.querySelector(".close-history");
    btnCloseHistoryMB.addEventListener("click", () => {
        displayHideHistoryMB();
    });
}
let ListOrdersMB = localStorage.getItem("listOrders")
    ? JSON.parse(localStorage.getItem("listOrders"))
    : [];

    function renderTotalPriceUser(arrOfOrderInListOrder) {
        let sumQuantity = 0;
        let sumPrice = 0;
        let shipTotal = 0;
        arrOfOrderInListOrder.forEach((item) => {
            sumQuantity += item.quantity;
            sumPrice += item.price * item.quantity;
            shipTotal += 5 * item.quantity;
        })
        let totalPriceFull = sumPrice + shipTotal;
        return totalPriceFull.toFixed(2);
    }
    function renderTotalShipUser(arrOfOrderInListOrder) {
        let sumQuantity = 0;
        let sumPrice = 0;
        let shipTotal = 0;
        arrOfOrderInListOrder.forEach((item) => {
            sumQuantity += item.quantity;
            sumPrice += item.price * item.quantity;
            shipTotal += 5 * item.quantity;
        })
        return shipTotal;
    }
// render trong historyOrder
function handleRenderHistoryOrderMB() {
    if (login == null) return;
    const historyOrder = document.querySelector(".historyOrder");
    historyOrder.innerHTML = `
        <div class="table-header">
            <h2 class="title">History Order</h2>
        </div>
        <div class="container">
            <img class="close-history" src="./asset/img/bx-x.svg" alt="">
            <table>
                <thead class = "tableHistoryHead"> 
            
                </thead>
                <tbody class = "tableHistoryBody">

                </tbody>
            </table>
        </div>
    `;
    const tableHead = document.querySelector(".tableHistoryHead");
    tableHead.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Order time</th>
            <th>Total Price</th>
            <th>Status</th>
            <th></th>
        </tr> 
    `;
    hideHistoryOrderMB1();
    hideHistoryOrderMB2();
    const tableBody = document.querySelector(".tableHistoryBody");
    let userIndex = dataUsers.findIndex((user) => user.id == login.id);
    let number = 0;
    console.log("day la nhiem vu: ");
    console.log(ListOrdersMB);
    ListOrdersMB.forEach((item) => {
        if (dataUsers[userIndex].id == item.userId) { // kiem tra tk hien thoi
            number++;
            let row = `
                <tr>
                    <td>${number}</td>
                    <td>${item.order[0].time}</td>
                    <td>$${renderTotalPriceUser(item.order)}</td>
                    <td>${status(item.order[0].check)}</td>
                    <td onclick = "renderHistoryOrderItem(${item.id})">
                        <img class="showmore" src="./asset/img/showmore.png" alt="">
                    </td>
                </tr>`;
            tableBody.innerHTML += row;
        }
    });
}
function renderHistoryOrderItem(orderId) {
    const historyOrder = document.querySelector(".historyOrder");
    historyOrder.innerHTML = `
        <div class="table-header">
            <h2 class="title">History Order</h2>
        </div>
        <div class="container">
            <div>
                <img class="close-history" src="./asset/img/back_3114883.png" alt="Quay lại" onclick="handleRenderHistoryOrderMB()">
            </div>
            <span class = "fee_shipping" >Fee shipping: $10</span>

            <table>
                <thead class = "tableHistoryHead"> 
            
                </thead>
                <tbody class = "tableHistoryBody">

                </tbody>
            </table>
        </div>
    `;
    hideHistoryOrderMB1();
    const tableHead = document.querySelector(".tableHistoryHead");
    tableHead.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Quatity</th>    
            <th>Price</th>
        </tr> 
    `;
    const table = document.querySelector(".tableHistoryBody");
    table.innerHTML = "";
    let number = 0;
    let totalPrice = 0;
    for (var i = 0; i < ListOrdersMB.length; i++) {
        if (ListOrdersMB[i].id === orderId) {
            ListOrdersMB[i].order.forEach((item) => {
                number++;
                let row = `
                <tr>
                    <td>${number}</td>
                    <td><img class="img-history" src="${item.image}" alt=""></td>
                    <td>${item.nameProduct}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price}</td>
                </tr>`;
                table.innerHTML += row;
            });
           document.querySelector(".fee_shipping").textContent = "Fee shipping: $" + renderTotalShipUser(ListOrdersMB[i].order)
        }
    }
}
handleRenderHistoryOrderMB();
function status(check) {
    if (check == 0) {
      return "Đang chờ...";
    } else {
        if(check == 1){
          return "Đã xác nhận!";
        }
        else{
          return "Đã hủy";
      }
    }
  }

// =========== Tim kiem co ban ==============
const pagnigation = document.querySelector(".pagnigation");
// console.log(listProducts);
function search() {
    const noProduct = document.querySelector(".no-product-search");
    if (textInput.value.trim() === "") {
        currentProductList = listProducts;
        console.log(currentProductList);
        getProduct(listProducts);
        renderPageNumber(listProducts, perPage);
        document.querySelector(".li1").classList.add("active");
        noProduct.classList.add("hidden");
        pagnigation.classList.remove("hidden");
        return;
    }
    productSearch = listProducts.filter((value) => {
        return value.name
            .toLowerCase()
            .trim()
            .includes(textInput.value.trim().toLowerCase());
    });
    if (productSearch.length == 0) {
        noProduct.classList.remove("hidden");
        pagnigation.classList.add("hidden");
        getProduct(productSearch);
        renderPageNumber(productSearch, perPage);
        return;
    }
    if (productSearch.length > 0) {
        currentProductList = productSearch;
        getProduct(productSearch);
        renderPageNumber(productSearch, perPage);
        noProduct.classList.add("hidden");
        pagnigation.classList.remove("hidden");
    }
}
textInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        search();
    }
});

document.querySelector(".btn-search").addEventListener("click", search);

function searchMb() {
    console.log("Search");
    const noProduct = document.querySelector(".no-product-search");
    if (textInputMb.value.trim() === "") return;
    let productSearch = listProducts.filter((value) => {
        return value.name
            .toLowerCase()
            .trim()
            .includes(textInputMb.value.trim().toLowerCase());
    });
    if (productSearch.length == 0) {
        noProduct.classList.remove("hidden");

        noProduct.classList.remove("hidden");
        pagnigation.classList.add("hidden");
        getProduct(productSearch);
    }
    if (productSearch.length > 0) {
        noProduct.classList.add("hidden");
        currentProductList = productSearch;
        getProduct(productSearch);
        renderPageNumber(productSearch, perPage);
        noProduct.classList.add("hidden");
        pagnigation.classList.remove("hidden");
    }
}

document.querySelector(".btn-search-Mb").addEventListener("click", searchMb);

// ===================   An-hien form tim kiem nang cao ====================
let isFormVisible = false;
const btnForm = document.querySelector(".filter-toggle");
btnForm.addEventListener("click", function () {
    if (isFormVisible == false) {
        btnForm.classList.add("active");
        isFormVisible = true;
    } else {
        btnForm.classList.remove("active");
        isFormVisible = false;
    }
});

// ============== tim kiem nang cao  ==================
const type = document.getElementById("type");
const color = document.getElementById("color");
// const textInputAdvance đã gọi bên trên
const minPrice = document.getElementById("min");
const maxPrice = document.getElementById("max");

function searchAdvance(type, color, name, minPrice, maxPrice) {
    const noProduct = document.querySelector(".no-product-search");
    const productSearch = listProducts.filter((product, i) => {
        if (
            name &&
            !product.name
                .trim()
                .toLowerCase()
                .includes(name.trim().toLowerCase())
        ) {
            return false;
        }
        if (
            (minPrice && product.price < minPrice) ||
            (maxPrice && product.price > maxPrice)
        ) {
            return false;
        }
        if (type && !(product.nature.type == `${type}`)) {
            return false;
        }
        if (color && !product.nature.color.includes(color)) {
            return false;
        }
        return true;
    });

    if (productSearch.length === 0) {
        noProduct.classList.remove("hidden");
    } else {
        noProduct.classList.add("hidden");
    }
    // renderProduct(productSearchAdvance); // Render the filtered products
    if (productSearch.length == 0) {
        noProduct.classList.remove("hidden");
        pagnigation.classList.add("hidden");
        getProduct(productSearch);
        return;
    }
    if (productSearch.length > 0) {
        currentProductList = productSearch;
        getProduct(productSearch);
        renderPageNumber(productSearch, perPage);
        noProduct.classList.add("hidden");
        pagnigation.classList.remove("hidden");
    }
}

const btnShowResultAdvance = document.querySelector(".btn-show-result");
const btnCancelAdvance = document.querySelector(".btn-cancel");

btnShowResultAdvance.addEventListener("click", function (e) {
    console.log("da search advance");
    e.preventDefault();
    searchAdvance(
        type.value,
        color.value,
        textInputAdvance.value,
        minPrice.value,
        maxPrice.value
    );
    cancelAfterSearched();
});

btnCancelAdvance.onclick = cancelAfterSearched;
// ========== hàm dùng để huỷ các giá trị và ẩn form
function cancelAfterSearched(e) {
    const iconDeleteAdvance = document.querySelector(".icon-delete-advance");
    if (e) e.preventDefault(); // nếu không có if(e) thì chương trình bị lỗi
    textInputAdvance.value = "";
    type.value = "";
    color.value = "";
    minPrice.value = "";
    maxPrice.value = "";
    btnForm.classList.remove("active");
    iconDeleteAdvance.classList.add("hidden");
    isFormVisible = false;
}
