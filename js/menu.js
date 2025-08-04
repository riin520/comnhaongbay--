// ============ DỮ LIỆU MÓN ĂN ============ //
const menuData = [
  {
    id: 1,
    name: "Cơm chiên Dương Châu",
    price: 85000,
    img: "../img/img-monan/comchienduongchau.png",
    category: "Cơm",
  },
  {
    id: 2,
    name: "Cơm chiên cá mặn",
    price: 99000,
    img: "../img/img-monan/comchiencaman.png",
    category: "Cơm",
  },
  {
    id: 3,
    name: "Cơm chiên hải sản",
    price: 99000,
    img: "../img/img-monan/comchienhaisan.png",
    category: "Cơm",
  },
  {
    id: 4,
    name: "Cơm trắng (thố)",
    price: 30000,
    img: "../img/img-monan/comtrang.png",
    category: "Cơm",
  },
  {
    id: 5,
    name: "Cơm chiên dưa bò",
    price: 99000,
    img: "../img/img-monan/comchienduabo.png",
    category: "Cơm",
  },
  {
    id: 6,
    name: "Canh cua rau đay",
    price: 129000,
    img: "../img/img-monan/canh-cua-rau-day.png",
    category: "Canh",
  },
  {
    id: 7,
    name: "Canh chua cá lóc",
    price: 129000,
    img: "../img/img-monan/canhchuacaloc.png",
    category: "Canh",
  },
  {
    id: 8,
    name: "Canh khổ qua nhồi thịt",
    price: 99000,
    img: "../img/img-monan/canhkhoquanhoithit.png",
    category: "Canh",
  },
  {
    id: 9,
    name: "Canh khoai mỡ",
    price: 129000,
    img: "../img/img-monan/canhkhoaimo.png",
    category: "Canh",
  },
  {
    id: 10,
    name: "Canh bí đỏ thịt bằm",
    price: 129000,
    img: "../img/img-monan/canhbido.png",
    category: "Canh",
  },
  {
    id: 11,
    name: "Cá bống kho tiêu",
    price: 129000,
    img: "../img/img-monan/cabongkhotieu.png",
    category: "Cá",
  },
  {
    id: 12,
    name: "Cá thu sốt cà",
    price: 109000,
    img: "../img/img-monan/cathusotca.png",
    category: "Cá",
  },
  {
    id: 13,
    name: "Cá diêu hồng chiên xù",
    price: 109000,
    img: "../img/img-monan/cadieuhongchien.png",
    category: "Cá",
  },
  {
    id: 14,
    name: "Chả cá thác lác chiên thì là",
    price: 109000,
    img: "../img/img-monan/thaclachien.png",
    category: "Cá",
  },
  {
    id: 15,
    name: "Thịt kho tiêu",
    price: 109000,
    img: "../img/img-monan/thitkhotieu.png",
    category: "thịt",
  },
  {
    id: 16,
    name: "Thịt luộc cà pháo",
    price: 109000,
    img: "../img/img-monan/thitluoccaphao.png",
    category: "thịt",
  },
  {
    id: 17,
    name: "Sườn xào chua ngọt",
    price: 109000,
    img: "../img/img-monan/suonxaochuangot.png",
    category: "thịt",
  },
  {
    id: 18,
    name: "Thịt kho trứng",
    price: 109000,
    img: "../img/img-monan/thitkhotrung.png",
    category: "thịt",
  },
  {
    id: 19,
    name: "Rau luộc kho quẹt",
    price: 109000,
    img: "../img/img-monan/rauluockhoquet.png",
    category: "Rau",
  },
  {
    id: 20,
    name: "Rau muống xào tỏi",
    price: 59000,
    img: "../img/img-monan/raumuongxaotoi.png",
    category: "Rau",
  },
  {
    id: 21,
    name: "Khổ qua xào trứng",
    price: 89000,
    img: "../img/img-monan/khoquaxaotrung.png",
    category: "Rau",
  },
  {
    id: 22,
    name: "Cải thìa xào nấm đông cô",
    price: 89000,
    img: "../img/img-monan/caithinamdongco.png",
    category: "Rau",
  },
  {
    id: 23,
    name: "Trà đá chanh",
    price: 15000,
    img: "../img/img-monan/trada.png",
    category: "ĐồUống",
  },
  {
    id: 24,
    name: "Bia",
    price: 25000,
    img: "../img/img-monan/bia.png",
    category: "ĐồUống",
  },

  {
    id: 25,
    name: "Nước suối",
    price: 10000,
    img: "../img/img-monan/nuocsuoi.png",
    category: "ĐồUống",
  },
  {
    id: 26,
    name: "Nước ngọt các loại",
    price: 15000,
    img: "../img/img-monan/nuocngot.png",
    category: "ĐồUống",
  },
  {
    id: 27,
    name: "Yaourt trái cây",
    price: 15000,
    img: "../img/img-monan/Yaourt.png",
    category: "trángmiệng",
  },
  {
    id: 28,
    name: "Chè Khúc Bạch",
    price: 30000,
    img: "../img/img-monan/chekhucbach.png",
    category: "trángmiệng",
  },
];

// ============ HIỂN THỊ DANH SÁCH MÓN ============ //
const menuContainer = document.getElementById("menu-items");

function renderMenu(filter = "all") {
  menuContainer.innerHTML = "";

  const filteredData =
    filter === "all"
      ? menuData
      : menuData.filter((item) => item.category === filter);

  filteredData.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.innerHTML = `
      <img src="${item.img}" alt="${
      item.name
    }" onerror="this.src='../img/img-monan/default.png'">
      <h3>${item.name}</h3>
      <p>${item.price.toLocaleString()} VND</p>
      <button onclick="addToCart(${item.id})">Chọn món</button> 
    `;
    menuContainer.appendChild(div);
  });
}
function removeCheckoutItem(id) {
  const index = cartData.findIndex((item) => item.id === id);
  if (index !== -1) {
    cartData.splice(index, 1); // Xóa 1 đơn vị
    localStorage.setItem("cart", JSON.stringify(cartData)); // Cập nhật localStorage
    renderCheckout(); // Render lại danh sách
  }
}

// ============ GIỎ HÀNG ============ //
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Thêm món vào giỏ
function addToCart(id) {
  const item = menuData.find((menu) => menu.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

// Xóa 1 đơn vị món
function removeSingleItem(id) {
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1); // Xóa 1 đơn vị
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
  }
}

// Cập nhật giao diện giỏ hàng
function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  // Gom nhóm các món giống nhau
  const groupedCart = {};
  let totalPrice = 0;

  cart.forEach((item) => {
    if (!groupedCart[item.id]) {
      groupedCart[item.id] = { ...item, quantity: 1 };
    } else {
      groupedCart[item.id].quantity++;
    }
    totalPrice += item.price;
  });

  // Hiển thị món đã gom nhóm + nút xóa
  Object.values(groupedCart).forEach((groupedItem) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>
        <strong>${groupedItem.name}</strong> x ${groupedItem.quantity} - 
        ${(groupedItem.price * groupedItem.quantity).toLocaleString()} VND
      </span>
      <button class="cart-remove" onclick="removeSingleItem(${
        groupedItem.id
      })">-</button>
    `;
    cartItems.appendChild(li);
  });

  // Cập nhật tổng cộng
  totalElement.textContent = totalPrice.toLocaleString();
}

// Chuyển tới trang checkout
function goToCheckout() {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}

// Gọi hàm để hiển thị giỏ ngay khi load trang
updateCartUI();

// ============ NAVBAR RESPONSIVE ============ //
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

// ============ FILTER ============ //
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");
    renderMenu(category);
  });
});

// ============ GỌI HÀM RENDER ============ //
renderMenu();
