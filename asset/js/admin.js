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
let listUsers = JSON.parse(localStorage.getItem("DataUsers"));
// console.log(listProducts); // Đây là danh sách sản phẩm từ localStorage
let listOrders = localStorage.getItem("listOrders")
  ? JSON.parse(localStorage.getItem("listOrders"))
  : [];
renderAdmin();
function renderAdmin() {
  renderProductManagement();
  document.querySelector(".productManagement").onclick = function () {
    renderProductManagement();
  };
  document.querySelector(".orderManagement").onclick = function () {
    renderOrderManagement();
  };
  document.querySelector(".userManagement").onclick = function () {
    renderUserManagement();
  };
  document.querySelector(".orderStartictis").onclick = function () {
    renderOrderStartictis();
  };
  document.querySelector(".logout").onclick = function () {
    window.location = "./index.html";
  };
}
function renderProductManagement() {
  document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Product Management</h1>
    `;

  document.querySelector(".contain-add-product-search").innerHTML = `
    <div class="add-product-search">
        <button class="add-btn" onclick = "openAddForm()">Add Product</button>
            <div class="search">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search for..."
                    class="search-field"
                    />
                <svg
                    xmlns=""
                    height="1em"
                    viewBox="0 0 512 512"
                    class="icon-delete hidden"
                >
                    <path
                        fill="currentColor"
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        ></path>
                </svg>
                <button class="btn-search">
                    <img
                        src="./asset/img/header-search.svg"
                        alt=""
                        class="search-icon"
                    />
                </button>
            </div>
            </div>
            <div class="contain-product">
        </div>
    `;
  renderProducts(listProducts);
  handleProductManagement();
}

function renderProducts(arr) {
  const productListContainer = document.querySelector(".contain-product");
  productListContainer.innerHTML = "";

  arr.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product"); // Add the "product" class

    productDiv.innerHTML = `
            <img src="${product.image}" alt="" class="img-product" />
            <h2 class="name">${product.name}</h2>
            <span class="price">${product.price}</span>
            <div class="group-btn">
                <button class="edit-btn" onclick = "openEditForm(${product.id})">
                    <img src="./asset/img/admin-edit-product.png" alt="" class="icon-edit" />
                    Edit Product
                </button>
                <button class="delete-btn" onclick = "deleteProduct(${product.id})">
                    <img src="./asset/img/admin-delete-product.png" alt="" class="icon-delete" />
                    Delete Product
                </button>
            </div>
        `;

    productListContainer.appendChild(productDiv);
  });
}
function renderOrderManagement() {
  document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Order Management</h1>
    `;
  const orderManagementContainer = document.querySelector(
    ".contain-add-product-search"
  );
  orderManagementContainer.innerHTML = ` 
    <div class="orderManagementHeader">
      <button class="add-btn" onclick = "renderWaitOrder(listOrders)" >
        Các đơn hàng chưa xác nhận
      </button>
      <button class="add-btn" onclick = "renderAcceptedOrder(listOrders)">
        Các đơn hàng đã xác nhận
      </button>
      <button class="add-btn" onclick = "renderRejectedOrder(listOrders)">
        Các đơn hàng bị hủy
      </button>
    </div>
    <div class="orderManagementBody">

    </div>
  `;
  //Render ra các đơn hàng đã xác nhận thay vì để trống
  renderWaitOrder(listOrders);
}
function renderTotalPriceAdmin(arrOfOrderInListOrder) {
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

function renderWaitOrder(arr) {
  const orderManagementBody = document.querySelector(".orderManagementBody")
  orderManagementBody.innerHTML = "";
  arr.forEach((order) => {
    if(order.order[0].check === 0){
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("historyOrder");
    var orderid = order.id;
    orderDiv.setAttribute("id", orderid);
    orderDiv.innerHTML = `
    <div class="helloUser-Order">
    <div class="sub-hello">
      <p>User: ${order.email}</p>
      <p class="total">Total: $${renderTotalPriceAdmin(order.order)}</p>
    </div>
      <span class = "fee_shipping fee_shipping${order.id}" >Fee shipping: $10</span>
  </div>
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quatity</th>    
                        <th>Price</th>
                        <th>Order time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody class = "tableHistory">
                    
                </tbody>
            </table>
        </div>
        <div class="handleAcceptOrder">
          <div>
            <button class="adminAcceptOrder" onclick = "acceptOrder(${orderid})">Xác nhận</button>
          </div>
          <div>
            <button class="adminRejectOrder" onclick = "rejectOrder(${orderid})">Hủy</button>
          </div>
        </div>
    `;
    orderManagementBody.appendChild(orderDiv);
    renderOrderItem(order.order, orderid);
    }
  });
}
function renderAcceptedOrder(arr){
  const orderManagementBody = document.querySelector(".orderManagementBody")
  orderManagementBody.innerHTML = "";
  arr.forEach((order) => {
    if(order.order[0].check === 1){
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("historyOrder");
    var orderid = order.id;
    orderDiv.setAttribute("id", orderid);
    orderDiv.innerHTML = `
        <div class="helloUser-Order">
          <div class="sub-hello">
            <p>User: ${order.email}</p>
            <p class="total">Total: $${renderTotalPriceAdmin(order.order)}</p>
          </div>
            <span class = "fee_shipping fee_shipping${order.id}" >Fee shipping: $10</span>
        </div>
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quatity</th>    
                        <th>Price</th>
                        <th>Order time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody class = "tableHistory">
                    
                </tbody>
            </table>
        </div>
    `;
    orderManagementBody.appendChild(orderDiv);
    renderOrderItem(order.order, orderid);
    }
  });
}
function renderRejectedOrder(arr){
  const orderManagementBody = document.querySelector(".orderManagementBody")
  orderManagementBody.innerHTML = "";
  arr.forEach((order) => {
    if(order.order[0].check === 2){
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("historyOrder");
    var orderid = order.id;
    orderDiv.setAttribute("id", orderid);
    orderDiv.innerHTML = `
        <div class="helloUser-Order">
        <div class="sub-hello">
          <p>User: ${order.email}</p>
          <p class="total">Total: $${renderTotalPriceAdmin(order.order)}</p>
        </div>
          <span class = "fee_shipping fee_shipping${order.id}" >Fee shipping: $10</span>
      </div>
        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quatity</th>    
                        <th>Price</th>
                        <th>Order time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody class = "tableHistory">
                    
                </tbody>
            </table>
        </div>
    `;
    orderManagementBody.appendChild(orderDiv);
    renderOrderItem(order.order, orderid);
    }
  });
}
function renderTotalShipAdmin(arrOfOrderInListOrder) {
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

function renderOrderItem(arr, orderid) {
  const orderManagementTbody = document
    .getElementById(orderid)
    .querySelector(".tableHistory");
    var variableNeed = ".fee_shipping" + orderid
  document.querySelector(variableNeed).textContent = "Fee shipping: $" + renderTotalShipAdmin(arr);
  let number = 0;
  arr.forEach((item) => {
    number++;
    const orderTr = document.createElement("tr");
    orderTr.innerHTML = `
            <td>${number}</td>
            <td><img class="img-history" src="${item.image}" alt=""></td>
            <td>${item.nameProduct}</td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
            <td>${item.time}</td>
            <td>${status(item.check)}</td>
        `;
    orderManagementTbody.appendChild(orderTr);
  });
}
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
function renderUserManagement() {
  document.querySelector(".div-title").innerHTML = `
        <h1 class="title">User Management</h1>
    `;
  document.querySelector(".contain-add-product-search").innerHTML = `
        <table class="userTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    `;
  renderUser(listUsers);
}
function renderUser(arr) {
  const userManagementTbody = document.querySelector(".userTable tbody");
  userManagementTbody.innerHTML = "";

  arr.forEach((user) => {
    const userTr = document.createElement("tr");
    userTr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>
                <button class="delete-btn product delete-user" onclick = "deleteUser(${user.id})">
                    Delete User
                </button>
                </td>
        `;
    userManagementTbody.appendChild(userTr);
  });
}
function renderOrderStartictis() {
  document.querySelector(".div-title").innerHTML = `
        <h1 class="title">Order Startictis</h1>
    `;
  const orderStartictisContainer = document.querySelector(
    ".contain-add-product-search"
  );
  orderStartictisContainer.innerHTML = `
  <div class="head">
  <div class="form-input-startics">
      <form>
        <div>
           <div class="start-date-div">
            <label for="start-date">From Date:</label>
            <input type="date" id="start-date" name="start-date" />
          </div>

          <div class="end-date-div">
            <label for="end-date">To Date:</label>
            <input type="date" id="end-date" name="end-date" />
         </div>

         <div class="form-item">
              <label for="type">Type</label>
              <select name="type" id="type">
                  <option value="">---</option>
                  <option value="sweater">sweater</option>
                  <option value="pants">pants</option>
                  <option value="shoe">shoe</option>
              </select>
          </div>

        </div>
          <button type = "button" class="btn-submit" onclick = "handleOrderStartictis()">Submit</button>
      </form>
      <button class="btn-sale" onclick = "handleTopSale()">Top Sales</button>
      <button class="btn-customer" onclick = "handleTopCustomer()">Top Customers</button>
  </div>
</div>
<div class="body-table">
  
</div>
    `;
}
function renderTableBody() {
  const tableBody = document.querySelector(".body-table");
  tableBody.innerHTML = `<table>
  <thead>
      <tr>
          <th>STT</th>
          <th>Email</th>
          <th>Image</th>
          <th>Name</th>
          <th>Quatity</th>    
          <th>Price</th>
          <th>Order time</th>
      </tr>
  </thead>
  <tbody class = "body-order-startictis">
  </tbody>
</table>`;
}
function renderTopSales() {
  const tableBody = document.querySelector(".body-table");
  tableBody.innerHTML = `<table>
  <thead>
      <tr>
          <th>STT</th>
          <th>Image</th>
          <th>Name</th>
          <th>Total quantity</th>    
          <th>Price</th>
          <th>Total price</th>
      </tr>
  </thead>
  <tbody class = "body-order-startictis">
  </tbody>
</table>`;
}
let listFilterTopSale = [];
function fillterTopSale() {
  // Map to store quantities for each product
  const productQuantities = {};

  listOrders.forEach((item) => {
    item.order.forEach((itemOrder) => {
      const productId = itemOrder.idProduct;
       let check = itemOrder.check;    // == 0 la chua mua, 1 la mua roi
        console.log(check);
      // If the product is not in the map, initialize it
      if (!productQuantities[productId] && check == 1) {
        productQuantities[productId] = {
          imgProduct: itemOrder.image,
          nameProduct: itemOrder.nameProduct,
          totalQuantity: 0,
          priceProduct: itemOrder.price,
        };
      }

      // Update the total quantity for the product
      if(check == 1)
        productQuantities[productId].totalQuantity += itemOrder.quantity;
    });
  });

  // Convert the map values to an array
  listFilterTopSale = Object.values(productQuantities);
  listTopCustomer.sort((a, b) => b.totalPrice - a.totalPrice);
  listFilterTopSale.sort((a, b) => b.totalQuantity - a.totalQuantity);

  console.log(listFilterTopSale);
}
function renderFillterTopSaleProduct() {
  const bodyOrderStartics = document.querySelector(".body-order-startictis");
  bodyOrderStartics.innerHTML = "";
  listFilterTopSale.forEach((item, i) => {
    let row = `<tr>
    <td>${i + 1}</td>
    <td><img class="img" src="${item.imgProduct}" alt=""></td>
    <td>${item.nameProduct}</td>
    <td>${item.totalQuantity}</td>
    <td>${item.priceProduct}</td>
    <td>${(item.totalQuantity * item.priceProduct).toFixed(2)}</td>
</tr>`;
    bodyOrderStartics.innerHTML += row;
  });
}
function renderTopCustomer() {
  const tableBody = document.querySelector(".body-table");
  tableBody.innerHTML = `<table>
  <thead>
      <tr>
          <th>STT</th>
          <th>Email</th>
          <th>Name</th>
          <th>Total Price</th>    
      </tr>
  </thead>
  <tbody class = "body-order-startictis">
  </tbody>
</table>`;
}
let listTopCustomer = [];
function fillterTopCustomer() {
  const customer = {};
  listOrders.forEach((item) => {
    item.order.forEach((itemOrder) => {
      const userId = item.userId;

      if (!customer[userId]) {
        customer[userId] = {
          email: item.email,
          nameCustomer: item.nameCustomer,
          totalPrice: 0,
        };
      }
      if(itemOrder.check == 1) // khi da mua roi moi cong them tien
        customer[userId].totalPrice += itemOrder.quantity * itemOrder.price + itemOrder.quantity * 5;
    });
  });
  listTopCustomer = Object.values(customer);
  // Sort the listTopCustomer array based on totalPrice in descending order
  listTopCustomer.sort((a, b) => b.totalPrice - a.totalPrice);

  console.log("mang gia tri khach hang la");
  console.log(listTopCustomer);
}
function renderTopCustomerPerson() {
  console.log("da vo hamf customer");
  const bodyOrderStartics = document.querySelector(".body-order-startictis");
  bodyOrderStartics.innerHTML = "";
  listTopCustomer.forEach((item, i) => {
    let row = `<tr>
    <td>${i + 1}</td>
    <td>${item.email}</td>
    <td>${item.nameCustomer}</td>
    <td>${item.totalPrice.toFixed(2)}</td>
</tr>`;
    bodyOrderStartics.innerHTML += row;
  });
}
function handleTopSale() {
  renderTopSales();
  fillterTopSale();
  renderFillterTopSaleProduct();
}
function handleTopCustomer() {
  fillterTopCustomer();
  renderTopCustomer();
  renderTopCustomerPerson();
}

let listFilter = [];

function filterOrdersByTime() {
  // Input elements
  const startDate = document.querySelector("#start-date");
  const endDate = document.querySelector("#end-date");
  const typeProduct = document.querySelector("#type");

  // Clear the previous filtered list
  listFilter = [];

  const startDateTime = new Date(startDate.value);
  let endDateTime;

  // If the end date is not specified, set it to the current date
  if (endDate.value === '') {
    endDateTime = new Date();
  } else {
    endDateTime = new Date(endDate.value);
    // Adjust the end date to include the entire day
    endDateTime.setDate(endDateTime.getDate() + 1);
  }

  listOrders.forEach((item) => {
    const filteredOrders = item.order.filter((order) => {
      const orderTime = new Date(order.time);
      return orderTime >= startDateTime && orderTime < endDateTime;
    });

    const matchesType = typeProduct.value !== '' ? filteredOrders.some(order => order.type === typeProduct.value) : true;

if (filteredOrders.length > 0 && matchesType) {
  // Create a new filtered object with only the necessary properties
  const filteredItem = {
    email: item.email,
    id: item.id,
    nameCustomer: item.nameCustomer,
    order: filteredOrders.filter(order => typeProduct.value === '' || order.type === typeProduct.value),
    userId: item.userId
  };

  // Add the item to the filtered list
  listFilter.push(filteredItem);
}

  });

  console.log("Filtered Orders:");
  console.log(listFilter);
  console.log("Filtering completed.");
}

function renderOrderStartictisProduct() {
  const bodyOrderStartics = document.querySelector(".body-order-startictis");
  let count = 0;
  bodyOrderStartics.innerHTML = "";
  for (let i = 0; i < listFilter.length; i++) {
    for (let j = 0; j < listFilter[i].order.length; j++) {
      if (listFilter[i].order[j].check == 1) {
        count++;
        let row = `<tr>
          <td>${count}</td>
          <td>${listFilter[i].email}</td>
          <td><img class="img" src="${listFilter[i].order[j].image}" alt=""></td>
          <td>${listFilter[i].order[j].nameProduct}</td>
          <td>${listFilter[i].order[j].quantity}</td>
          <td>$${listFilter[i].order[j].price}</td>
          <td>${listFilter[i].order[j].time}</td>
      </tr>`;
        bodyOrderStartics.innerHTML += row;
      }
    }
  }
  console.log("da renderlayout xong");
}

function handleOrderStartictis() {
  renderTableBody();
  filterOrdersByTime();
  renderOrderStartictisProduct();
}

function handleProductManagement() {
  const textInput = document.querySelector(".search-field");
  const iconDelete = document.querySelector(".icon-delete");

  function search() {
    let productSearch = listProducts.filter((value) => {
      return value.name
        .toLowerCase()
        .trim()
        .includes(textInput.value.trim().toLowerCase());
    });
    if (productSearch.length == 0) {
      console.log("No products found");
    }
    renderProducts(productSearch);
  }
  document.querySelector(".btn-search").addEventListener("click", search);

  function deleteText() {
    textInput.addEventListener("input", function () {
      if (textInput.value.length > 0) {
        iconDelete.classList.remove("hidden");
        console.log("thay");
        iconDelete.addEventListener("click", function () {
          textInput.value = "";
          iconDelete.classList.add("hidden");
          search();
        });
      } else {
        iconDelete.classList.add("hidden");
        console.log("k thay");
      }
    });
  }
  deleteText();

}

function addAnimate() {
  addEditProductBackgroundForm.classList.add("animate");
  addEditProductForm.classList.add("animate");
}
function rmvAnimate() {
  if (checkEdit == 1) clearForm();
  addEditProductBackgroundForm.classList.remove("animate");
  addEditProductForm.classList.remove("animate");
  var allDiv = document.querySelectorAll(".div");
  var allFormError = document.querySelectorAll(".form-error");

  for (let i = 0; i < allDiv.length; i++) {
    Object.assign(allDiv[i].style, {
      "border-color": "#b3b3b3",
    });
  }
  for (let j = 0; j < allFormError.length; j++) {
    allFormError[j].innerText = "";
  }
}

// Function to clear the form
function clearForm() {
  document.getElementById("nameProduct").value = "";
  document.getElementById("price").value = "";
  document.getElementById("type").value = "";
  document.getElementById("linkImage").value = "";
}

// ============= Xu li form an hien ================
let checkEdit = 0;
const btnCloseForm = document.querySelector(".closeImg");
const btnAddProduct = document.querySelector(".add-btn");
function openAddForm() {
  addAnimate();
  btnCloseForm.addEventListener("click", rmvAnimate);
}

const addEditProductBackgroundForm = document.querySelector(
  ".add-edit-product-background-form"
);
addEditProductBackgroundForm.addEventListener("click", rmvAnimate);
const addEditProductForm = document.querySelector(".add-edit-product-form");
addEditProductForm.onclick = function (event) {
  // Ngăn chặn sự kiện khi ấn vào form mà bị mất
  event.stopPropagation();
};

// =========== hàm xét id tự động =================
function setId() {
  let max = listProducts[0].id;
  for (let i = 1; i < listProducts.length; i++) {
    if (listProducts[i].id > max) max = listProducts[i].id;
  }
  return max + 1;
}

// Function to delete a product
function deleteProduct(productId) {
  const shouldDelete = window.confirm(
    "Are you sure you want to delete this product"
  );
  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].id === productId && shouldDelete) {
      console.log("da xoa  " + listProducts[i].id);
      console.log(listProducts);
      listProducts.splice(i, 1);
      
    }
  }
  localStorage.setItem("listProducts", JSON.stringify(listProducts));
  renderProducts(listProducts);
}
// Function to delete a user
function deleteUser(userId) {
  const shouldDelete = window.confirm(
    "Are you sure you want to delete this user"
  );
  for (let i = 0; i < listUsers.length; i++) {
    if (listUsers[i].id === userId && shouldDelete) {
      listUsers.splice(i, 1);
      // console.log("da xoa  " + listUsers[i].id);
      console.log(listUsers);
    }
  }
  localStorage.setItem("DataUsers", JSON.stringify(listUsers));
  renderUser(listUsers);
}
// Hàm để hiển thị form chỉnh sửa sản phẩm với thông tin sản phẩm cần chỉnh sửa
function openEditForm(productId) {
  document.getElementById("idProduct").value = productId;
  checkEdit = 1;
  const productName = document.getElementById("nameProduct");
  const productPrice = document.getElementById("price");
  const productType = document.getElementById("type");
  const productImg = document.getElementById("linkImage");

  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].id === productId) {
      const product = listProducts[i];
      productName.value = product.name;
      productPrice.value = product.price;
      productType.value = product.nature.type;
      productImg.value = product.image;
    }
  }
  addAnimate();
  btnCloseForm.addEventListener("click", rmvAnimate);
}

// Function to edit a product
function editProduct() {
  const productId = parseInt(document.getElementById("idProduct").value);
  const productName = document.getElementById("nameProduct").value;
  const productPrice = parseFloat(document.getElementById("price").value);
  const productType = document.getElementById("type").value;
  const productImg = document.getElementById("linkImage").value;
  const productToEdit = listProducts.find(
    (product) => product.id === productId
  );
  if (productToEdit) {
    productToEdit.name = productName;
    productToEdit.price = productPrice;
    productToEdit.nature.type = productType;
    productToEdit.image = productImg;
    localStorage.setItem("listProducts", JSON.stringify(listProducts));
    renderProducts(listProducts);
    rmvAnimate();
  } else {
    console.log("Product not found for editing with ID " + productId);
  }
}
// ============ Hàm thêm sản phẩm ==================
function addProduct(data) {
  const productId = setId();
  const productName = data.nameProduct;
  const productPrice = parseFloat(data.price);
  const productType = data.type;
  const productImg = data.linkImage;
  const product = {
    id: productId,
    name: productName,
    price: productPrice,
    image: productImg,
    star: 5.0,
    nature: {
      color: ["white", "black"],
      size: ["S", "M", "L"],
      type: productType,
    },
  };
  listProducts.unshift(product);
  clearForm();
  localStorage.setItem("listProducts", JSON.stringify(listProducts));
  console.log(listProducts);
  renderProducts(listProducts);
  rmvAnimate();
}
// ======== Ham xu li thong bao khi them san pham ===========
function addSuccessForm() {
  const toast = document.querySelector(".toast");
  const closeIcon = document.querySelector(".close");
  const progress = document.querySelector(".progress");
  let timer1, timer2;

  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 2500); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 2800);

  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });
}

function acceptOrder(orderid) {
  for (var i = 0; i < listOrders.length; i++) {
    if (listOrders[i].id === orderid) {
      if (listOrders[i].order[0].check === 0) {
        listOrders[i].order.forEach((item) => {
          item.check = 1;
        });
      } else {
        return;
      }
    }
  }
  updateListOrderstoLocalStorage();
  alert("Đã xác nhận!");
  renderOrderManagement();
}
function rejectOrder(orderid) {
  for (var i = 0; i < listOrders.length; i++) {
    if (listOrders[i].id === orderid) {
      if (listOrders[i].order[0].check === 0) {
        listOrders[i].order.forEach((item) => {
          item.check = 2;
        });
      } else {
        return;
      }
    }
  }
  updateListOrderstoLocalStorage();
  alert("Đã hủy");
  renderOrderManagement();
}
function updateListOrderstoLocalStorage() {
  let order = JSON.stringify(listOrders);
  localStorage.setItem("listOrders", order);
}

// Đối tượng `Validator`
function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  var selectorRules = {};
  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    var errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);
    var errorMessage;
    // Lấy ra các rules của selector
    var rules = selectorRules[rule.selector];
    // Lặp qua từng rule & kiểm tra
    // Nếu có lỗi thì dừng việc kiểm
    for (var i = 0; i < rules.length; ++i) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      var validateElement = getParent(
        inputElement,
        options.formGroupSelector
      ).querySelector(".div");
      Object.assign(validateElement.style, {
        "border-color": "red",
      });
    } else {
      errorElement.innerText = "";
      var validateElement = getParent(
        inputElement,
        options.formGroupSelector
      ).querySelector(".div");
      Object.assign(validateElement.style, {
        "border-color": "#b3b3b3",
      });
    }
    return !errorMessage;
  }

  // Lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // Khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();
      var isFormValid = true;
      // Lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Trường hợp submit với javascript
        if (typeof options.onSubmit === "function") {
          var enableInputs = formElement.querySelectorAll("[name]");
          var formValues = Array.from(enableInputs).reduce(function (
            values,
            input
          ) {
            values[input.name] = input.value;
            return values;
          },
          {});
          options.onSubmit(formValues);
        }
        // Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };

    // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach(function (rule) {
      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        // Xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          var errorElement = getParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(options.errorSelector);
          errorElement.innerText = "";
          var validateElement = getParent(
            inputElement,
            options.formGroupSelector
          ).querySelector(".div");
          Object.assign(validateElement.style, {
            "border-color": "#b3b3b3",
          });
          document.querySelector(".form-error").innerHTML = "";
        };
      }
    });
  }
}
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};
runCheckAddForm();
function runCheckAddForm() {
  Validator({
    form: "#add-form",
    formGroupSelector: ".form-group",
    errorSelector: ".form-error",
    rules: [
      Validator.isRequired("#nameProduct", "Vui lòng nhập tên sản phẩm"),
      Validator.isRequired("#price", "Vui lòng nhập đơn giá"),
      Validator.isRequired("#type", "Vui lòng chọn loại sản phẩm"),
      Validator.isRequired("#linkImage", "Vui lòng chọn link hình ảnh"),
    ],
    onSubmit: function (data) {
      if (checkEdit === 0) {
        addSuccessForm();
        console.log(data);
        clearForm();
        addProduct(data);
      } else {
        editProduct();
      }
    },
  });
}