// ========= chức năng xem lại đơn hàng đã mua =============
function displayHideHistory() {
    const history = document.querySelector(".historyOrder");
    history.classList.toggle("active");
}
function hideHistoryOrder1() {
    const btnHistory = document.querySelector(".history");
    if (!btnHistory) return;
    btnHistory.addEventListener("click", () => {
        displayHideHistory();
    });
    console.log("JS loaded");

    document.querySelector(".history").addEventListener("click", () => {
      console.log("Đã bấm vào icon lịch sử");
    });

}
function hideHistoryOrder2() {
    // only bind close action to elements marked with data-action="close"
    const btnsClose = document.querySelectorAll(".close-history[data-action='close']");
    if (!btnsClose) return;
    btnsClose.forEach(btnCloseHistory => {
        btnCloseHistory.addEventListener("click", () => {
            displayHideHistory();
        });
    });
}
let ListOrders = localStorage.getItem("listOrders")
    ? JSON.parse(localStorage.getItem("listOrders"))
    : [];

// --- helper escape + format address/payment ---
function escapeHtml(s='') {
    return String(s).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function formatAddress(addr) {
    if (!addr) return '';
    return `${escapeHtml(addr.fullName)} — ${escapeHtml(addr.phone)} — ${escapeHtml(addr.line1)}, ${escapeHtml(addr.city)}`;
}
function formatPayment(pm) {
    if (!pm) return '';
    if (pm === 'cod') return 'Cash on delivery';
    if (pm === 'bank') return 'Bank transfer';
    return escapeHtml(pm);
}

// render trong historyOrder
function handleRenderHistoryOrder() {
    if (login == null) return;
    const historyOrder = document.querySelector(".historyOrder");
    historyOrder.innerHTML = `
        <div class="table-header">
            <h2 class="title">History Order</h2>
        </div>
        <div class="container">
            <img class="close-history" data-action="close" src="./asset/img/bx-x.svg" alt="">
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
    // Remove hideHistoryOrder2() - không cần gắn event listener nữa
    const tableBody = document.querySelector(".tableHistoryBody");
    let userIndex = dataUsers.findIndex((user) => user.id == login.id);
    let number = 0;
    ListOrders.forEach((item) => {
        if (dataUsers[userIndex].id == item.userId) {
            number++;
            const vnTime = new Date(item.order[0].time).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false
            });

            let row = `
                <tr>
                    <td>${number}</td>
                    <td>${vnTime}</td>
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
                <img class="close-history" data-action="back" src="./asset/img/back_3114883.png" alt="Quay lại" onclick="handleRenderHistoryOrder()">
            </div>
            <div class="order-details-header">
                <div class="order-info-row"><strong>Payment:</strong> <span class="payment-info"></span></div>
                <div class="order-info-row"><strong>Shipping address:</strong> <span class="address-info"></span></div>
                <div class="order-info-row"><strong>Shipping Fee:</strong> <span class="fee_shipping">$0</span></div>
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
    // Note: do NOT call hideHistoryOrder2() here because back button should not close overlay.
    const tableHead = document.querySelector(".tableHistoryHead");
    tableHead.innerHTML = `
        <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Quatity</th>    
            <th>Price</th>
            <th>Order time</th>
        </tr> 
    `;
    const table = document.querySelector(".tableHistoryBody");
    table.innerHTML = "";
    let number = 0;
    for (var i = 0; i < ListOrders.length; i++) {
        if (ListOrders[i].id === orderId) {
            const order = ListOrders[i];
            
            // Hiển thị payment và address luôn (không cần dropdown)
            document.querySelector('.payment-info').textContent = formatPayment(order.paymentMethod);
            document.querySelector('.address-info').textContent = order.shippingAddress ? formatAddress(order.shippingAddress) : 'N/A';

            ListOrders[i].order.forEach((item) => {
                number++;
                const vnTime = new Date(item.time).toLocaleString('vi-VN', {
                    timeZone: 'Asia/Ho_Chi_Minh',
                    hour12: false
                });
                let row = `
                <tr>
                    <td>${number}</td>
                    <td><img class="img-history" src="${item.image}" alt=""></td>
                    <td>${item.nameProduct}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price}</td>
                    <td>${vnTime}</td>
                </tr>`;
                table.innerHTML += row;
            });
            document.querySelector(".fee_shipping").textContent = "Shipping Fee: $" + renderTotalShipUser(ListOrders[i].order)
        }
    }
}

function toggleOrderDetails(btn) {
    const dropdown = btn.parentElement.nextElementSibling;
    dropdown.classList.toggle('hidden');
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


// ========= chức năng xem lại đơn hàng đã mua Mobile =============
function displayHideHistoryMB() {
    const history = document.querySelector(".historyOrder");
    history.classList.toggle("active");
}
function hideHistoryOrderMB1() {
    const btnHistoryMB = document.querySelector(".group-history");
    if (!btnHistoryMB) return;
    btnHistoryMB.addEventListener("click", () => {
        displayHideHistoryMB();
    });
}
function hideHistoryOrderMB2() {
    // only bind close action to elements marked with data-action="close"
    const btnsClose = document.querySelectorAll(".close-history[data-action='close']");
    if (!btnsClose) return;
    btnsClose.forEach(btnCloseHistory => {
        btnCloseHistory.addEventListener("click", () => {
            displayHideHistoryMB();
        });
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
            <img class="close-history" data-action="close" src="./asset/img/bx-x.svg" alt="">
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
        if (dataUsers[userIndex].id == item.userId) {
            number++;
            const vnTime = new Date(item.order[0].time).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false
            });

            let row = `
                <tr>
                    <td>${number}</td>
                    <td>${vnTime}</td>
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
function renderHistoryOrderItemMB(orderId) {
    const historyOrder = document.querySelector(".historyOrder");
    historyOrder.innerHTML = `
        <div class="table-header">
            <h2 class="title">History Order</h2>
        </div>
        <div class="container">
            <div>
                <img class="close-history" data-action="back" src="./asset/img/back_3114883.png" alt="Quay lại" onclick="handleRenderHistoryOrderMB()">
            </div>
            <div class="order-details-header">
                <div class="order-info-row"><strong>Payment:</strong> <span class="payment-info"></span></div>
                <div class="order-info-row"><strong>Shipping address:</strong> <span class="address-info"></span></div>
                <div class="order-info-row"><strong>Shipping Fee:</strong> <span class="fee_shipping">$0</span></div>
            </div>

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
            <th>Order time</th>
        </tr> 
    `;
    const table = document.querySelector(".tableHistoryBody");
    table.innerHTML = "";
    let number = 0;
    for (var i = 0; i < ListOrdersMB.length; i++) {
        if (ListOrdersMB[i].id === orderId) {
            const order = ListOrdersMB[i];
            
            // Hiển thị payment và address luôn
            document.querySelector('.payment-info').textContent = formatPayment(order.paymentMethod);
            document.querySelector('.address-info').textContent = order.shippingAddress ? formatAddress(order.shippingAddress) : 'N/A';

            ListOrdersMB[i].order.forEach((item) => {
                number++;
                const vnTime = new Date(item.time).toLocaleString('vi-VN', {
                    timeZone: 'Asia/Ho_Chi_Minh',
                    hour12: false
                });
                let row = `
                <tr>
                    <td>${number}</td>
                    <td><img class="img-history" src="${item.image}" alt=""></td>
                    <td>${item.nameProduct}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.price}</td>
                    <td>${vnTime}</td>
                </tr>`;
                table.innerHTML += row;
            });
            document.querySelector(".fee_shipping").textContent = "Shipping Fee: $" + renderTotalShipUser(ListOrdersMB[i].order)
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

// Gắn một lần khi page load
document.addEventListener('DOMContentLoaded', () => {
    // Sử dụng event delegation - sẽ hoạt động cho tất cả element hiện tại và tương lai
    document.addEventListener("click", (e) => {
        // Mở history khi bấm icon
        if (e.target.closest(".history")) {
            e.preventDefault();
            displayHideHistory();
            handleRenderHistoryOrder();
            return;
        }
        
        // Đóng overlay khi bấm dấu X
        if (e.target.closest(".close-history[data-action='close']")) {
            e.preventDefault();
            e.stopPropagation();
            displayHideHistory();
            return;
        }
        
        // Quay lại danh sách khi bấm mũi tên back
        if (e.target.closest(".close-history[data-action='back']")) {
            e.preventDefault();
            e.stopPropagation();
            if (window.innerWidth <= 768) {
                handleRenderHistoryOrderMB();
            } else {
                handleRenderHistoryOrder();
            }
            return;
        }
        
        // Mở history mobile
        if (e.target.closest(".group-history")) {
            e.preventDefault();
            displayHideHistoryMB();
            handleRenderHistoryOrderMB();
            return;
        }
    });
});