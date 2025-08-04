// Toggle menu cho mobile
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Đóng menu khi click ra ngoài (tùy chọn)
  document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("active");
    }
  });
});
