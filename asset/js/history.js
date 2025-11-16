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

// Thay thế khai báo ListOrders/ListOrdersMB cũ và sửa các hàm render để lấy state trực tiếp từ localStorage
// (đảm bảo dùng loginUser / DataUsers chính xác)
function getAppState() {
    return {
        DataUsers: JSON.parse(localStorage.getItem('DataUsers')) || [],
        loginUser: JSON.parse(localStorage.getItem('loginUser')) || null,
        ListOrders: JSON.parse(localStorage.getItem('listOrders')) || []
    };
}

// render trong historyOrder
function handleRenderHistoryOrder() {
    const { DataUsers, loginUser, ListOrders } = getAppState();
    if (!loginUser) {
        // nếu chưa đăng nhập thì hiện thông báo (vẫn toggle overlay đã xảy ra trước đó)
        const historyOrder = document.querySelector(".historyOrder");
        if (historyOrder) {
            historyOrder.innerHTML = `<div class="table-header"><h2 class="title">Vui lòng đăng nhập để xem lịch sử đơn hàng</h2></div>`;
        }
        return;
    }
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
    const tableBody = document.querySelector(".tableHistoryBody");
    let userIndex = DataUsers.findIndex((user) => user.id == loginUser.id);
    let number = 0;
    ListOrders.forEach((item) => {
        // guard: nếu item/order không hợp lệ thì bỏ qua
        if (!item || !Array.isArray(item.order) || item.order.length === 0) return;

        if (DataUsers[userIndex] && DataUsers[userIndex].id == item.userId) {
            number++;
            const firstOrder = item.order[0];
            if (!firstOrder || !firstOrder.time) return; // bảo vệ tránh undefined
            const vnTime = new Date(firstOrder.time).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false
            });

            let row = `
                <tr>
                    <td>${number}</td>
                    <td>${vnTime}</td>
                    <td>$${renderTotalPriceUser(item.order)}</td>
                    <td>${status(firstOrder.check)}</td>
                    <td onclick = "renderHistoryOrderItem(${item.id})">
                        <img class="showmore" src="./asset/img/showmore.png" alt="">
                    </td>
                </tr>`;
            tableBody.innerHTML += row;
        }
    });
}

function renderHistoryOrderItem(orderId) {
    const { ListOrders } = getAppState();
    const historyOrder = document.querySelector(".historyOrder");
    historyOrder.innerHTML = `
        <div class="table-header">
            <h2 class="title">Order Details</h2>
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

            <div class="order-timeline">
                <div class="timeline-container">
                    <div class="timeline-step" data-step="0">
                        <div class="timeline-dot">1</div>
                        <div class="timeline-label">Chưa xác nhận</div>
                    </div>
                    <div class="timeline-step" data-step="1">
                        <div class="timeline-dot">2</div>
                        <div class="timeline-label">Đã xác nhận</div>
                    </div>
                    <div class="timeline-step" data-step="2">
                        <div class="timeline-dot">3</div>
                        <div class="timeline-label">Đang vận chuyển</div>
                    </div>
                    <div class="timeline-step" data-step="3">
                        <div class="timeline-dot">4</div>
                        <div class="timeline-label">Hoàn thành</div>
                    </div>
                </div>
                <div class="timeline-actions" id="timeline-actions"></div>
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
            <th>Order time</th>
        </tr> 
    `;
    const table = document.querySelector(".tableHistoryBody");
    table.innerHTML = "";
    let number = 0;
    for (var i = 0; i < ListOrders.length; i++) {
        const listItem = ListOrders[i];
        if (!listItem || listItem.id !== orderId || !Array.isArray(listItem.order)) continue;

        const order = listItem;
        const firstOrderItem = order.order[0];
        const currentStatus = firstOrderItem.check; // 0=pending, 1=confirmed, 2=cancelled
        
        document.querySelector('.payment-info').textContent = formatPayment(order.paymentMethod);
        document.querySelector('.address-info').textContent = order.shippingAddress ? formatAddress(order.shippingAddress) : 'N/A';

        // Khởi tạo timeline
        if (currentStatus === 2) {
            // Nếu hủy, hiển thị trạng thái hủy
            const timelineSteps = document.querySelectorAll('.timeline-step');
            timelineSteps.forEach(step => {
                step.classList.remove('active', 'completed');
                step.classList.add('cancelled');
            });
            timelineSteps[0].querySelector('.timeline-dot').textContent = '✕';
            document.getElementById('timeline-actions').innerHTML = '';
        } else {
            initOrderTimeline(orderId, currentStatus);
            startTimelineAutoProgress(orderId);
        }

        order.order.forEach((item) => {
            if (!item || !item.time) return;
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
        document.querySelector(".fee_shipping").textContent = "Shipping Fee: $" + renderTotalShipUser(order.order)
    }
}

// tương tự cho phiên bản mobile: dùng getAppState() thay vì biến login / dataUsers ngoài scope
function handleRenderHistoryOrderMB() {
    const { DataUsers, loginUser, ListOrders } = getAppState();
    if (!loginUser) return;
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
    let userIndex = DataUsers.findIndex((user) => user.id == loginUser.id);
    let number = 0;
    console.log("day la nhiem vu: ");
    console.log(ListOrders);
    // dùng ListOrders (từ getAppState) và DataUsers (chính xác về case)
    ListOrders.forEach((item) => {
        if (!item || !Array.isArray(item.order) || item.order.length === 0) return;
        if (DataUsers[userIndex] && DataUsers[userIndex].id == item.userId) {
            number++;
            const firstOrder = item.order[0];
            if (!firstOrder || !firstOrder.time) return;
            const vnTime = new Date(firstOrder.time).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false
            });

            let row = `
                <tr>
                    <td>${number}</td>
                    <td>${vnTime}</td>
                    <td>$${renderTotalPriceUser(item.order)}</td>
                    <td>${status(firstOrder.check)}</td>
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

            <div class="order-timeline">
                <div class="timeline-container">
                    <div class="timeline-step pending" data-step="0">
                        <div class="timeline-dot">1</div>
                        <div class="timeline-label">Chưa xác nhận</div>
                    </div>
                    <div class="timeline-step" data-step="1">
                        <div class="timeline-dot">2</div>
                        <div class="timeline-label">Đã xác nhận</div>
                    </div>
                    <div class="timeline-step" data-step="2">
                        <div class="timeline-dot">3</div>
                        <div class="timeline-label">Đang vận chuyển</div>
                    </div>
                    <div class="timeline-step" data-step="3">
                        <div class="timeline-dot">4</div>
                        <div class="timeline-label">Hoàn thành</div>
                    </div>
                </div>
                <div class="timeline-actions" id="timeline-actions"></div>
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
    for (var i = 0; i < ListOrders.length; i++) {
        if (ListOrders[i].id === orderId) {
            const order = ListOrders[i];
            
            // Hiển thị payment và address luôn
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
    const { DataUsers, loginUser, ListOrders } = getAppState();
    if (!loginUser) return;
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
    let userIndex = DataUsers.findIndex((user) => user.id == loginUser.id);
    let number = 0;
    console.log("day la nhiem vu: ");
    console.log(ListOrders);
    // dùng ListOrders (từ getAppState) và DataUsers (chính xác về case)
    ListOrders.forEach((item) => {
        if (!item || !Array.isArray(item.order) || item.order.length === 0) return;
        if (DataUsers[userIndex] && DataUsers[userIndex].id == item.userId) {
            number++;
            const firstOrder = item.order[0];
            if (!firstOrder || !firstOrder.time) return;
            const vnTime = new Date(firstOrder.time).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                hour12: false
            });

            let row = `
                <tr>
                    <td>${number}</td>
                    <td>${vnTime}</td>
                    <td>$${renderTotalPriceUser(item.order)}</td>
                    <td>${status(firstOrder.check)}</td>
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

            <div class="order-timeline">
                <div class="timeline-container">
                    <div class="timeline-step pending" data-step="0">
                        <div class="timeline-dot">1</div>
                        <div class="timeline-label">Chưa xác nhận</div>
                    </div>
                    <div class="timeline-step" data-step="1">
                        <div class="timeline-dot">2</div>
                        <div class="timeline-label">Đã xác nhận</div>
                    </div>
                    <div class="timeline-step" data-step="2">
                        <div class="timeline-dot">3</div>
                        <div class="timeline-label">Đang vận chuyển</div>
                    </div>
                    <div class="timeline-step" data-step="3">
                        <div class="timeline-dot">4</div>
                        <div class="timeline-label">Hoàn thành</div>
                    </div>
                </div>
                <div class="timeline-actions" id="timeline-actions"></div>
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
    for (var i = 0; i < ListOrders.length; i++) {
        if (ListOrders[i].id === orderId) {
            const order = ListOrders[i];
            
            // Hiển thị payment và address luôn
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

// Thêm hàm quản lý timeline
function initOrderTimeline(orderId, currentStatus) {
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const actionsContainer = document.getElementById('timeline-actions');
    
    // Reset timeline
    timelineSteps.forEach(step => {
        step.classList.remove('active', 'completed');
    });
    
    // Cập nhật timeline dựa trên status hiện tại
    timelineSteps.forEach((step, index) => {
        if (index < currentStatus) {
            step.classList.add('completed');
        } else if (index === currentStatus) {
            step.classList.add('active');
        }
    });
    
    // Hiển thị nút hủy chỉ khi ở bước 1 (chưa xác nhận)
    actionsContainer.innerHTML = '';
    if (currentStatus === 0) {
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'btn-cancel-order';
        cancelBtn.textContent = 'Hủy đơn hàng';
        cancelBtn.onclick = () => handleCancelOrderFromTimeline(orderId);
        actionsContainer.appendChild(cancelBtn);
    }
}

function handleCancelOrderFromTimeline(orderId) {
    const confirmed = confirm('Bạn có chắc chắn muốn hủy đơn hàng này?');
    if (!confirmed) return;
    
    const { ListOrders } = getAppState();
    const order = ListOrders.find(o => o.id === orderId);
    
    if (order && order.order) {
        order.order.forEach(item => {
            item.check = 2; // 2 = cancelled
        });
        
        // ========== LƯU trạng thái hủy vào localStorage ==========
        localStorage.setItem('listOrders', JSON.stringify(ListOrders));
        
        // Cập nhật timeline
        const timelineSteps = document.querySelectorAll('.timeline-step');
        timelineSteps.forEach(step => {
            step.classList.remove('active', 'completed', 'cancelled');
        });
        
        const cancelledStep = document.querySelector('.timeline-step[data-step="0"]');
        if (cancelledStep) {
            cancelledStep.classList.add('cancelled');
            cancelledStep.querySelector('.timeline-dot').textContent = '✕';
        }
        
        document.getElementById('timeline-actions').innerHTML = '';
        
        alert('Đơn hàng đã được hủy');
        console.log(`Order ${orderId} cancelled and saved`);
    }
}

// Thêm hàm auto-progress timeline
function startTimelineAutoProgress(orderId) {
    const { ListOrders } = getAppState();
    const order = ListOrders.find(o => o.id === orderId);
    
    if (!order || !order.order || order.order[0].check !== 1) {
        return; // Chỉ auto-progress nếu đã xác nhận (check === 1)
    }
    
    let currentStep = 1; // Bắt đầu từ bước 2 (đã xác nhận)
    
    const progressInterval = setInterval(() => {
        if (currentStep < 3) {
            currentStep++;
            initOrderTimeline(orderId, currentStep);
            
            // ========== LƯU tiến độ vào localStorage ==========
            order.order.forEach(item => {
                item.check = currentStep; // Cập nhật check value
            });
            
            // Lưu ListOrders vào localStorage
            localStorage.setItem('listOrders', JSON.stringify(ListOrders));
            
            console.log(`Order ${orderId} progressed to step ${currentStep}`);
        } else {
            clearInterval(progressInterval);
            // Lưu bước hoàn thành cuối cùng
            order.order.forEach(item => {
                item.check = 3; // Bước cuối cùng
            });
            localStorage.setItem('listOrders', JSON.stringify(ListOrders));
            console.log(`Order ${orderId} completed!`);
        }
    }, 5000); // 5 giây
}