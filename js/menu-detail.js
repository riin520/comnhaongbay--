// menu-detail.js
document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById("menu-grid");
  const categoryTitle = document.getElementById("category-title");
  const filterButtonsContainer = document.querySelector(".filter-buttons");
  const backButton = document.getElementById("back-button");

  // Danh sách category
  const categories = [
    "Tất cả",
    "Cơm",
    "ĐồUống",
    "Cá",
    "thịt",
    "Rau",
    "Canh",
    "trángmiệng",
  ];

  // Tạo nút filter
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.classList.add("filter-btn");
    btn.dataset.category = cat;
    btn.textContent = cat.toUpperCase();
    if (cat === "Tất cả") btn.classList.add("active");
    filterButtonsContainer.appendChild(btn);
  });

  // Render món ăn
  function renderItems(category = "Tất cả") {
    menuGrid.classList.add("hide"); // Ẩn lưới để tạo animation
    setTimeout(() => {
      menuGrid.innerHTML = "";

      const filteredItems =
        category === "Tất cả"
          ? menuDetailData.items
          : menuDetailData.items.filter((item) => item.category === category);

      categoryTitle.textContent =
        category === "Tất cả"
          ? "TẤT CẢ MÓN ĂN"
          : `MÓN ${category.toUpperCase()}`;

      filteredItems.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h4>${item.name}</h4>
          <p>${item.price.toLocaleString("vi-VN")}đ</p>
        `;
        menuGrid.appendChild(div);
      });

      menuGrid.classList.remove("hide"); // Hiện lưới sau khi load
    }, 300);
  }

  // Sự kiện filter
  filterButtonsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      document
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      const category = e.target.dataset.category;
      renderItems(category);
    }
  });

  // Nút quay lại
  backButton.addEventListener("click", () => {
    window.location.href = "menu-category.html";
  });

  // Render mặc định
  renderItems();
});
