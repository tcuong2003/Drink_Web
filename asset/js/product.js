let listProducts = localStorage.getItem("listProducts")
    ? JSON.parse(localStorage.getItem("listProducts"))
    : [
        
        {
            id: 1,
            name: "Americano",
            ingredients: "Espresso, nước nóng",
            price: 3.00,
            image: "./asset/img/product-coffee/coffee-101.jpg",
            star: "4.6",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 2,
            name: "Bạc xỉu",
            ingredients: "Sữa đặc, cà phê pha, đá",
            price: 2.50,
            image: "./asset/img/product-coffee/coffee-102.jpg",
            star: "5",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 3,
            name: "Cacao latte",
            ingredients: "Bột ca cao, sữa, đường, bọt sữa hấp",
            price: 4.20,
            image: "./asset/img/product-coffee/coffee-103.jpg",
            star: "3.5",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 4,
            name: "Cacao nóng",
            ingredients: "Bột ca cao, sữa nóng, đường",
            price: 4.00,
            image: "./asset/img/product-coffee/coffee-104.jpg",
            star: "4.5",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 5,
            name: "Cafe đen",
            ingredients: "Cà phê Robusta pha mạnh",
            price: 2.00,
            image: "./asset/img/product-coffee/coffee-105.jpg",
            star: "5",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 6,
            name: "Cafe muối",
            ingredients: "Cà phê, sữa đặc, kem muối",
            price: 3.2,
            image: "./asset/img/product-coffee/coffee-106.jpg",
            star: "4.3",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 7,
            name: "Cafe sữa",
            ingredients: "Cà phê pha mạnh, sữa đặc, đá",
            price: 2.90,
            image: "./asset/img/product-coffee/coffee-107.jpg",
            star: "4.3",
            size: ["S", "M", "L"],
            type: "coffee",
        },
       
        {
            id: 8,
            name: "Capuchino",
            ingredients: "Espresso, sữa hấp, bọt sữa",
            price: 3.80,
            image: "./asset/img/product-coffee/coffee-108.jpg",
            star: "4.3",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 9,
            name: "Mocha coffee",
            ingredients: "Espresso, siro sô-cô-la, sữa hấp, kem tươi",
            price: 4.00,
            image: "./asset/img/product-coffee/coffee-109.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 10,
            name: "Matcha latte",
            ingredients: "Bột trà xanh, sữa, đường, đá",
            price: 3.50,
            image: "./asset/img/product-tea/tea-201.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 11,
            name: "Trà bí đao",
            ingredients: "Trà bí đao, đường phèn, đá",
            price: 2.58,
            image: "./asset/img/product-tea/tea-202.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 12,
            name: "Trà đào",
            ingredients: "Trà đen, siro đào, đào cắt lát, đá",
            price: 3.45,
            image: "./asset/img/product-tea/tea-203.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 13,
            name: "Trà dâu ổi hồng",
            ingredients: "Trà đen, siro dâu, nước ép ổi hồng, đá",
            price: 3.4,
            image: "./asset/img/product-tea/tea-204.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 14,
            name: "Trà sen vàng",
            ingredients: "Trà sen, mật ong, đá",
            price: 4.20,
            image: "./asset/img/product-tea/tea-205.png",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 15,
            name: "Trà sữa khoai môn",
            ingredients: "Trà đen, sữa tươi, bột khoai môn, đường, đá",
            price: 3.57,
            image: "./asset/img/product-tea/tea-206.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 16,
            name: "Trà sữa socola",
            ingredients: "Trà đen, sữa tươi, siro socola, đá",
            price: 3.57,
            image: "./asset/img/product-tea/tea-207.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 17,
            name: "Trà sữa thái",
            ingredients: "Trà đen Thái, sữa đặc, sữa tươi, đường, đá",
            price: 4.00,
            image: "./asset/img/product-tea/tea-208.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 18,
            name: "Trà sữa truyền thống",
            ingredients: "Trà đen, sữa tươi hoặc sữa đặc, đường, đá",
            price: 3.50,image: "./asset/img/product-tea/tea-209.png",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 19,
            name: "Trà tắc",
            ingredients: "Trà xanh, nước cốt tắc, mật ong hoặc đường, đá",
            price: 3.20,
            image: "./asset/img/product-tea/tea-210.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 20,
            name: "Trà trái cây nhiệt đới",
            ingredients: "Trà xanh, hỗn hợp trái cây nhiệt đới, đá, đường",
            price: 4.15,
            image: "./asset/img/product-tea/tea-211.jpg",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 21,
            name: "Trà vải",
            ingredients: "Trà đen, nước ép vải, đường, đá",
            price: 3.99,
            image: "./asset/img/product-tea/tea-212.png",
            star: 4.2,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 22,
            name: "Sinh tố dứa",
            ingredients: "Xoài chín, sữa đặc, sữa tươi, đường, đá xay",
            price: 4.49,
            image: "./asset/img/product-smoothie/smoothie-301.jpg",
            star: 4.5,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 23,
            name: "Sinh tố xoài",
            ingredients: "Thơm (dứa), mật ong, sữa tươi, đá viên",
            price: 4.19,
            image: "./asset/img/product-smoothie/smoothie-302.jpg",
            star: 4.3,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 24,
            name: "Sinh tố bơ",
            ingredients: "Mãng cầu xiêm, sữa đặc, sữa tươi, đá xay",
            price: 4.59,
            image: "./asset/img/product-smoothie/smoothie-303.jpg",
            star: 4.6,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 25,
            name: "Sinh tố chuối",
            ingredients: "Kiwi, táo xanh, mật ong, đá viên",
            price: 4.79,
            image: "./asset/img/product-smoothie/smoothie-304.jpg",
            star: 4.4,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 26,
            name: "Sinh tố dâu tây",
            ingredients: "Dâu tây, sữa chua, sữa tươi, đá xay",
            price: 4.69,
            image: "./asset/img/product-smoothie/smoothie-305.jpg",
            star: 4.7,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 27,
            name: "Sinh tố kiwi",
            ingredients: "Chuối chín, sữa tươi, mật ong, đá viên",
            price: 3.99,
            image: "./asset/img/product-smoothie/smoothie-306.jpg",
            star: 4.3,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 28,
            name: "Sinh tố mãng cầu",
            ingredients: "Bơ sáp, sữa đặc, sữa tươi, đá xay",
            price: 4.89,
            image: "./asset/img/product-smoothie/smoothie-307.jpg",
            star: 4.8,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 29,
            name: "Nước ép táo",
            ingredients: "Táo tươi, nước lọc, đường (tuỳ chọn), đá viên",
            price: 3.99,
            image: "./asset/img/product-juice/juice-401.jpg",
            star: 4.4,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 30,
            name: "Nước ép cam",
            ingredients: "Rau má tươi, nước lọc, sữa đặc hoặc đường, đá viên",
            price: 3.49,
            image: "./asset/img/product-juice/juice-402.jpg",
            star: 4.5,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 31,
            name: "Nước ép cà rốt",
            ingredients: "Ổi hồng, muối, đường, đá xay",
            price: 3.79,
            image: "./asset/img/product-juice/juice-403.jpg",
            star: 4.3,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 32,
            name: "Nước ép chanh dây",
            ingredients: "Lựu tươi, mật ong, đá viên",
            price: 4.49,
            image: "./asset/img/product-juice/juice-404.jpg",
            star: 4.6,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 33,
            name: "Nước ép dưa hấu",
            ingredients: "Dưa hấu, đường (tuỳ chọn), đá viên",
            price: 3.59,
            image: "./asset/img/product-juice/juice-405.jpg",
            star: 4.5,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 34,
            name: "Nước ép lựu",
            ingredients: "Chanh dây, đường, nước lọc, đá viên",
            price: 3.69,
            image: "./asset/img/product-juice/juice-406.jpg",
            star: 4.7,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 35,
            name: "Nước ép ổi",
            ingredients: "Cam tươi, mật ong (tuỳ chọn), đá viên",
            price: 3.99,
            image: "./asset/img/product-juice/juice-407.jpg",
        star: 4.8,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 36,
            name: "Nước ép rau má",
            ingredients: "Cà rốt tươi, mật ong, đá viên",
            price: 3.89,
            image: "./asset/img/product-juice/juice-408.jpg",
            star: 4.4,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 37,
            name: "Cà phê phin",
            ingredients: "Sữa đặc, cà phê rang say, nước nóng",
            price: 4.00,
            image: "./asset/img/product-coffee/coffee-110.jpg",
            star: "4.3",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 38,
            name: "Caramel Macchiato",
            ingredients: "Espresso, sữa tươi, sốt caramel, siro vani",
            price: 5.38,
            image: "./asset/img/product-coffee/coffee-111.jpg",
            star: "3.4",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 39,
            name: "Espresso con Panna",
            ingredients: "Espresso, kem tươi đánh bông",
            price: 3.50,
            image: "./asset/img/product-coffee/coffee-112.jpg",
            star: "2.5",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 40,
            name: "Espresso",
            ingredients: "Cà phê xay mịn, nước nóng",
            price: 3.00,
            image: "./asset/img/product-coffee/coffee-113.jpg",
            star: "1.5",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 41,
            name: "Ristretto Bianco",
            ingredients: "Ristretto, sữa tươi đánh bọt",
            price: 4.20,
            image: "./asset/img/product-coffee/coffee-114.jpg",
            star: "2.6",
            size: ["S", "M", "L"],
            type: "coffee",
        },
        {
            id: 42,
            name: "Trà olong nhài",
            ingredients: "Trà olong, hoa nhài, đá",
            price: 4.05,
            image: "./asset/img/product-tea/tea-213.jpg",
            star: 4.3,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 43,
            name: "Trà sữa Oreo",
            ingredients: "Trà đen, sữa tươi, kem Oreo, đá",
            price: 5.70,
            image: "./asset/img/product-tea/tea-214.jpg",
            star: 3.5,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 44,
            name: "Trà sữa pudding trứng",
            ingredients: "Trà đen, sữa tươi, pudding trứng, đá",
            price: 6.00,
            image: "./asset/img/product-tea/tea-215.jpg",
            star: 1.4,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 45,
            name: "Trà xoài kem cheese",
            ingredients: "Trà xanh, xoài, kem cheese, đá",
            price: 4.80,
            image: "./asset/img/product-tea/tea-216.jpg",
            star: 4.7,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 46,
            name: "Trà đào cam sả",
            ingredients: "Trà đen, đào, cam, sả, đá",
            price: 4.50,
            image: "./asset/img/product-tea/tea-217.jpg",
            star: 3.5,
            size: ["S", "M", "L"],
            type: "tea",
        },
        {
            id: 47,
            name: "Sinh tố dưa lưới",
            ingredients: "Dưa lưới chín, sữa tươi, sữa đặc, đá xay",
            price: 4.39,
            image: "./asset/img/product-smoothie/smoothie-308.jpg",
            star: 4.5,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 48,
            name: "Sinh tố sầu riêng",
            ingredients: "Sầu riêng, sữa tươi, sữa đặc, đá xay",
            price: 4.99,
            image: "./asset/img/product-smoothie/smoothie-309.jpg",
            star: 1.6,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 49,
            name: "Sinh tố đu đủ",
            ingredients: "Đu đủ chín, sữa tươi, sữa đặc, đá viên",
            price: 3.89,
            image: "./asset/img/product-smoothie/smoothie-310.jpg",
            star: 4.4,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 50,
            name: "Sinh tố việt quất",
            ingredients: "Việt quất, sữa chua, sữa tươi, đá xay",
            price: 4.79,
            image: "./asset/img/product-smoothie/smoothie-311.jpg",
            star: 4.7,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 51,
            name: "Sinh tố mít",
            ingredients: "Mít tươi, sữa tươi, sữa đặc, đá viên",
            price: 4.29,
            image: "./asset/img/product-smoothie/smoothie-312.jpg",
            star: 2.5,
            size: ["S", "M", "L"],
            type: "smoothie",
        },
        {
            id: 52,
            name: "Nước ép nho",
            ingredients: "Nho tím tươi, mật ong, đá viên",
            price: 4.49,
            image: "./asset/img/product-juice/juice-409.jpg",
            star: 4.6,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 53,
            name: "Nước ép đào",
            ingredients: "Đào chín, đường (tuỳ chọn), đá viên",
            price: 4.19,
            image: "./asset/img/product-juice/juice-410.jpg",
            star: 4.4,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 54,
            name: "Nước ép mận",
            ingredients: "Mận chín, đường, đá xay",
            price: 4.09,
            image: "./asset/img/product-juice/juice-411.jpg",
            star: 4.3,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 55,
            name: "Nước ép dưa leo",
            ingredients: "Dưa leo tươi, mật ong, đá viên",
            price: 3.79,
            image: "./asset/img/product-juice/juice-412.jpg",
            star: 1.2,
            size: ["S", "M", "L"],
            type: "juice",
        },
        {
            id: 56,
            name: "Nước ép cà chua",
            ingredients: "Cà chua tươi, mật ong hoặc đường, đá viên",
            price: 3.69,
            image: "./asset/img/product-juice/juice-413.jpg",
            star: 2.1,
            size: ["S", "M", "L"],
            type: "juice",
        },

      ];


// ================== Hiển thị tất cả sản phẩm ==================
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

// ================== Phân trang ==================
let currentPage = 1;
let perPage = 9;
let totalPage = 0;
let currentProductList = listProducts; // Mặc định hiển thị toàn bộ sản phẩm


// Lấy sản phẩm theo trang
function getProduct(arr) {
    totalPage = Math.ceil(arr.length / perPage);

    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const perProduct = arr.slice(start, end);

    renderProduct(perProduct);
    renderPagination(arr);
}

// Render thanh phân trang (Đầu, Trước, Số, Sau, Cuối)
function renderPagination(arr) {
    totalPage = Math.ceil(arr.length / perPage);
    const paginationContainer = document.querySelector(".pagnigation-ul");
    paginationContainer.innerHTML = "";

    // Nút Đầu và Trước
    paginationContainer.innerHTML += `
        <li class="page-btn ${currentPage === 1 ? "disabled" : ""}" onclick="goToPage(1)">Đầu</li>
        <li class="page-btn ${currentPage === 1 ? "disabled" : ""}" onclick="goToPage(${currentPage - 1})">Trước</li>
    `;

    // Tính giới hạn hiển thị 5 trang quanh currentPage
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPage, currentPage + 2);

    if (currentPage <= 2) {
        end = Math.min(5, totalPage);
    } else if (currentPage >= totalPage - 1) {
        start = Math.max(totalPage - 4, 1);
    }

    for (let i = start; i <= end; i++) {
        paginationContainer.innerHTML += `
            <li class="page-num ${i === currentPage ? "active" : ""}" onclick="goToPage(${i})">${i}</li>
        `;
    }

    // Nút Sau và Cuối
    paginationContainer.innerHTML += `
        <li class="page-btn ${currentPage === totalPage ? "disabled" : ""}" onclick="goToPage(${currentPage + 1})">Sau</li>
        <li class="page-btn ${currentPage === totalPage ? "disabled" : ""}" onclick="goToPage(${totalPage})">Cuối</li>
    `;
}

// Chuyển trang
function goToPage(page) {
    if (page < 1 || page > totalPage || page === currentPage) return;
    currentPage = page;
    getProduct(currentProductList);
}

// Khởi tạo khi vào trang
getProduct(listProducts);


// ================== Bộ lọc ==================

const btnFilter = document.getElementById("apply-filter");
const typeSelect = document.getElementById("filter-type");
const ratingSelect = document.getElementById("filter-rating");
const priceMin = document.getElementById("price-min");
const priceMax = document.getElementById("price-max");
const searchInput = document.getElementById("search-input");
const resetBtn = document.getElementById("reset-filter");

// ====== Lọc sản phẩm theo điều kiện ======
function applyFilters() {
  let filtered = listProducts;

  // Search theo tên sản phẩm (realtime)
  const searchVal = searchInput.value.trim().toLowerCase();
  if (searchVal) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(searchVal)
    );
  }

  // Lọc theo loại
  const typeVal = typeSelect.value;
  if (typeVal !== "all") {
    filtered = filtered.filter((p) => p.type === typeVal);
  }

  // Lọc theo sao (lấy phần nguyên)
  const ratingVal = parseInt(ratingSelect.value);
  if (ratingVal > 0) {
    filtered = filtered.filter((p) => Math.floor(p.star) >= ratingVal);
  }

  // Lọc theo giá
  const min = parseFloat(priceMin.value) || 0;
  const max = parseFloat(priceMax.value) || Infinity;
  filtered = filtered.filter((p) => p.price >= min && p.price <= max);

  // Render lại - kiểm tra nếu không tìm thấy
  currentProductList = filtered;
  currentPage = 1;
  const productListContainer = document.querySelector(".list-show-product");
  const paginationContainer = document.querySelector(".pagnigation");
  if(filtered.length === 0){
    if(productListContainer){
        productListContainer.innerHTML = '<p class="noProduct"> Không tìm thấy sản phẩm </p>'
    }
    paginationContainer.style.display = "none";

  } else {
    getProduct(filtered);
    paginationContainer.style.display = "flex";
  }

}

// ====== Event: Apply Filter ======
btnFilter.addEventListener("click", applyFilters);

// ====== Event: Search realtime ======
searchInput.addEventListener("input", applyFilters);

// ====== Event: Reset Filter ======
resetBtn.addEventListener("click", () => {
  // Reset giá trị input
  typeSelect.value = "all";
  ratingSelect.value = "0";
  priceMin.value = "";
  priceMax.value = "";
  searchInput.value = "";

  // Render toàn bộ
  currentProductList = listProducts;
  currentPage = 1;
  getProduct(listProducts);
});



// ========== 2 biến toàn cục là dữ liệu data và tài khoản hiện tại đang login ==========
let dataUsers = JSON.parse(localStorage.getItem("DataUsers"));
let login = JSON.parse(localStorage.getItem("loginUser"));

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
                    type: productToAdd.type,
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
// ============ render tên người dùng khi đăng nhập ===============
function renderName() {
    const name = document.querySelector(".hello-name");
    if (login) {
        name.textContent = login.name;
    }
}

