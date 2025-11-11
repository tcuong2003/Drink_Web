document.addEventListener("DOMContentLoaded", () => {
    const barIcon = document.getElementById("bar");
    const navbar = document.querySelector(".navbar");

    // Tạo overlay để click ra ngoài ẩn menu
    let overlay = document.createElement("div");
    overlay.classList.add("menu-overlay");
    document.body.appendChild(overlay);

    // CSS động cho overlay
    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "10px",
        width: "90%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.4)",
        zIndex: "9",
        display: "none"
    });

    // Hàm áp CSS dạng mobile cho navbar
    function applyMobileStyle() {
        Object.assign(navbar.style, {
            transition: "transform 0.3s ease",
            position: "fixed",
            top: "0",
            left: "0",
            height: "auto",
            width: "250px",
            background: "#fff",
            zIndex: "10",
            boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
            transform: "translateX(-100%)"
        });
        
    }
    
    

    // Hàm áp CSS dạng desktop cho navbar
    function applyDesktopStyle() {
        Object.assign(navbar.style, {
            position: "fixed",
            top: "20px",               // nằm ngay dưới header
            left: "35px",
            width: "20%",
            background: "white",
            transform: "none",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            zIndex: "5",
            
        });
        overlay.style.display = "none";
    }

    // Cập nhật giao diện theo kích thước hiện tại
    function updateNavbarByScreen() {
        if (window.innerWidth > 991.98) {
            applyDesktopStyle();
        } 
        else{
            applyMobileStyle();
        }
    }

    // Gọi lần đầu khi trang tải
    updateNavbarByScreen();

    function openMenu() {
        navbar.style.transform = "translateX(0)";
        overlay.style.display = "block";
    }

    function closeMenu() {
        navbar.style.transform = "translateX(-100%)";
        overlay.style.display = "none";
    }

    // Toggle khi click vào icon 3 gạch
    barIcon.addEventListener("click", () => {
        const isOpen =
            navbar.style.transform === "translateX(0px)" ||
            navbar.style.transform === "translateX(0)";
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Đóng khi click ra ngoài overlay
    overlay.addEventListener("click", closeMenu);

    // Khi resize màn hình thì cập nhật lại layout
    window.addEventListener("resize", () => {
        updateNavbarByScreen();
    });
});
