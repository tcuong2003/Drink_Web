let minWidthTablet = 768;
let maxWidthTablet = 991.98;
const bar = document.querySelector(".bar");
const overlay = document.querySelector(".menu-overlay");
const menuContent = document.querySelector(".menu-content");



bar.addEventListener("click", function () {
let screenWidth = window.innerWidth;
    
   console.log("da click bar");
   // Kiểm tra kích thước màn hình
   if (screenWidth <= maxWidthTablet) {
       if (overlay.style.visibility == "hidden" || overlay.style.visibility == "") {
           console.log("Xác nhận hidden");
           overlay.style.visibility = "visible";
           overlay.style.opacity = "1";
           overlay.style.pointerEvents = "auto";
           menuContent.style.transform = "translateX(0)";
           menuContent.style.pointerEvents = "auto";
       } else {
           overlay.style.visibility = "hidden";
           overlay.style.opacity = "0";
           overlay.style.pointerEvents = "none";
           menuContent.style.transform = "translateX(-100%)";
           menuContent.style.pointerEvents = "none";
       }
   }
});

overlay.addEventListener("click", function () {
let screenWidth = window.innerWidth;

   // Kiểm tra kích thước màn hình
   if (screenWidth <= maxWidthTablet) {
       if (overlay.style.visibility == "hidden" || overlay.style.visibility == "") {
           console.log("Xác nhận hidden");
           overlay.style.visibility = "visible";
           overlay.style.opacity = "1";
           overlay.style.pointerEvents = "auto";
           menuContent.style.transform = "translateX(0)";
           menuContent.style.pointerEvents = "auto";
       } else {
           overlay.style.visibility = "hidden";
           overlay.style.opacity = "0";
           overlay.style.pointerEvents = "none";
           menuContent.style.transform = "translateX(-100%)";
           menuContent.style.pointerEvents = "none";
       }
   }
});

// ============ render tên người dùng khi đăng nhập ===============
function renderName() {
    const name = document.querySelector(".hello-name");
    if (login) {
        name.textContent = login.name;
    }
}

// Kiểm tra đăng nhập trước khi vào Cart
document.addEventListener("click", (e) => {
    const cartLink = e.target.closest("a[href='./cart.html']");
    if (!cartLink) return;
    
    const login = JSON.parse(localStorage.getItem("loginUser"));
    if (!login) {
        e.preventDefault();
        alert("Bạn phải đăng nhập để xem giỏ hàng");
        
        // Đóng menu overlay và menu-content
        const menuOverlay = document.querySelector(".menu-overlay");
        const menuContent = document.querySelector(".menu-content");
        if (menuOverlay) {
            menuOverlay.style.visibility = "hidden";
            menuOverlay.style.opacity = "0";
            menuOverlay.style.pointerEvents = "none";
        }
        if (menuContent) {
            menuContent.style.transform = "translateX(-100%)";
            menuContent.style.pointerEvents = "none";
        }
        
        // Hiện form đăng nhập
        const loginBackground = document.querySelector(".loginBackground");
        const loginBlock = document.querySelector(".loginBlock");
        if (loginBackground && loginBlock) {
            loginBackground.style.visibility = "visible";
            loginBlock.style.display = "block";
            loginBackground.style.pointerEvents = "auto";
            loginBlock.style.pointerEvents = "auto";
        }
    }
});

// Kiểm tra và đóng menu khi click vào Ordered (History)
document.addEventListener("click", (e) => {
    const orderedLink = e.target.closest(".group-history");
    if (!orderedLink) return;
    
    // Đóng menu overlay và menu-content
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuContent = document.querySelector(".menu-content");
    if (menuOverlay) {
        menuOverlay.style.visibility = "hidden";
        menuOverlay.style.opacity = "0";
        menuOverlay.style.pointerEvents = "none";
    }
    if (menuContent) {
        menuContent.style.transform = "translateX(-100%)";
        menuContent.style.pointerEvents = "none";
    }
});
