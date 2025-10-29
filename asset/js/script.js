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
            shipTotal += 2 * item.quantity;
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
            shipTotal += 2 * item.quantity;
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


// btnCancelAdvance.onclick = cancelAfterSearched;
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

  const oldPrice = product.price;
  const newPrice = oldPrice - (oldPrice * discountPercent / 100);

  // Hiển thị giá
  item.querySelector(".old-price").textContent = `$${oldPrice.toFixed(2)}`;
  item.querySelector(".new-price").textContent = `$${newPrice.toFixed(2)}`;
});


// ==============Hiển thị Producrt - link đến các nội dung main==============
document.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.querySelector("#main");
  const productPage = document.querySelector("#product");

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