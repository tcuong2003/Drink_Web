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
    console.log("JS loaded");

document.querySelector(".history").addEventListener("click", () => {
  console.log("Đã bấm vào icon lịch sử");
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