document.addEventListener("DOMContentLoaded", function () {
    var closeSupportButton = document.getElementById("closeSupportPopup");
    var supportPopup = document.getElementById("supportPopup");
    var aboutLink = document.getElementById("aboutLink");

    closeSupportButton.addEventListener("click", function () {
        supportPopup.style.display = "none";
        document.body.classList.remove("popup-open");
    });

    aboutLink.addEventListener("click", function () {
        // Hiển thị popup
        supportPopup.style.display = "block";
        document.body.classList.add("popup-open");

        // Điều chỉnh nội dung chi tiết của trang hỗ trợ
        var supportContent = document.getElementById("supportContent");
        supportContent.innerHTML = `
        <div class="about-popup">
            <div class="header-popup">
                <h1>Hỗ Trợ Khách Hàng - Grocerymart</h1>
            </div>

            <div class="nav-popup">
                <a href="#faq">Câu hỏi thường gặp</a>
                <a href="#shipping">Vận chuyển</a>
                <a href="#returns">Đổi trả và hoàn tiền</a>
                <a href="#contact">Liên hệ chúng tôi</a>
            </div>        
        </div>

        <section id="faq">
            <h2 class="heading">Câu hỏi thường gặp</h2>
            <p class="desc">
                <strong>1. Làm thế nào để đặt hàng?</strong><br />
                Để đặt hàng, hãy thêm sản phẩm vào giỏ hàng và nhấp vào nút
                "Thanh toán".
            </p>
            <p class="desc">
                <strong>2. Làm thế nào để kiểm tra trạng thái đơn hàng?</strong
                ><br />
                Bạn có thể kiểm tra trạng thái đơn hàng trong tài khoản của bạn
                hoặc liên hệ với chúng tôi qua trang Liên hệ.
            </p>
            <p class="desc">
                <strong>3. Làm thế nào để thay đổi thông tin cá nhân?</strong
                ><br />
                Bạn có thể cập nhật thông tin cá nhân trong phần Tài khoản của
                bạn.
            </p>
            <!-- Thêm các câu hỏi thường gặp khác -->
        </section>

        <section id="shipping">
            <h2 class="heading">Thông tin Vận chuyển</h2>
            <p class="desc">
                Chúng tôi cung cấp các tùy chọn vận chuyển nhanh chóng và đáng
                tin cậy. Chi phí vận chuyển và thời gian giao hàng cụ thể sẽ
                hiển thị trong quá trình thanh toán.
            </p>
            <p class="desc">
                <strong>Phí Vận chuyển:</strong> Phí vận chuyển được tính dựa
                trên địa chỉ giao hàng của bạn.
            </p>
            <p class="desc">
                <strong>Thời Gian Giao Hàng:</strong> Thời gian giao hàng ước
                tính sẽ được hiển thị trong quá trình thanh toán.
            </p>
            <!-- Thêm thông tin về vận chuyển -->
        </section>

        <section id="returns">
            <h2 class="heading">Chính sách Đổi trả và Hoàn tiền</h2>
            <p class="desc">
                Chúng tôi chấp nhận đổi trả trong vòng 30 ngày kể từ ngày mua.
                Để đổi trả, vui lòng liên hệ với chúng tôi qua trang Liên hệ.
            </p>
            <p class="desc">
                <strong>Điều Kiện Đổi Trả:</strong> Sản phẩm phải còn nguyên
                vẹn, chưa sử dụng và có các nhãn mác gốc.
            </p>
            <p class="desc">
                <strong>Hoàn Tiền:</strong> Hoàn tiền sẽ được xử lý trong vòng
                7-10 ngày làm việc sau khi nhận được sản phẩm đổi trả.
            </p>
            <!-- Thêm hướng dẫn đổi trả và hoàn tiền -->
        </section>

        <section id="contact">
            <h2 class="heading">Liên hệ chúng tôi</h2>
            <p class="desc">
                Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, hãy liên hệ với chúng
                tôi qua email:
                <a href="mailto:support@example.com">support@example.com</a>
            </p>
            <p class="desc">
                Hoặc gọi đến số điện thoại hỗ trợ của chúng tôi:
                <strong>(123) 456-7890</strong>.
            </p>
            <p class="desc">
                Chúng tôi cũng có thể được liên hệ qua mạng xã hội:
                <a href="#">Facebook</a>, <a href="#">Twitter</a>.
            </p>
            <!-- Thêm thông tin liên hệ khác nếu cần -->
        </section>

        <div class="fixed-footer">
            <div class="footer-popup">
                <p class="title">&copy; 2023 Tên Trang Web. Bản quyền thuộc về chúng tôi.</p>
            </div>
        </div>
        `;
    });

    // Đóng popup khi người dùng nhấp chuột bên ngoài nó
    window.addEventListener("click", function (event) {
        if (event.target === supportPopup) {
            supportPopup.style.display = "none";
            document.body.classList.remove("popup-open");
        }
    });
});

// about reponsive cho trang Support
document.addEventListener("DOMContentLoaded", function () {
    var closeSupportButton = document.getElementById("closeSupportPopup");
    var supportPopup = document.getElementById("supportPopup");
    var aboutLinkmobile = document.getElementById("aboutLinkmobile");

    closeSupportButton.addEventListener("click", function () {
        supportPopup.style.display = "none";
        document.body.classList.remove("popup-open");
    });

    aboutLinkmobile.addEventListener("click", function () {
        // Hiển thị popup
        supportPopup.style.display = "block";
        document.body.classList.add("popup-open");

        // Điều chỉnh nội dung chi tiết của trang hỗ trợ
        var supportContent = document.getElementById("supportContent");
        supportContent.innerHTML = `
        <div class="about-popup">
            <div class="header-popup">
                <h1>Hỗ Trợ Khách Hàng - Grocerymart</h1>
            </div>

            <div class="nav-popup">
                <a href="#faq">Câu hỏi thường gặp</a>
                <a href="#shipping">Vận chuyển</a>
                <a href="#returns">Đổi trả và hoàn tiền</a>
                <a href="#contact">Liên hệ chúng tôi</a>
            </div>        
        </div>

        <section id="faq">
            <h2 class="heading">Câu hỏi thường gặp</h2>
            <p class="desc">
                <strong>1. Làm thế nào để đặt hàng?</strong><br />
                Để đặt hàng, hãy thêm sản phẩm vào giỏ hàng và nhấp vào nút
                "Thanh toán".
            </p>
            <p class="desc">
                <strong>2. Làm thế nào để kiểm tra trạng thái đơn hàng?</strong
                ><br />
                Bạn có thể kiểm tra trạng thái đơn hàng trong tài khoản của bạn
                hoặc liên hệ với chúng tôi qua trang Liên hệ.
            </p>
            <p class="desc">
                <strong>3. Làm thế nào để thay đổi thông tin cá nhân?</strong
                ><br />
                Bạn có thể cập nhật thông tin cá nhân trong phần Tài khoản của
                bạn.
            </p>
            <!-- Thêm các câu hỏi thường gặp khác -->
        </section>

        <section id="shipping">
            <h2 class="heading">Thông tin Vận chuyển</h2>
            <p class="desc">
                Chúng tôi cung cấp các tùy chọn vận chuyển nhanh chóng và đáng
                tin cậy. Chi phí vận chuyển và thời gian giao hàng cụ thể sẽ
                hiển thị trong quá trình thanh toán.
            </p>
            <p class="desc">
                <strong>Phí Vận chuyển:</strong> Phí vận chuyển được tính dựa
                trên địa chỉ giao hàng của bạn.
            </p>
            <p class="desc">
                <strong>Thời Gian Giao Hàng:</strong> Thời gian giao hàng ước
                tính sẽ được hiển thị trong quá trình thanh toán.
            </p>
            <!-- Thêm thông tin về vận chuyển -->
        </section>

        <section id="returns">
            <h2 class="heading">Chính sách Đổi trả và Hoàn tiền</h2>
            <p class="desc">
                Chúng tôi chấp nhận đổi trả trong vòng 30 ngày kể từ ngày mua.
                Để đổi trả, vui lòng liên hệ với chúng tôi qua trang Liên hệ.
            </p>
            <p class="desc">
                <strong>Điều Kiện Đổi Trả:</strong> Sản phẩm phải còn nguyên
                vẹn, chưa sử dụng và có các nhãn mác gốc.
            </p>
            <p class="desc">
                <strong>Hoàn Tiền:</strong> Hoàn tiền sẽ được xử lý trong vòng
                7-10 ngày làm việc sau khi nhận được sản phẩm đổi trả.
            </p>
            <!-- Thêm hướng dẫn đổi trả và hoàn tiền -->
        </section>

        <section id="contact">
            <h2 class="heading">Liên hệ chúng tôi</h2>
            <p class="desc">
                Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, hãy liên hệ với chúng
                tôi qua email:
                <a href="mailto:support@example.com">support@example.com</a>
            </p>
            <p class="desc">
                Hoặc gọi đến số điện thoại hỗ trợ của chúng tôi:
                <strong>(123) 456-7890</strong>.
            </p>
            <p class="desc">
                Chúng tôi cũng có thể được liên hệ qua mạng xã hội:
                <a href="#">Facebook</a>, <a href="#">Twitter</a>.
            </p>
            <!-- Thêm thông tin liên hệ khác nếu cần -->
        </section>

        <div class="fixed-footer">
            <div class="footer-popup">
                <p class="title">&copy; 2023 Tên Trang Web. Bản quyền thuộc về chúng tôi.</p>
            </div>
        </div>
        `;
    });

    // Đóng popup khi người dùng nhấp chuột bên ngoài nó
    window.addEventListener("click", function (event) {
        if (event.target === supportPopup) {
            supportPopup.style.display = "none";
            document.body.classList.remove("popup-open");
        }
    });
});
