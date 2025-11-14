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
    setInterval(nextSlide, 6000);
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

// ================== Hien thi gia phan SALE OFF =============================
// Lấy danh sách sản phẩm từ localStorage
// const listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

// Lặp qua từng sản phẩm trong phần Sale
document.querySelectorAll(".sale-product").forEach(item => {
  // Lấy ID sản phẩm từ link href (ví dụ "./details.html?id=5")
  const url = new URL(item.href, window.location.origin);
  const id = parseInt(url.searchParams.get("id"));

  // Lấy % giảm giá từ text
  const discountText = item.querySelector(".discount").textContent;
  const discountPercent = parseInt(discountText.replace("-", "").replace("%", ""));

  // Tìm sản phẩm trong list
  const product = listProducts.find(p => p.id === id);
  if (!product) return;

  const oldPrice = product.price * 1.1;
  const newPrice = product.price;

  // Hiển thị giá
  item.querySelector(".old-price").textContent = `$${oldPrice.toFixed(2)}`;
  item.querySelector(".new-price").textContent = `$${newPrice.toFixed(2)}`;
});


// ==============Hiển thị Product - link đến các nội dung main==============

// Hàm xử lý chuyển đến section tương ứng
function handleNavigation(hash) {
  const mainPage = document.querySelector("#main");
  const productPage = document.querySelector("#product");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuContent = document.querySelector(".menu-content");

  // Đóng menu mobile/tablet nếu đang mở
  if (menuOverlay) {
    menuOverlay.style.visibility = "hidden";
    menuOverlay.style.opacity = "0";
    menuOverlay.style.pointerEvents = "none";
  }
  if (menuContent) {
    menuContent.style.transform = "translateX(-100%)";
    menuContent.style.pointerEvents = "none";
  }

  if (hash === "#product") {
    mainPage.classList.add("hidden");
    productPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (hash === "#sale" || hash === "#about" || hash === "#footer") {
    productPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
    const section = document.querySelector(hash);
    if (section) setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 100);
  } else {
    // Mặc định về main nếu không có hash hoặc hash không xác định
    productPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
  }
}

// Lắng nghe hashchange (khi click link hash hoặc thay đổi URL)
window.addEventListener("hashchange", () => {
  handleNavigation(location.hash);
});

// Xử lý load lần đầu tiên
document.addEventListener("DOMContentLoaded", () => {
  const hash = location.hash || "#main";
  handleNavigation(hash);

  // Nếu có flag navigateTo từ trang khác (details/cart)
  const navigateTo = localStorage.getItem("navigateTo");
  if (navigateTo) {
    window.location.hash = navigateTo.replace("#", "");
    localStorage.removeItem("navigateTo");
  }

  // Nếu có flag showProductPage từ trang khác
  if (localStorage.getItem("showProductPage") === "true") {
    window.location.hash = "product";
    localStorage.removeItem("showProductPage");
  }

  // render tên người dùng (sau khi form.js đã load loginUser)
  const desktopNameEl = document.querySelector(".hello-name");
  const mobileNameEl = document.querySelector(".hello-mobile-name");
  const login = JSON.parse(localStorage.getItem("loginUser"));
  if (login) {
    const text = `Welcome back, ${login.name}`;
    if (desktopNameEl) desktopNameEl.textContent = text;
    if (mobileNameEl) mobileNameEl.textContent = text;
  }
});

// ============ Header links - chuyển đổi hash khi click nút ============
document.addEventListener("click", (e) => {
    const btnProduct = e.target.closest(".btn-product-all");
    const btnSale = e.target.closest(".btn-sale");
    const btnAbout = e.target.closest(".btn-about");
    const btnContact = e.target.closest(".btn-contact");
    if (!btnProduct && !btnSale && !btnAbout && !btnContact) return;
    e.preventDefault();

    // Đóng menu mobile/tablet nếu đang mở
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuContent = document.querySelector(".menu-content");
    if (menuOverlay) {
        menuOverlay.style.visibility = "hidden";
        menuOverlay.style.opacity = "0";
        menuOverlay.style.pointerEvents = "none";
    }
    if (menuContent) {
        menuContent.style.transform = "translateX(-100%)";
        menuContent.style.pointerEvents = "none";
    }

    let hash = "#sale";
    if (btnProduct) hash = "#product";
    if (btnAbout) hash = "#about";
    if (btnContact) hash = "#footer";
// Hàm cập nhật cart quantity ở header mobile
function updateCartQuantity() {
    const login = JSON.parse(localStorage.getItem("loginUser"));
    if (!login) return;
    
    const dataUsers = JSON.parse(localStorage.getItem("DataUsers"));
    const userIndex = dataUsers.findIndex((user) => user.id == login.id);
    
    if (userIndex !== -1) {
        const cartItems = dataUsers[userIndex].cartItems;
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        
        const cartQuantity = document.querySelector(".cart-quantity");
        if (cartQuantity) {
            cartQuantity.textContent = totalQuantity;
            cartQuantity.style.display = totalQuantity > 0 ? "block" : "none";
        }
    }
}

    // Nếu đang ở cùng hash rồi, reload trang; nếu không, chỉ set hash
    if (location.hash === hash) {
        window.location.reload();
    } else {
        window.location.hash = hash;
    }
});

