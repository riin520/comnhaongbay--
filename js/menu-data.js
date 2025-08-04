// =================== DỮ LIỆU DANH MỤC + MÓN ĂN ===================
const menuData = {
  categories: [
    {
      id: "Cơm",
      name: "CƠM",
      image: "../img/img-monan/comtrang.png",
      reverse: false,
      description: "Các món cơm ngon chuẩn vị gia đình.",
    },
    {
      id: "ĐồUống",
      name: "NƯỚC UỐNG",
      image: "../img/img-monan/trada.png",
      reverse: true,
      description: "Thức uống mát lạnh, giải khát tuyệt vời.",
    },
    {
      id: "Cá",
      name: "MÓN CÁ",
      image: "../img/img-monan/cabongkhotieu.png",
      reverse: false,
      description: "Các món cá thơm ngon, đậm đà.",
    },
    {
      id: "thịt",
      name: "MÓN THỊT",
      image: "../img/img-monan/thitluoccaphao.png",
      reverse: true,
      description: "Các món thịt thơm ngon, đậm đà.",
    },
    {
      id: "Rau",
      name: "MÓN RAU",
      image: "../img/img-monan/rauluockhoquet.png",
      reverse: false,
      description: "Các món rau thơm ngon, đậm đà.",
    },
    {
      id: "Canh",
      name: "MÓN CANH",
      image: "../img/img-monan/canh-cua-rau-day.png",
      reverse: true,
      description: "Các món canh thơm ngon, đậm đà.",
    },
    {
      id: "trángmiệng",
      name: "MÓN TRÁNG MIỆNG",
      image: "../img/img-monan/yaourt.png",
      reverse: false,
      description: "Các món tráng miệng thơm ngon, đậm đà.",
    },
  ],

  items: {
    Cơm: [
      {
        id: 1,
        name: "Cơm chiên Dương Châu",
        price: 85000,
        image: "../img/img-monan/comchienduongchau.png",
      },
      {
        id: 2,
        name: "Cơm chiên hải sản",
        price: 99000,
        image: "../img/img-monan/comchienhaisan.png",
      },
      {
        id: 3,
        name: "Cơm chiên dưa bò",
        price: 99000,
        image: "../img/img-monan/comchienduabo.png",
      },
      {
        id: 4,
        name: "Cơm trắng",
        price: 30000,
        image: "../img/img-monan/comtrang.png",
      },
    ],
    ĐồUống: [
      {
        id: 5,
        name: "Trà đá chanh",
        price: 15000,
        image: "../img/img-monan/trada.png",
      },
      {
        id: 6,
        name: "Bia",
        price: 25000,
        image: "../img/img-monan/bia.png",
      },
      {
        id: 7,
        name: "Nước suối",
        price: 10000,
        image: "../img/img-monan/nuocsuoi.png",
      },
      {
        id: 8,
        name: "Nước ngọt các loại",
        price: 15000,
        image: "../img/img-monan/nuocngot.png",
      },
    ],
    Cá: [
      {
        id: 9,
        name: "Cá bống kho tiêu",
        price: 120000,
        image: "../img/img-monan/cabongkhotieu.png",
      },
      {
        id: 10,
        name: "Cá diêu hồng chiên giòn",
        price: 130000,
        image: "../img/img-monan/cadieuhongchien.png",
      },
      {
        id: 11,
        name: "Cá thu sốt cà chua",
        price: 130000,
        image: "../img/img-monan/cathusotca.png",
      },
      {
        id: 12,
        name: "chả cá thác lác chiên thì là",
        price: 130000,
        image: "../img/img-monan/thaclachien.png",
      },
    ],
    thịt: [
      {
        id: 9,
        name: "Thịt luộc cà pháo",
        price: 109000,
        image: "../img/img-monan/thitluoccaphao.png",
      },
      {
        id: 10,
        name: "Ba chỉ kho tiêu",
        price: 109000,
        image: "../img/img-monan/thitkhotieu.png",
      },
      {
        id: 11,
        name: "Sườn xào chua ngọt",
        price: 130000,
        image: "../img/img-monan/suonxaochuangot.png",
      },
      {
        id: 12,
        name: "chả cá thác lác chiên thì là",
        price: 130000,
        image: "../img/img-monan/thaclachien.png",
      },
    ],
  },
};

// =================== HÀM LOAD CATEGORY ===================
function loadCategories() {
  const container = document.querySelector(".category-container");
  if (!container) return;

  menuData.categories.forEach((cat, index) => {
    const block = document.createElement("div");
    block.className = `category-block ${cat.reverse ? "reverse" : ""}`;
    block.innerHTML = `
      <div class="content">
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
        <a href="menu-detail.html?category=${cat.id}">Xem thực đơn</a>
      </div>
      <div class="image">
        <img src="${cat.image}" alt="${cat.name}">
      </div>
    `;
    container.appendChild(block);
  });
}

// =================== HÀM LOAD MÓN ĂN THEO CATEGORY ===================
function loadMenuItems() {
  const itemsContainer = document.getElementById("menu-items");
  const title = document.getElementById("category-title");
  if (!itemsContainer || !title) return;

  // Lấy category từ URL
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get("category");

  const category = menuData.categories.find((cat) => cat.id === categoryId);
  if (!category) {
    title.textContent = "Không tìm thấy danh mục";
    return;
  }

  title.textContent = category.name;

  // Lấy món theo category
  const items = menuData.items[categoryId] || [];

  itemsContainer.innerHTML = items
    .map(
      (item) => `
    <div class="menu-item">
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.price.toLocaleString()} VND</p>
      <a href="menu.html">Chọn món</a>
    </div>
  `
    )
    .join("");
}

// =================== TỰ ĐỘNG CHẠY TƯƠNG ỨNG TRANG ===================
document.addEventListener("DOMContentLoaded", () => {
  loadCategories();
  loadMenuItems();
});
