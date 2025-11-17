// ========= Các hàm helper ==========
function displayHideHistory() {
    const history = document.querySelector(".historyOrder");
    history.classList.toggle("active");
}

function displayHideHistoryMB() {
    const history = document.querySelector(".historyOrder");
    history.classList.toggle("active");
}

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

function getAppState() {
    return {
        DataUsers: JSON.parse(localStorage.getItem('DataUsers')) || [],
        loginUser: JSON.parse(localStorage.getItem('loginUser')) || null,
        ListOrders: JSON.parse(localStorage.getItem('listOrders')) || []
    };
}

function status(check) {
    if (check === 0) return "Đang chờ...";
    if (check === 1) return "Đã xác nhận!";
    if (check === 2) return "Đã hủy";
    if (check === 3) return "Đang vận chuyển";
    if (check === 4) return "Hoàn thành";
    return "Không xác định";
}

// ========= Các hàm tính toán ==========
function renderTotalPriceUser(arrOfOrderInListOrder) {
    let sumPrice = 0;
    let shipTotal = 0;
    arrOfOrderInListOrder.forEach((item) => {
        sumPrice += item.price * item.quantity;
        shipTotal += 2 * item.quantity;
    });
    return (sumPrice + shipTotal).toFixed(2);
}

function renderTotalShipUser(arrOfOrderInListOrder) {
    let shipTotal = 5;
    return shipTotal;
}

// ========= Lưu/Load trạng thái ==========
function saveOrderStatus(orderId, newStatus) {
    const { ListOrders } = getAppState();
    const order = ListOrders.find(o => o.id === orderId);
    if (!order || !order.order) return;
    const prevStatus = order.order[0].check;
    order.order.forEach(item => item.check = newStatus);
    localStorage.setItem('listOrders', JSON.stringify(ListOrders));
    console.log(`[DEBUG] saved order ${orderId} -> check=${newStatus}`);

    // Nếu chuyển sang trạng thái Hoàn thành (4) và trước đó chưa phải 4 => trừ tồn kho
    if (newStatus === 4 && prevStatus !== 4) {
        deductStockForCompletedOrder(orderId);
    }
}

// Hàm trừ tồn kho khi đơn hàng hoàn thành
function deductStockForCompletedOrder(orderId) {
    // Lấy dữ liệu hiện tại
    const ListOrders = JSON.parse(localStorage.getItem('listOrders')) || [];
    const allProducts = JSON.parse(localStorage.getItem('listProducts')) || [];

    const order = ListOrders.find(o => o.id === orderId);
    if (!order || !Array.isArray(order.order)) return;

    // Duyệt từng item trong order và trừ quantity trên product tương ứng
    order.order.forEach(item => {
        const pid = item.idProduct || item.id; // tùy cấu trúc
        const qtyToSubtract = parseInt(item.quantity) || 0;
        if (!pid || qtyToSubtract <= 0) return;

        const prod = allProducts.find(p => p.id === pid);
        if (prod) {
            const currentQty = parseInt(prod.quantity) || 0;
            prod.quantity = Math.max(0, currentQty - qtyToSubtract);
        }
    });

    // Lưu lại listProducts vào localStorage
    localStorage.setItem('listProducts', JSON.stringify(allProducts));
    console.log('[DEBUG] Stock updated for order', orderId);

    // Nếu trang admin đang mở với hàm renderProducts có sẵn, gọi để cập nhật UI admin
    if (typeof renderProducts === 'function') {
        try { renderProducts(allProducts); } catch (e) { console.warn(e); }
    }

    // Cập nhật product page (client) nếu hàm getProduct / renderProduct tồn tại
    // Tải lại biến toàn cục trong product.js nếu cần
    if (window && (typeof getProduct === 'function')) {
        // reload client-side product data and re-render (giữ logic lọc / phân trang)
        const allFromStorage = allProducts.slice(); // lấy bản mới
        window.allProductsFromStorage = allFromStorage;
        window.listProducts = allFromStorage.filter(p => !p.isHidden);
        // cập nhật currentProductList và hiển thị lại trang 1
        if (typeof currentProductList !== 'undefined') currentProductList = window.listProducts;
        currentPage = 1;
        try { getProduct(currentProductList); } catch (e) { console.warn(e); }
    }
}

// ========= Timeline ==========
function initOrderTimeline(orderId, currentStatus) {
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const actionsContainer = document.getElementById('timeline-actions');
    timelineSteps.forEach(step => step.classList.remove('active','completed','cancelled'));

    const mapCheckToIndex = (check) => {
        if (check === 0) return 0;
        if (check === 1) return 1;
        if (check === 3) return 2;
        if (check === 4) return 3;
        if (check === 2) return -1;
        return 0;
    };

    if (currentStatus === 2) {
        timelineSteps.forEach(step => step.classList.add('cancelled'));
        const cancelledStep = document.querySelector('.timeline-step[data-step="0"]');
        if (cancelledStep) cancelledStep.querySelector('.timeline-dot').textContent = '✕';
        actionsContainer.innerHTML = '';
        return;
    }

    const activeIndex = mapCheckToIndex(currentStatus);
    timelineSteps.forEach((step, index) => {
        if (index < activeIndex) step.classList.add('completed');
        else if (index === activeIndex) step.classList.add('active');
    });

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
    
    saveOrderStatus(orderId, 2);
    
    const timelineSteps = document.querySelectorAll('.timeline-step');
    timelineSteps.forEach(step => {
        step.classList.remove('active', 'completed', 'cancelled');
        step.classList.add('cancelled');
    });
    
    const cancelledStep = document.querySelector('.timeline-step[data-step="0"]');
    if (cancelledStep) {
        cancelledStep.querySelector('.timeline-dot').textContent = '✕';
    }
    
    document.getElementById('timeline-actions').innerHTML = '';
    alert('Đơn hàng đã được hủy');
    console.log(`Order ${orderId} cancelled and saved`);
}

function startTimelineAutoProgress(orderId) {
    const progression = [1, 3, 4];
    const { ListOrders } = getAppState();
    const order = ListOrders.find(o => o.id === orderId);
    if (!order || !order.order) return;
    
    let currentCheck = order.order[0].check;
    console.log(`[DEBUG] start auto-progress order ${orderId} from ${currentCheck}`);

    if (currentCheck === 0 || currentCheck === 2 || currentCheck === 4) return;

    let idx = progression.indexOf(currentCheck);
    if (idx === -1) {
        idx = progression.indexOf(1);
    }

    const interval = setInterval(() => {
        const fresh = getAppState().ListOrders.find(o => o.id === orderId);
        if (!fresh) { clearInterval(interval); return; }
        
        const freshCheck = fresh.order[0].check;
        if (freshCheck === 2 || freshCheck === 4) {
            clearInterval(interval);
            console.log(`[DEBUG] order ${orderId} cancelled or completed during progress`);
            return;
        }

        if (idx < progression.length - 1) {
            idx++;
            const nextStatus = progression[idx];
            initOrderTimeline(orderId, nextStatus);
            saveOrderStatus(orderId, nextStatus);
            console.log(`[DEBUG] order ${orderId} progressed to ${nextStatus}`);
        } else {
            clearInterval(interval);
            console.log(`[DEBUG] order ${orderId} finished progression`);
        }
    }, 5000);
}

// ========= Render Desktop ==========
function hideHistoryOrder1() {
    const btnHistory = document.querySelector(".history");
    if (!btnHistory) return;
    btnHistory.addEventListener("click", () => {
        displayHideHistory();
    });
}

function hideHistoryOrder2() {
    const btnsClose = document.querySelectorAll(".close-history[data-action='close']");
    if (!btnsClose) return;
    btnsClose.forEach(btnCloseHistory => {
        btnCloseHistory.addEventListener("click", () => {
            displayHideHistory();
        });
    });
}

function handleRenderHistoryOrder() {
    const { DataUsers, loginUser, ListOrders } = getAppState();
    if (!loginUser) {
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
                <thead class="tableHistoryHead"></thead>
                <tbody class="tableHistoryBody"></tbody>
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
                    <td onclick="renderHistoryOrderItem(${item.id})">
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
                <div class="order-info-row"><strong>Shipping Fee: </strong> <span class="fee_shipping">$0</span></div>
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
                <thead class="tableHistoryHead"></thead>
                <tbody class="tableHistoryBody"></tbody>
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
    
    const order = ListOrders.find(item => item.id === orderId);
    
    if (!order || !Array.isArray(order.order)) {
        console.log("Order not found");
        return;
    }
    
    const firstOrderItem = order.order[0];
    const currentStatus = firstOrderItem.check;
    
    document.querySelector('.payment-info').textContent = formatPayment(order.paymentMethod);
    document.querySelector('.address-info').textContent = order.shippingAddress ? formatAddress(order.shippingAddress) : 'N/A';

    console.log(`Order ${orderId} rendering with status: ${currentStatus}`);
    
    if (currentStatus === 2) {
        const timelineSteps = document.querySelectorAll('.timeline-step');
        timelineSteps.forEach(step => {
            step.classList.remove('active', 'completed');
            step.classList.add('cancelled');
        });
        timelineSteps[0].querySelector('.timeline-dot').textContent = '✕';
        document.getElementById('timeline-actions').innerHTML = '';
    } else {
        initOrderTimeline(orderId, currentStatus);
        
        if (currentStatus >= 1 && currentStatus < 4) {
            console.log(`Starting auto-progress for order ${orderId}`);
            startTimelineAutoProgress(orderId);
        }
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
    
    document.querySelector(".fee_shipping").textContent = "$" + renderTotalShipUser(order.order);
}

// ========= Render Mobile ==========
function hideHistoryOrderMB1() {
    const btnHistoryMB = document.querySelector(".group-history");
    if (!btnHistoryMB) return;
    btnHistoryMB.addEventListener("click", () => {
        displayHideHistoryMB();
    });
}

function hideHistoryOrderMB2() {
    const btnsClose = document.querySelectorAll(".close-history[data-action='close']");
    if (!btnsClose) return;
    btnsClose.forEach(btnCloseHistory => {
        btnCloseHistory.addEventListener("click", () => {
            displayHideHistoryMB();
        });
    });
}

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
                <thead class="tableHistoryHead"></thead>
                <tbody class="tableHistoryBody"></tbody>
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
                    <td onclick="renderHistoryOrderItemMB(${item.id})">
                        <img class="showmore" src="./asset/img/showmore.png" alt="">
                    </td>
                </tr>`;
            tableBody.innerHTML += row;
        }
    });
}

function renderHistoryOrderItemMB(orderId) {
    const { ListOrders } = getAppState();
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
                <div class="order-info-row"><strong>Shipping Fee: </strong> <span class="fee_shipping">$0</span></div>
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
                <thead class="tableHistoryHead"></thead>
                <tbody class="tableHistoryBody"></tbody>
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
    
    const order = ListOrders.find(item => item.id === orderId);
    
    if (!order || !Array.isArray(order.order)) {
        console.log("Order not found");
        return;
    }
    
    const firstOrderItem = order.order[0];
    const currentStatus = firstOrderItem.check;
    
    document.querySelector('.payment-info').textContent = formatPayment(order.paymentMethod);
    document.querySelector('.address-info').textContent = order.shippingAddress ? formatAddress(order.shippingAddress) : 'N/A';

    console.log(`Order ${orderId} (MB) rendering with status: ${currentStatus}`);
    
    if (currentStatus === 2) {
        const timelineSteps = document.querySelectorAll('.timeline-step');
        timelineSteps.forEach(step => {
            step.classList.remove('active', 'completed');
            step.classList.add('cancelled');
        });
        timelineSteps[0].querySelector('.timeline-dot').textContent = '✕';
        document.getElementById('timeline-actions').innerHTML = '';
    } else {
        initOrderTimeline(orderId, currentStatus);
        
        if (currentStatus >= 1 && currentStatus < 4) {
            startTimelineAutoProgress(orderId);
        }
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
    
    document.querySelector(".fee_shipping").textContent = "$" + renderTotalShipUser(order.order);
}

// ========= Event Delegation ==========
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("click", (e) => {
        if (e.target.closest(".history")) {
            e.preventDefault();
            displayHideHistory();
            handleRenderHistoryOrder();
            return;
        }
        
        if (e.target.closest(".close-history[data-action='close']")) {
            e.preventDefault();
            e.stopPropagation();
            displayHideHistory();
            return;
        }
        
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
        
        if (e.target.closest(".group-history")) {
            e.preventDefault();
            displayHideHistoryMB();
            handleRenderHistoryOrderMB();
            return;
        }
    });
});

// ========== THÊM HÀM LƯU TRẠNG THÁI ==========
function saveOrderStatus(orderId, newStatus) {
    const { ListOrders } = getAppState();
    const order = ListOrders.find(o => o.id === orderId);
    if (!order || !order.order) return;
    const prevStatus = order.order[0].check;
    order.order.forEach(item => item.check = newStatus);
    localStorage.setItem('listOrders', JSON.stringify(ListOrders));
    console.log(`[DEBUG] saved order ${orderId} -> check=${newStatus}`);

    // Nếu chuyển sang trạng thái Hoàn thành (4) và trước đó chưa phải 4 => trừ tồn kho
    if (newStatus === 4 && prevStatus !== 4) {
        deductStockForCompletedOrder(orderId);
    }
}

// Hàm trừ tồn kho khi đơn hàng hoàn thành
function deductStockForCompletedOrder(orderId) {
    // Lấy dữ liệu hiện tại
    const ListOrders = JSON.parse(localStorage.getItem('listOrders')) || [];
    const allProducts = JSON.parse(localStorage.getItem('listProducts')) || [];

    const order = ListOrders.find(o => o.id === orderId);
    if (!order || !Array.isArray(order.order)) return;

    // Duyệt từng item trong order và trừ quantity trên product tương ứng
    order.order.forEach(item => {
        const pid = item.idProduct || item.id; // tùy cấu trúc
        const qtyToSubtract = parseInt(item.quantity) || 0;
        if (!pid || qtyToSubtract <= 0) return;

        const prod = allProducts.find(p => p.id === pid);
        if (prod) {
            const currentQty = parseInt(prod.quantity) || 0;
            prod.quantity = Math.max(0, currentQty - qtyToSubtract);
        }
    });

    // Lưu lại listProducts vào localStorage
    localStorage.setItem('listProducts', JSON.stringify(allProducts));
    console.log('[DEBUG] Stock updated for order', orderId);

    // Nếu trang admin đang mở với hàm renderProducts có sẵn, gọi để cập nhật UI admin
    if (typeof renderProducts === 'function') {
        try { renderProducts(allProducts); } catch (e) { console.warn(e); }
    }

    // Cập nhật product page (client) nếu hàm getProduct / renderProduct tồn tại
    // Tải lại biến toàn cục trong product.js nếu cần
    if (window && (typeof getProduct === 'function')) {
        // reload client-side product data and re-render (giữ logic lọc / phân trang)
        const allFromStorage = allProducts.slice(); // lấy bản mới
        window.allProductsFromStorage = allFromStorage;
        window.listProducts = allFromStorage.filter(p => !p.isHidden);
        // cập nhật currentProductList và hiển thị lại trang 1
        if (typeof currentProductList !== 'undefined') currentProductList = window.listProducts;
        currentPage = 1;
        try { getProduct(currentProductList); } catch (e) { console.warn(e); }
    }
}

// ========== CẬP NHẬT HÀM initOrderTimeline ==========
function initOrderTimeline(orderId, currentStatus) {
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const actionsContainer = document.getElementById('timeline-actions');
    // reset
    timelineSteps.forEach(step => step.classList.remove('active','completed','cancelled'));

    // mapping order.check -> timeline index
    // timeline indices: 0: pending, 1: confirmed, 2: shipping, 3: completed
    const mapCheckToIndex = (check) => {
        if (check === 0) return 0;
        if (check === 1) return 1;
        if (check === 3) return 2;
        if (check === 4) return 3;
        // cancelled (2) is special: mark first step cancelled
        if (check === 2) return -1;
        return 0;
    };

    if (currentStatus === 2) {
        // cancelled
        timelineSteps.forEach(step => step.classList.add('cancelled'));
        const cancelledStep = document.querySelector('.timeline-step[data-step="0"]');
        if (cancelledStep) cancelledStep.querySelector('.timeline-dot').textContent = '✕';
        actionsContainer.innerHTML = '';
        return;
    }

    const activeIndex = mapCheckToIndex(currentStatus);
    timelineSteps.forEach((step, index) => {
        if (index < activeIndex) step.classList.add('completed');
        else if (index === activeIndex) step.classList.add('active');
    });

    // show cancel button only when pending (check === 0)
    actionsContainer.innerHTML = '';
    if (currentStatus === 0) {
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'btn-cancel-order';
        cancelBtn.textContent = 'Hủy đơn hàng';
        cancelBtn.onclick = () => handleCancelOrderFromTimeline(orderId);
        actionsContainer.appendChild(cancelBtn);
    }
}

// ========== CẬP NHẬT HÀM handleCancelOrderFromTimeline ==========
function handleCancelOrderFromTimeline(orderId) {
    const confirmed = confirm('Bạn có chắc chắn muốn hủy đơn hàng này?');
    if (!confirmed) return;
    
    // Lưu trạng thái hủy (check = 2)
    saveOrderStatus(orderId, 2);
    
    // ✅ CẬP NHẬT UI NGAY LẬP TỨC
    const timelineSteps = document.querySelectorAll('.timeline-step');
    timelineSteps.forEach(step => {
        step.classList.remove('active', 'completed', 'cancelled');
        step.classList.add('cancelled');
    });
    
    const cancelledStep = document.querySelector('.timeline-step[data-step="0"]');
    if (cancelledStep) {
        cancelledStep.querySelector('.timeline-dot').textContent = '✕';
    }
    
    document.getElementById('timeline-actions').innerHTML = '';
    alert('Đơn hàng đã được hủy');
    console.log(`Order ${orderId} cancelled and saved`);
}

// ========== CẬP NHẬT hàm saveOrderStatus ==========
function saveOrderStatus(orderId, newStatus) {
    const { ListOrders } = getAppState();
    const order = ListOrders.find(o => o.id === orderId);
    if (!order || !order.order) return;
    const prevStatus = order.order[0].check;
    order.order.forEach(item => item.check = newStatus);
    localStorage.setItem('listOrders', JSON.stringify(ListOrders));
    console.log(`[DEBUG] saved order ${orderId} -> check=${newStatus}`);

    // Nếu chuyển sang trạng thái Hoàn thành (4) và trước đó chưa phải 4 => trừ tồn kho
    if (newStatus === 4 && prevStatus !== 4) {
        deductStockForCompletedOrder(orderId);
    }
}

// ========== CẬP NHẬT HÀM AUTO-PROGRESS TIMELINE ==========
function startTimelineAutoProgress(orderId) {
    // define progression path explicitly (skip 2 which means cancelled)
    const progression = [1, 3, 4]; // từ đã xác nhận -> đang vận chuyển -> hoàn thành
    const { ListOrders } = getAppState();
    const order = ListOrders.find(o => o.id === orderId);
    if (!order || !order.order) return;
    let currentCheck = order.order[0].check;
    console.log(`[DEBUG] start auto-progress order ${orderId} from ${currentCheck}`);

    // if pending (0) or cancelled (2) or already completed (4) => do nothing
    if (currentCheck === 0 || currentCheck === 2 || currentCheck === 4) return;

    // find current position in progression array
    let idx = progression.indexOf(currentCheck);
    // if currentCheck not in progression (e.g. 1), ensure idx valid
    if (idx === -1) {
        // if currently 1 (confirmed) set idx = 0 (start from first)
        idx = progression.indexOf(1);
    }

    const interval = setInterval(() => {
        // read fresh state (detect external cancel)
        const fresh = getAppState().ListOrders.find(o => o.id === orderId);
        if (!fresh) { clearInterval(interval); return; }
        const freshCheck = fresh.order[0].check;
        if (freshCheck === 2) { // cancelled externally
            clearInterval(interval);
            console.log(`[DEBUG] order ${orderId} cancelled during progress`);
            return;
        }
        if (freshCheck === 4) { // already completed
            clearInterval(interval);
            console.log(`[DEBUG] order ${orderId} already completed`);
            return;
        }

        // advance to next progression step
        if (idx < progression.length - 1) {
            idx++;
            const nextStatus = progression[idx];
            // update UI and persist
            initOrderTimeline(orderId, nextStatus);
            saveOrderStatus(orderId, nextStatus);
            console.log(`[DEBUG] order ${orderId} progressed to ${nextStatus}`);
        } else {
            clearInterval(interval);
            console.log(`[DEBUG] order ${orderId} finished progression`);
        }
    }, 5000);
}