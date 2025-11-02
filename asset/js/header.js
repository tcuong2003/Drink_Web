document.addEventListener("DOMContentLoaded", () => {
    fetch("./header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            renderUser(); // chỉ gọi sau khi header load xong

            setTimeout(() => {
                if (document.querySelector(".icon-user")) {
                    loginBtn();      // <--- Thêm dòng này
                    showPassword1();
                    showPassword2();
                    showPassword3();
                }
            }, 100);

            document.addEventListener("click", (e) => {
            if (e.target.classList.contains("icon-list-order")) {
                console.log("Click history");
                handleRenderHistoryOrder();
            }

});

        });
});
