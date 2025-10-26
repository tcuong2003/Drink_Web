document.addEventListener("DOMContentLoaded", () => {
    fetch("./header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            renderUser(); // chỉ gọi sau khi header load xong

            document.addEventListener("click", (e) => {
            if (e.target.classList.contains("icon-list-order")) {
                console.log("Click history");
                handleRenderHistoryOrder();
    }
});

        });
});