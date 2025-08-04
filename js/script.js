// Hiệu ứng nút đặt bàn
// document.querySelectorAll(".btn-book").forEach((button) => {
//   button.addEventListener("click", () => {
//     alert("Cảm ơn bạn đã đặt bàn! Chúng tôi sẽ liên hệ sớm.");
//   });
// });
/////////////////////////////////////////////////////////////////////////////////////////
// Hiệu ứng nút đặt bàn
// Xử lý form đặt bàn
// Xử lý form đặt bàn và hiển thị thông tin khách đặt
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");
  const confirmationBox = document.createElement("div"); // Tạo box hiển thị
  confirmationBox.classList.add("confirmation-box");
  form.parentElement.appendChild(confirmationBox);

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Lấy dữ liệu từ form
      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      // Hiển thị thông tin đặt bàn
      confirmationBox.innerHTML = `
                <h3>Đặt bàn thành công!</h3>
                <p>Cảm ơn <strong>${name}</strong> đã đặt bàn.</p>
                <p>Thời gian: <strong>${date}</strong> lúc <strong>${time}</strong>.</p>
            `;

      // Reset form
      form.reset();
    });
  }
});
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Giỏ Hàng & Thanh Toán
// ---------------------- DỮ LIỆU MÓN ĂN ----------------------
// const menuData = [
//   { id: 1, name: "Cơm nhà cá kho", price: 45000, img: "img/com_ca_kho.jpg" },
//   {
//     id: 2,
//     name: "Cơm sườn nướng",
//     price: 50000,
//     img: "img/com_suon_nuong.jpg",
//   },
//   { id: 3, name: "Canh cua rau đay", price: 35000, img: "img/canh_cua.jpg" },
//   { id: 4, name: "Thịt luộc cà pháo", price: 40000, img: "img/thit_luoc.jpg" },
//   { id: 5, name: "Cá bống kho tiêu", price: 55000, img: "img/ca_bong.jpg" },
//   {
//     id: 6,
//     name: "Rau luộc chấm kho quẹt",
//     price: 30000,
//     img: "img/rau_luoc.jpg",
//   },
// ];

// ---------------------- GIỎ HÀNG ----------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orderCode = localStorage.getItem("orderCode") || generateOrderCode();

// ---------------------- HIỂN THỊ MENU ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menuItems");
  if (menuContainer) {
    menuData.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("menu-item");
      div.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price.toLocaleString()} VNĐ</p>
                <button onclick="addToCart(${item.id})">Thêm vào giỏ</button>
            `;
      menuContainer.appendChild(div);
    });

    document.getElementById("orderCode").innerText =
      "Mã đơn hàng: " + orderCode;
    renderCart();

    document.getElementById("checkoutBtn").addEventListener("click", () => {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("orderCode", orderCode);
      window.location.href = "checkout.html";
    });
  }

  // Hiển thị trang checkout
  const checkoutList = document.getElementById("checkoutList");
  if (checkoutList) {
    renderCheckout();
    document.getElementById("paymentForm").addEventListener("submit", (e) => {
      e.preventDefault();
      showThankYouMessage();
    });
  }
});

// ---------------------- HÀM GIỎ HÀNG ----------------------
function addToCart(id) {
  const product = menuData.find((item) => item.id === id);
  const itemInCart = cart.find((item) => item.id === id);

  if (itemInCart) {
    itemInCart.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const totalPriceEl = document.getElementById("totalPrice");
  if (!cartList) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity} - ${(
      item.price * item.quantity
    ).toLocaleString()} VNĐ`;
    cartList.appendChild(li);
  });

  totalPriceEl.textContent = total.toLocaleString();
}

// ---------------------- HÀM CHECKOUT ----------------------
function renderCheckout() {
  const checkoutList = document.getElementById("checkoutList");
  const checkoutTotal = document.getElementById("checkoutTotal");
  if (!checkoutList) return;

  checkoutList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
            <img src="${item.img}" alt="${
      item.name
    }" style="width:40px; height:40px; margin-right:8px;">
            ${item.name} x${item.quantity} - ${(
      item.price * item.quantity
    ).toLocaleString()} VNĐ
        `;
    checkoutList.appendChild(li);
  });

  checkoutTotal.textContent = total.toLocaleString();
}

// ---------------------- HÀM MÃ ĐƠN HÀNG ----------------------
function generateOrderCode() {
  const now = new Date();
  const datePart = `${now.getFullYear()}${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `DH${datePart}-${randomPart}`;
}

// ---------------------- THANK YOU MESSAGE ----------------------
function showThankYouMessage() {
  const thankYouBox = document.getElementById("thankYouMessage");
  const now = new Date().toLocaleString("vi-VN");

  thankYouBox.innerHTML = `
        <h3>Cảm ơn bạn đã đặt hàng!</h3>
        <p>Mã đơn: <strong>${orderCode}</strong></p>
        <p>Thời gian: ${now}</p>
    `;
  thankYouBox.style.display = "block";

  // Xóa giỏ hàng
  localStorage.removeItem("cart");
  localStorage.removeItem("orderCode");
  cart = [];
}
