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


// ==============Hiển thị Producrt - link đến các nội dung main==============
document.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector("#main");
  const productPage = document.querySelector("#product");

  // Kiểm tra nếu được yêu cầu mở product từ trang khác
  if (localStorage.getItem("showProductPage") === "true") {
    mainPage.classList.add("hidden");
    productPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    localStorage.removeItem("showProductPage"); // xóa sau khi xử lý
  }
  
  // Nút xem tất cả product
  const btnProductAll = document.querySelector(".btn-product-all");
  if (btnProductAll && mainPage && productPage) {
    btnProductAll.addEventListener("click", (e) => {
      e.preventDefault();
      mainPage.classList.add("hidden");
      productPage.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Cập nhật URL hash
      history.pushState(null, "", "#product");
    });
  }

  // Hàm chung để hiển thị main, ẩn product và scroll xuống section
  function showMainScrollTo(sectionId) {
    productPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Cập nhật URL hash
    history.pushState(null, "", sectionId);
  }

  // Nút Sale
  const btnSale = document.querySelector(".btn-sale");
  if (btnSale) {
    btnSale.addEventListener("click", (e) => {
      e.preventDefault();
      showMainScrollTo("#sale");
    });
  }

  // Nút About
  const btnAbout = document.querySelector(".btn-about");
  if (btnAbout) {
    btnAbout.addEventListener("click", (e) => {
      e.preventDefault();
      showMainScrollTo("#about");
    });
  }

  // Nút Contact
  const btnContact = document.querySelector(".btn-contact");
  if (btnContact) {
    btnContact.addEventListener("click", (e) => {
      e.preventDefault();
      showMainScrollTo("#footer");
    });
  }
});
// ============ render tên người dùng khi đăng nhập ===============
function renderName() {
    const name = document.querySelector(".hello-name");
    if (login) {
        name.textContent = login.name;
    }
}
renderName();