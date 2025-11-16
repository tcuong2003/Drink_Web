// Script xử lý checkout page: load draft, hiển thị address, payment, review và confirm order

window.initCheckoutView = function() {
    const draft = JSON.parse(localStorage.getItem('checkoutDraft')) || null;
    const dataUsers = JSON.parse(localStorage.getItem('DataUsers')) || [];
    const login = JSON.parse(localStorage.getItem('loginUser')) || null;
    
    if (!draft || !login) {
        alert('No checkout data. Redirecting to cart.');
        document.getElementById('cart-view').style.display = 'block';
        document.getElementById('checkout-view').style.display = 'none';
        return;
    }

    if (!draft.cartItems || draft.cartItems.length === 0) {
        alert('Giỏ hàng trống. Vui lòng quay lại và chọn sản phẩm.');
        document.getElementById('cart-view').style.display = 'block';
        document.getElementById('checkout-view').style.display = 'none';
        return;
    }

    const userIndex = dataUsers.findIndex(u => u.id == login.id);
    const user = dataUsers[userIndex] || {};

    // Render saved addresses (moved to function so we can re-render after delete)
    const savedEl = document.getElementById('saved-addresses');

    function renderSavedAddresses() {
        savedEl.innerHTML = '';
        if (user.addresses && user.addresses.length) {
            // add clear-selection button
            const clearWrap = document.createElement('div');
            clearWrap.style.display = 'flex';
            clearWrap.style.justifyContent = 'flex-end';
            clearWrap.style.marginBottom = '8px';
            const clearBtn = document.createElement('button');
            clearBtn.type = 'button';
            clearBtn.className = 'addr-clear-btn';
            clearBtn.textContent = 'Use new address';
            clearWrap.appendChild(clearBtn);
            savedEl.appendChild(clearWrap);

            const list = document.createElement('div');
            list.className = 'saved-list';
            user.addresses.forEach((a, idx) => {
                const r = document.createElement('label');
                r.setAttribute('data-addr-index', idx);
                r.innerHTML = `
                    <input type="radio" name="address" value="${idx}" />
                    <div style="min-width:0;">
                        <p class="address-meta">${escapeHtml(a.fullName)}</p>
                        <p class="address-sub">${escapeHtml(a.phone)} | ${escapeHtml(a.line1)}, ${escapeHtml(a.city)}</p>
                    </div>
                    <button type="button" class="addr-delete" data-idx="${idx}" aria-label="Delete address">×</button>
                `;
                list.appendChild(r);
            });
            savedEl.appendChild(list);

            // attach clear handler
            clearBtn.addEventListener('click', (e) => {
                e.preventDefault();
                clearSavedSelection();
            });

            // attach delete handlers
            savedEl.querySelectorAll('.addr-delete').forEach(btn => {
                btn.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    const idx = parseInt(btn.dataset.idx, 10);
                    if (!Number.isFinite(idx)) return;
                    if (!confirm('Xóa địa chỉ này?')) return;

                    // remove address and update storage
                    user.addresses.splice(idx, 1);
                    dataUsers[userIndex] = user;
                    localStorage.setItem('DataUsers', JSON.stringify(dataUsers));

                    // re-render saved addresses
                    renderSavedAddresses();
                });
            });
        } else {
            savedEl.innerHTML = '<p class="small-muted">No saved addresses. Please enter a new one.</p>';
        }
    }

    // --- new helper: clear any selected saved-address radio ---
    function clearSavedSelection() {
        const radios = document.querySelectorAll('input[name="address"]');
        radios.forEach(r => { r.checked = false; });
    }

    // auto clear saved selection when user focuses any new-address input
    const addrFormInputs = document.querySelectorAll('#new-address-form input');
    addrFormInputs.forEach(inp => {
        inp.addEventListener('focus', () => {
            clearSavedSelection();
        });
    });

    renderSavedAddresses();

    // Render order items
    const itemsEl = document.getElementById('order-items');
    let subtotal = 0;
    
    draft.cartItems.forEach(item => {
        const lineTotal = (item.price * item.quantity) || 0;
        subtotal += lineTotal;
        
        const line = document.createElement('div');
        line.className = 'order-item';
        line.innerHTML = `
            <div class="left">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.nameProduct)}" class="thumb" />
                <div>
                    <div class="item-name">${escapeHtml(item.nameProduct)}</div>
                    <div class="item-meta">x${item.quantity} @ $${item.price}</div>
                </div>
            </div>
            <div class="item-price">$${lineTotal.toFixed(2)}</div>
        `;
        itemsEl.appendChild(line);
    });

    const totalQty = draft.cartItems.reduce((s,i)=>s+(i.quantity||0),0);
    const shipping = 5;
    const total = subtotal + shipping;

    document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summary-shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;

    // --- Replace previous "Confirm order" direct handler with modal flow ---
    const confirmBtn = document.getElementById('confirm-order');
    const modal = document.getElementById('confirm-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalCancel = document.getElementById('modal-cancel');
    const modalPlace = document.getElementById('modal-place-order');

    // temporary store selection to use when placing order
    let pendingConfirmation = null;

    function openModal() {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'flex'; // ← Thêm dòng này
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        modal.classList.remove('open');
        modal.style.display = 'none'; // ← Thêm dòng này
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        pendingConfirmation = null;
    }

    // Hiển thị lỗi
    function showError(id, message) {
        const el = document.getElementById(id);
        el.textContent = message;
        el.style.display = 'block';
    }

    // Cuộn đến lỗi
    function scrollToError(idError) {
        const el = document.getElementById(idError);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    // Hàm validate chung cho từng trường
    function validateField(idInput, idError, validatorFn) {
        const input = document.getElementById(idInput);
        const err = document.getElementById(idError);

        input.addEventListener("blur", () => {
            const msg = validatorFn(input.value.trim());
            err.textContent = msg || "";
            err.style.display = msg ? "block" : "none";
        });

        input.addEventListener("input", () => {
            err.textContent = "";
            err.style.display = "none";
        });
    }

    //Định nghĩa rules cho từng trường
    const rules = {
        fullName: value => {
            if (!value.trim()) return "Full name is required";
            if (value.trim().length < 3) return "Full name must be at least 3 characters";
            return "";
        },

        phone: value => {
            if (!value.trim()) return "Phone is required";
            if (!/^\d+$/.test(value)) return "Phone must contain digits only";
            if (value.trim().length < 10) return "Phone must be at least 10 digits";
            return "";
        },

        line1: value => {
            if (!value.trim()) return "Address is required";
            if (value.trim().length < 5) return "Address must be at least 5 characters";
            return "";
        },

        city: value => {
            if (!value.trim()) return "City is required";
            if (value.trim().length < 2) return "City must be at least 2 characters";
            return "";
        }
    };


    //Gắn validation cho từng input
    validateField("addr-fullname", "err-fullname", rules.fullName);
    validateField("addr-phone", "err-phone", rules.phone);
    validateField("addr-line1", "err-line1", rules.line1);
    validateField("addr-city", "err-city", rules.city);


    // --- Khởi tạo trạng thái cho từng payment option ---
    document.querySelectorAll('.payment-option').forEach(label => {
        label.confirmed = false; // default chưa confirm

        const details = label.querySelector('.payment-details');
        const status = label.querySelector('.payment-status');

        const cancelBtn = details.querySelector('.cancel-btn');
        const sentBtn = details.querySelector('.sent-btn');

        cancelBtn.onclick = () => {
            label.confirmed = false;
            status.innerHTML = '<span style="color:red;">&#10006; Cancelled</span>';
        };
        sentBtn.onclick = () => {
            label.confirmed = true;
            status.innerHTML = '<span style="color:green;">&#10004; Confirmed</span>';
        };
    });

    // --- Hàm hiển thị phần chi tiết payment ---
    function handlePaymentSections(payment) {
        document.querySelectorAll('.payment-option').forEach(label => {
            const details = label.querySelector('.payment-details');
            const input = label.querySelector('input[name="payment"]');
            const status = label.querySelector('.payment-status');

            // Reset trạng thái mỗi khi chọn bất kỳ phương thức nào
            label.confirmed = false;
            status.innerHTML = '';

            if (input.value === payment && (payment === 'bank' || payment === 'online')) {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });
    }

    // --- Gắn sự kiện radio ---
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', () => handlePaymentSections(radio.value));
    });


    // Xử lý khi người dùng nhấn nút "Confirm Order"
    confirmBtn.addEventListener('click', () => {
        // gather address (saved or new)
        const addrRadio = document.querySelector('input[name="address"]:checked');
        let selectedAddress = null;
        if (addrRadio) {
            const idx = parseInt(addrRadio.value, 10);
            selectedAddress = (user.addresses && user.addresses[idx]) ? user.addresses[idx] : null;
        } else {
            const fullName = document.getElementById('addr-fullname').value.trim();
            const phone = document.getElementById('addr-phone').value.trim();
            const line1 = document.getElementById('addr-line1').value.trim();
            const city = document.getElementById('addr-city').value.trim();

        // validate new address
        let hasError = false;
        let firstError = null;

        if (rules.fullName(fullName)) {
            showError('err-fullname', rules.fullName(fullName));
            hasError = true;
            if (!firstError) firstError = 'err-fullname';
        }
        if (rules.phone(phone)) {
            showError('err-phone', rules.phone(phone));
            hasError = true;
            if (!firstError) firstError = 'err-phone';
        }
        if (rules.line1(line1)) {
            showError('err-line1', rules.line1(line1));
            hasError = true;
            if (!firstError) firstError = 'err-line1';
        }
        if (rules.city(city)) {
            showError('err-city', rules.city(city));
            hasError = true;
            if (!firstError) firstError = 'err-city';
        }

        if (hasError) {
            scrollToError(firstError);  // ← Scroll tới lỗi đầu tiên
            return;
        }

        selectedAddress = { fullName, phone, line1, city };


            // LƯU địa chỉ mới vào user.addresses và cập nhật localStorage
            user.addresses = user.addresses || [];
            user.addresses.unshift(selectedAddress); // thêm ở đầu (tuỳ ý)
            dataUsers[userIndex] = user;
            localStorage.setItem('DataUsers', JSON.stringify(dataUsers));
            renderSavedAddresses(); // cập nhật giao diện saved addresses
        }

        // payment
        const paymentInput = document.querySelector('input[name="payment"]:checked');
        const payment = paymentInput ? paymentInput.value : 'cod';

        // Kiểm tra payment
        if ((payment === 'bank' || payment === 'online') && !paymentInput.closest('.payment-option').confirmed) {
            const statusEl = paymentInput.closest('.payment-option').querySelector('.payment-status');
            alert('Vui lòng hoàn tất thanh toán!');
            return; 
        }
    
        // compute totals (reuse existing subtotal/shipping)
        const subtotalVal = draft.cartItems.reduce((s, it) => s + ((it.price || 0) * (it.quantity || 0)), 0);
        const totalQty = draft.cartItems.reduce((s,i)=>s+(i.quantity||0),0);
        const shippingVal = 5;
        const totalVal = subtotalVal + shippingVal;

        // populate modal content
        document.getElementById('modal-address').innerHTML = `
            <div><strong>${escapeHtml(selectedAddress.fullName)}</strong></div>
            <div class="small-muted">${escapeHtml(selectedAddress.phone)} — ${escapeHtml(selectedAddress.line1)}, ${escapeHtml(selectedAddress.city)}</div>
        `;
        document.getElementById('modal-payment').textContent = (payment === 'cod' ? 'Cash on delivery' : payment === 'bank' ? 'Bank transfer' : 'Online payment');

        const modalItemsEl = document.getElementById('modal-items');
        modalItemsEl.innerHTML = '';
        draft.cartItems.forEach(it => {
            const li = document.createElement('div');
            li.className = 'order-item';
            li.innerHTML = `
                <div class="left">
                    <img src="${escapeHtml(it.image)}" class="thumb" alt="${escapeHtml(it.nameProduct)}" />
                    <div>
                        <div class="item-name">${escapeHtml(it.nameProduct)}</div>
                        <div class="item-meta">x${it.quantity} @ $${it.price}</div>
                    </div>
                </div>
                <div class="item-price">$${((it.price||0)*(it.quantity||0)).toFixed(2)}</div>
            `;
            modalItemsEl.appendChild(li);
        });

        document.getElementById('modal-subtotal').textContent = `$${subtotalVal.toFixed(2)}`;
        document.getElementById('modal-shipping').textContent = `$${shippingVal.toFixed(2)}`;
        document.getElementById('modal-total').textContent = `$${totalVal.toFixed(2)}`;

        // store pending data for placing order
        pendingConfirmation = {
            selectedAddress,
            payment,
            subtotal: subtotalVal,
            shipping: shippingVal,
            total: totalVal
        };

        openModal();
    });

    // place order from modal (reuse order creation logic)
    modalPlace.addEventListener('click', () => {
        if (!pendingConfirmation) return;
        const { selectedAddress, payment, subtotal, shipping, total } = pendingConfirmation;

        // Build order object and save to listOrders
        const listOrders = JSON.parse(localStorage.getItem('listOrders')) || [];
        const newId = (listOrders.reduce((m,o)=> Math.max(m, o.id||0), 0)) + 1;
        const newOrder = {
            id: newId,
            userId: draft.userId,
            email: draft.email,
            nameCustomer: draft.nameCustomer,
            shippingAddress: selectedAddress,
            paymentMethod: payment,
            order: draft.cartItems,
            subtotal: subtotal,
            shipping: shipping,
            total: total,
            createdAt: new Date().toISOString(),
            status: 'pending'
        };
        listOrders.unshift(newOrder);
        localStorage.setItem('listOrders', JSON.stringify(listOrders));

        // --- Chỉ xóa (hoặc giảm quantity) những món trong draft.cartItems ---
        const userCart = dataUsers[userIndex].cartItems || [];
        const updatedCart = [...userCart];

        draft.cartItems.forEach(sel => {
            const idx = updatedCart.findIndex(it => it.idProduct === sel.idProduct);
            if (idx !== -1) {
                const currentQty = updatedCart[idx].quantity || 0;
                const removeQty = sel.quantity || 0;
                if (currentQty > removeQty) {
                    updatedCart[idx].quantity = currentQty - removeQty;
                } else {
                    updatedCart.splice(idx, 1);
                }
            }
        });

        dataUsers[userIndex].cartItems = updatedCart;
        localStorage.setItem('DataUsers', JSON.stringify(dataUsers));

        // Remove draft
        localStorage.removeItem('checkoutDraft');

        closeModal();
        alert('Order placed successfully! Order ID: #' + newId);
        // reload page to ensure cart UI re-renders from updated DataUsers
        window.location.reload();
    });

    // cancel / close modal
    modalCancel.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    // ← NEW: gắn event cho nút "Cancel" trong sidebar checkout (trở về cart)
    const cancelSidebarBtn = document.getElementById('cancel-order');
    if (cancelSidebarBtn) {
        cancelSidebarBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // reload trang để khởi tạo lại CSS/JS của cart và tránh lỗi hiển thị
            window.location.reload();
        });
    }

    function escapeHtml(s='') {
        return String(s).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
    }
};