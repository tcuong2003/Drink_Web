document.addEventListener("DOMContentLoaded", () => {
  // Đảm bảo login có dữ liệu
  window.login = JSON.parse(localStorage.getItem("loginUser"));
  window.dataUsers = JSON.parse(localStorage.getItem("DataUsers")) || [];
  window.listOrders = JSON.parse(localStorage.getItem("listOrders")) || [];

  if (typeof handleRenderHistoryOrder === "function") {
    handleRenderHistoryOrder();
  }
});